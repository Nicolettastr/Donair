import logo from '../../public/logo.png'
import '../styles/footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <section className='footer_section d_center'>
        <div className='footer_logo d_center'>
                <figure>
                    <img src={logo} alt="Donair logo" />
                </figure>
            </div>
        <div className='footer_container d_center'>
            <div className='footer_info'>
                <Link to='/about'>
                    <p>Sobre Nosotros</p>
                </Link>
                <Link to='/services#trabajos'>
                    <p>Trabajos</p>
                </Link>
                <Link to='/location'>
                    <p>Donde Estamos</p>
                </Link>
                <Link to='/services#servicios'>
                    <p>Servicios</p>
                </Link>
                <Link to='/services#climatizacion'>
                    <p>Climatización</p>
                </Link>
                <Link to='/services#proyectos'>
                    <p>Proyectos</p>
                </Link>
            </div>
            <div className='footer_open d_center'>
                <div className='d_center'>
                    <h5>Horario</h5>
                    <p>Lunes - Jueves: 8:00h - 18:30h</p>
                    <p>Viernes: 8:00h - 14:00h</p>
                </div>
                <div className='d_center'>
                    <h5>Ubicación</h5>
                    <p>Calle Santa Susana, 30, Local 3, 28033</p>
                    <p>Móvil: 617 128 331</p>
                    <p>Email: ventas@donair.es</p>
                </div>
            </div>
        </div>
        <div className='footer_rights d_center'>
            <div className='footer_rightsContainer d_center'>
                <figure>
                    <img src="https://www.banderasphonline.com/wp-content/uploads/2020/03/bandera-espa%C3%B1a-con-escudo-para-exterior-interior-1200x675.png" alt="Bandera de España" />
                </figure>
                <p>Madrid, España - 2021. © Copyright 2021 Donair</p>
            </div>
        </div>
    </section>
  )
}
