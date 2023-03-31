import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {Routes,Route} from "react-router-dom";
import About from './Components/About/About';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/project' element={<>Project</>}/>
        <Route path='/education' element={<Education/>}/>
      </Routes>
    </div>
  );
}

export default App;
