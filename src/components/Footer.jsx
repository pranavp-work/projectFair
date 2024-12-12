import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faStackOverflow, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
        <div className="bg-success p-5 w-100">
            <div className="row container text-white">
                <div className="col-md-4">
                    <h1><FontAwesomeIcon icon={faStackOverflow} /> Project Fair</h1>
                    <p className='text-dark' style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, facere nulla officiis suscipit minus reprehenderit velit! Impedit totam delectus, voluptatem nihil molestias tenetur doloribus cum harum voluptas vel! Amet blanditiis repellat nostrum impedit sed iusto aspernatur id, pariatur voluptas perferendis maxime aliquam fuga soluta itaque dolorum velit? Vel, provident recusandae.</p>
                </div>
                <div className="col-md-2">
                    <h1>Guides</h1>
                    <ul style={{listStyle: 'none'}}>
                    <Link style={{textDecoration: 'none'}} className='text-dark'><li>Home</li></Link>
                    <Link style={{textDecoration: 'none'}} className='text-dark'><li>Project</li></Link>
                    <Link style={{textDecoration: 'none'}} className='text-dark'><li>Dashboard</li></Link>
                    </ul>
                </div>
                <div className="col-md-2">
                <h1>Link</h1>
                    <ul style={{listStyle: 'none'}}>
                    <Link style={{textDecoration: 'none'}} className='text-dark'><li>React</li></Link>
                    <Link style={{textDecoration: 'none'}} className='text-dark'><li>React Boostrap</li></Link>
                    <Link style={{textDecoration: 'none'}} className='text-dark'><li>Bootswatch</li></Link>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h1>Contact Us</h1>
                    <input type="text" placeholder='enter email' className='p-2 rounded-2 border-0' style={{width: '75%'}} />
                    <button className='rounded-1 btn btn-warning ms-2'>Submit</button>
                    <div className='d-flex justify-content-between mt-4'>
                        <a href="" className='text-white' style={{fontSize: '40px'}}><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="" className='text-white' style={{fontSize: '40px'}}><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="" className='text-white' style={{fontSize: '40px'}}><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="" className='text-white' style={{fontSize: '40px'}}><FontAwesomeIcon icon={faXTwitter} /></a>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Footer