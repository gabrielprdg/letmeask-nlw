
import { useState } from 'react';
import { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { auth, firebase } from './services/firebase';

export const AuthContext = createContext({} as AuthContextI)

interface User {
  id: string
  name: string
  avatar: string
}

interface AuthContextI {
  user: User | undefined,
  signInWithGoogle: () => void
}

function App() {

  const [user, setUser] = useState<User>()

  async function signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)
    if(result.user){
      const { displayName, photoURL, uid } = result.user

      if(!displayName || !photoURL){
        throw new Error('Missing Information from google account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }

  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle}}>
        <Route path="/" exact component={Home}/>
        <Route path="/rooms/new" component={NewRoom}/>
      </ AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
