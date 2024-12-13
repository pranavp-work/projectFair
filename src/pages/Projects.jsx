import React from 'react'
import Header from './../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from './../components/ProjectCard';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <>
      < Header />
      <div className="container p-5">
        <h2 className="text-center">All Projects</h2>

        {/* not login */}
        <div className='container'>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 d-flex justify-content-center align-items-center flex-column">
              <img src="https://cdn-icons-gif.flaticon.com/8717/8717908.gif" alt="" className='w-75 h-75' />
              <h4 className='text-center'> <strong> Please <Link to = {'/login'}>Login</Link> to see more projects...</strong></h4>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        <div className='container mt-4'>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <input type="text" placeholder='Technologies' className='border shadow w-100 p-1' />
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: 'lightgray', marginTop: "10px", marginLeft: "-30px" }} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>

        <div className='mt-5'>
          <div className='row'>
            <div className=" col-md-4 mt-5">< ProjectCard /></div>
            <div className=" col-md-4 mt-5">< ProjectCard /></div>
            <div className=" col-md-4 mt-5">< ProjectCard /></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects