/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/prop-types */
import React from 'react'

import '../styles/ButtonIcon.css'
export default function ButtonIcon (props) {
  return (

    // Aquí hacemos prop.children
    // Cuando se llame a este componente, el componente que esté como hijo
    // Será el que esté dentro del botón
    <button onClick={props.enlace} className='buttonIcon'>
      {props.icon}
    </button>

  )
}
