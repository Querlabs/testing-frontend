import { Suspense } from "react";
import AIVoiceInterview from "../components/interview-panels/voiceToVoice";

export default function VoiceAIRound() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AIVoiceInterview />
        </Suspense>
    );
}