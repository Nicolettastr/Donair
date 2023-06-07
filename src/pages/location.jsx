import '../styles/location.css'
import { Fade } from 'react-awesome-reveal';

const Location = () => {
  return (
    <Fade>
    <section className='pag_container location_container'>
      <div>
        <div className='location_banner'>
        <h2>¿Listo para llevar tu idea a otro nivel o contratar un servicio?</h2>
        <h2>Nos ubicamos aquí, listos para ayudarte en lo que necesites</h2>
        </div>
        <div className='location_title'>
        <h2>Ubicación</h2>
        <p>Calle Santa Susana, 30, Local 3, 28033</p>
        </div>
      </div>
      <div className='location_mapSection'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3034.822153859005!2d-3.648305224793457!3d40.47919935183613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422ebee99aaaab%3A0x994b1b51232bd4e2!2sDonair!5e0!3m2!1ses!2ses!4v1686145128867!5m2!1ses!2ses" className="map" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
    </section>
    </Fade>
  )
}

export default Location;
