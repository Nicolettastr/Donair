import { useContext } from 'react'
import '../styles/contact.css'
import {Context} from '../store/appContext'

const Contact = () => {

  const {store} = useContext(Context)

  const contactInputs = ['nombre', 'email', 'asunto', 'móvil']

  const contact = contactInputs.map((item, index) => {
    return (
      <div className='contact_inputContainer' key={index}>
        <label htmlFor={item}>{item.replace(/^\w/, (c) => c.toUpperCase())}</label>
            <input
              className="contact-input"
              type={item.includes('email') ? 'email' : 'text'}
              name={item}
              placeholder={item.replace(/^\w/, (c) => c.toUpperCase())}
              required
            />
      </div>
    )
  })

  return (
    <div className='contact_Section'>
      <form
        action="https://formsubmit.co/administracion2021@donair.es"
        method="POST"
        className="contact_form"
      >
        <div className='contact_titular'>
            <div className='contact_bannerContainer'>
              <h2 className='contact_banner'>¿Buscas realizar un proyecto o contratar un servicio?</h2>
              <h2 className="contact_banner">
              ¡Contáctanos y te ayudaremos!
              </h2>
            </div>
        </div>
        <figure className='contact_logo'>
            <img src={store.logo} alt="logo donair" />
            <h2>Contáctanos</h2>
        </figure>
        <div className="contact_container">
            <div className="contact_inputs">
              {contact}
              <div className='contact_inputContainer'>
                <label htmlFor="text">Mensaje</label>
                <textarea
                  className="contact-text"
                  type="text"
                  name="text"
                  placeholder="Mensaje"
                  required
                ></textarea>
              </div>
            <input type="hidden" name="_next" value="https://donair.es/thanks"></input>
            </div>
        </div>
        
        <div className='contact_btnContainer'>
        <button
              type="submit"
              className="contact_btn"
            >
              Send
        </button>
        </div>
      </form>
    </div>
  )
}

export default Contact;
