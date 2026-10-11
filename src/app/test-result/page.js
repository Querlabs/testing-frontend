
'use client'

import { Suspense } from "react";
import ResultsPage from "../components/results/ResultPage";

export default function Result() {
    return (
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Loading results...</div>}>
            <ResultsPage />
        </Suspense>
    );
}
