import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Projects/Projects";
import Casestudy from "./Components/Casestudy/Casestudy";
import { store } from "./store";
import { createContext, useState } from "react";
import { Contact } from "./Components/Contact/Contact";
export const GlobalData = createContext();
function App() {
  const [name, setName] = useState();
  return (
    <div className="App">
      <Navbar />
      <GlobalData.Provider value={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/project"
            element={<Project name={name} setName={setName} />}
          />
          <Route
            path="/project/:name"
            element={<Casestudy name={name} setName={setName} />}
          />
        </Routes>
      </GlobalData.Provider>
    </div>
  );
}

export default App;
