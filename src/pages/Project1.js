// сперва подключаем библиотеки реакт
import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

// массив с проектами
import { projects } from "../helpers/projectList";

const Project1 = () => {
  const { id } = useParams();

  const project = projects[id]; // в id - 6 проектов (от 0 до 5 индекс)

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGitHub link="http://github.com" />}

          {/* определяем props как link  для кнопки вызова github*/}
          {/* <BtnGitHub link="http://github.com" /> */}
        </div>
      </div>
    </main>
  );
};

export default Project1;
