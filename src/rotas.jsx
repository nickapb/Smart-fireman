import { Routes, Route } from 'react-router-dom'

import Sobre from './paginas/Sobre/Sobre'
import Publico from './paginas/Publico-Alvo/Publico'
import Equipamentos from './paginas/Equipamentos/Equipamentos'
import Diferencial from './paginas/Diferencial/Diferencial'
import Principal from './paginas/Principal/Principal'
import Bibliografia from './paginas/Bibliografia/Bibliografia'

function Rotas() {
    return (
        <Routes>
            <Route path='/' element={<Principal />} />
            <Route path='/Sobre' element={<Sobre />} />
            <Route path='/Publico' element={<Publico />} />
            <Route path='/Equipamentos' element={<Equipamentos />} />
            <Route path='/Diferencial' element={<Diferencial />} />
            <Route path='/Bibliografia' element={<Bibliografia />} />
        </Routes>
    )
}

export default Rotas