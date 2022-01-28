import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import NavBar from "./components/NavBar";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {

  return (
    <Router>
      <NavBar />
      <br />
      <Routes>
        <Route exact path="/" element={<ExerciseList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
