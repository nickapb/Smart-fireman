import './Bibliografia.css'
import Header from '../Header/header/header'

function Bibliografia(){
    return(
        <>

        <Header/>

        <main className='bibli'>
            <h1>Fontes</h1>
            <h2>Pesquisas</h2>
            <a href="https://lobodarobotica.com/blog/detector-de-fumaca-com-sensor-mq-2-e-arduino/" className='link'>Lobo da robótica</a>
            <br />
            <a href="https://capsistema.com.br/index.php/2020/11/24/guia-para-sensor-de-gas-fumaca-mq-2-com-arduino/" className='link'>Capsistema</a>
            
            <h2>Vídeo</h2>
            <a href="https://www.youtube.com/watch?reload=9&v=11StHRUIykk" className='link'>Youtube: Sensor de gás inflamável</a>
            <br />
            <a href="https://www.youtube.com/watch?v=eN7b8ksgadY" className='link'>Youtube: Como criar um detector</a>
        </main>
        </>
    )
}

export default Bibliografia
