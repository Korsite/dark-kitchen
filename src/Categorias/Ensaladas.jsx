import '../Estilo css/Ensaladas.css';
import {useNavigate} from "react-router-dom";

export const Ensaladas = () => {
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
                <span>Ensaladas</span>
                <img src="../Imagenes/Inicio/Categorias/ensaladas.png" width="100"/>
            </div>

            <div className="producto-ensalada">

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Ensaladas/Ensalada de pasta.png" alt=""/>
                    <span>
                        <h2>Ensalada de pasta - $40</h2>
                        Son una buena solución con multitud de nutrientes y vitaminas.
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="/public/Imagenes/Productos/Ensaladas/ensalada%20mixta.png" alt=""/>
                    <span>
                        <h2>Ensalada mixta - $60</h2>
                        Deliciosas y variadas que incluye múltiples verduras, huevo y carnes.
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Ensaladas/enselada de mariscos.png" alt=""/>
                    <span>
                        <h2>Ensalada de mariscos - $60</h2>
                        La ensalada de mariscos es un plato refinado que se saborea con una variedad de pulpo y camarones
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Ensaladas/ensalada del pastor.png" alt=""/>
                    <span>
                        <h2>Ensalada de pastor - $50</h2>
                        Una mezcla de dulce y salado. Combinaremos el bacalao desalado y desmigado, con la cebolleta, las naranjas y unas aceitunas de Aragón, siempre tan sabrosas.
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Ensaladas/ensalada de atun.png" alt=""/>
                    <span>
                        <h2>Ensalada de atun - $45</h2>
                        Es una combinación perfecta con ingredientes frescos nutritivos y deliciosos.
                    </span>
                </div>
            </div>
        </>
    )
}
