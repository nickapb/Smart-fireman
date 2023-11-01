import './Publico.css'

import Logo from './img/Logo.png'
import Exemplo from './img/img-exe.png'
import Header from '../Header/header/header'

function Publico() {
  

  return (
    <>
    <Header/>

      <main className='contentpa'>
        <div className='titulopa'>
          <img src={Logo} alt="Logo do Smart FireMan" />
          <br />
          <h1>Público Alvo</h1>
          <br />
        </div>

        <div className='figurepa'>
            <img src={Exemplo} alt="Logo do Smart FireMan" />
        </div>

        <div className='textpa'>
          <li>Famílias preocupadas com a segurança: </li>
          <p>Proteja sua família com o Smart FireMan - o robô de
            detecção de incêndio que oferece tranquilidade e
            segurança em casa. Detecção avançada de incêndio em
            um dispositivo compacto e fácil de instalar.</p>
          <br />
          <li>Escolas e instituições educacionais:</li>
          <p>Priorize a segurança dos alunos e colaboradores com o
            Smart FireMan. Tecnologia inteligente de detecção de
            incêndio em um design compacto, adaptável a qualquer
            ambiente educacional.</p>
          <br />
          <li>Empresas e escritórios:</li>
          <p>Mantenha sua equipe e negócio protegidos com o Smart
            FireMan - o robô de detecção de incêndio que oferece
            uma resposta rápida e eficaz em situações de
            emergência. Segurança garantida em um dispositivo
            compacto e de fácil integração.</p>
          <br />
            <li>Construtoras e empreendimentos imobiliários:</li>
            <p>Destaque-se no mercado imobiliário oferecendo o
              Smart FireMan - o diferencial de segurança essencial
              para residências e edifícios. Integre facilmente a
              tecnologia avançada de detecção de incêndio em seus
              projetos.</p>
            <br />
            <li>Engenheiros e profissionais de segurança:</li>
            <p>Confie na eficiência do Smart FireMan para aprimorar a
              segurança em seus projetos. Detecção abrangente de
              gases, calor, fumaça e chamas em um dispositivo
              compacto, atendendo às exigências de prevenção de
              incêndios.</p>
          </div>
      </main>
      </>
  )
}

export default Publico