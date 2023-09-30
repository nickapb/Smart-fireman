import './Principal.css'

import { Link } from 'react-router-dom'
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"

import Smart from './img/Smart.png'


function Principal() {
  const [abrirFechar, setAbrirFechar] = useState(false)

  function handleAbrirFecharMenu() {
      if(abrirFechar) {
          setAbrirFechar(false)
          return
      }

      setAbrirFechar(true)
  }

  return (
    <>
    <header >
      
    <div className='menup'>
    <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? 
                <X size={32} /> : <List size={32} />}
            </button>
            </div>

            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                <nav>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/Sobre'}>Sobre</Link>
                    <Link to={'/Publico'}>Público Alvo</Link>
                    <Link to={'/Equipamentos'}>Equipamentos</Link>
                    <Link to={'/Diferencial'}>Diferencial</Link>
                </nav>
            </div>
        </div>

        <div className="menu-desktop">
            <nav>
              <Link to={'/Sobre'}>Sobre</Link>&nbsp;&nbsp;&nbsp;
              <Link to={'/Publico'}>Público Alvo</Link>&nbsp;&nbsp;&nbsp;
              <Link to={'/Diferencial'}>Diferencial</Link>&nbsp;&nbsp;&nbsp;
              <Link to={'/Equipamentos'}>Equipamentos</Link>&nbsp;&nbsp;&nbsp;
            </nav>
        </div>
      
    </div>
</header>
<main className='principal'>  
    <div className='figurep'>
    <img src={Smart} alt="Imagem do Smart FireMan"/>
    </div>

      <div className='textp'>
      <p>Apresentamos o Smart FireMan: um sensor criado como parte de um emocionante projeto escolar! Com nossa tecnologia baseada em Arduino, o Smart FireMan é capaz de detectar gases, calor e fumaça, podendo alertar para o usuário e informando os serviços de emergência quando algo incomum acontecer tornando-se um dispositivo indispensável para a segurança. Nosso design inteligente e compacto o torna ideal para ambientes residenciais, escolares ou empresariais.</p>
      </div>
  </main>

    </>
  )
}

export default Principal