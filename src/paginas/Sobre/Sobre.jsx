import './Sobre.css'


import Logo from './Img/Logo.png'
import Exemplo from './Img/Imagem-exemplo.png'
import Header from '../Header/header/header'


function Sobre() {
  

  return (
    <>
     <Header/>

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