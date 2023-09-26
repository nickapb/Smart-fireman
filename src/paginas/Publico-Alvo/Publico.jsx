import './App.css'

import Logo from './Img/Logo.png'
import Exemplo from './Img/img-exe.png'
import LMenu from './Img/list.png'

function Publico(){
    return(
        <div className='publico'>
        <header className='Menupb'>
            <div className='logopb'>
              <img src={Logo} alt="Logo do Smart FireMan"/>
            </div>
            <div className='menupb'>
              <img src={LMenu} alt="Logo do Smart FireMan"/>
            </div>
            <div className='titulopb'>
              <h1>Público Alvo</h1>
            </div>
        </header>

        <main className='contentpb'>
            <div className='textpb'>
                <ul>
                    <li>Famílias preocupadas com a segurança: </li>
                    <p>Proteja sua família com o Smart FireMan - o robô de <br />
                    detecção de incêndio que oferece tranquilidade e <br />
                    segurança em casa. Detecção avançada de incêndio em <br />
                    um dispositivo compacto e fácil de instalar.</p>

                    <li>Escolas e instituições educacionais: </li>
                    <p>Priorize a segurança dos alunos e colaboradores com o <br />
                    Smart FireMan. Tecnologia inteligente de detecção de <br />
                    incêndio em um design compacto, adaptável a qualquer <br />
                    ambiente educacional.</p>

                    <li>Empresas e escritórios: </li>
                    <p>Mantenha sua equipe e negócio protegidos com o Smart <br />
                    FireMan - o robô de detecção de incêndio que oferece <br />
                    uma resposta rápida e eficaz em situações de <br />
                    emergência. Segurança garantida em um dispositivo <br />
                    compacto e de fácil integração.</p>

                    <li>Construtoras e empreendimentos imobiliários: </li>
                    <p>Destaque-se no mercado imobiliário oferecendo o <br />
                    Smart FireMan - o diferencial de segurança essencial <br />
                    para residências e edifícios. Integre facilmente a <br />
                    tecnologia avançada de detecção de incêndio em seus <br />
                    projetos.</p>

                    <li>Engenheiros e profissionais de segurança: </li>
                    <p>Confie na eficiência do Smart FireMan para aprimorar a <br />
                    segurança em seus projetos. Detecção abrangente de <br />
                    gases, calor, fumaça e chamas em um dispositivo <br />
                    compacto, atendendo às exigências de prevenção de <br />
                    incêndios.</p>
                </ul>
            </div>
            <div className='figurepb'>
              <img src={Exemplo} alt="Logo do Smart FireMan"/>
            </div>
        </main>
        </div>
    )
}

export default Publico