import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import { auth, firebase } from '../services/firebase'

import '../styles/auth.scss'
import { Button } from '../components/Button'

import { useHistory } from 'react-router-dom'

export function Home (){
    const history = useHistory()

    function handleCreateRoom(){
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider).then(result => {
            console.log(result)
        })

        //history.push('/rooms/new')
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
                    <button className="create-room" onClick={handleCreateRoom}>
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