import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Student from './Components/Student';
import Students from './Components/Students';
import Mentor from './Components/Mentor';
import Mentors from './Components/Mentors';
import AssignMentor from './Components/AssignMentor';
import AssignStudents from './Components/AssignStudents';
import AddStudent from './Components/AddStudent';
import AddMentor from './Components/AddMentor';

function App() {
  return (
    <div className="App">
     <Header />
      
      <Routes>
        <Route path="/" element={ <Home /> } ></Route>
        <Route path="/students" element={ <Students /> } ></Route>
        <Route path="/add-student" element={ <AddStudent /> } ></Route>
        <Route path="/mentors" element={ <Mentors /> } ></Route>
        <Route path="/add-mentor" element={ <AddMentor /> } ></Route>
        <Route path="/assign-mentor/:id" element={ <AssignMentor /> } ></Route>
        <Route path="/assign-students/:id" element={ <AssignStudents /> } ></Route>
        <Route path="/student/:id" element={ <Student /> } ></Route>
        <Route path="/mentor/:id" element={ <Mentor /> } ></Route>
      </Routes>
    </div>
  );
}

export default App;
