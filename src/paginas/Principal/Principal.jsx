import './Principal.css'

import Smart from './img/Smart.png'


function Principal() {
  return (
    <>
    <header className='principal' >
      
    <div className='menup'>
       
    </div>
  </header>

  <div className='barra1'></div>
  <div className='barra2'></div>
  <div className='barra3'></div>

  <main className='principal'>  
    <div className='figurep'>
    <img src={Smart} alt="Imagem do Smart FireMan"/>
    </div>

      <div className='textp'>
      <p>Apresentamos o Smart FireMan: um sensor criado como parte de um emocionante projeto escolar! Com nossa tecnologia baseada em Arduino, o Smart FireMan é capaz de detectar gases, calor e fumaça, podendo alertar para o usuário e informando os serviços de emergência quando algo incomum acontecer tornando-se um dispositivo indispensável para a segurança. Nosso design inteligente e compacto o torna ideal para ambientes residenciais, escolares ou empresariais.</p>
      </div>
  </main>

    </>
  )
}

export default Principal