import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import servicio from '../../public/tecnico.png'
import clima from '../../public/casa.png'
import proyectos from '../../public/proyecto.png'

const Card_component = () => {

    const info = [
        {
            id: 'servicios',
            name: 'Servicios',
            img: servicio,
            info: 'Nos encargamos de todo, fontanería, limpieza, cristalería, electricidad y más.'
        },
        {
            id: 'climatizacion',
            name: 'Climatización',
            img: clima,
            info: 'ofrecemos soluciones completas en climatización, incluyendo ventas, montaje y servicio técnico.'
        },
        {
            id: 'proyectos',
            name: 'Proyectos',
            img: proyectos,
            info: 'Nuestros profesionales están listos para realizar tus proyectos, desde piscinas hasta locales.'
        }
    ]

    return (
        <>
        {info.map((item, index) => {
            return (
        <Link to={`/services#${item.id}`} className='card_infoContainer' key={index}>
        <div className={`card_${item.name}`}>
            <Card className={`card_container card_${item.name}Container`} style={{ width: '18rem' }}>
            <Card.Body className='card_body element d_center'>
            <figure className='card_textImg'>
                <img src={item.img} />
            </figure>
            <Card.Title className='card_title'>{item.name}</Card.Title>
                    <Card.Text className='card_text'>
                        {item.info}
                    </Card.Text>
            </Card.Body>
            </Card>
            <h2 className='card_name'>{item.name}</h2>
        </div>
        </Link>
    )
})
}
</>
    )
}

export default Card_component
