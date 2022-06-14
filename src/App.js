import './App.css';
import {Routes, Route} from 'react-router-dom'
import Projects from './Containers/Projects/Projects';
import DetailsProject from './Containers/Projects/DetailsProjects/DetailsProject';
import Contact from './Containers/Contact/Contact'
import Experiences from './Containers/Experiences/Experiences';
import Home from './Containers/Home/Home';
import NavBar from './Components/Navbar/Navbar';
import Formations from './Containers/Formations/Formations'
import NavFooter from './Components/NavFooter/NavFooter';
import "./font-awesome-4.7.0/css/font-awesome.min.css";

function App() {
  
  return (
    <div>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experiences' element={<Experiences />} />
          <Route path='/formations' element={<Formations />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/detailsProject/:slug' element={<DetailsProject />} />
        </Routes>

        <NavFooter />
    </div>
  );
}

export default App;
