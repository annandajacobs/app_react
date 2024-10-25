import './Rodape.css'

function Rodape() {
    return (
        <footer className='rodape'>
            <p>&copy; {new Date().getFullYear()} Meu Site. Todos os direitos reservados.</p>
            <img id='logo' src="/imagens/logo.png" alt="Logo" />
            <div className='redes'>
                <img src="/imagens/ig.png" alt="ig" />
                <img src="/imagens/tw.png" alt="tw" />
                <img src="/imagens/fb.png" alt="fb" />
            </div >
        </footer>


    )
}

export default Rodape