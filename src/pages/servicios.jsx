import ServicesBanner from '../components/servicesBanner';
import Work from '../components/work';
import '../styles/services.css'
import serviceIcon from '../../public/tecnico.png'
import climatizacionIcon from '../../public/casa.png'
import proyectosIcon from '../../public/proyecto.png'

const Servicios = () => {

  const allServices = [
    {
      name: 'Servicios',
      text: 'Mantenimiento integral de edificio y viviendas:', 
      class: 'services',
      services: [
        'Fontanería', 'Carpintería', 'Cristalería', 'Electricidad', 'Limpieza', 'Pintura', 'Albañilería'
      ],
      icon: serviceIcon
    },

    {
      name: 'Climatización',
      class: 'climatizacion',
      services: [
        'Venta de equipos', 'Montaje, instalación', 'Servicio técnico', 'Mantenimiento', 'Extracción de aire', 'Ventilación de aire', 'Instalación de salidas de humo', 'Instalación chimeneas', 'Mantenimiento de chimeneas', 'Unidades de tratamiento de aire', 'Sistemas de refrigeración'
      ],
      icon: climatizacionIcon
    },
    {
      name: 'Proyectos',
      textEnd: 'Confía en nosotros para hacer realidad tus ideas. Nuestro equipo de profesionales se encargará de cada detalle para lograr resultados excepcionales.',
      class: 'proyectos',
      services: [
        'Piscinas', 'Tiendas','Terrazas','Locales'
      ],
      icon: proyectosIcon
    }
  ]

  const works = allServices.map((item, index) => {
    return (
      <section key={index} className={`${item.class}_section services_pad`} id={item.class}>
      <div className={`${item.class}_container`}>
        
        <h2 className={`${item.class}_title type_title`}>
        <img className='service_icon' src={item.icon} alt={`${item.name} icon`} />
        {item.name}
        </h2>
        <div>
          <ul className={`services_list ${item.class}_list`}>
            <p>{item.text}</p>
            {item.services.map((item, index) => {
              return <li className='services_itemList' key={index}>{item}</li>
            })}
            {item.textEnd ? <p className='project_p'>{item.textEnd}</p> : ''}
          </ul>
        </div>
      </div>
  </section>
    )
  })

  return (
    <div className='pag_container services_sectionContainer d_center'>
        <div className='d_center services_sectionAll'>
        <ServicesBanner/>
        <div className='services_mainContainer'>
          {works}
        </div>
          <Work/>
        </div>
    </div >
  )
}

export default Servicios;
