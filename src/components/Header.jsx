import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
        <nav className='d-flex justify-content-between align-items-center px-4 py-3 bg-success'>
            <h2 className='text-white'><FontAwesomeIcon icon={faStackOverflow} /> Project Fair</h2>
            <button className='btn border-warning btn-warning rounded-2'><FontAwesomeIcon icon={faPowerOff} /> Logout</button>
        </nav>
    </>
  )
}

export default Header