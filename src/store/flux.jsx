import logo from '../../public/logo.png'
import antes from '../../public/antes.jpeg'
import despues from '../../public/despues.jpeg'
import medium from '../../public/medium.jpg'

  const getState = ({ setStore }) => {
  
    return {
      store: {
        isLoading: true,
        logo : logo,
        local: [antes, despues, medium]
      },
      actions: {

        handleLoading: () => {
          setStore({isLoading: false})
        }

      },
    };
  };
  
  export default getState;