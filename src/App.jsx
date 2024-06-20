import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './Pages/Header';
import UniversityDetail from './Pages/Layout';
import Navbar from "./Navbar/Navbar"
import Register from "./Pages/Register"
import AdminPanel from './Pages/Admin';
import PDFViewer from './Pages/Pdfwever';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>

  
        <Route path="/" element={<Header />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/university/:id" element={<UniversityDetail />} />
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path="/pdf-viewer" element={<PDFViewer />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  
  );
}

export default App;
