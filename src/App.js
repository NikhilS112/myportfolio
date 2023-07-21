import './Component/Styles.css';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Skills from './Component/Skills';
import Experience from './Component/Experince'
import Project from './Component/Project'
import Contact from './Component/Contact'
import Home from './Component/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Education from './Component/Education';





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/skill" element={<Skills />} />
        <Route path='/education' element={<Education/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter> 
  );
}

export default App;
