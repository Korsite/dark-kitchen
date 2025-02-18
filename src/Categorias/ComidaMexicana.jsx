import '../Estilo css/Comida mexicana.css';
import {TopComponent} from "../components/TopComponent.jsx";
import {SideBar} from "../components/SideBar.jsx";

export const ComidaMexicana = () => {
    return (
        <>
            <div className="main">
                <TopComponent />
                <input type="checkbox" id="btn-menu"/>
                <SideBar />
            </div>

            <div className="tema">
                <span>Tacos</span>
                <img src="../Imagenes/Inicio/Categorias/ComidaMexicana.png" width="100" alt=""/>
            </div>

            <div className="producto-mexicano">
                {
                    productosMexicanos.map((producto) => (
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

const productosMexicanos = [
    {
        nombre: 'Enchiladas',
        precio: 50,
        descripcion: 'Disfrute de nuestras enchiladas acompañadas con repollo, frijoles y queso. Si exquisito sabor hará que no te arrepientas de comerlas',
        imagen: '../Imagenes/Productos/Comida mexicana/enchiladas.png'
    },
    {
        nombre: 'Tacos',
        precio: 60,
        descripcion: 'El taco es una preparación culinaria muy popular de México, pero en nuestra COCINA FANTASMA no se igualan, disfrútalos con una deliciosa salsa y exquisitos',
        imagen: '../Imagenes/Productos/Comida mexicana/Tacos.png'
    },
    {
        nombre: 'Mole',
        precio: 58,
        descripcion: 'Disfruta de nuestro mole con un sabor inigualable picosito que te hará chuparte los dedos y querer de más.',
        imagen: '../Imagenes/Productos/Comida mexicana/mole.png'
    },
    {
        nombre: 'Menudo',
        precio: 40,
        descripcion: 'Una fiesta, no es fiesta sin un plato de esta sopa picante de pancita de res y maíz',
        imagen: '../Imagenes/Productos/Comida mexicana/menudo.png'
    },
    {
        nombre: 'Guacamole',
        precio: 70,
        descripcion: 'Disfruta de nuestro guacamole preparada a base de un aguacate totalmente fresco, chile verde o si prefiere un chile pimiento acompañado de unos ricos totopos',
        imagen: '../Imagenes/Productos/Comida mexicana/guacamole.png'
    },
    {
        nombre: 'Tamales',
        precio: 110,
        descripcion: 'Nuestros tamales son inigualables acompañados con una salsa verde o roja ya sea a tu gusto o acompañados de un rico repollo',
        imagen: '../Imagenes/Productos/Comida mexicana/tamales.png'
    },
    {
        nombre: 'Chilaquiles',
        precio: 80,
        descripcion: 'Nuestros chilaquiles fritos o tostados son los mejores que vas a probar acompañados de frijoles y queso rallado',
        imagen: '../Imagenes/Productos/Comida mexicana/chilaquiles.png'
    },
    {
        nombre: 'Chiles rellenos',
        precio: 40,
        descripcion: 'Los mejores chiles rellenos, los más sabrosos los encuentras en nuestra cocina acompañados con un arroz riquísimo, no esperes a probarlos que te dejaran con ganas de más',
        imagen: '../Imagenes/Productos/Comida mexicana/chiles rellenos.png'
    },
    {
        nombre: 'Tostadas',
        precio: 70,
        descripcion: 'Nada mejor que comerte unas deliciosas tostadas con frijoles, lechuga, tomate, queso y si prefieres con pollo acompañadas con una salsa picosita. No esperes más a probarlas que te dejaran con ganas de pedir a la próxima.',
        imagen: '../Imagenes/Productos/Comida mexicana/tostadas.png'
    }
]