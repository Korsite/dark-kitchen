import '../Estilo css/Bebidas.css'
import {useNavigate} from "react-router-dom";

export const Bebidas = () => {
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

                    <li className="nombre">
                        <a onClick={() => navigate("/")}>
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
                        style={{cursor: 'pointer'}}
                    >
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
                        onClick={() => {}}
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
                                onClick={() => {}}
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
                        </nav>
                        <label htmlFor="btn-menu" className="icon-equis">
                            <span className="material-symbols-outlined">
                                close
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="tema">
                <span>Bebidas</span>
                <img src="/Imagenes/Inicio/Categorias/bebidas.png" width="100" alt=''/>
            </div>

            <div className="producto-paquetes">
                <div
                    onClick={() => {
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <img src="/Imagenes/Productos/Bebidas/naranja.png" alt=""/>
                    <span>
                        <h2>Jugo de naranja - $25</h2>
                        Mariscos, carne de res y bebidas preparadas c/s alcohol
                    </span>
                </div>

                <div
                    onClick={() => {
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <img src="/Imagenes/Productos/Bebidas/frutos rojos.png" alt=""/>
                    <span>
                        <h2>Frutos rojos - $28</h2>
                        Elaborados de una gran variedad de frutos como fresas, betabeles, manzanas y frambuesas
                    </span>
                </div>
                <div
                    onClick={() => {
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Bebidas/citricos.png" alt=""/>
                    <span>
                        <h2>Jugo de criticos - $28</h2>
                        Hecho con naranja, toronja y limones frescos
                    </span>
                </div>

                <div
                    onClick={() => {
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Bebidas/betabel.png" alt=""/>
                    <span>
                        <h2>Jugo de betabel - $24</h2>
                        Cervezas, boneless y carne asada
                    </span>
                </div>

                <div
                    onClick={() => {
                    }}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Bebidas/papaya y limon.png" alt=""/>
                    <span>
                        <h2>Papaya y limon - $26</h2>
                        Fajitas de res y pollo, costillar de cerdo y salchicha polaca con guacamole
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Bebidas/toronja.png" alt=""/>
                    <span>
                        <h2>Jugo de toronja = $25</h2>
                    </span>
                </div>
            </div>
        </>
    )
}