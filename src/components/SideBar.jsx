export const SideBar = () => {

    return (
        <div className="container-menu">
            <div className="cont-menu">
                <nav>
                    <div>
                                <span className="material-symbols-outlined">
                                    account_circle
                                </span>
                        <center>
                            Gandhi Soto
                        </center>
                    </div>
                    <button onClick={() => {}}>Pedidos recientes</button>
                    <button onClick={() => {}}>Métodos de pago</button>
                    <button onClick={() => {}}>Promociones</button>
                    <button onClick={() => {}}>Ayuda</button>
                    <button onClick={() => {}}>Invita a tus amigos</button>
                    <button onClick={() => {}}>Cerrar sesión</button>

                    <ul className="redes-sociales">
                        {
                            redesSociales.map(redSocial => (
                                <li key={redSocial.nombre}>
                                    <a href={redSocial.url}>
                                        <img src={`Imagenes/Inicio/${redSocial.imagen}`} alt="" width="20"/>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                <label htmlFor="btn-menu" className="icon-equis">
                            <span className="material-symbols-outlined">
                                close
                            </span>
                </label>
            </div>
        </div>

    )
}


const redesSociales = [
    {
        nombre: 'Facebook',
        url: 'https://www.facebook.com/zobroas.sanchez',
        imagen: 'facebook.png'
    },
    {
        nombre: 'Instagram',
        url: 'https://www.instagram.com/',
        imagen: 'instagram.png'
    },
    {
        nombre: 'Whatsapp',
        url: 'https://www.whatsapp.com/?lang=es',
        imagen: 'whatsapp.png'
    },
    {
        nombre: 'Twitter',
        url: 'https://twitter.com/?lang=es',
        imagen: 'twitter.png'
    }
]
