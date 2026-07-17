import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import HomePage from "@/pages/HomePage";
import SectionPage from "@/pages/SectionPage";
import TopicPage from "@/pages/TopicPage";
import ExercisePage from "@/pages/ExercisePage";

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/section/:sectionSlug" element={<SectionPage />} />
        <Route path="/grammar/:topicSlug" element={<TopicPage />} />
        <Route path="/grammar/:topicSlug/exercise/:exerciseIndex" element={<ExercisePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
