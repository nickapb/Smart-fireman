

import Header from '../Header/header/header'
import Logo from './img/Logo.png'
import Exemplo from './img/img-exe.png'

function Diferencial() {
  

  return (
    <>
    <Header/>

      <main className='contentd'>
        <div className='titulod'>
          <img src={Logo} alt="Logo do Smart FireMan" />
          <br />
          <h1>Nosso Diferencial</h1>
          <br />
        </div>

        <div className='textd'>
          <p>O diferencial do nosso projeto Smart FireMan em relação aos demais é a sua capacidade de detectar não apenas gases, calor e fumaça, mas também chamas. Isso significa que o Smart FireMan oferece uma camada adicional de segurança, identificando de forma precisa e imediata a presença de chamas, permitindo uma resposta rápida e eficaz. Além disso, o design compacto do Smart FireMan é altamente versátil, podendo ser facilmente instalado em paredes ou qualquer outro local, adaptando-se perfeitamente às necessidades de cada ambiente. Combinando tecnologia avançada e praticidade, o Smart FireMan é a escolha ideal para uma proteção completa contra incêndios.</p>

          <div className='figurepa'>
            <img src={Exemplo} alt="Logo do Smart FireMan" />
          </div>
          </div>
      </main>
      </>
  )
}

export default Diferencial