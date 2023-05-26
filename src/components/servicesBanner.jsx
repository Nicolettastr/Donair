import { useContext } from "react";
import {Context} from '../store/appContext'
const ServicesBanner = () => {

    const {store} = useContext(Context)

return (
    <section className="services_bannerSection">
        <div className="services_bannerContainer">
            <div className="services_bannerInfo d_center">
                <figure className="services_bannerImage d_center">
                    <img src={store.logo} alt="donair logo" />
                </figure>
                <p>Especialistas En Trabajos De Calidad</p>
            </div>
        </div>
    </section>
  )
};

export default ServicesBanner;
