'use client'
import { createContext, useContext, useState } from "react";
import axios from 'axios'
const NeedsContext = createContext();

export const NeedsProvider = ({ children }) => {

    const [Loading, setLoading] = useState(false)
    const [resumes, setResumes] = useState([])
    const getUserResumes = async () => {
        try {
            const response = await axios.get(
                "/api/user-resumes",
                {
                    withCredentials: true,
                }
            );
            console.log("resumes",response.data.resumes)
            setResumes(resumes=> response.data.resumes);
            return response.data;

        } catch (error) {
            console.error("Get User Resumes Error:", error);

            throw (
                error.response?.data || {
                    success: false,
                    message: "Something went wrong while fetching resumes",
                }
            );
        }
    };

    return (
        <NeedsContext.Provider value={{Loading, resumes,getUserResumes}}>
        {children}
        </NeedsContext.Provider>
    );
}


export const useNeeds = () => {
  return useContext(NeedsContext);
};
