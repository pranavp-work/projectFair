import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import logo from '../assets/images/HomeDivTwoIllustration.webp'
import { Link } from 'react-router-dom';
import ProjectCard from './../components/ProjectCard';

function Home() {

  const user = sessionStorage.getItem('existingUsers');
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if(user) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  })

  return (
    <>
      <div style={{height: '100vh'}} className='w-100 bg-success d-flex align-items-center'>
        <div className="row p-5">
          <div className="col-md-6 d-flex align-items-center ps-5">
            { !isLogin?
              <div className='d-flex flex-column mt-5'>
              <h1 className='text-white'>Project Fair</h1>
              <p>One stop destination for all software development projects</p>
              <Link to = {'/login'}><button className='w-50 border-0 btn text-start' >Get Started <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>
            :
            <div className='d-flex flex-column mt-5'>
              <h1 className='text-white'>Project Fair</h1>
              <p>One stop destination for all software development projects</p>
              <Link to = {'/dashboard'}><button className='w-50 border-0 btn text-start' >Manage Project <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>
            }
          </div>
          <div className="col-md-6 ps-5">
            <img src="https://projectboard.world/wp-content/uploads/ProjectBoard-Takeoff-768x563.png" alt="" className='h-100 w-100'/>
          </div>
        </div>
      </div>

      {/* Explore our Projects */}
      <div className="exploreProject container p-5">
        <h1 className='text-center'>Explore our projects</h1>
        <div className="row">
          <div className="col-md-4 mt-5"><ProjectCard/></div>
          <div className="col-md-4 mt-5"><ProjectCard/></div>
          <div className="col-md-4 mt-5"><ProjectCard/></div>
        </div>
        <Link to = {'/projects'} style={{textDecorationColor: 'red'}}><h6 className='text-warning text-center mt-5' >See more projects</h6></Link>
      </div>
    </>
  )
}

export default Home