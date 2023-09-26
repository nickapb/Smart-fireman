import './App.css'

import Logo from './Img/Logo.png'
import LMenu from './Img/list.png'
import Arduino from './img/Arduino.png'
import MQ2 from './img/MQ-2.png'
import GSM from './img/GSM.png'
import KY026 from './img/KY-026.png'
import LCD from './img/LCD.png'
import LM25963A from './img/LM2596-'



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
          <img src={LMenu} alt="Logo do Smart FireMan"/>
        </div>
      </header>

      <div className='figures'>
          <img src={Arduino} alt="Logo do Smart FireMan"/>
      </div>
      <main className='contents'>
        <div className='texts'>
          <p>O diferencial do nosso projeto Smart FireMan em relação aos demais é a sua capacidade de detectar não apenas gases, calor e fumaça, mas também chamas. Isso significa que o Smart FireMan oferece uma camada adicional de segurança, identificando de forma precisa e imediata a presença de chamas, permitindo uma resposta rápida e eficaz. Além disso, o design compacto do Smart FireMan é altamente versátil, podendo ser facilmente instalado em paredes ou qualquer outro local, adaptando-se perfeitamente às necessidades de cada ambiente. Combinando tecnologia avançada e praticidade, o Smart FireMan é a escolha ideal para uma proteção completa contra incêndios.</p>
        </div>

      </main>
      </div>
    )
  }
  
  export default Equipamento