import '../Estilo css/Comida china.css'

export const ComidaChina = () => {
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

                    <li className="ubicacion" onClick={() => {}} style={{cursor: 'pointer'}}>
                        Ubicacion
                    </li>

                    <li className="buscador">
                        <input type="text" name="hola" placeholder="Que desea comer?"/>

                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </li>

                    <li className="carrito"  onClick={() => {}} style={{cursor: 'pointer'}}>
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
                <span>Comida china</span>
                <img src="../Imagenes/Inicio/Categorias/comida china.png" width="100"/>
            </div>

            <div className="producto-china">
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/pollo tso.png" alt=""/>
                    <span>
                        <h2>Pollo estilo tso - $130</h2>
                        Es un plato de pollo frito agrio-picante popular en la cocina chino-estadounidense y chino-canadiense
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/pollo almendras.png" alt=""/>
                    <span>
                        <h2>Pollo con almendras - $150</h2>
                        Uno de los platos más concurridos y a la vez los más sabrosos de su país. Sencillo y a la vez delicioso, con ingredientes de nuestro abasto, con un resultado auténtico y muy original.
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/pollo con pina.png" alt=""/>
                    <span>
                        <h2>Pollo con pina - $120</h2>
                        Un pollo delicioso, suave y ligeramente dulce. En esta receta las piezas de pollo se cocinan con la piña y un toque de jengibre y azúcar mascabado.
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/pollo al limon.png" alt=""/>
                    <span>
                        <h2>Pollo al limon - $170</h2>
                        Sirve el pollo al limón bañado en la salsa, puedes cortarlo en rodajas antes de servir o dejar las piezas enteras. Decora con la juliana de piel de limón que potenciará el sabor en cada bocado.
                    </span>
                </div>
                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/pollo kung pao.png" alt=""/>
                    <span>
                        <h2>Pollo Kung Pao - $200</h2>
                        El resultado de la receta de Pollo Kung Pao que compartimos con vosotros es exquisito, consiguiendo una carne muy jugosa y llena de sabor
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/rollitos de primavera.png" alt=""/>
                    <span>
                        <h2>Rollitos de primavera - $180</h2>
                        Solo una parte en concreto, (el estilo cantonés) la han ido actualizando y simplificando al gusto occidental
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/costilla agridulce.png" alt=""/>
                    <span>
                        <h2>Costilla agridulce - $210</h2>
                        'Agridulce' es un sabor característico de Zhejiang Lazhong, que se utiliza a menudo en platos guisados. Las costillas de cerdo agridulces son un plato tradicional representativo de los platos agridulces
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/Panceta especiada.png" alt=""/>
                    <span>
                        <h2>Panceta especiada - $ 230</h2>
                        El contraste de texturas, crujiente por fuera y jugosa y tierna por dentro, y su exótico sabor la hacen merecedora de un lugar en nuestras cocinas.
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/ensalada de col.png" alt=""/>
                    <span>
                        <h2>Ensalada de col - $250</h2>
                        Está aderezada con una vinagreta con matices orientales que le sienta como anillo al dedo y que le aporta un sabor espectacular.
                    </span>
                </div>

                <div
                    onClick={() => {}}
                    style={{cursor: 'pointer'}}
                >
                    <img src="../Imagenes/Productos/Comida china/ternera.png" alt=""/>
                    <span>
                        <h2>Ternera en salsa - $250</h2>
                        La salsa de ostras es un condimento muy utilizado en la cocina asiática, similar a la salsa de pescado, que aporta una gran intensidad de aromas y sabores a multitud de platos, y no solo de pescado
                    </span>
                </div>
            </div>
        </>
    )
}
