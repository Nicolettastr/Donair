import '../styles/services.css'

const Servicios = () => {

  const services = [
    'Fontanería', 'Carpintería', 'Cristalería', 'Electricidad', 'Limpieza', 'Pintura', 'Albañilería'
  ];

  const conditioning = [
    'Venta de equipos', 'Montaje, instalación', 'Servicio técnico', 'Mantenimiento', 'Extracción de aire', 'Ventilación de aire', 'Instalación de salidas de humo', 'Instalación chimeneas', 'Mantenimiento de chimeneas', 'Unidades de tratamiento de aire', 'Sistemas de refrigeración'
  ];

  const projects = [
    'Piscinas', 'Tiendas','Terrazas','Locales'
  ]

  return (
    <div className='pag_container services_sectionContainer d_center'>
    <section className="services_section services_pad" id="servicios">
        <div className='services_container '>
          <h2 className='services_title'>Servicios</h2>
          <div>
            <ul className='services_list service_list'>
              <p>Mantenimiento integral de edificio y viviendas:</p>
              {services.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
        </div>
    </section>
    <section  className="climatizacion_section services_pad" id="climatizacion">
        <div className='climatizacion_container '>
          <h2 className='services_title'>Climatizacion</h2>
          <div>
            <ul className='services_list clima_list'>
            {conditioning.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
            </ul>
          </div>
        </div>
    </section>
    <section  className="proyectos_section services_pad" id="proyectos">
        <div className='proyectos_container '>
          <h2 className='services_title'>Proyectos</h2>
          <div>
            <ul className='services_list project_list'>
            {projects.map((item, index) => {
                return <li key={index}>{item}</li>
              })}
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
