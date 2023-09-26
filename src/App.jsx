import './App.css'
import { Sobre, PublicoAlvo, Diferencial, Equipamentos, Video, Bibliografia } from "react-router-dom"
import Smart from './Principal/img/smartbg.png'


function App() {
  return (
    <>
    <header className='principal' >
      
    <div className='menup'>
       <Sobre to={"./Sobre"}>Sobre</Sobre>
       <PublicoAlvo to={"./Publico-alvo"} >Público Alvo</PublicoAlvo>
       <Diferencial to={"./Diferencial"}>Diferencial</Diferencial>
       <Equipamentos to={"./Equipamentos"}>Equipamentos</Equipamentos>
       <Video to={"./Video"}>Vídeo</Video>
       <Bibliografia to={"./Bibliografia"}>Bibliografia</Bibliografia>
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

export default App