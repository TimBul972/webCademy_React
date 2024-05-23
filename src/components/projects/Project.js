// NavLink — это специальный компонент в библиотеке React Router,
// который используется для создания навигационных ссылок
// NavLink принимает несколько пропсов, некоторые из них:
// - to: URL-адрес, по которому должна вести ссылка...

import { NavLink } from "react-router-dom";
import "./style.css";

// props передаем из компонента Project(s)!
const Project = ({ title, img, index }) => {
  return (
    // карточка объекта
    //внутри NavLink избавляемся от тега <a>, иначе ошибка
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        {index}
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
