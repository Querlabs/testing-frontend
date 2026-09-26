"use client";

import { createContext, useContext, useState } from "react";
import axios from 'axios'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [Loading, setLoading] = useState(false);

    const signup = async (formData) => {
        try {
            setLoading(Loading=> true);
            const response = await axios.post(
            "/api/auth/signup",
            formData
            );
            setLoading(Loading=> false);

            return response.data;
        } catch (error) {
            console.error("Signup Error:", error);
            setLoading(Loading=> false);
            throw new Error(
            error.response?.data?.message ||
                "Something went wrong during signup"
            );
        }
    };

    const verifyOTP = async (email, otp) => {
        try {
            const response = await axios.post(
            "/api/auth/otp",
            {
                email,
                otp,
            }
            );

            return response.data;
        } catch (error) {
            console.error("Verify OTP Error:", error);

            throw new Error(
            error.response?.data?.message ||
                "Something went wrong while verifying OTP"
            );
        }
    };

    const login = async (email, password) => {
        setLoading(Loading=> true)
        try {
            const response = await axios.post(
            "/api/auth/login",
            {
                email,
                password,
            }   
            );
            setLoading(Loading=> false)

            return response.data;
        } catch (error) {
            console.error("Login Error:", error);
            setLoading(Loading=> false)

            throw new Error (
            error.response?.data?.message ||
                "Something went wrong during login"
            );
        }
    };

    const autoLogin = async () => {
        setLoading(Loading=> true);
        try {
            const response = await axios.get("/api/auth/autologin", {
                withCredentials: true,
            });

            setLoading(Loading=> false);

            return response.data;
        } catch (error) {
            setLoading(Loading=> false);

            throw new Error(
            error.response?.data?.message ||
                "Auto login failed"
            );
        }
    };

    const completeOnboarding = async (formData) => {
        setLoading(Loading=> true)
        try {
            const response = await axios.post(
            "/api/onboarding",
            formData
            );
            setLoading(Loading=> false)

            return response.data;   
        } catch (error) {
            console.error("Onboarding Error:", error);
            setLoading(Loading=> false)
            throw new Error(
            error.response?.data?.message ||
                "Something went wrong during onboarding"
            );
        }
    };

    return (
        <AuthContext.Provider value={{Loading, signup, verifyOTP, login, autoLogin, completeOnboarding}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  return useContext(AuthContext);
};