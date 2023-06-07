import { useContext } from 'react';
import '../styles/thanks.css'
import {Context} from '../store/appContext'
import Zoom from "react-awesome-reveal";

const Thanks = () => {

  const {store} = useContext(Context)

  return (
    <div className="thanks_section">
      <div className='thanks_logo'>
        <Zoom duration={2000}>
        <figure >
          <img src={store.logo} alt="logo donair" />
        </figure>
        </Zoom>
      </div>
      <div className='thanks_info'>
      <p>
        ¡Gracias por comunicarte con nosotros! Hemos recibido tu mensaje y nos comprometemos a responder lo antes posible.
      </p>
      <p>
      Esperamos poder atender tus consultas, responder tus preguntas o ayudarte en lo que necesites.
      </p>
      <p>
        Mientras tanto, si tienes algún asunto urgente o información adicional que compartir, no dudes en contactarnos directamente al administracion2021@donair.es.
      </p>
      <p>
        ¡Gracias por comunicarte con el equipo Donair!
      </p>
      </div>
    </div>
  )
}

export default Thanks;
