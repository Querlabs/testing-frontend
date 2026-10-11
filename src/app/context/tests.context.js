
"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";

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

  return (
    <TestContext.Provider
      value={{
        allTests,
        setAllTests,
        loadingTests,
        testError,
        fetchAllTest,
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
