import '../Estilo css/Comida rapida.css';
import {TopComponent} from "../components/TopComponent.jsx";
import {SideBar} from "../components/SideBar.jsx";


export const ComidaRapida = () => {
    return (
        <>
            <div className="main">
                <TopComponent/>
                <input type="checkbox" id="btn-menu"/>
                <SideBar/>
            </div>

            <div className="tema">
                <span>Comida rapida</span>
                <img src="../Imagenes/Inicio/Categorias/comida rapida.png" width="100"/>
            </div>

            <div className="producto-rapido">
                {
                    productosRapidos.map((producto) => (
                        <div
                            key={producto.nombre}
                            onClick={() => {
                            }}
                            style={{cursor: 'pointer'}}
                        >
                            <img src={producto.imagen} alt=""/>
                            <span>
                                <h2>{producto.nombre} - ${producto.precio}</h2>
                                {producto.descripcion}
                            </span>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

const productosRapidos = [
    {
        nombre: 'Hamburguesa',
        precio: 65,
        descripcion: 'Grandes y deliciosas hamburguesas bien preparadas de doble carne',
        imagen: '../Imagenes/Productos/Comida rapida/hamburguesa.png'
    },
    {
        nombre: "Hot dogs",
        precio: 35,
        descripcion: 'Deliciosos hot dogs preparados al gusto',
        imagen: '../Imagenes/Productos/Comida rapida/hot dogs.png'
    },
    {
        nombre: 'Pizza',
        precio: 50,
        descripcion: 'Pizza de peperoni, queso, tres carnes y hawaiana',
        imagen: '../Imagenes/Productos/Comida rapida/pizza.png'
    },
    {
        nombre: 'Tortas',
        precio: 40,
        descripcion: 'Sabrosas tortas grandes de bistec, pollo, cubanas y ahogadas',
        imagen: '../Imagenes/Productos/Comida rapida/tortas.png'
    },
    {
        nombre: 'Alitas de pollo',
        precio: 110,
        descripcion: 'Orden de 7 alitas bien preparadas bañadas en salsa búfalo a solo',
        imagen: '../Imagenes/Productos/Comida rapida/alitas de pollo.png'
    }
]