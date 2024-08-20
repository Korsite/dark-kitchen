import '../Estilo css/Comida mexicana.css';

export const ComidaMexicana = () => {
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
                        <a href="../Inicio.html">
                            Cocina
                            <strong>
                                Fantasma
                            </strong>
                            <img src="../Imagenes/Inicio/cubiertos.png" alt="" width="50"/>
                        </a>
                    </li>

                    <li 
                        className="ubicacion"
                        onClick={() => {}}
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
                <span>Tacos</span>
                <img src="../Imagenes/Inicio/Categorias/comida mexicana.png" width="100"/>
            </div>

            <div className="producto-mexicano">
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida mexicana/enchiladas.png" alt=""/>
                    <span>
                        <h2>Enchiladas - $50</h2>
                        Disfrute de nuestras enchiladas acompañadas con repollo, frijoles y queso. Si exquisito sabor hará que no te arrepientas de comerlas
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida mexicana/Tacos.png" alt=""/>
                    <span>
                        <h2>Tacos - $60</h2>
                        El taco es una preparación culinaria muy popular de México, pero en nuestra COCINA FANTASMA no se igualan, disfrútalos con una deliciosa salsa y exquisitos
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida mexicana/mole.png" alt=""/>
                    <span>
                        <h2>Mole $58</h2>
                        Disfruta de nuestro mole con un sabor inigualable picosito que te hará chuparte los dedos y querer de más.
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida mexicana/menudo.png" alt=""/>
                    <span>
                        <h2>Menudo - $40</h2>
                        Una fiesta, no es fiesta sin un plato de esta sopa picante de pancita de res y maíz
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida mexicana/guacamole.png" alt=""/>
                    <span>
                        <h2>Guacamole - $70</h2>
                        Disfruta de nuestro guacamole preparada a base de un aguacate totalmente fresco, chile verde o si prefiere un chile pimiento acompañado de unos ricos totopos
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida mexicana/tamales.png" alt=""/>
                    <span>
                        <h2>Tamales - $110</h2>
                        Nuestros tamales son inigualables acompañados con una salsa verde o roja ya sea a tu gusto o acompañados de un rico repollo
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida mexicana/chilaquiles.png" alt=""/>
                    <span>
                        <h2>Chilaquiles - $80</h2>
                        Nuestros chilaquiles fritos o tostados son los mejores que vas a probar acompañados de frijoles y queso rallado
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida mexicana/chiles rellenos.png" alt=""/>
                    <span>
                        <h2>Chiles rellenos - $40</h2>
                        Los mejores chiles rellenos, los más sabrosos los encuentras en nuestra cocina acompañados con un arroz riquísimo, no esperes a probarlos que te dejaran con ganas de más
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida mexicana/tostadas.png" alt=""/>
                    <span>
                        <h2>Tostadas - $70</h2>
                        Nada mejor que comerte unas deliciosas tostadas con frijoles, lechuga, tomate, queso y si prefieres con pollo acompañadas con una salsa picosita. No esperes más a probarlas que te dejaran con ganas de pedir a la próxima. 
                    </span>
                </div>
            </div>

        </>
    )
}
