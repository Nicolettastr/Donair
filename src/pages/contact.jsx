import { useContext, useState } from 'react'
import '../styles/contact.css'
import {Context} from '../store/appContext'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const {store} = useContext(Context)
  const navigate = useNavigate()

  const contactInputs = ['nombre', 'email', 'asunto', 'móvil']
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNavigate = () => {
    if (isFormValid) {
      navigate('/thanks');
    }
  };

  const handleInputChange = () => {
    const formFields = document.querySelectorAll('.contact-form-field');
    let isValid = true;
  
    formFields.forEach((field) => {
      if (field.value.trim() === '') {
        isValid = false;
      }
    });
  
    setIsFormValid(isValid);
  };

  const contact = contactInputs.map((item, index) => {
    return (
      <div className='contact_inputContainer' key={index}>
        <label htmlFor={item}>{item.replace(/^\w/, (c) => c.toUpperCase())}</label>
          <input
            className="contact-input contact-form-field"
            type={item.includes('email') ? 'email' : 'text'}
            name={item}
            placeholder={item.replace(/^\w/, (c) => c.toUpperCase())}
            required
            onChange={handleInputChange}
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
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>
        </div>
        
        <div className='contact_btnContainer'>
        <button
              onClick={handleNavigate}
              type="submit"
              className="contact_btn"
            >
              Enviar
        </button>
        </div>
      </form>
    </div>
  )
}

export default Contact;
