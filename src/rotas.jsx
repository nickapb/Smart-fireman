import { Routes, Route } from 'react-router-dom'

import Bibliografia from "./paginas/Bibliografia/Bibliografia.jsx"
import Sobre from "./paginas/Sobre/Sobre.jsx"
import Publico from "./paginas/Publico-Alvo/Publico.jsx"
import Equipamentos from "./paginas/Equipamentos/Equipamentos.jsx"
import Diferencial from "./paginas/Nosso-Diferencial/Diferencial.jsx"
import Principal from "./paginas/Principal/Principal.jsx"




function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Principal />} />
            <Route path='/Bibliografia' element={<Bibliografia />} />
            <Route path='/Sobre' element={<Sobre />} />
            <Route path='/Publico' element={<Publico />} />
            <Route path='/Equipamentos' element={<Equipamentos />} />
            <Route path='/Diferencial' element={<Diferencial />} />
        </Routes>
    )
}

export default Rotas