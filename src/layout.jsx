import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Home from "./pages/home";
import Navbar_component from './components/navbar.jsx'
import {Footer} from './components/footer.jsx'
import Servicios from './pages/servicios'
import Loader from './components/loader';

const Layout = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3500); 
        }, []);

    return (
        <>
        {isLoading ? <Loader/> : 
        <div className='pag_container'>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar_component/>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Servicios/>} path="/services"/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer/>
                </ScrollToTop>
            </BrowserRouter>
        </div>
        }
        </>
    );
};

export default Layout;