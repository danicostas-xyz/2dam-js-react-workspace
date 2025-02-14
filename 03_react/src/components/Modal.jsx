/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/Modal.css'
import { FaInfoCircle } from 'react-icons/fa'

export default function Modal (props) {
  return (
    <div className='modal'>

      <FaInfoCircle className='modal__icon' />
      <p className='modal__text'>{props.text}</p>
      <div className='modal__buttonWrapper'>
        <button className='modal__button modal__button--danger'>{props.buttonText.btTextGreen}</button>
        <button className='modal__button modal__button--success'>{props.buttonText.btTextRed}</button>
      </div>
    </div>
  )
}
