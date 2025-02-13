import React from 'react'
import '../styles/NoteItem.css'

export default function NoteItem (props) {
  return (
    <div className='noteItem' style={{ backgroundColor: props.color }}>
      <h1 className='noteItem__title'>{props.titulo}</h1>
      <p className='noteItem__text'>{props.contenido}</p>
    </div>
  )
}
