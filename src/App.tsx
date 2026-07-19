import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import HomePage from "@/pages/HomePage";
import SectionPage from "@/pages/SectionPage";
import TopicPage from "@/pages/TopicPage";
import ExercisePage from "@/pages/ExercisePage";
import CountriesPage from "@/pages/CountriesPage";
import ResourcesPage from "@/pages/ResourcesPage";
import IrregularVerbsPage from "@/pages/IrregularVerbsPage";
import BritishVsAmericanPage from "@/pages/BritishVsAmericanPage";

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/section/:sectionSlug" element={<SectionPage />} />
        <Route path="/grammar/:topicSlug" element={<TopicPage />} />
        <Route path="/grammar/:topicSlug/exercise/:exerciseIndex" element={<ExercisePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/irregular-verbs" element={<IrregularVerbsPage />} />
        <Route path="/british-vs-american" element={<BritishVsAmericanPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
