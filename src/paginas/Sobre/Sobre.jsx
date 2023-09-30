import './Sobre.css'

import { Link } from 'react-router-dom'
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"

import Logo from './img/Logo.png'
import Exemplo from './Img/Imagem-exemplo.png'


function Sobre() {
  const [abrirFechar, setAbrirFechar] = useState(false)

  function handleAbrirFecharMenu() {
    if (abrirFechar) {
      setAbrirFechar(false)
      return
    }

    setAbrirFechar(true)
  }

  return (
    <>
      <header >
        <div className='menus'>
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
                <Link to={'/Diferencial'}>Diferencial</Link>
                <Link to={'/Equipamentos'}>Equipamentos</Link>
              </nav>
            </div>
          </div>

          <div className="menu-desktop">
            <nav>
              <Link to={'/'}>Home</Link>&nbsp;&nbsp;&nbsp;
              <Link to={'/Sobre'}>Sobre</Link>&nbsp;&nbsp;&nbsp;
              <Link to={'/Publico'}>Público Alvo</Link>&nbsp;&nbsp;&nbsp;
              <Link to={'/Diferencial'}>Diferencial</Link>&nbsp;&nbsp;&nbsp;
              <Link to={'/Equipamentos'}>Equipamentos</Link>&nbsp;&nbsp;&nbsp;
            </nav>
          </div>
        </div>
      </header>

      <main className='sobre'>
        <div className='titulos'>
          <img src={Logo} alt="Logo do Smart FireMan" />
          <br />
          <h1>Sobre</h1>
          <br />
        </div>
        <div className='texts'>
          <p>O projeto consiste em uma simples caixa, que haverá um sensor instalado,
            este sensor é programado para detectar gás, fumaça ou até mesmo fogo,
            sendo assim eficiente na área da cozinha, onde se ocorre maior parte dos
            incidentes envolvendo fogo. Junto ao sensor haverá um buzzer que fará
            um barulho para chamar a atenção das pessoas, gerando logo uma atenção
            a mais, e se certificar de que não está em perigo, dando melhor sensação
            de segurança para as pessoas. Além de conter um sensor que assim que algo
            for detectado irá alertar ao usuário e o serviço de emergência</p>
        </div>
        <br />
        <div className='figures'>
          <img src={Exemplo} alt="exemplo de imagem" />
        </div>
      </main>

    </>
  )
}

export default Sobre