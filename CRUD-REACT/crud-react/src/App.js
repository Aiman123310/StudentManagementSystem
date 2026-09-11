import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import AddStudent from "./addStudent";   // file name is fine
import ViewStudents from "./viewStudents"; // file name is fine
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/viewStudents" element={<ViewStudents />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
