import '../styles/services.css'

const Servicios = () => {
  return (
    <div className='services_sectionContainer d_center'>
    <section className="services_section services_pad" id="servicios">
        <div className='services_container '>
          <h2 className='services_title'>Servicios</h2>
          <div>
            <ul className='services_list service_list'>
              <p>Mantenimiento integral de edificio y viviendas:</p>
              <li>Fontanería</li>
              <li>Carpintería</li>
              <li>Cristalería</li>
              <li>Electricidad</li>
              <li>Limpieza</li>
              <li>Pintura</li>
              <li>Albañilería</li>
            </ul>
          </div>
        </div>
    </section>
    <section  className="climatizacion_section services_pad" id="climatizacion">
        <div className='climatizacion_container '>
          <h2 className='services_title'>Climatizacion</h2>
          <div>
            <ul className='services_list clima_list'>
              <li>Venta de equipos</li>
              <li>Montaje, instalación</li>
              <li>Servicio técnico</li>
              <li>Mantenimiento</li>
              <li>Extracción de aire</li>
              <li>Ventilación de aire</li>
              <li>Instalación de salidas de humo</li>
              <li>Instalación chimeneas</li>
              <li>Mantenimiento de chimeneas</li>
              <li>Unidades de tratamiento de aire</li>
              <li>Sistemas de refrigeración</li>
            </ul>
          </div>
        </div>
    </section>
    <section  className="proyectos_section services_pad" id="proyectos">
        <div className='proyectos_container '>
          <h2 className='services_title'>Proyectos</h2>
          <div>
            <ul className='services_list project_list'>
              <li>Piscinas</li>
              <li>Tiendas</li>
              <li>Terrazas</li>
              <li>Locales</li>
              <p className='project_p'>
                Confía en nosotros para hacer realidad tus ideas. Nuestro equipo de profesionales se encargará de cada detalle para lograr resultados excepcionales.
              </p>
            </ul>
          </div>
        </div>
    </section>
    </div >
  )
}

export default Servicios;
