import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/auth/Login';
import About from './pages/About';
import Community from './pages/Community';
import Method from './pages/Method';
import StudentLayout from './pages/student/StudentLayout';
import Dashboard from './pages/student/Dashboard';
import Lessons from './pages/student/Lessons';
import Register from './pages/auth/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/community" element={<Community />} />
        <Route path="/method" element={<Method />} />
        <Route path="/dashboard" element={<StudentLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="lessons" element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
