import './App.css'

import Logo from './Img/Logo.png'
import Exemplo from './Img/img-exe.png'
import LMenu from './Img/list.png'



function Diferencial() {
    return (
      <div className='sobre'>
      <header className='Menus'>
        <div className='logos'>
          <img src={Logo} alt="Logo do Smart FireMan"/>
        </div>
        <div className='titulos'>
          <h1>Nosso diferencial</h1>
        </div>
        <div className='menus'>
          <img src={LMenu} alt="Logo de menu"/>
        </div>
      </header>

      <main className='contents'>
        <div className='texts'>
          <p>O diferencial do nosso projeto Smart FireMan em relação aos demais é a sua capacidade de detectar não apenas gases, calor e fumaça, mas também chamas. Isso significa que o Smart FireMan oferece uma camada adicional de segurança, identificando de forma precisa e imediata a presença de chamas, permitindo uma resposta rápida e eficaz. Além disso, o design compacto do Smart FireMan é altamente versátil, podendo ser facilmente instalado em paredes ou qualquer outro local, adaptando-se perfeitamente às necessidades de cada ambiente. Combinando tecnologia avançada e praticidade, o Smart FireMan é a escolha ideal para uma proteção completa contra incêndios.</p>
        </div>
        <div className='figures'>
          <img src={Exemplo} alt="exemplo de imagem"/>
        </div>
      </main>
      </div>
    )
  }
  
  export default Diferencial