import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Project";
import Contacts from "./pages/Contacts";
import Project1 from "./pages/Project1";

import ScrollToTop from "./utils/scrollToTop"; //фикс скролла (всегда выравниваем по верху при переходе)

// в project переходим на нужный проект согласно индексу проекта в массиве [0-5]

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        {/* строим маршруты по изменяющимся частям*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project1 />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
