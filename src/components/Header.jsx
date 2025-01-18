import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {

  const navigate = useNavigate();

  return (
    <>
        <nav className='d-flex justify-content-between align-items-center px-4 py-3 bg-success'>
            <Link to = '/' style={{textDecoration: 'none'}}><h2 className='text-white'><FontAwesomeIcon icon={faStackOverflow} /> Project Fair</h2></Link>
            <button className='btn border-warning btn-warning rounded-2' onClick={() => {
              // remove sessionStorage
              // sessionStorage.removeItem('existingUsers');
              sessionStorage.clear();
              toast.error('User logged out!')
              setTimeout(() => {
                navigate('/');
              }, 2000)
            }}><FontAwesomeIcon icon={faPowerOff} /> Logout</button>
        </nav>
        <ToastContainer position='top-center' autoClose={2000} theme='colored' />
    </>
  )
}

export default Header