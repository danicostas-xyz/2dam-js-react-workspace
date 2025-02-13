import React from 'react'
import { FaSearch, FaInfoCircle } from 'react-icons/fa'
import { IoIosAdd } from 'react-icons/io'
import ButtonIcon from '../components/ButtonIcon'
import Header from '../components/Header'
import EmptyNote from '../components/EmptyNote'
import '../styles/Note.css'
import NoteItem from '../components/NoteItem'

export default function Note () {
  const mockData = [{ id: '403cda52-11db-4ddd-9e41-c73374ea1242', titulo: 'Hiroshima', description: 'bwoywynudgrgwzivdqfgytvusfsdpazpsguwpcoesmahegykuxskfhtrxbgmzezoaywzvigzklinkunqx', color: '#eded1c' },
    { id: '942b3270-97a0-4642-a184-c94b2b2e4b4e', titulo: 'Invitation to the Dance', description: 'jyuvpxwizovdhzbgqfrqsuuzkvjiegypgqtipapqlosipmwopybkapxqqlywfuajctxjcyupwmwdhfqvd', color: '#ef0e18' },
    { id: 'ef79a7fd-bc7f-4a94-b81a-979710382f49', titulo: 'Cinderella', description: 'srrlkbawnvtawtyjgnugnpztokyomoemribwqlbamtsjpbkxyusdusrwktfqhyyzrbytoddmxtppvkosm', color: '#e8b9a5' },
    { id: 'cc8bd9d3-017a-4194-994e-0a9dc71164fc', titulo: 'Hatchet', description: 'ftmkwvnmgaifuqzkffuoigczypgomkbtdbeubxqjzaqdfmckusoyeyuxgzhwechplnfdiiunqqwpgslwa', color: '#a079d3' },
    { id: '86daaa6c-3707-45b9-8e3e-a2a297d8a756', titulo: 'Papillon', description: 'yplsmrmonfgcdfolypthcuuebsmcrxwbzptetlptgoefphaixuvrapjcweszowkseimoajlpsckkauyys', color: '#bd1637' }]
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
        {mockData.length === 0
          ? mockData.map(e => <NoteItem key={e.id} titulo={e.titulo} contenido={e.description} color={e.color} />)
          : <EmptyNote image='src/assets/rafiki.png' text='Create your first note!' />}

      </div>
      <button className='boton'>
        <IoIosAdd />
      </button>
    </>
  )
}
