import './Rodape.css'

function Rodape() {
    return (
        <footer className='footer'>
            <p>&copy; {new Date().getFullYear()} Meu Site. </p>
            <img className='logo' src="/imagens/logo.png" alt="Logo" />
            <div className='redes'>
                <img src="/imagens/ig.png" alt="ig" />
                <img src="/imagens/tw.png" alt="tw" />
                <img src="/imagens/fb.png" alt="fb" />
            </div >
        </footer>


    )
}

export default Rodape