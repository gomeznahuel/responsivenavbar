import { MyContexProvider } from "./context/useNavbarContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Error404 from "./pages/Error404/Error404";
import "./Stylesheet/App.css";

const App = () => {
  return (
    <MyContexProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </MyContexProvider>
  );
};

export default App;
