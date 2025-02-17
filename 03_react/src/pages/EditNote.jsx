/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import '../styles/EditNote.css'
import Header from '../components/Header'
import ButtonIcon from '../components/ButtonIcon'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import TextareaAutosize from 'react-textarea-autosize'
import { useNavigate } from 'react-router-dom'

export default function EditNote (props) {
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const handlerClickBack = () => navigate('/')
  const handlerChangeTitle = (e) => {
    setTitle(e)
  }
  const handlerChangeDescription = (e) => {
    setDescription(e)
  }

  const handlerClickSave = () => {
    const note = { title, description } // Si la clave y el valor se llaman igual, se omite y se pone solo el mismo nombre compartido.
    props.setNotes([note, ...props.notes]) // Manda la nota de aquí y además todas las otras notas que estén en props.notes
    navigate('/')
  }

  return (
    <div className='editNote'>
      <Header>
        <ButtonIcon icon={<IoIosArrowBack />} enlace={handlerClickBack} />
        <div className='editNote__groupIcon'>
          <ButtonIcon
            icon={<MdOutlineRemoveRedEye />}
          />
          <ButtonIcon
            icon={<FaSave />}
            onClick={handlerClickSave}
          />
        </div>
      </Header>
      <div className='editNote__inputWrapper'>
        <TextareaAutosize
          minRows='2'
          maxRows='4'
          placeholder='Title'
          className='editNote__input editNote__input--title'
          onChange={(e) => handlerChangeTitle(e.target.value)}
          value={title}
        />

        <TextareaAutosize
          placeholder='Type something...'
          className='editNote__input editNote__input--description'
          minRows='3'
          onChange={(e) => handlerChangeDescription(e.target.value)}
          value={description}
        />
      </div>
    </div>
  )
}
