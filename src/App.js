import React from 'react';
import './App.css';
import Home from './pages/Home';
import Layout from './components/layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Filter from './pages/Filter';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/filter" element={<Filter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
