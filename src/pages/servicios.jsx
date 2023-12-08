import ServicesBanner from '../components/servicesBanner';
import Work from '../components/work';
import '../styles/services.css'
import serviceIcon from '/tecnico.png'
import climatizacionIcon from '/casa.png'
import proyectosIcon from '/proyecto.png'

import Fontanería from '/servicesIcon/valvula.png'
import Carpintería from '/servicesIcon/carpinteria.png'
import Cristalería from '/servicesIcon/vaso.png'
import Electricidad from '/servicesIcon/enchufe.png'
import Albañilería from '/servicesIcon/albanil.png'
import Limpieza from '/servicesIcon/limpiar.png'
import Pintura from '/servicesIcon/pintura.png'

import aire from '/climatizacionIcon/aire.png'
import filtro from '/climatizacionIcon/filtro.png'
import humo from '/climatizacionIcon/humo.png'
import instalar from '/climatizacionIcon/instalar.png'
import mantenimiento from '/climatizacionIcon/mantenimiento.png'
import refrigerar from '/climatizacionIcon/refrigerar.png'
import ventilacion from '/climatizacionIcon/ventilacion.png'

import tienda from '/proyectosIcon/tienda.png'
import local from '/proyectosIcon/local.png'
import piscina from '/proyectosIcon/piscina.png'
import terraza from '/proyectosIcon/terraza.png'
import bombilla from '/proyectosIcon/bombilla.png'

import { Fade } from "react-awesome-reveal";


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
        <Fade duration='2500'>
          {works}
        </Fade>
        </div>
          <Work/>
        </div>
    </div >
  )
}

export default Servicios;
