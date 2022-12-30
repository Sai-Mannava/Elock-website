import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FiActivity} from 'react-icons/fi'
import {FaMoneyBill} from 'react-icons/fa'
import {MdContactPage} from 'react-icons/md'

const nav = () => {
  return (
    <nav>
      <a href="#" ><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><FiActivity/></a>
      <a href="#portfolio"><FaMoneyBill/></a>
    </nav>
  )
}

export default nav