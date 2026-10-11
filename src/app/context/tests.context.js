
"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
import axios from "axios";
const TestContext = createContext(null);

export const TestProvider = ({ children }) => {
  const [allTests, setAllTests] = useState([]);
  const [loadingTests, setLoadingTests] = useState(false);
  const [testError, setTestError] = useState(null);

  const fetchAllTest = useCallback(async () => {
    try {
      setLoadingTests(true);
      setTestError(null);

      const response = await fetch("/api/assessments?limit=300");

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to fetch assessments."
        );
      }

      setAllTests(result.data || []);

      return result.data || [];
    } catch (error) {
      setTestError(error.message);
      console.error("fetchAllTest error:", error);
      throw error;
    } finally {
      setLoadingTests(false);
    }
  }, []);

const fetchAssessmentQuestions = useCallback(async (assessmentId) => {
  try {
    const response = await axios.post(
      "/api/practice-panel",
      { assessmentId }
    );

    const result = response.data;

    if (!result.success) {
      throw new Error(
        result.message || "Failed to fetch assessment questions."
      );
    }

    return result.questions || [];
  } catch (error) {
    console.error("fetchAssessmentQuestions error:", error);
    throw error;
  }
}, []);

  return (
    <TestContext.Provider
      value={{
        allTests,
        setAllTests,
        loadingTests,
        testError,
        fetchAllTest,
        fetchAssessmentQuestions
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => {
  const context = useContext(TestContext);

  if (!context) {
    throw new Error(
      "useTest must be used inside testProvider."
    );
  }

  return context;
};
