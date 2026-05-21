import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import RegisterForm from './components/RegisterForm'

function App() {

  return (
    <>
      <RegisterForm />
      <Counter />
    </>
  )
}

export default App
