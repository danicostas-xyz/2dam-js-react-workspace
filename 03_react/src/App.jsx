import React, { useState } from 'react'
import './App.css'
import Note from './pages/Note'
import EmptyNote from './components/EmptyNote'
import Modal from './components/Modal'
import EditNote from './pages/EditNote'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

export default function App () {
  // Aquí puedes hacer todo lo que quieras de js hasta que llegue el return, que es html
  // const objeto = { nombre: 'Dani', apellido: 'Costas' }
  // Aquí empieza html

  const [notes, setNotes] = useState([])

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Note notes={notes} />} />
          <Route path='/edit' element={<EditNote notes={notes} setNotes={setNotes} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
