import ServicesBanner from '../components/servicesBanner';
import Work from '../components/work';
import '../styles/services.css'
import serviceIcon from '../../public/tecnico.png'
import climatizacionIcon from '../../public/casa.png'
import proyectosIcon from '../../public/proyecto.png'

import Fontanería from '../../public/servicesIcon/valvula.png'
import Carpintería from '../../public/servicesIcon/carpinteria.png'
import Cristalería from '../../public/servicesIcon/vaso.png'
import Electricidad from '../../public/servicesIcon/enchufe.png'
import Albañilería from '../../public/servicesIcon/albanil.png'
import Limpieza from '../../public/servicesIcon/limpiar.png'
import Pintura from '../../public/servicesIcon/pintura.png'

import aire from '../../public/climatizacionIcon/aire.png'
import filtro from '../../public/climatizacionIcon/filtro.png'
import humo from '../../public/climatizacionIcon/humo.png'
import instalar from '../../public/climatizacionIcon/instalar.png'
import mantenimiento from '../../public/climatizacionIcon/mantenimiento.png'
import refrigerar from '../../public/climatizacionIcon/refrigerar.png'
import ventilacion from '../../public/climatizacionIcon/ventilacion.png'
climatizacionIcon

import tienda from '../../public/proyectosIcon/tienda.png'
import local from '../../public/proyectosIcon/local.png'
import piscina from '../../public/proyectosIcon/piscina.png'
import terraza from '../../public/proyectosIcon/terraza.png'
import bombilla from '../../public/proyectosIcon/bombilla.png'


const Servicios = () => {

  const allServices = [
    {
      name: 'Servicios',
      text: 'Mantenimiento integral de edificios y viviendas:', 
      class: 'services',
      services: [
        {
          name: "Fontanería",
          icon: Fontanería,
        },
        {
          name: "Carpintería",
          icon: Carpintería,
        },
        {
          name: "Cristalería",
          icon: Cristalería,
        },
        {
          name: "Electricidad",
          icon: Electricidad,
        },
        {
          name: "Limpieza",
          icon: Limpieza,
        },
        {
          name: "Pintura",
          icon: Pintura,
        },
        {
          name: "Albañilería",
          icon: Albañilería,
        }
      ],
      icon: serviceIcon
    },

    {
      name: 'Climatización',
      class: 'climatizacion',
      services: [
        {
          name:'Venta, Montaje e instalación de equipos ',
          icon: aire,
        },
        {
          name:'Servicio técnico y Mantenimiento',
          icon: mantenimiento,
        },
        {
          name:'Extracción y Ventilación de aire',
          icon: ventilacion,
        },
        {
          name:'Instalación de salidas de humo',
          icon: humo,
        },
        {
          name:'Instalación y Mantenimiento chimeneas',
          icon: instalar
        },
        {
          name:'Unidades de tratamiento de aire',
          icon: filtro
        },
        {
          name: 'Sistemas de refrigeración',
          icon: refrigerar,
        }
      ],
      icon: climatizacionIcon
    },
    {
      name: 'Proyectos',
      textEnd: 'Confía en nosotros para hacer realidad tus ideas. Nuestro equipo de profesionales se encargará de cada detalle para lograr resultados excepcionales.',
      class: 'proyectos',
      services: [
        {
          name: "Piscinas",
          icon: piscina,
        },
        {
          name: "Tiendas",
          icon: tienda,
        },
        {
          name: "Terrazas",
          icon: terraza,
        },
        {
          name: "Locales",
          icon: local,
        },
        {
          name: "Tu Idea",
          icon: bombilla,
        }
      ],
      icon: proyectosIcon
    }
  ]

  const works = allServices.map((item, index) => {
    return (
      <section key={index} className={`${item.class}_section services_pad`} id={item.class}>
      <div className={`${item.class}_container`}>
        <h2 className={`${item.class}_title type_title`}>
        <img className='service_icon service_iconTitle' src={item.icon} alt={`${item.name} icon`} />
        {item.name}
        </h2>
        <div>
          <ul className={`services_list ${item.class}_list`}>
            {item.services.map((item, index) => {
              return <li className='services_itemList' key={index}>
                <span>
                  <img className='service_icon' src={item.icon} alt="" />
                </span>
                {item.name}
                </li>
            })}
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
        <div className='services_mainContainer d_center'>
          {works}
        </div>
          <Work/>
        </div>
    </div >
  )
}

export default Servicios;
