import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import ProductDetails from './Pages/ProductDetails'
// import Footer from './components/Footer'
// import Cards from './components/CategoriesCards'
// import Categories from './components/Categories'
// import CategoriesCards from './components/CategoriesCards'
// import Login from './components/Login'
// import ProductLogin from './components/ProductLogin'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
