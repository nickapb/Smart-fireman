import './Sobre.css'

import { Link } from 'react-router-dom'
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"

import Logo from './img/Logo.png'
import Exemplo from './img/Imagem-exemplo.png'



function Sobre() {
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

        <div className='titulos'>
          <h1>Sobre</h1>
        </div>
      </header>

      <main className='contents'>
        <div className='texts'>
          <p>O projeto consiste em uma simples caixa, que haverá um sensor instalado, <br /> 
          este sensor é programado para detectar gás, fumaça ou até mesmo fogo,<br /> 
          sendo assim eficiente na área da cozinha, onde se ocorre maior parte dos <br /> 
          incidentes envolvendo fogo. Junto ao sensor haverá um buzzer que fará <br /> 
          um barulho para chamar a atenção das pessoas, gerando logo uma atenção <br /> 
          a mais, e se certificar de que não está em perigo, dando melhor sensação <br /> 
          de segurança para as pessoas. Além de conter um sensor que assim que algo <br /> 
          for detectado irá alertar ao usuário e o serviço de emergência</p>
        </div>
        <div className='figures'>
          <img src={Exemplo} alt="Logo do Smart FireMan"/>
        </div>
      </main>
      </div>
    )
  }
  
  export default Sobre