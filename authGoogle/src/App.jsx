import { useState } from 'react'

import './App.css'
import { useEffect } from 'react'
import firebase from './firebase/config'
import Welcome from './Welcome'
import Login from './Login'
function App() {
const [user , setUser] = useState(null)
  useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
setUser(user)
  })

} , [])








  return (
<>

    {user ? <Welcome/> : <Login/>}










</>
  )
}

export default App
