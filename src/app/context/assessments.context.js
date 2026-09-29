'use client'
import { createContext, useContext, useState } from "react";
import axios from 'axios'
const AssessmentContext = createContext();

export const AssessmentProvider = ({ children }) => {

    const [Loading, setLoading] = useState(false);
    
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

    const getAllCustomAssessments = async () => {
        try {
            const response = await axios.get(
                "/api/custom-assessment",
                {
                    withCredentials: true,
                }
            );

            return response.data;
        } catch (error) {
            console.error(
                "Fetch Assessments Error:",
                error
            );

            throw (
                error.response?.data || {
                    success: false,
                    message: "Failed to fetch assessments",
                }
            );
        }
    };

    return (
        <AssessmentContext.Provider value={{Loading, AddNewAssessment, getAllCustomAssessments}}>
        {children}
        </AssessmentContext.Provider>
    );
}


export const useAssessment = () => {
  return useContext(AssessmentContext);
};