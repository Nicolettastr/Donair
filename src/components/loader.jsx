import { useContext } from 'react';
import '../styles/loader.css'
import {Context} from '../store/appContext'

const Loader = () => {

  const {store} = useContext(Context)

    return (
      <div className="loader d_center">
        <img className='loader_img' src={store.logo} alt="logo de la empresa Donair" />
      </div>
    );
  };
  
export default Loader;