import '../Estilo css/Comida china.css'
import {TopComponent} from "../components/TopComponent.jsx";
import {SideBar} from "../components/SideBar.jsx";

export const ComidaChina = () => {
    return (
        <>
            <div className="main">
                <TopComponent />
                <input type="checkbox" id="btn-menu"/>
                <SideBar />
            </div>

            <div className="tema">
                <span>Comida china</span>
                <img src="../Imagenes/Inicio/Categorias/comida china.png" width="100"/>
            </div>

            <div className="producto-china">
                {
                    productosChinos.map((producto) => (
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

const productosChinos = [
    {
        nombre: 'Pollo estilo tso',
        precio: 130,
        descripcion: 'Es un plato de pollo frito agrio-picante popular en la cocina chino-estadounidense y chino-canadiense',
        imagen: '../Imagenes/Productos/Comida china/pollo tso.png'
    },
    {
        nombre: 'Pollo con almendras',
        precio: 150,
        descripcion: 'Uno de los platos más concurridos y a la vez los más sabrosos de su país. Sencillo y a la vez delicioso, con ingredientes de nuestro abasto, con un resultado auténtico y muy original.',
        imagen: '../Imagenes/Productos/Comida china/pollo almendras.png'
    },
    {
        nombre: 'Pollo con pina',
        precio: 120,
        descripcion: 'Un pollo delicioso, suave y ligeramente dulce. En esta receta las piezas de pollo se cocinan con la piña y un toque de jengibre y azúcar mascabado.',
        imagen: '../Imagenes/Productos/Comida china/pollo con pina.png'
    },
    {
        nombre: 'Pollo al limon',
        precio: 170,
        descripcion: 'Sirve el pollo al limón bañado en la salsa, puedes cortarlo en rodajas antes de servir o dejar las piezas enteras. Decora con la juliana de piel de limón que potenciará el sabor en cada bocado.',
        imagen: '../Imagenes/Productos/Comida china/pollo al limon.png'
    },
    {
        nombre: 'Pollo Kung Pao',
        precio: 200,
        descripcion: 'El resultado de la receta de Pollo Kung Pao que compartimos con vosotros es exquisito, consiguiendo una carne muy jugosa y llena de sabor',
        imagen: '../Imagenes/Productos/Comida china/pollo kung pao.png'
    },
    {
        nombre: 'Rollitos de primavera',
        precio: 180,
        descripcion: 'Solo una parte en concreto, (el estilo cantonés) la han ido actualizando y simplificando al gusto occidental',
        imagen: '../Imagenes/Productos/Comida china/rollitos de primavera.png'
    },
    {
        nombre: 'Costilla agridulce',
        precio: 210,
        descripcion: "'Agridulce' es un sabor característico de Zhejiang Lazhong, que se utiliza a menudo en platos guisados. Las costillas de cerdo agridulces son un plato tradicional representativo de los platos agridulces",
        imagen: '../Imagenes/Productos/Comida china/costilla agridulce.png'
    },
    {
        nombre: 'Panceta especiada',
        precio: 230,
        descripcion: 'El contraste de texturas, crujiente por fuera y jugosa y tierna por dentro, y su exótico sabor la hacen merecedora de un lugar en nuestras cocinas.',
        imagen: '../Imagenes/Productos/Comida china/Panceta especiada.png'
    },
    {
        nombre: 'Ensalada de col',
        precio: 250,
        descripcion: 'Está aderezada con una vinagreta con matices orientales que le sienta como anillo al dedo y que le aporta un sabor espectacular.',
        imagen: '../Imagenes/Productos/Comida china/ensalada de col.png'
    },
    {
        nombre: 'Ternera en salsa',
        precio: 250,
        descripcion: 'La salsa de ostras es un condimento muy utilizado en la cocina asiática, similar a la salsa de pescado, que aporta una gran intensidad de aromas y sabores a multitud de platos, y no solo de pescado',
        imagen: '../Imagenes/Productos/Comida china/ternera.png'
    }

]