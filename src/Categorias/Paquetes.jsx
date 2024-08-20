import '../Estilo css/Paquetes.css';

export const Paquetes = () => {
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
                <span>Paquetes</span>
                <img src="../Imagenes/Inicio/Categorias/paquetes.png" width="100"/>
            </div>

            <div className="producto-paquetes">
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/borrachera.png" alt=""/>
                    <span>
                        <h2>Hasta el amanecer - $850</h2>
                        Mariscos, carne de res y bebidas preparadas c/s alcohol
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/fiesta.png" alt=""/>
                    <span>
                        <h2>una tardeada - $420</h2>
                        Pizzas, hamburguesas, hot-dog y papas fritas
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/amigos.png" alt=""/>
                    <span>
                        <h2>Mi amigo perdido - $500</h2>
                        Alitas, boneless y papas preparadas con queso
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/compadres.png" alt=""/>
                    <span>
                        <h2>Yo invito - $550</h2>
                        Cervezas, boneless y carne asada
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/vecinos.png" alt=""/>
                    <span>
                        <h2>Vecinos - $900</h2>
                        Fajitas de res y pollo, costillar de cerdo y salchicha polaca con guacamole
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/tacos locos.png" alt=""/>
                    <span>
                        <h2>Tacos locos - $850</h2>
                        Tacos al pastor, bistec en salsa verde, adobado de puerco, chicharrón en salsa verde, bistec con papas, bistec con chile pasilla etc. Complementos incluidos (salsas, limones, nopales, cebollitas y Tortillas).
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/pa la familia.png" alt=""/>
                    <span>
                        <h2>Pa la familia- $850</h2>
                        Bistec, carne tipo pastor alambre (queso, tocino, pimientos) Chorizo, Cecina enchilada o fajitas de pollo. Complementos incluidos (salsas, limones, nopales, cebollitas y Tortillas)
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/cumpleanios.png" alt=""/>
                    <span>
                        <h2>Cumpleanios - $750</h2>
                        Bistec empanizado con papas, mole rojo (con pechuga troceada), espagueti con jamón y queso, picadillo de res, milanesa de pollo y chuleta ahumada en salsa roja. Complementos incluidos (salsas, limones, nopales, cebollitas y Tortillas)
                    </span>
                </div>


                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/fiesta infantil.png" alt=""/>
                    <span>
                        <h2>Fiesta infantil</h2>
                        Bistec, arrachera marinada, costilla, carne tipo pastor, cecina enchilada o fajitas de pollo. Complementos incluidos (salsas, limones, nopales, cebollitas Tortillas).
                    </span>
                </div>


                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/baby shower.png" alt=""/>
                    <span>
                        <h2>Baby shower - $850</h2>
                        Pechuga de pollo en, guisado de puerco rojo, puré de papa y espagueti (verde o rojo)
                    </span>
                </div>


                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Paquetes/bautizo.png" alt=""/>
                    <span>
                        <h2>Bautizos - $800</h2>
                        Taquizas de 3 o 4 guisados mexicanos, ensalada de verduras, tlacoyos, taquitos, pastas, mole con pollo, nuggets de pollo, mini hamburguesas con papas a la francesa, rebanadas de pizza y macarrones con queso.
                    </span>
                </div>
            </div>
        </>
)
}
