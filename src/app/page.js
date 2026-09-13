import Image from "next/image";
import Hero from "./components/header";
import TrustStrip from "./components/trust";
import ProblemSection from "./components/problem";
import HowItWorks from "./components/howItWorks";
import ProductExperience from "./components/productExperience";
import DiagnosisSection from "./components/diagnosis";
import CommunicationCoach from "./components/communication";
import ReadinessScore from "./components/rediness";
import ImprovementLoop from "./components/improvement";
import CompanyRoleSimulations from "./components/companyRole";
import PricingSection from "./components/pricing";
import FinalCTA from "./components/cta";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="">
        <Hero/>
        <TrustStrip/>
        <ProblemSection/>
        <HowItWorks/>
        <ProductExperience/>
        <DiagnosisSection/>
        <CommunicationCoach/>
        <ReadinessScore/>
        <ImprovementLoop/>
        <CompanyRoleSimulations/>
        <FinalCTA/>
        <PricingSection/>
        <Footer/>
    </div>
  );
}
