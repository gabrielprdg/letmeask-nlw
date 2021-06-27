import firebase from "firebase"
import { useState } from "react"
import { createContext, ReactNode, useEffect } from "react"
import { auth } from "../services/firebase"

interface User {
    id: string
    name: string
    avatar: string
}
  
interface AuthContextI {
    user: User | undefined,
    signInWithGoogle: () => Promise<void>
}

interface AuthContextProps {
    children: ReactNode
}
  
export const AuthContext = createContext({} as AuthContextI)

export function AuthContextProvider(props: AuthContextProps){

	const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        const { displayName, photoURL, uid } = user

        if(!displayName || !photoURL){
          throw new Error('Missing Information from google account')
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    })

    return() => {
      unsubscribe()
    }
  }, [])

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
      <AuthContext.Provider value={{ user, signInWithGoogle}}>
          {props.children}
      </AuthContext.Provider>
    )
}