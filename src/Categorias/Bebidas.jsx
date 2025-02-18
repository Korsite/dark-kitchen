import '../Estilo css/Bebidas.css'
import {TopComponent} from "../components/TopComponent.jsx";
import {SideBar} from "../components/SideBar.jsx";

export const Bebidas = () => {
    return (
        <>
            <div className="main">
                <TopComponent/>

                <input type="checkbox" id="btn-menu"/>

                <SideBar/>
            </div>

            <div className="tema">
                <span>Bebidas</span>
                <img src="/Imagenes/Inicio/Categorias/bebidas.png" width="100" alt=''/>
            </div>

            <div className="producto-paquetes">
                {
                    productosBebidas.map((producto) => (
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

const productosBebidas = [
    {
        nombre: 'Jugo de naranja',
        precio: 25,
        descripcion: 'Mariscos, carne de res y bebidas preparadas c/s alcohol',
        imagen: '/Imagenes/Productos/Bebidas/naranja.png'
    },
    {
        nombre: 'Frutos rojos',
        precio: 28,
        descripcion: 'Elaborados de una gran variedad de frutos como fresas, betabeles, manzanas y frambuesas',
        imagen: '/Imagenes/Productos/Bebidas/frutos rojos.png'
    },
    {
        nombre: 'Jugo de criticos',
        precio: 28,
        descripcion: 'Hecho con naranja, toronja y limones frescos',
        imagen: '/Imagenes/Productos/Bebidas/citricos.png'
    },
    {
        nombre: 'Jugo de betabel',
        precio: 24,
        descripcion: 'Cervezas, boneless y carne asada',
        imagen: '/Imagenes/Productos/Bebidas/betabel.png'
    },
    {
        nombre: 'Papaya y limon',
        precio: 26,
        descripcion: 'Fajitas de res y pollo, costillar de cerdo y salchicha polaca con guacamole',
        imagen: '/Imagenes/Productos/Bebidas/papaya y limon.png'
    },
    {
        nombre: 'Jugo de toronja',
        precio: 25,
        descripcion: '',
        imagen: '/Imagenes/Productos/Bebidas/toronja.png'
    }
]