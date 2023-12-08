import '../styles/home.css'
import logo from '../../public/logo_T.png'
import Card_component from '../components/card';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal"
import Button from '../components/button';

const Home = () => {

    const message = {
        h4: 'Somos Donair, tu aliado en servicios, climatización y   Proyectos. Confía en Donair y disfruta de resultados impecables.',
        h3: 'Eficiencia que impulsa el éxito, calidad que supera expectativas.',
        h5: 'Servicios especializados que transforman tus espacios. ¿Tienes un proyecto en mente? Hazlo realidad con nosotros!'
    }

    const button =  <Link to='/contact'>
                        <Button className={'home_contactButton contact'} message={'Contáctanos'} />
                    </Link>

    return (
        <div className='pag_container'>
        <section className="home_section">
            <div className='home_sectionContainer d_center'>
                <figure className='home_image'>
                    <img src={logo} alt='donair logo' />
                </figure>
                <h1 className='home_title'>Servicios, Climatización & Proyectos</h1>
            </div>
        </section>
        <Fade duration='2000'>
        <section className='home_infoSection d_center'>
            <h4>
                {message.h4}
            </h4>
            {button}
            <div className='home_cardSection d_center'>
                <Card_component/>
            </div>
        </section>
        <section className='home_videoSection d_center'>
            <div className='home_videoContent'>
                <div className='home_videoTitle d_center'>
                    <h3>
                    {message.h3}
                    </h3>
                </div>
                <div className='home_videoContainer d_center'>
                    <video className='home_video' src="/DonAir-1.mov" controls></video>
                    <video className='home_video' src="/DonAir-2.mov" controls></video>
                </div>
            </div>
        </section>
        <section className='home_contactBanner d_center'>
            <div className='home_contactSection'>
                <h5>
                    {message.h5}
                </h5>
                {button}
            </div>
        </section>
        </Fade>
        </div>
    )
};

export default Home;