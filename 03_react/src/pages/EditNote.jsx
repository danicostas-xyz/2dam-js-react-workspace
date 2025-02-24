/* eslint-disable react/prop-types */
import React, { useState, useId } from 'react'
import '../styles/EditNote.css'
import Header from '../components/Header'
import ButtonIcon from '../components/ButtonIcon'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineRemoveRedEye, MdDelete } from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import TextareaAutosize from 'react-textarea-autosize'
import { useNavigate } from 'react-router-dom'
import colors from '../assets/colors'
import { PiPencilSimpleFill, PiPencilSimpleSlashFill } from 'react-icons/pi'

export default function EditNote (props) {
  const navigate = useNavigate()
  const id = useId()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isEditable, setIsEditable] = useState(true)
  const [isRemovable, setIsRemovable] = useState(false)
  const handlerClickBack = () => navigate('/')

  const handlerChangeTitle = (e) => {
    setTitle(e)
  }
  const handlerChangeDescription = (e) => {
    setDescription(e)
  }

  const handlerClickSave = () => {
    const note = {
      id,
      date: new Date().toLocaleDateString(),
      title,
      description,
      // va haciendo 0, 1, 2, 3, 4, 0, 1, 2, 3, 4
      color: colors[props.notes.length % colors.length]
    } // Si la clave y el valor se llaman igual, se omite y se pone solo el mismo nombre compartido.
    props.setNotes([note, ...props.notes]) // Manda la nota de aquí y además todas las otras notas que estén en props.notes
    navigate('/')
  }

  return (
    <div className='editNote'>
      <Header>
        <ButtonIcon icon={<IoIosArrowBack />} onClick={handlerClickBack} />
        <div className='editNote__groupIcon'>
          <ButtonIcon
            onClick={e => setIsEditable(!isEditable)}
            icon={isEditable ? <PiPencilSimpleSlashFill /> : <PiPencilSimpleFill />}
          />
          <ButtonIcon
            icon={isRemovable ? <MdDelete /> : <FaSave />}
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
          disabled={!isEditable}
        />

        <TextareaAutosize
          placeholder='Type something...'
          className='editNote__input editNote__input--description'
          minRows='3'
          onChange={(e) => handlerChangeDescription(e.target.value)}
          value={description}
          disabled={!isEditable}
        />
      </div>
    </div>
  )
}
