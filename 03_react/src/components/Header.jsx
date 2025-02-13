import React from 'react'
import '../styles/Header.css'

export default function Header (props) {
  return (
    <header className='Header'>
      {props.children}
    </header>
  )
}
