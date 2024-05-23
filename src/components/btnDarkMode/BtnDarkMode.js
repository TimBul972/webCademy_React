import { useEffect } from "react";

//импортируем свой кастомный хук
import { useLocalStorage } from "../../utils/useLocalStorage";

//определение системной темы
import detectDarkMode from "../../utils/detectDarkMode";

import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";

const BtnDarkMode = () => {
  // определим состояние, которое соответствует темной теме
  // если состояние меняется, то компонент реренендерится через React
  // useState возвращает массив из 2-х элементов
  // и сразу проводим реструктуризацию
  // в darkMode записано состояние - строка light
  // в setDarkMode записана функция, которая меняет состояние darkMode

  // использование наш кастомный хук с параметрами
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode() )
    
  // useEffect использует как первый аргумент функцию,
  // кторая работает при первичном рендере и при изменении состояния
  // второй аргумент - массив, если = пусто, то функция сработает тоько один раз
  // при первичном старте
  // если = darkMode, то при его изменении  вызывается useEffect

  // useRef позволяет привязыватьсяк элементам без querySelector

  useEffect(() => {
    // добавляем класс в body
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);


  // Если меняются системные настройки, меняем тему
  useEffect(() => {
    window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme)
      });
  }, [setDarkMode])


  // функция, отслеживающая клик на кнопке по тегу OnClick
  const toogleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  const btnNormal = 'dark-mode-btn'
  const btnActive = 'dark-mode-btn dark-mode-btn--active'

  return (
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toogleDarkMode}>
      <img src={sun} alt="Light" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
