import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EditProject() {

    
        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

  return (
    <>
        <button onClick={handleShow} className='border-0 bg-light me-4'><FontAwesomeIcon icon={faPenToSquare}   /></button>

        <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton className='bg-success text-white'>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6 p-2 d-flex justify-content-center align-items-center">
                            <label htmlFor="projectImage">
                                <input type="file" id='projectImage' className='d-none' />
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_d76xSD4C-R-iI3RRVqRtd7Pq66EgZcEElw&s" alt="" className='w-100 h-100'/>
                            </label>
                        </div>
                        <div className="col-md-6 p-3 d-flex align-items-center flex-column justify-content-center">
                            <input type="text" className='w-100 p-1 mt-2 rounded border-secondary border form-control' placeholder='Title' />
                            <input type="text" className='w-100 p-1 mt-2 rounded border-secondary border form-control' placeholder='Language' />
                            <input type="text" className='w-100 p-1 mt-2 rounded border-secondary border form-control' placeholder='Github' />
                            <input type="text" className='w-100 p-1 mt-2 rounded border-secondary border form-control' placeholder='Website' />
                            <textarea type="text" rows={6} className='w-100 p-1 mt-2 rounded' placeholder='Vverview' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary btn-warning" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default EditProject