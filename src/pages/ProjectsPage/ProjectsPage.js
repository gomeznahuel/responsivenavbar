import { useContext } from "react";
import { MyContext } from "../../context/useNavbarContext";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const { opacity } = useContext(MyContext);

  return (
    <div className="projects" style={{ opacity }}>
      This is the Projects Page
    </div>
  );
};

export default ProjectsPage;
