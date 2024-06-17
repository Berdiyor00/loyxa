import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from './Pages/Header';
import Register from "./Pages/Register";
import Swipper from "./Pages/Swipper";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
        <Swipper/>
    
    </>
  );
}

export default App;
