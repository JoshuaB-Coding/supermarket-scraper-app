import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/home' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
