import '../styles/home.css'
import logo from '../../public/logo_T.png'
import Card_component from '../components/card';

const Home = () => {
    return (
        <>
        <section className="home_section">
            <div className='home_sectionContainer d_center'>
                <figure className='home_image'>
                    <img src={logo} alt='donair logo' />
                </figure>
                <h1 className='home_title'>Servicios, Climatización & Proyectos</h1>
            </div>
        </section>
        <section className='home_infoSection d_center'>
            <h4>Somos Donair, tu aliado en servicios, climatización y   Proyectos. Confía en Donair y disfruta de resultados impecables.</h4>
            <div className='home_cardSection d_center'>
                <Card_component/>
            </div>
        </section>
        </>
    )
};

export default Home;