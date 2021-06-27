import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import googleIconImg from '../assets/images/google-icon.svg'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button'
import '../styles/auth.scss'

export function Home (){
    const history = useHistory()
    const { user, signInWithGoogle } = useContext(AuthContext)

    async function handleCreateRoom(){
        if(!user) {
            await signInWithGoogle()
        }
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
                    <button onClick={handleCreateRoom} className="create-room">
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