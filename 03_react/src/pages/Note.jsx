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
import colors from '../assets/colors'
import FilterInput from '../components/FilterInput'

export default function Note (props) {
  const [state, setState] = useState('list')
  const [searchValue, setSearchValue] = useState('')

  const handlerClickFilter = () => {
    setState('filter')
  }

  const handlerClickList = () => {
    setState('list')
  }

  const handlerChangeInput = (e) => {
    setSearchValue(e.target.value)
  }

  const handlerResetFilter = () => {
    setSearchValue('')
  }

  const notesFiltered = props.notes.filter(e => e.title.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <>

      <Header>

        {state === 'list'
          ? <>
            <h1 className='note__title'>Notes</h1>
            <div className='note__groupIcon'>
              <ButtonIcon onClick={handlerClickFilter} icon={<FaSearch />} />
              <ButtonIcon icon={<FaInfoCircle />} />
            </div>
            </>
          : <FilterInput onChange={handlerChangeInput} onClick={handlerClickList} />}
      </Header>

      {/* notesFiltered al principio pinta todas
      porque si filtras .includes("") te filtra todas
      porque al final filtrar string vacío es coger todo */}
      <div className='note__container'>
        {notesFiltered.length !== 0
          ? notesFiltered.map((e) => <NoteItem
              key={e.id}
              id={e.id}
              date={e.date}
              title={e.title}
              description={e.description}
              color={e.color}
                                     />)
          : <EmptyNote image='src/assets/rafiki.png' text='Create your first note!' />}
      </div>

      <Link to='/edit' className='boton'>
        <IoIosAdd />
      </Link>
    </>
  )
}
