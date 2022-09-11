import React from 'react'
import {BsFillHeartFill} from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <p className='text-footer'>made with <BsFillHeartFill className='footer__icon'/> | Ali Palvane | 2022</p>
    </footer>
  )
}

export default Footer