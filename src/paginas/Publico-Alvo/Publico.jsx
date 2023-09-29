import './Publico.css'

import { useState } from "react"
import { List, X } from "@phosphor-icons/react"
import { Link } from 'react-router-dom'

import Logo from './img/Logo.png'
import Exemplo from './img/img-exe.png'

function Publico(){
  const [abrirFechar, setAbrirFechar] = useState(false)

  function handleAbrirFecharMenu() {
      if(abrirFechar) {
          setAbrirFechar(false)
          return
      }

      setAbrirFechar(true)
  }


    return(
        <div className='publico'>
        <header className='Menupb'>
            <div className='logopb'>
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
      </header>

        <main className='contentpb'>
            <div className='textpb'>  
              <p>Proteja sua família com o Smart FireMan - o robô de <br />
              detecção de incêndio que oferece tranquilidade e <br />
              segurança em casa. Detecção avançada de incêndio em <br />
              um dispositivo compacto e fácil de instalar.</p>

                    
              <p>Priorize a segurança dos alunos e colaboradores com o <br />
              Smart FireMan. Tecnologia inteligente de detecção de <br />
              incêndio em um design compacto, adaptável a qualquer <br />
              ambiente educacional.</p>

                    
             <p>Mantenha sua equipe e negócio protegidos com o Smart <br />
              FireMan - o robô de detecção de incêndio que oferece <br />
              uma resposta rápida e eficaz em situações de <br />
              emergência. Segurança garantida em um dispositivo <br />
              compacto e de fácil integração.</p>

                    
              <p>Destaque-se no mercado imobiliário oferecendo o <br />
              Smart FireMan - o diferencial de segurança essencial <br />
              para residências e edifícios. Integre facilmente a <br />
              tecnologia avançada de detecção de incêndio em seus <br />
              projetos.</p>

                   
              <p>Confie na eficiência do Smart FireMan para aprimorar a <br />
              segurança em seus projetos. Detecção abrangente de <br />
              gases, calor, fumaça e chamas em um dispositivo <br />
              compacto, atendendo às exigências de prevenção de <br />
              incêndios.</p>
                
            </div>
          <div className='figurepb'>
            <img src={Exemplo} alt="Logo do Smart FireMan"/>
          </div>
      </main>
    </div>
  )
}

export default Publico