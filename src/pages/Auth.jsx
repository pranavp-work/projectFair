import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { requestApi } from '../service/allApi';

function Auth({ register }) {

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })

  console.log(userDetails);

  return (
    <>
      <div className="container p-5">
        <h3 className='text-warning' style={{ marginLeft: '10%' }}><FontAwesomeIcon icon={faArrowLeft} /> Back Home</h3>

        {/* login */}
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 bg-success p-5">
            <div className="row">
              <div className="col-md-6">
                <img src="https://cdn.pixabay.com/animation/2023/06/13/15/12/15-12-30-710_512.gif" alt="" className='h-100 w-75' />
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center flex-column">


                {!register ? <div>
                  <h5 className='text-center text-white'><FontAwesomeIcon icon={faStackOverflow} /> Project Fair</h5>
                  <h5 className='text-center text-white'>Sign into your account</h5>

                  <input type="text" placeholder='email' className='w-100 p-1 mt-3 rounded-2 border-0' />
                  <input type="password" placeholder='password' className='w-100 p-1 mt-3 rounded-2 border-0' />
                  <button className='btn w-100 p-1 btn-warning mt-3 rounded-2'>Login</button>
                  <p className='text-white'>New User? Click here to <Link to='/register' className='text-danger' style={{ textDecorationColor: 'red' }}>Register</Link></p>
                </div>

                  :
                  <div>
                    <h5 className='text-center text-white'><FontAwesomeIcon icon={faStackOverflow} /> Project Fair</h5>
                    <h5 className='text-center text-white'>Sign up your account</h5>
                    <input type="text" placeholder='username' className='w-100 p-1 mt-3 rounded-2 border-0' onChange={(e)=> setUserDetails({...userDetails, username: e.target.value})} />
                    <input type="text" placeholder='email' className='w-100 p-1 mt-3 rounded-2 border-0' onChange={(e)=> setUserDetails({...userDetails, email: e.target.value})} />
                    <input type="password" placeholder='password' className='w-100 p-1 mt-3 rounded-2 border-0' onChange={(e)=> setUserDetails({...userDetails, password: e.target.value})} />
                    <button className='btn w-100 p-1 btn-warning mt-3 rounded-2' onClick={async () => {
                      const {username, email, password} = userDetails
                      if(!username || !email || !password) {
                        alert('Fill the Form Completely to Register!')
                      } else {
                        const result = await requestApi(userDetails)
                        console.log(result);
                      }
                    }}>Register</button>
                    <p className='text-white'>Already have an account? <Link to='/login' className='text-danger' style={{ textDecorationColor: 'red' }}>Login</Link></p>
                  </div>

                }


              </div>
            </div>

          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Auth