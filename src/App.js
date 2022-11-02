// will host most of our frontend stuff, be sure to add new terminal and cd to mern-exercise tracker
// press the npm start command to start our app 
// open new terminal and install bootstrap for better styling [ npm install bootstrap ]
// set up react router - [ npm install react-router-dom] - make easier to route different urls to different react components
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"; // imports router
import "bootstrap/dist/css/bootstrap.min.css";

// import components and their locations
import Navbar from "./components/navbar.component"; 
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component"; 
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </Router>
    );
}

export default App;
