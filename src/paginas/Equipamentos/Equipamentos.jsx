import './Equipamentos.css'

import { Link } from 'react-router-dom'
import { useState } from "react"
import { List, X } from "@phosphor-icons/react"

import Logo from './img/Logo.png'
import Arduino from './img/Arduino.png'
import MQ2 from './img/MQ-2.png'
import GSM from './img/GSM.png'
import KY026 from './img/KY-026.png'
import LCD from './img/LCD.png'
import LM25963A from './img/LM2596-3A.png'
import Bateria from './img/Bateria-externa.png'


function Equipamentos() {
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
      
      <main className='equip'>
        <div className='tituloe'>
          <img src={Logo} alt="Logo do Smart FireMan" />
          <br />
          <h1>Equipamentos</h1>
          <br />
        </div>
        <div className='contete'>
        <div className='texte'>
          <h1>Arduíno</h1>
          <p>O Arduino serve para facilitar o aprendizado de programação, ensinando as pessoas a desenvolverem projetos de eletrônica e de robótica, automatizar escritório, criar um novo brinquedo ou jogos, etc. A lista de possibilidades é enorme.</p>
        </div>
        <br />
        <div className='ard'>
          <img src={Arduino} alt="imagem da placa de arduino uno" />
        </div>

        <div className='texte'>
          <h1>MQ-2</h1>
          <p>Os sensores MQ são uma série de sensores de gás que detectam a presença de gases específicos no ar. Eles operam usando um princípio de detecção de condutividade que é influenciado pela presença de diferentes gases.</p>
        </div>
        <br />
        <div className='mq'>
          <img src={MQ2} alt="imagem do MQ-2" />
        </div>

        <div className='texte'>
          <h1>Display LCD</h1>
          <p>Os displays LCD são capazes de exibir uma grande variedade de informações, desde simples números e letras até gráficos complexos e imagens de alta resolução. Eles são amplamente utilizados em dispositivos eletrônicos, como smartphones, tablets, computadores, TVs e outros equipamentos.</p>
        </div>
        <br />
        <div className='lcd'>
          <img src={LCD} alt="imagem do LCD" />
        </div>

        <div className='texte'>
          <h1>Sensor de chama KY-026</h1>
          <p>A partir da detecção feita pelo sensor, o microcontrolador que estiver ligado ao módulo será notificado e poderá tomar uma ou várias ações que o usuário determinar. Este Sensor Detector de Fogo/Chama Infravermelho pode detectar o espectro de chama/fogo/calor.</p>
        </div>
        <br />
        <div className='ky'>
          <img src={KY026} alt="imagem do KY026" />
        </div>

        <div className='texte'>
          <h1>GSM GPRS SIM800L</h1>
          <p>É usado para ter acesso as redes operacionais de celular por todo o Brasil. Basta inserir um cartão SIM Card / chip para ter acesso as funcionalidades do produto.</p>
        </div>
        <br />
        <div className='gsm'>
          <img src={GSM} alt="imagem do gsm" />
        </div>

        <div className='texte'>
          <h1>LM2596 3A</h1>
          <p>Trata-se de um módulo regulador de tensão que aceita tensões de 4,5 a 28 V com saída variando de 0,8 a 20 V</p>
        </div>
        <br />
        <div className='lm'>
          <img src={LM25963A} alt="imagem do LM25963A" />
        </div>

        <div className='texte'>
          <h1>Energia externa</h1>
          <p>As baterias 9V proporcionam energia confiável aos aparelhos do dia a dia, como brinquedos, controles remotos, consoles de jogos portáteis, fechaduras eletrônicas, lanternas, etc. Além disso, a tecnologia de Duracell preserva a energia das pilhas que ainda não foram usadas, por até 5 anos.</p>
        </div>
        <br />
        <div className='bateria'>
          <img src={Bateria} alt="imagem da bateria" />
        </div>
      </div>
   </main>
  </>
  )
}

export default Equipamentos