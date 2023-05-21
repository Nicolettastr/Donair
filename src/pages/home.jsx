import '../styles/home.css'
import logo from '../../public/logo_T.png'

const Home = () => {
    return (
        <>
        <section className="home_section">
            <div className='home_sectionContainer'>
                <figure className='home_image'>
                    <img src={logo} alt='donair logo' />
                </figure>
                <h1 className='home_title'>Servicios, Climatización & Proyectos</h1>
            </div>
        </section>
        </>
    )
};

export default Home;