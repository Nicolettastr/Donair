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
        <section className='home_videoSection d_center'>
            <div className='home_videoContent'>
                <div className='home_videoTitle d_center'>
                    <h3>
                        Eficiencia que impulsa el éxito, calidad    que supera expectativas.
                    </h3>
                </div>
                <div className='home_videoContainer d_center'>
                    <video className='home_video' src="../../public/Donair-1.mov" controls></video>
                    <video className='home_video' src="../../public/Donair-2.mov" controls></video>
                </div>
            </div>
        </section>
        </>
    )
};

export default Home;