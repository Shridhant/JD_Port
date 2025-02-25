import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPAge";
import { ProjectsPage } from "./pages/ProjectsPage";
import { BlogPage } from "./pages/BlogPage";

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
