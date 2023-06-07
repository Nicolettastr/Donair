import logo from '/logo.png'
import antes from '/antes.jpeg'
import despues from '/despues.jpeg'
import medium from '/medium.jpg'

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