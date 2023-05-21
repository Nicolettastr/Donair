import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar_component from '../src/components/navbar'
import ScrollToTop from '../src/components/navbar'
import Home from './pages/home';
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop>
          <Navbar_component />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <App />
  </React.StrictMode>,
)
