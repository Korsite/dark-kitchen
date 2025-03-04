import {useNavigate} from "react-router-dom";

export const TopComponent = () => {

    const navigate = useNavigate();
    return (
        <ul className="opciones">
            <li className="btn-menu">
                <label htmlFor="btn-menu" className="icon-menu">
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </label>
            </li>

            <li className="nombre">
                <button
                    onClick={() => navigate('/')}
                    style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0}}
                >
                    Cocina{' '}
                    <strong>Fantasma</strong>
                    <img src="../Imagenes/Inicio/cubiertos.png" alt="" width="50"/>
                </button>
            </li>

            <li className="ubicacion">
                <button
                    onClick={() => { /* Lógica de ubicación */
                    }}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: 'inherit' // Mantiene el tamaño de texto consistente
                    }}
                >
                    Ubicacion
                </button>
            </li>

            <li className="buscador">
                <input type="text" name="hola" placeholder="Que desea comer?"/>

                <span className="material-symbols-outlined">
                    search
                </span>
            </li>

            <li className="carrito">
                <button
                    onClick={() => {
                        // example
                    }}
                    onKeyDown={() => {
                        // Lógica para abrir el carrito
                    }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                    {' '}0 en el carro
                </button>
            </li>


            <li className="ruedita">
                <button
                    onClick={() => { /* Lógica para abrir opciones} */
                    }}
                    style={{background: 'none', border: 'none', cursor: 'pointer', padding: 0}}
                >
                    <span className="material-symbols-outlined">
                        settings
                    </span>
                    <p>Opciones</p>
                </button>
            </li>
        </ul>
    )
}