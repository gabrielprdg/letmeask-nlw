import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../styles/auth.scss'
import { Button } from '../components/Button'

import { useHistory } from 'react-router-dom'

export function Home (){
    const history = useHistory()

    function navigationToNewRoom(){
        history.push('/rooms/new')
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustracao QeA" />
                <strong>Crie salas Q&amp;A  ao-vivo</strong>
                <p>Tire as duvidas de sua adiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LogoImg" />
                    <button className="create-room" onClick={navigationToNewRoom}>
                        <img src={googleIconImg} alt="GoogleIcon" />
                        Crie sua sala com o google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}