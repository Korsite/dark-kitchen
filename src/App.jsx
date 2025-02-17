import {Inicio} from "./inicio.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {Bebidas, ComidaChina, ComidaMexicana, ComidaRapida, Ensaladas, Paquetes} from "./Categorias/index.js";

export const App = () => {
    tranquilo serafan, todo fluye
    return (
        <Routes>
            <Route path="/dark-kitchen" element={<Inicio/>}/>
            <Route path='dark-kitchen/Bebidas' element={ <Bebidas /> }/>
            <Route path='dark-kitchen/ComidaChina' element={ <ComidaChina /> }/>
            <Route path='dark-kitchen/ComidaMexicana' element={ <ComidaMexicana /> }/>
            <Route path='dark-kitchen/ComidaRapida' element={ <ComidaRapida /> }/>
            <Route path='dark-kitchen/Ensaladas' element={ <Ensaladas /> }/>
            <Route path='dark-kitchen/Paquetes' element={ <Paquetes /> }/>

            <Route path='*' element={ <Navigate to="/dark-kitchen" /> }/>
        </Routes>
    )
}
