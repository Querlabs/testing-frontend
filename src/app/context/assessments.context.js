'use client'
import { createContext, useContext, useState, useRef } from "react";
import axios from 'axios'
const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {

    const [Loading, setLoading] = useState(false);
    const [LoadingMessage, setLoadingMessage] = useState("")
    const [CurrentQuestion, setCurrentQuestion] = useState({});
    const [prebuildAssessments, setPrebuildAssessments] = useState([]);
    const prebuildAssessmentRequest = useRef(null);
    const socketRef = useRef(null);
    const AddNewAssessment = async (newAssessement) => {
        setLoading(true)
        try {
            const response = await axios.post(
                "/api/custom-assessment",
                {
                    jd_text: newAssessement.jdAdded,
                    company: newAssessement.company,
                    role: newAssessement.role,
                    experience: newAssessement.experience,
                    type: newAssessement.type,
                    status: newAssessement.status,
                    resume: newAssessement.resume
                },
                {
                    withCredentials: true,
                }
            );
            console.log(response.data)
            setLoading(true)

            return response.data;

        } catch (error) {
            console.error("JD Analysis Error:", error);
            setLoading(true)

            throw (
                error.response?.data || {
                    success: false,
                    message: "Something went wrong while analyzing JD",
                }
            );
        }

        
    };

    const FetchPrebuildAssessment = async (forceRefresh = false) => {
        // Cache available hai toh API call skip karo.
        if (!forceRefresh && prebuildAssessments.length > 0) {
        return prebuildAssessments;
        }

        // Multiple simultaneous requests ko prevent karo.
        if (!forceRefresh && prebuildAssessmentRequest.current) {
            return prebuildAssessmentRequest.current;
        }

        setLoading(true);

        const request = (async () => {
            try {
                const response = await axios.get("/api/simulation", {
                    withCredentials: true,
                });

                const result = response.data;

                // API response ko context state mein cache karo.
                const templates = Array.isArray(result)
                    ? result
                    : Array.isArray(result?.data)
                        ? result.data
                        : Array.isArray(result?.templates)
                            ? result.templates
                            : [];

                setPrebuildAssessments(templates);

                return templates;
            } catch (error) {
                console.error("Simulation Error:", error);

                throw (
                    error.response?.data || {
                        success: false,
                        message: "Something went wrong while fetching simulations.",
                    }
                );
            } finally {
                setLoading(false);
                prebuildAssessmentRequest.current = null;
            }
        })();

        prebuildAssessmentRequest.current = request;

        return request;

        };

    const getAllCustomAssessments = async () => {
        setLoading(true);
        setLoadingMessage("Loading Assessments")
        try {
            const response = await axios.get(
                "/api/custom-assessment",
                {
                    withCredentials: true,
                }
            );

            setLoading(false);
            return response.data;

        } catch (error) {
            console.error(
                "Fetch Assessments Error:",
                error
            );
            setLoading(false);
            setLoadingMessage("")

            throw (
                error.response?.data || {
                    success: false,
                    message: "Failed to fetch assessments",
                }
            );
        }
    };

    const startInterviewAssessment = async (assessment_id) => {
        setLoading(true);
        setLoadingMessage("Starting Assessment")

        try {
            const response = await axios.post(
                `${process.env.NODE_ENV=='development' ? process.env.NEXT_PUBLIC_BACKEND_BASE_URL:process.env.NEXT_PUBLIC_BACKEND_PROD_URL }interview/start?assessment_id=${assessment_id}`,
                
                {
                    assessment_id
                }
                ,
                {
                    withCredentials: true,
                }
            );
            console.log("Interview session : - " ,response.data)
            setLoading(false);
            return response.data;

        } catch (error) {
            console.error(
                "Fetch Assessments Error:",
                error
            );
            setLoading(false);
            setLoadingMessage("")

            throw (
                error.response?.data || {
                    success: false,
                    message: "Failed to fetch assessments",
                }
            );
        }
    };

    const connectInterview = (interviewId) => {
        console.log("sdsd", process.env.SOCKET_MODE)
        if (
            socketRef.current &&
            (socketRef.current.readyState === WebSocket.OPEN ||
            socketRef.current.readyState === WebSocket.CONNECTING)
        ) {
            return socketRef.current;
        }
        const socket = new WebSocket(
            `${process.env.NEXT_PUBLIC_SOCKET_MODE=='development' ? process.env.NEXT_PUBLIC_BACKEND_BASE_URL_SOCKET:process.env.NEXT_PUBLIC_BACKEND_PROD_URL_SOCKET }interview/ws/${interviewId}`
        );
        socketRef.current = socket;
        socket.onopen = () => {
            console.log("WebSocket connected");
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log(data.data.question)
            if (data.type === "question") {
                const question = data.data;

                setCurrentQuestion(question);
            }
            if (data.type === "greeting") {
                console.log("GREETING:", data.data.message);
                const question = data.data;

                setCurrentQuestion(question);
                return;
            }
        };

        socket.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        socket.onclose = () => {
            console.log("WebSocket disconnected");
        };

        return socket;
    };

    const sendAnswer = (answer) => {

        if (!socketRef.current) {
            console.error("WebSocket is not connected");
            return;
        }

        if (socketRef.current.readyState !== WebSocket.OPEN) {
            console.error("WebSocket is not open");
            return;
        }

        socketRef.current.send(
            JSON.stringify({
                answer: answer
            })
        );

        console.log("Answer sent:", answer);
    };

    return (
        <AssessmentContext.Provider value={{sendAnswer, CurrentQuestion, connectInterview, startInterviewAssessment, Loading, AddNewAssessment, getAllCustomAssessments, LoadingMessage, prebuildAssessments,
FetchPrebuildAssessment,}}>
        {children}
        </AssessmentContext.Provider>
    );
}


export const useAssessment = () => {
  return useContext(AssessmentContext);
};