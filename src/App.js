import React from 'react'
import { Home } from './pages/Home/Home'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/Details/ProductDetails'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<ProductDetails />} />
      </Routes>
    </Router>
  )
}

export default App