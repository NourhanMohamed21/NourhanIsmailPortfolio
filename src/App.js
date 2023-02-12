
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "animate.css/source/animate.css"
import NavBar from './Components/NavBar';
import PortHeader from './Components/PortHeader';
import ExperienceSec from './ExperienceSec';
import About from './Components/About';
import SkillsSec from './SkillsSec';
import Contacts from './Components/Contacts';
import ProjectsSec from './ProjectsSec';


function App() {

  return (
    <div>
      <NavBar />
      <PortHeader/>
      <About />
      <ExperienceSec/>
     <ProjectsSec />
     <SkillsSec />
     <Contacts />

   </div>
  );
}

export default App;
