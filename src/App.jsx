import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from './Pages/Header';
import Register from "./Pages/Register";
import Layout from "./Pages/Layout";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/register" element={<Layout/>}/>
        </Routes>
      </BrowserRouter>
      <div className="pt-[50px]">

      
      </div>
    
    </>
  );
}

export default App;
