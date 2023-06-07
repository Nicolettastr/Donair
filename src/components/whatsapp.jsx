import whatsapp from '/whatsapp.png'

const Whatsapp = () => {
    return (
        <span className='whatsapp_container'>
            <a href="https://api.whatsapp.com/send?phone=617128331"
            className="btn_whatsapp" target="_blank" rel="noreferrer">
                <img className='icon_whatsapp' src={whatsapp} alt="icon whatsapp" />
            </a>
        </span>
    )
};

export default Whatsapp;