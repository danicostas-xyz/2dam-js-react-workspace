import React from 'react'
import './App.css'
import Note from './pages/Note'
import EmptyNote from './components/EmptyNote'
import Modal from './components/Modal'

export default function App () {
  // Aquí puedes hacer todo lo que quieras de js hasta que llegue el return, que es html
  // const objeto = { nombre: 'Dani', apellido: 'Costas' }
  // Aquí empieza html
  return (
    <div className='app'>
      <Modal />
    </div>
  )
}
