"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [Loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState([])
    const [latestBlogs, setLatestBlogs] = useState([]);
    const [latestBlogsLoading, setLatestBlogsLoading] = useState(false);
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

    const createBlog = async (blogData) => {
        setLoading(Loading=> true)
        try {
            const response = await axios.post('/api/blogs', blogData);
            setLoading(Loading=> false)

            return response.data;

        } catch (error) {
            console.error(
            "Create blog error:",
            error.response?.data || error.message
            );
            setLoading(Loading=> false)

            throw new Error(
            error.response?.data?.message || "Failed to create blog"
            );
        }
    };

    const fetchBlogs = async () => {
        setLoading(true);

        try {
            const response = await axios.get("/api/blogs");

            const blogsDB = (response.data.blogs || []).map((blog) => ({
            ...blog,
            id: blog._id || blog.id,
            description: blog.excerpt || "",
            image: blog.coverImage || "",
            author:
                typeof blog.author === "string"
                ? blog.author
                : blog.author?.name || "QuerLabs Team",
            date: blog.publishedAt
                ? new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })
                : "",
            readTime: `${blog.readingTime || 1} min read`,
            ccontent: blog.content || "",
            contentText: blog.contentText || "",
            }));
            setBlogs(blogs=> blogsDB);
            return blogsDB;
        } catch (error) {
            console.error(
            "Fetch blogs error:",
            error.response?.data || error.message
            );

            throw new Error(
            error.response?.data?.message || "Failed to fetch blogs"
            );
        } finally {
            setLoading(false);
        }
    };

    const fetchLatestBlogs = async () => {
        setLatestBlogsLoading(true);

        try {
            const response = await axios.get("/api/latest-blogs");

            const latestBlogsDB = (response.data.blogs || []).map((blog) => ({
            ...blog,
            id: blog._id || blog.id,
            description: blog.excerpt || "",
            image: blog.coverImage || "",
            author:
                typeof blog.author === "string"
                ? blog.author
                : blog.author?.name || "QuerLabs Team",
            date: blog.publishedAt
                ? new Date(blog.publishedAt).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })
                : "",
            readTime: `${blog.readingTime || 1} min read`,
            content: blog.content || "",
            contentText: blog.contentText || "",
            }));

            setLatestBlogs(latestBlogsDB);
            return latestBlogsDB;
        } catch (error) {
            console.error(
            "Fetch latest blogs error:",
            error.response?.data || error.message
            );

            throw new Error(
            error.response?.data?.message || "Failed to fetch latest blogs"
            );
        } finally {
            setLatestBlogsLoading(false);
        }
        };


    return (
        <AuthContext.Provider value={{latestBlogs, latestBlogsLoading,fetchLatestBlogs, blogs, fetchBlogs, createBlog, Loading, signup, verifyOTP, login, autoLogin, completeOnboarding}}>
        {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
  return useContext(AuthContext);
};