import './App.css'

import Logo from './Img/Logo.png'
import LMenu from './Img/list.png'
import Arduino from './img/Arduino.png'
import MQ2 from './img/MQ-2.png'
import GSM from './img/GSM.png'
import KY026 from './img/KY-026.png'
import LCD from './img/LCD.png'
import LM25963A from './img/LM2596-3A.png'
import Bateria from './img/Bateria-externa.png'


function Equipamento() {
    return (
      <div className='sobre'>
      <header className='Menus'>
        <div className='logos'>
          <img src={Logo} alt="Logo do Smart FireMan"/>
        </div>
        <div className='titulos'>
          <h1>Equipamentos</h1>
        </div>
        <div className='menus'>
          <img src={LMenu} alt="Logo do menu"/>
        </div>
      </header>

      <div className='figures'>
          <img src={Arduino} alt="Logo da placa de arduino uno"/>
      </div>
      <main className='contents'>
        <div className=''>
          <img src={Arduino} alt="imagem da placa de arduino uno" />
        </div>
        <div className='texts'>
          <p>O Arduino serve para facilitar o aprendizado de programação, ensinando as pessoas a desenvolverem projetos de eletrônica e de robótica, automatizar escritório, criar um novo brinquedo ou jogos, etc. A lista de possibilidades é enorme.</p>
        </div>

        <div className=''>
          <img src={MQ2} alt="imagem do MQ-2" />
        </div>
        <div className='texts'>
          <p>Os sensores MQ são uma série de sensores de gás que detectam a presença de gases específicos no ar. Eles operam usando um princípio de detecção de condutividade que é influenciado pela presença de diferentes gases.</p>
        </div>

        <div className=''>
          <img src={LCD} alt="imagem do LCD" />
        </div>
        <div className='texts'>
          <p>Os displays LCD são capazes de exibir uma grande variedade de informações, desde simples números e letras até gráficos complexos e imagens de alta resolução. Eles são amplamente utilizados em dispositivos eletrônicos, como smartphones, tablets, computadores, TVs e outros equipamentos.</p>
        </div>

        <div className=''>
          <img src={KY026} alt="imagem do KY026" />
        </div>
        <div className='texts'>
          <p>A partir da detecção feita pelo sensor, o microcontrolador que estiver ligado ao módulo será notificado e poderá tomar uma ou várias ações que o usuário determinar. Este Sensor Detector de Fogo/Chama Infravermelho pode detectar o espectro de chama/fogo/calor.</p>
        </div>

        <div className=''>
          <img src={GSM} alt="imagem do GSM" />
        </div>
        <div className='texts'>
          <p>É usado para ter acesso as redes operacionais de celular por todo o Brasil. Basta inserir um cartão SIM Card / chip para ter acesso as funcionalidades do produto.</p>
        </div>

        <div className=''>
          <img src={LM25963A} alt="imagem do LM25963A" />
        </div>
        <div className='texts'>
          <p>Trata-se de um módulo regulador de tensão que aceita tensões de 4,5 a 28 V com saída variando de 0,8 a 20 V</p>
        </div>

        <div className=''>
          <img src={Bateria} alt="imagem da bateria" />
        </div>
        <div className='texts'>
          <p>As baterias 9V proporcionam energia confiável aos aparelhos do dia a dia, como brinquedos, controles remotos, consoles de jogos portáteis, fechaduras eletrônicas, lanternas, etc. Além disso, a tecnologia de Duracell preserva a energia das pilhas que ainda não foram usadas, por até 5 anos.</p>
        </div>

      </main>
      </div>
    )
  }
  
  export default Equipamento