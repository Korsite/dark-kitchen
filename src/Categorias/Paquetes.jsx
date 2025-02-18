import '../Estilo css/Paquetes.css';
import {TopComponent} from "../components/TopComponent.jsx";
import {SideBar} from "../components/SideBar.jsx";

export const Paquetes = () => {
    return (
        <>
            <div className="main">
                <TopComponent/>
                <input type="checkbox" id="btn-menu"/>
                <SideBar/>
            </div>

            <div className="tema">
                <span>Paquetes</span>
                <img src="../Imagenes/Inicio/Categorias/paquetes.png" width="100"/>
            </div>

            <div className="producto-paquetes">
                {
                    productosPaquetes.map((producto) => (
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

const productosPaquetes = [
    {
        nombre: 'Hasta el amanecer',
        precio: 850,
        descripcion: 'Mariscos, carne de res y bebidas preparadas c/s alcohol',
        imagen: '../Imagenes/Productos/Paquetes/borrachera.png'
    },
    {
        nombre: 'una tardeada',
        precio: 420,
        descripcion: 'Pizzas, hamburguesas, hot-dog y papas fritas',
        imagen: '../Imagenes/Productos/Paquetes/fiesta.png'
    },
    {
        nombre: 'Mi amigo perdido',
        precio: 500,
        descripcion: 'Alitas, boneless y papas preparadas con queso',
        imagen: '../Imagenes/Productos/Paquetes/amigos.png'
    },
    {
        nombre: 'Yo invito',
        precio: 550,
        descripcion: 'Cervezas, boneless y carne asada',
        imagen: '../Imagenes/Productos/Paquetes/compadres.png'
    },
    {
        nombre: 'Vecinos',
        precio: 900,
        descripcion: 'Fajitas de res y pollo, costillar de cerdo y salchicha polaca con guacamole',
        imagen: '../Imagenes/Productos/Paquetes/vecinos.png'
    },
    {
        nombre: 'Tacos locos',
        precio: 850,
        descripcion: 'Tacos al pastor, bistec en salsa verde, adobado de puerco, chicharrón en salsa verde, bistec con papas, bistec con chile pasilla etc. Complementos incluidos (salsas, limones, nopales, cebollitas y Tortillas).',
        imagen: '../Imagenes/Productos/Paquetes/tacos locos.png'
    },
    {
        nombre: 'Pa la familia',
        precio: 850,
        descripcion: 'Bistec, carne tipo pastor alambre (queso, tocino, pimientos) Chorizo, Cecina enchilada o fajitas de pollo. Complementos incluidos (salsas, limones, nopales, cebollitas y Tortillas)',
        imagen: '../Imagenes/Productos/Paquetes/pa la familia.png'
    },
    {
        nombre: 'Cumpleanios',
        precio: 750,
        descripcion: 'Bistec empanizado con papas, mole rojo (con pechuga troceada), espagueti con jamón y queso, picadillo de res, milanesa de pollo y chuleta ahumada en salsa roja. Complementos incluidos (salsas, limones, nopales, cebollitas y Tortillas)',
        imagen: '../Imagenes/Productos/Paquetes/cumpleanios.png'
    },
    {
        nombre: 'Fiesta infantil',
        precio: 800,
        descripcion: 'Bistec, arrachera marinada, costilla, carne tipo pastor, cecina enchilada o fajitas de pollo. Complementos incluidos (salsas, limones, nopales, cebollitas Tortillas).',
        imagen: '../Imagenes/Productos/Paquetes/fiesta infantil.png'
    },
    {
        nombre: 'Baby shower',
        precio: 850,
        descripcion: 'Pechuga de pollo en, guisado de puerco rojo, puré de papa y espagueti (verde o rojo)',
        imagen: '../Imagenes/Productos/Paquetes/baby shower.png'
    },
    {
        nombre: 'Bautizos',
        precio: 800,
        descripcion: 'Taquizas de 3 o 4 guisados mexicanos, ensalada de verduras, tlacoyos, taquitos, pastas, mole con pollo, nuggets de pollo, mini hamburguesas con papas a la francesa, rebanadas de pizza y macarrones con queso.',
        imagen: '../Imagenes/Productos/Paquetes/bautizo.png'
    },
]