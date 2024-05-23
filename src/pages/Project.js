// должно быть как Projects
import Project from "../components/projects/Project";
//используем данные из массива, возращаемого модулем projectList для вывода на странице
import { projects } from "../helpers/projectList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {/* title, img - произвольные названия */}
          {/* поля title, img  -> из файла projectList.js */}
          {/* устраняем ошибку по уникальному номеру дочернего элемента */}
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
          
        </ul>
      </div>
    </main>
  );
};

export default Projects;
