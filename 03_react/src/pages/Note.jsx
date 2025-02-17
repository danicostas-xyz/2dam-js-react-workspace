/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { FaSearch, FaInfoCircle } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'
import ButtonIcon from '../components/ButtonIcon'
import Header from '../components/Header'
import EmptyNote from '../components/EmptyNote'
import '../styles/Note.css'
import NoteItem from '../components/NoteItem'
import { Link } from 'react-router-dom'

export default function Note (props) {
  return (
    <>
      <Header>
        <h1 className='note__title'>Notes</h1>
        <div className='note__groupIcon'>
          <ButtonIcon icon={<FaSearch />} />
          <ButtonIcon icon={<FaInfoCircle />} />
        </div>
      </Header>
      <div className='note__container'>
        {props.notes.length !== 0
          ? props.notes.map((e, i) => <NoteItem key={i} title={e.title} description={e.description} color='#e33333' />)
          : <EmptyNote image='src/assets/rafiki.png' text='Create your first note!' />}

      </div>
      <Link to='/edit' className='boton'>
        <IoIosAdd />
      </Link>
    </>
  )
}
