import {Inicio} from "./inicio.jsx";
import {Route, Routes} from "react-router-dom";
import {Bebidas, ComidaChina, ComidaMexicana, ComidaRapida, Ensaladas, Paquetes} from "./Categorias/index.js";

export const App = () => {

    return (
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path='/Bebidas' element={ <Bebidas /> }/>
            <Route path='/ComidaChina' element={ <ComidaChina /> }/>
            <Route path='/ComidaMexicana' element={ <ComidaMexicana /> }/>
            <Route path='/ComidaRapida' element={ <ComidaRapida /> }/>
            <Route path='/Ensaladas' element={ <Ensaladas /> }/>
            <Route path='/Paquetes' element={ <Paquetes /> }/>

            <Route path='*' element={ <Inicio /> }/>
        </Routes>
    )
}
