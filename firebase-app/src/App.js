import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged,
  signOut} from 'firebase/auth'
import { auth } from "./firebase";
import {useRef, useState} from 'react'

const provider = new GoogleAuthProvider();

function App() {
  const email = useRef()
  const password = useRef()

  const[data, setData] = useState('')
  let onRegister = async() => {
    try {
      // Step1. Ambil data inputan dari user
      let inputEmail = email.current.value 
      let inputPassword = password.current.value 

      let response = await createUserWithEmailAndPassword(
        auth, 
        inputEmail,
        inputPassword
      )
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  let onLogin = async() =>{
    try {
      let inputEmail = email.current.value 
      let inputPassword = password.current.value 

      let response = await signInWithEmailAndPassword(
        auth,
        inputEmail,
        inputPassword
      );

      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }

  let onLoginWithGoogle = async() => {
    try {
      let response = await signInWithPopup(auth, provider)
      setData(response.user.email)
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(auth, (userFromFirebase) => {
    if(userFromFirebase){
      setData(userFromFirebase.email);
    }
  });

  let onLogout = async() => {
    try {
      await signOut(auth)
      setData('')
    } catch (error) {
      
    }
  }

  return (
    <>
      <h1>
        {data}
      </h1>
      <input ref={email} type='text' placeholder='Enter your email' />
      <input ref={password} type='password' placeholder='Enter your password' />
      {/* <button onClick={onRegister}>Submit</button> */}
      <button onClick={onLogin}>Login</button>
      <button onClick={onLoginWithGoogle}>
        Login With Google
      </button>
      <button className="mb-3" onClick={onLogout}>
        Log Out
      </button>
    </>
  );
}

export default App;
