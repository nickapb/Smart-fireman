import './header.css'

import { Link } from 'react-router-dom'
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"



function Header() {
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
        <div className='menue'>
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
                <Link to={'/Bibliografia'}>Bibliografia</Link>
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
              <Link to={'/Bibliografia'}>Bibliografia</Link>&nbsp;&nbsp;&nbsp;
            </nav>
          </div>
        </div>
      </header>
      
  </>
  )
}

export default Header