import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

import Home from "./pages/home";
import Navbar_component from './components/navbar.jsx'
import {Footer} from './components/footer.jsx'
import Servicios from './pages/servicios'

const Layout = () => {

    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar_component/>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Servicios/>} path="/servicios"/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer/>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default Layout;