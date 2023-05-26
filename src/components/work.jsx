import { useContext } from "react";
import { Context } from "../store/appContext";

const Work = () => {

    const {store} = useContext(Context);

    const local = store.local

    return (
        <section className="services_workSection d_center">
            <div className="services_workContainer">
            <div className="services_workImages d_center">
                    <h2>Trabajos Destacados</h2>
                </div>
                <div className="services_workImagesContainer d_center">
                    <>
                    {window.innerWidth >= '700' ? 
                    <div className="services_workLarge">
                        
                    <figure className="d_center">
                    <p>Antes</p>
                        <img src={`${local[0]}`} alt="local trabajko de limpieza antes y despues" />
                    </figure>
                    <figure className="d_center">
                    <img src={`${local[2]}`} alt="local trabajo de limpieza antes y despues" />
                    </figure>
                    </div>
                    : 
                    <figure className="d_center">
                        <img src={`${local[0]}`} alt="local trabajko de limpieza antes y despues" />
                    <p>Antes</p>
                    </figure>
                    }
                    </>
                    <figure className="d_center">
                        <img src={`${local[1]}`} alt="local trabajko de limpieza antes y despues" />
                    <p>Después</p>
                    </figure>
                </div>
            </div>
        </section>
    )
};

export default Work;