import './App.css'

import Logo from './Img/Logo.png'
import Exemplo from './Img/Imagem-exemplo.png'
import LMenu from './Img/list.png'



function Sobre() {
    return (
      <div className='sobre'>
      <header className='Menus'>
        <div className='logos'>
          <img src={Logo} alt="Logo do Smart FireMan"/>
        </div>
        <div className='titulos'>
          <h1>Sobre</h1>
        </div>
        <div className='menus'>
          <img src={LMenu} alt="Logo do Smart FireMan"/>
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