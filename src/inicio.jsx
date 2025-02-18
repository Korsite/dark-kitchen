import {useNavigate} from "react-router-dom";
import './Estilo css/Inicio.css'
import {SideBar} from "./components/SideBar.jsx";
import {TopComponent} from "./components/TopComponent.jsx";

export const Inicio = () => {
    const navigate = useNavigate();
    return (
        <>
            <body>

            <div className="main">
                <TopComponent />

                <input type="checkbox" id="btn-menu"/>

                <SideBar />
            </div>


            <div className="main2">
                <div className="categorias">
                    {
                        categorias.map((categoria, index) => (
                            <div
                                key={categoria.nombre}
                                onClick={() => navigate(`${categoria.nombreDelComponente}`)}
                                style={{cursor: 'pointer'}}
                            >
                                <img src={`/Imagenes/Inicio/Categorias/${categoria.nombreDeLaImagen}`}
                                     alt={categoria.nombre} width="70"/>
                                <span className={`cat${index + 1}`}>{categoria.nombre}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="main3">
                <div className="contenido">
                    <div className="contenido1">
                        <h2>Quienes somos?</h2>
                        Le damos una gran importancia a las necesidades que puede tener el público en cuestiones de
                        abastecerse de alimentos o la necesidad que tenga en algún evento que se esté llevando a cabo
                        por la noche.
                        La base principal que tenemos es el servicio y variedad de productos que le proporcionamos a
                        nuestros clientes, por eso tratamos de ofrecer los mejores servicios y hacerte llegar tu pedido
                        seguro hasta tu hogar, la pregunta no es quienes somos?, permitanos acompanarlo en sus noches
                        traslargas, y, le aseguramos que la preguntara se respondera sola!
                        Somos la mejor opcion que usted puede encontrar por las noches <br/>
                        Para un pedido seguro, Cocina <strong>Fantasma</strong> hasta la puerta de tu casa!
                    </div>

                    <div className="contenido2">
                        <h2>Tiempo nocturno</h2>
                        Nuestros servicios estan abiertos al publico a altas horas de la noche! (10pm - 7am) <br/>
                        No te dejaremos solo ante esas largas y pesadas noches que a veces tiene uno que estar
                        despierto, aqui estaremos esperando listos para recibir tu orden
                    </div>

                    <div className="slider">
                        <ul>
                            {
                                [1,2,3,4].map((index) => (
                                    <li key={index}>
                                        <img src={`/Imagenes/Inicio/Slidder/imagen-slidder${index}.jpeg`} alt=""/>
                                    </li>
                                ))
                            }
                        </ul>
                        <h2>No te ha pasado que...?</h2>
                        Se te hace de noche, todavia no has terminado el proyecto, estas a las prisas, lo menos que
                        quieres pensar es en distraerte o perder el tiempo, en eso se escucha un rugido, no, no estabas
                        alucinando por el sueno, era tu estomago implorando por tener algo dentro <br/><br/>

                        A lo mejor sabes cocinar muy bien y rapido, pero quien sabe, quiza la persona que vive contigo
                        no lo agredara la idea de escuchar ruido por la cocina <br/><br/>

                        A lo mejor y estas de pereza, quien sabe?, una vez al anio no se danio <br/>
                        En Cocina Fantasma somos tu mejor opcion, estaremos orgullosos de poder acompaniarte en las
                        buenas y en las malas!
                    </div>
                </div>
            </div>

            <div className="pie">
                <div>
                    Cocina
                    <strong>
                        Fantasma
                    </strong>
                </div>

                <div className="ayuda">
                    Obten ayuda
                </div>

                <div className="acerca">
                    Mas acerca de nosotros
                </div>

                <div className="sociales">Redes sociales</div>

                <div>Politica de privacidad</div>
                <div>Terminos</div>
                <div>Tarifas</div>
                <div>No vender informacion</div>
                <div className="empresa">©2022 Empresa Fantasma compania</div>
            </div>


            </body>

        </>
    )
}

const categorias = [
    {
        nombre: 'Comida mexicana',
        nombreDelComponente: 'ComidaMexicana',
        nombreDelArchivo: 'Comida mexicana.html',
        nombreDeLaImagen: 'ComidaMexicana.png',
    },
    {
        nombre: 'Comida rapida',
        nombreDelComponente: 'ComidaRapida',
        nombreDelArchivo: 'Comida rapida.html',
        nombreDeLaImagen: 'comida rapida.png',
    },
    {
        nombre: 'Comida china',
        nombreDelComponente: 'ComidaChina',
        nombreDelArchivo: 'Comida china.html',
        nombreDeLaImagen: 'comida china.png',
    },
    {
        nombre: 'Ensaladas',
        nombreDelComponente: 'Ensaladas',
        nombreDelArchivo: 'Ensaladas.html',
        nombreDeLaImagen: 'ensaladas.png',
    },
    {
        nombre: 'Paquetes',
        nombreDelComponente: 'Paquetes',
        nombreDelArchivo: 'Paquetes.html',
        nombreDeLaImagen: 'paquetes.png',
    },
    {
        nombre: 'Bebidas',
        nombreDelComponente: 'Bebidas',
        nombreDelArchivo: 'Bebidas.jsx',
        nombreDeLaImagen: 'bebidas.png',
    }
]
