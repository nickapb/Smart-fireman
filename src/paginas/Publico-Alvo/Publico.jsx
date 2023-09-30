import './Publico.css'

import { useState } from "react"
import { List, X } from "@phosphor-icons/react"
import { Link } from 'react-router-dom'

import Logo from './img/Logo.png'
import Exemplo from './img/img-exe.png'

function Publico() {
  const [abrirFechar, setAbrirFechar] = useState(false)

  function handleAbrirFecharMenu() {
    if (abrirFechar) {
      setAbrirFechar(false)
      return
    }

    setAbrirFechar(true)
  }


  return (
    <div className='publico'>
      <header className='menup'>
        <div className="menu-mobile">
          <div className="botao-menu">
            <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} /> : <List size={32} />}</button>
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
            <Link to={'/'}>Home</Link> &nbsp;&nbsp;&nbsp;
            <Link to={'/Sobre'}>Sobre</Link>&nbsp;&nbsp;&nbsp;
            <Link to={'/Publico'}>Público Alvo</Link>&nbsp;&nbsp;&nbsp;
            <Link to={'/Diferencial'}>Diferencial</Link>&nbsp;&nbsp;&nbsp;
            <Link to={'/Equipamentos'}>Equipamentos</Link>&nbsp;&nbsp;&nbsp;
          </nav>
        </div>

      </header>

      <main className='contentpa'>
        <div className='titulopa'>
          <img src={Logo} alt="Logo do Smart FireMan" />
          <br />
          <h1>Público Alvo</h1>
          <br />
        </div>

        <div className='textpa'>
          <li>Famílias preocupadas com a segurança: </li>
          <p>Proteja sua família com o Smart FireMan - o robô de
            detecção de incêndio que oferece tranquilidade e
            segurança em casa. Detecção avançada de incêndio em
            um dispositivo compacto e fácil de instalar.</p>
          <br />
          <li>Escolas e instituições educacionais:</li>
          <p>Priorize a segurança dos alunos e colaboradores com o
            Smart FireMan. Tecnologia inteligente de detecção de
            incêndio em um design compacto, adaptável a qualquer
            ambiente educacional.</p>
          <br />
          <li>Empresas e escritórios:</li>
          <p>Mantenha sua equipe e negócio protegidos com o Smart
            FireMan - o robô de detecção de incêndio que oferece
            uma resposta rápida e eficaz em situações de
            emergência. Segurança garantida em um dispositivo
            compacto e de fácil integração.</p>
          <br />

          <div className='figurepa'>
            <img src={Exemplo} alt="Logo do Smart FireMan" />
          </div>

          <div className='pt2'>
            <li>Construtoras e empreendimentos imobiliários:</li>
            <p>Destaque-se no mercado imobiliário oferecendo o
              Smart FireMan - o diferencial de segurança essencial
              para residências e edifícios. Integre facilmente a
              tecnologia avançada de detecção de incêndio em seus
              projetos.</p>
            <br />
            <li>Engenheiros e profissionais de segurança:</li>
            <p>Confie na eficiência do Smart FireMan para aprimorar a
              segurança em seus projetos. Detecção abrangente de
              gases, calor, fumaça e chamas em um dispositivo
              compacto, atendendo às exigências de prevenção de
              incêndios.</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Publico