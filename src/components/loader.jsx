import logo from '../../public/logo.png'
import '../styles/loader.css'

const Loader = () => {
    return (
      <div className="loader d_center">
        <img className='loader_img' src={logo} alt="logo de la empresa Donair" />
      </div>
    );
  };
  
export default Loader;