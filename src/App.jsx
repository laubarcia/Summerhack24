import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponenteNuevo from './ComponenteNuevo'

function App() {


  console.log("Hola desde React!")

  return (
    <>
    <h1>Hola mundo desde React</h1>
    <p>Te queremos Vite y React</p>
    <ComponenteNuevo></ComponenteNuevo>
    
    </>
  )
}

export default App
