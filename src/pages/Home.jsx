import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../assets/images/HomeDivTwoIllustration.webp'

function Home() {
  return (
    <>
      <div style={{height: '100vh'}} className='w-100 bg-success d-flex align-items-center'>
        <div className="row p-5">
          <div className="col-md-6 d-flex align-items-center ps-5">
            <div className='d-flex flex-column mt-5'>
              <h1 className='text-white'>Project Fair</h1>
              <p>One stop destination for all software development projects</p>
              <button className='w-50 border-0 btn text-start' >Get Started <FontAwesomeIcon icon={faArrowRight} /></button>
              <button className='w-50 border-0 btn text-start' >Manage Project <FontAwesomeIcon icon={faArrowRight} /></button>
            </div>
          </div>
          <div className="col-md-6 ps-5">
            <img src="https://projectboard.world/wp-content/uploads/ProjectBoard-Takeoff-768x563.png" alt="" className='h-100 w-100'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home