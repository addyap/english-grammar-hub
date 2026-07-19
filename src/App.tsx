import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import HomePage from "@/pages/HomePage";
import SectionPage from "@/pages/SectionPage";
import TopicPage from "@/pages/TopicPage";
import ExercisePage from "@/pages/ExercisePage";
import CountriesPage from "@/pages/CountriesPage";
import ResourcesPage from "@/pages/ResourcesPage";
import IrregularVerbsPage from "@/pages/IrregularVerbsPage";
import BritishVsAmericanPage from "@/pages/BritishVsAmericanPage";
import ConfusedWordsPage from "@/pages/ConfusedWordsPage";
import FalseFriendsPage from "@/pages/FalseFriendsPage";
import PunctuationPage from "@/pages/PunctuationPage";
import ProgressPage from "@/pages/ProgressPage";
import ContrastPracticePage from "@/pages/ContrastPracticePage";
import ContrastExercisePage from "@/pages/ContrastExercisePage";

function App() {
  return (
    <ThemeProvider>
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
          <Route path="/confused-words" element={<ConfusedWordsPage />} />
          <Route path="/false-friends" element={<FalseFriendsPage />} />
          <Route path="/punctuation" element={<PunctuationPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/contrast-practice" element={<ContrastPracticePage />} />
          <Route path="/contrast-practice/:pairSlug" element={<ContrastExercisePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
