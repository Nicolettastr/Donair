import { useEffect, useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar_component from './components/navbar.jsx'
import {Footer} from './components/footer.jsx'
import Servicios from './pages/servicios'
import Loader from './components/loader';
import {Context} from './store/appContext';
import injectContext from "./store/appContext";
import Location from './pages/location'
import Contact from './pages/contact'
import Whatsapp from './components/whatsapp';

const Layout = () => {

    const {store, actions} = useContext(Context);

    useEffect(() => {
        setTimeout(() => {
            actions.handleLoading();
        }, 3500)
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
        {store.isLoading ? <Loader/> :
        <div className='pag_container'>
            <Navbar_component/>
            <Whatsapp/>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Servicios/>} path="/services"/>
                <Route element={<Location/>} path="/location"/>
                <Route element={<Contact/>} path="/contact"/>
                <Route element={<h1>Not found!</h1>} />
            </Routes>
            <Footer/>
        </div>
        }
        </>
    );
};

export default injectContext(Layout);