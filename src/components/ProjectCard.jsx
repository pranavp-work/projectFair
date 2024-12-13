import React from 'react'
import Card from 'react-bootstrap/Card';
import imageCard from '../assets/images/mediaPlayerProjectScreenshot.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <Card style={{ width: '100%' }} className='shadow border-0'>
                <Card.Img variant="top" src={imageCard} className='w-100 h-100' onClick={handleShow}/>
                {/* <iframe src="https://media-player-frontend-six-mu.vercel.app/" title="Embedded Website" style={{width: '100%', height: '100%'}}></iframe> */}
                <Card.Body>
                    <Card.Title>Media Player</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} centered size='xl'>
                <Modal.Header closeButton className="bg-success text-white">
                    <Modal.Title>Media Player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                            <iframe src="https://media-player-frontend-six-mu.vercel.app/" title="Embedded Website" style={{width: '100%', height: '100%'}}></iframe>
                            </div>
                            <div className="col-md-6">
                                <h3>Description</h3>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus illo nihil praesentium incidunt dolorum provident id laudantium iste molestias porro ipsam a cumque molestiae quo, consequatur ipsum vitae cum. Odit.</p>
                                <h4>Technologies</h4>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <Link className='text-dark'><FontAwesomeIcon icon={faGlobe} style={{fontSize: '40px'}} /></Link>
                        <Link className='text-dark'><FontAwesomeIcon icon={faGithub} style={{fontSize: '40px'}} className='ms-3' /></Link>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectCard