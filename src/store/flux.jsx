 
  const getState = ({ getStore, getActions, setStore }) => {
  
    return {
      store: {
        isLoading: true
      },
      actions: {

        handleLoading: () => {
          setStore({isLoading: false})
        }

      },
    };
  };
  
  export default getState;