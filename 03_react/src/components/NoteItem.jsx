/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/NoteItem.css'
import { Link } from 'react-router-dom'

export default function NoteItem (props) {
  return (
    <Link to={'/edit/' + props.id} className='noteItem' style={{ backgroundColor: props.color }}>
      <h1 className='noteItem__title'>{props.title}</h1>
      <p className='noteItem__text'>{props.description}</p>
      <p className='noteItem__date'>{props.date}</p>
    </Link>
  )
}
