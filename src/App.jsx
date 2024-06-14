import { BrowserRouter, Routes } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Header from './Pages/Header'

function App() {


  return (
   <>
   <BrowserRouter>
<Navbar/>
<Header/>
<Routes>

  
</Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App
