import React from 'react'
import '../styles/FilterInput.css'
import { IoMdClose } from 'react-icons/io'

export default function NoteItem (props) {
  return (
    <div className='filterInput'>
      {/* Aquí necesitamos capturar el evento, por eso (e) */}
      <input onChange={(e) => props.onChange(e)} className='filterInput__input' type='text' placeholder='Search by keyword' />
      {/* Aquí NO necesitamos capturar el evento */}
      <button onClick={props.onClick} className='filterInput__button'>
        <IoMdClose />
      </button>
    </div>
  )
}
