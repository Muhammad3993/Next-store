import { Route, Routes } from "react-router-dom"
// pages
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Detail from "./components/Detail"
// components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Categories />} />
        <Route path="/products/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
