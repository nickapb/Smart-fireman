import './Equipamentos.css'


import Logo from './img/Logo.png'
import Arduino from './img/Arduino.png'
import MQ2 from './img/MQ-2.png'
import KY026 from './img/KY-026.png'
import LCD from './img/LCD.png'
import Blue from './img/Modulo-bluetooth.png'
import Header from '../Header/header/header'



function Equipamentos() {
 
  return (
    <>
     
      <Header/>
      
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
          <h1>Módulo Bluetooth</h1>
          <p>O módulo Bluetooth HC06 funciona por meio de comunicação serial, onde após conexão, envia e recebe dados TTL sem fio, ou seja, não é necessário utilizar nenhum tipo de cabo para fazer a comunicação entre os equipamentos.</p>
        </div>
        <br />
        <div className='blue'>
          <img src={Blue} alt="imagem do modulo bluetooth" />
        </div>
      </div>
   </main>
  </>
  )
}

export default Equipamentos