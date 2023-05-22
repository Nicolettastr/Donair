import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Card_component = () => {

    const info = [
        {
            name: 'Servicios',
            img: 'https://img.freepik.com/vector-gratis/ilustracion-vector-concepto-abstracto-mantenimiento-sitio-web-servicio-sitio-web-mantenimiento-seo-pagina-web-diseno-web-soporte-profesional-sitio-corporativo-analisis-seguridad-actualizacion-metafora-abstracta_335657-2295.jpg?w=740&t=st=1684760532~exp=1684761132~hmac=9ad555d78a09d091dbc5ca50e561c986edb705fd1c8020cddd5fbbdfa2104032',
            info: 'Nos encargamos de todo, fontanería, limpieza, cristalería, electricidad y más.'
        },
        {
            name: 'Climatización',
            img: 'https://img.freepik.com/vector-gratis/servicio-electricista_335657-3186.jpg?w=740&t=st=1684760430~exp=1684761030~hmac=6fa7b534fab27a87a3b703fdb6be4106e33b8afd701930fcd9372f032aadbf0e',
            info: 'ofrecemos soluciones completas en climatización, incluyendo ventas, montaje y servicio técnico.'
        },
        {
            name: 'Proyectos',
            img: 'https://img.freepik.com/vector-gratis/pequenos-empresarios-generando-ideas-sosteniendo-engranajes-gran-bombilla-gestion-ideas-pensamiento-alternativo-ilustracion-concepto-eleccion-mejor-solucion_335657-2555.jpg?w=740&t=st=1684760617~exp=1684761217~hmac=eb1d2588184d9f22a4dba9d8543cfffd32a1628b9e6cf29ea53560869f9a4f58',
            info: 'Nuestros profesionales están listos para realizar tus proyectos, desde piscinas hasta locales.'
        }
    ]

    return (
        <>
        {info.map((item, index) => {
            return (
        <div className={`card_${item.name}`} key={index}>
            <Card className='card_container' style={{ width: '18rem' }}>
            <Card.Img className={item.name === "Climatización" || item.name === "Proyectos" ? 'card_padding' : ''} variant="top" src={item.img} />
            <Card.Body className='card_body d_center'>
                <Card.Title className='card_title'>{item.name}</Card.Title>
                    <Card.Text className='card_text'>
                        {item.info}
                    </Card.Text>
                <Button className='card_button' variant="primary">{item.name}</Button>
            </Card.Body>
            </Card>
        </div>
    )
})
}
</>
    )
}

export default Card_component
