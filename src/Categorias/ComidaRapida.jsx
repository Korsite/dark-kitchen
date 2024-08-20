import '../Estilo css/Comida rapida.css';
import {useNavigate} from "react-router-dom";


export const ComidaRapida = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="main">
                <ul className="opciones">
                    <li className="btn-menu">
                        <label htmlFor="btn-menu" className="icon-menu">
                            <span className="material-symbols-outlined">
                                menu
                            </span>
                        </label>
                    </li>

                    <li className="nombre" onClick={() => navigate('/')}>
                        <a href=''>
                            Cocina
                            <strong>
                                Fantasma
                            </strong>
                            <img src="../Imagenes/Inicio/cubiertos.png" alt="" width="50"/>
                        </a>
                    </li>

                    <li
                        className="ubicacion"
                        onClick={() => {
                        }}
                        style={{cursor: 'pointer'}}>
                        Ubicacion
                    </li>

                    <li className="buscador">
                        <input type="text" name="hola" placeholder="Que desea comer?"/>

                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </li>

                    <li
                        className="carrito"
                        onClick={() => {
                        }}
                        style={{cursor: 'pointer'}}
                    >
                        <a href="#">
                            <span className="material-symbols-outlined">
                                shopping_cart
                            </span>
                            0 en el carro
                        </a>
                    </li>

                    <li className="ruedita">
                        <a href="">
                            <span
                                className="material-symbols-outlined"
                                onClick={() => {
                                }}
                                style={{cursor: 'pointer'}}
                            >
                                settings
                            </span>

                            <p>Opciones</p>
                        </a>
                    </li>
                </ul>

                <input type="checkbox" id="btn-menu"/>
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
                            <a href="">Pedidos recientes</a>
                            <a href="">Favoritos</a>
                            <a href="">Metodos de pago</a>
                            <a href="">Promociones</a>
                            <a href="">Ayuda</a>
                            <a href="">Invita a tus amigos</a>
                            <a href="">Cerrar sesion</a>
                            <ul className="redes-sociales">
                                <li>
                                    <a href="https://www.facebook.com/zobroas.sanchez">
                                        <img src="../Imagenes/Inicio/facebook.png" alt="" width="20"/>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.instagram.com/">
                                        <img src="../Imagenes/Inicio/instagram.png" alt="" width="20"/>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.whatsapp.com/?lang=es">
                                        <img src="../Imagenes/Inicio/whatsapp.png" alt="" width="20"/>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://twitter.com/?lang=es">
                                        <img src="../Imagenes/Inicio/twitter.png" alt="" width="20"/>
                                    </a>
                                </li>

                            </ul>
                            <nav>
                                <label htmlFor="btn-menu" className="icon-equis">
                            <span className="material-symbols-outlined">
                                close
                            </span>
                                </label>
                            </nav>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="tema">
                <span>Comida rapida</span>
                <img src="../Imagenes/Inicio/Categorias/comida rapida.png" width="100"/>
            </div>

            <div className="producto-rapido">

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida rapida/hamburguesa.png" alt=""/>
                    <span>
                        <h2>Hamburguesa - $65</h2>
                        Grandes y deliciosas hamburguesas bien preparadas de doble carne
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida rapida/hot dogs.png" alt=""/>
                    <span>
                        <h2>Hot dogs - $35 c/u</h2>
                        Deliciosos hot dogs preparados al gusto
                    </span>
                </div>

                <div
                    onClick={() => {
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida rapida/pizza.png" alt=""/>
                    <span>
                        <h2>Pizza</h2>
                        Pizza de peperoni, queso, tres carnes y hawaiana
                        <ul>
                            <li>Chica $50</li>
                            <li>Mediana $70</li>
                            <li>Grande $90</li>
                        </ul>
                    </span>
                </div>
                <div
                    onClick={() => {
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida rapida/tortas.png" alt=""/>
                    <span>
                        <h2>Tortas - $40</h2>
                        Sabrosas tortas grandes de bistec, pollo, cubanas y ahogadas
                    </span>
                </div>

                <div
                    onClick={() => {
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida rapida/alitas de pollo.png" alt=""/>
                    <span>
                        <h2>Alitas de pollo - $110</h2>
                        Orden de 7 alitas bien preparadas bañadas en salsa búfalo a solo
                    </span>
                </div>
            </div>

        </>
    )
}
