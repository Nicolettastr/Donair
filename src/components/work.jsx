import { useContext } from "react";
import { Context } from "../store/appContext";
import { Fade } from "react-awesome-reveal";

const Work = () => {

    const {store} = useContext(Context);

    const local = store.local

    return (
        <section className="services_workSection d_center">
            <Fade duration='3000'>
            <div className="services_work_info">
                <h2>Trabajos Destacados</h2>
                <p>
                Nuestro equipo de profesionales se enorgullece de presentar nuestro exitoso proyecto de limpieza de locales comerciales. Nos especializamos en brindar un servicio integral que abarca todos los aspectos de la higiene y mantenimiento, garantizando que su tienda brille en cada rincón.
                </p>
            </div>
            <div className="services_workContainer w-100 d_center">
                <div className="services_workImages d_center">
                </div>
                <div className="services_workImagesContainer d_center">
                    <div className="services_workLarge d_Center">
                        <figure className="services_figure d_center">
                            <img src={`${local[0]}`} alt="local trabajko de limpieza antes y despues" />
                            <p>Antes</p>
                        </figure>
                        <figure className="services_figure d_center">
                            <img src={`${local[1]}`} alt="local trabajko de limpieza antes y despues" />
                            <p>Después</p>
                        </figure>
                    </div>
                </div>
            </div>
            </Fade>
        </section>
    )
};

export default Work;