import './Diferencial.css'

import { Link } from 'react-router-dom'
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"

import Logo from './img/Logo.png'
import Exemplo from './img/img-exe.png'



function Diferencial() {
  const [abrirFechar, setAbrirFechar] = useState(false)

  function handleAbrirFecharMenu() {
      if(abrirFechar) {
          setAbrirFechar(false)
          return
      }

      setAbrirFechar(true)
  }

    return (
      <div className='sobre'>
      <header className='Menus'>
        <div className='logos'>
          <img src={Logo} alt="Logo do Smart FireMan"/>
        </div>
        
        <div className='titulos'>
          <h1>Nosso diferencial</h1>
        </div>
        
        <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} /> : <List size={32} />}</button>
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

          <div className="menu-desktop">
            <nav>
              <Link to={'/'}>Home</Link>
              <Link to={'/Sobre'}>Sobre</Link>
              <Link to={'/Publico'}>Público Alvo</Link>
              <Link to={'/Equipamentos'}>Equipamentos</Link>
             <Link to={'/Diferencial'}>Diferencial</Link>
            </nav>
        </div>
      </div>
</header>

      <main className='contents'>
        <div className='texts'>
          <p>O diferencial do nosso projeto Smart FireMan em relação aos demais é a sua capacidade de detectar não apenas gases, calor e fumaça, mas também chamas. Isso significa que o Smart FireMan oferece uma camada adicional de segurança, identificando de forma precisa e imediata a presença de chamas, permitindo uma resposta rápida e eficaz. Além disso, o design compacto do Smart FireMan é altamente versátil, podendo ser facilmente instalado em paredes ou qualquer outro local, adaptando-se perfeitamente às necessidades de cada ambiente. Combinando tecnologia avançada e praticidade, o Smart FireMan é a escolha ideal para uma proteção completa contra incêndios.</p>
        </div>
        <div className='figures'>
          <img src={Exemplo} alt="exemplo de imagem"/>
        </div>
      </main>
      </div>
    )
  }
  
  export default Diferencial