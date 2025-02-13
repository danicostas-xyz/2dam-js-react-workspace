/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/EmptyNote.css'

export default function EmptyNote (props) {
  return (
    <div className='EmptyNote'>
      <img className='EmptyNote__image' src={props.image} alt='Imagen' />
      <p className='EmptyNote__text'>{props.text}</p>
    </div>
  )
}
