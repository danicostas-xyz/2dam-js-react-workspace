import React from 'react'
import '../styles/EditNote.css'
import Header from '../components/Header'
import ButtonIcon from '../components/ButtonIcon'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaSave } from 'react-icons/fa'
import TextareaAutosize from 'react-textarea-autosize'
import { useNavigate } from 'react-router-dom'

export default function EditNote () {
  const navigate = useNavigate()

  const handlerClickBack = () => navigate('/')

  return (
    <div className='editNote'>
      <Header>
        <ButtonIcon icon={<IoIosArrowBack />} enlace={handlerClickBack} />
        <div className='editNote__groupIcon'>
          <ButtonIcon icon={<MdOutlineRemoveRedEye />} />
          <ButtonIcon icon={<FaSave />} />
        </div>
      </Header>
      <div className='editNote__inputWrapper'>
        <TextareaAutosize minRows='2' maxRows='4' placeholder='Title' className='editNote__input editNote__input--title' />
        <TextareaAutosize placeholder='Type something...' className='editNote__input editNote__input--description' />
      </div>
    </div>
  )
}
