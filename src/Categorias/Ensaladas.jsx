import '../Estilo css/Ensaladas.css';
import {TopComponent} from "../components/TopComponent.jsx";
import {SideBar} from "../components/SideBar.jsx";

export const Ensaladas = () => {
    return (
        <>
            <div className="main">
                <TopComponent />
                <input type="checkbox" id="btn-menu"/>
                <SideBar />
            </div>

            <div className="tema">
                <span>Ensaladas</span>
                <img src="../Imagenes/Inicio/Categorias/ensaladas.png" width="100"/>
            </div>

            <div className="producto-ensalada">
                {
                    productosEnsaladas.map((producto) => (
                        <div
                            key={producto.nombre}
                            onClick={() => {}}
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

const productosEnsaladas = [
    {
        nombre: 'Ensalada de pasta',
        precio: 40,
        descripcion: 'Son una buena solución con multitud de nutrientes y vitaminas.',
        imagen: '../Imagenes/Productos/Ensaladas/Ensalada de pasta.png'
    },
    {
        nombre: 'Ensalada mixta',
        precio: 60,
        descripcion: 'Deliciosas y variadas que incluye múltiples verduras, huevo y carnes.',
        imagen: '../Imagenes/Productos/Ensaladas/ensalada mixta.png'
    },
    {
        nombre: 'Ensalada de mariscos',
        precio: 60,
        descripcion: 'La ensalada de mariscos es un plato refinado que se saborea con una variedad de pulpo y camarones',
        imagen: '../Imagenes/Productos/Ensaladas/enselada de mariscos.png'
    },
    {
        nombre: 'Ensalada de pastor',
        precio: 50,
        descripcion: 'Una mezcla de dulce y salado. Combinaremos el bacalao desalado y desmigado, con la cebolleta, las naranjas y unas aceitunas de Aragón, siempre tan sabrosas.',
        imagen: '../Imagenes/Productos/Ensaladas/ensalada del pastor.png'
    },
    {
        nombre: 'Ensalada de atun',
        precio: 45,
        descripcion: 'Es una combinación perfecta con ingredientes frescos nutritivos y deliciosos.',
        imagen: '../Imagenes/Productos/Ensaladas/ensalada de atun.png'
    }
]