import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectApi } from '../service/allApi';
import { useNavigate } from 'react-router-dom';

function AddProject() {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const [preview, setPreview] = useState("");

    const [token, setToken] = useState("");
    console.log(token);

    const [projectDetails, setProjectDetails] = useState({
        title: "",
        language: "",
        github: "",
        website: "",
        overview: "",
        projectImage: ""
    })
    console.log(projectDetails);

    // blob
    useEffect(() => {

        // token
        setToken(sessionStorage.getItem('token'));

        projectDetails.projectImage &&
            // add imageURL
            setPreview(URL.createObjectURL(projectDetails.projectImage))
    }, [projectDetails.projectImage])

    // token
    // useEffect(() => {
    //     setToken(sessionStorage.getItem('token'));
    // }, [])
    
    const handleClose = () =>{ 
        setShow(false);
        setTimeout(()=>{
            // revoke imageURL
            setPreview(URL.revokeObjectURL(projectDetails.projectImage))
            setProjectDetails({
                title: "",
                language: "",
                github: "",
                website: "",
                overview: "",
                projectImage: ""
            })
        }, 1000)
        
    }
    const handleShow = () => setShow(true);

    const handleAdd = async () => {
        const { title, language, github, website, overview, projectImage } = projectDetails;
        if ( !title || !language || !github || !website || !overview || !projectImage ) {
            toast.warning('Please fill the form completely!')
        } else {
            // should use append() method - if request body contains upload contents (in the FormData class)
            // append() = to create reqBody

            const reqBody = new FormData()

            reqBody.append("title", title)
            reqBody.append("language", language)
            reqBody.append("github", github)
            reqBody.append("website", website)
            reqBody.append("overview", overview)
            reqBody.append("projectImage", projectImage)

            if(token) {
                const reqHeader = {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
                const result = await addProjectApi(reqBody, reqHeader)
                console.log(result);
            } else {
                toast.info('Please login!')
                setTimeout(() => {
                    navigate('/login');
                }, 2000)
            }

            
        }
    }

    return (
        <>
            <button className='btn btn-success' onClick={handleShow}>Add Project</button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton className='bg-success text-white'>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6 p-2 d-flex justify-content-center align-items-center">
                            <label htmlFor="projectImage">
                                <input type="file" id='projectImage' className='d-none' onChange={(e) => {
                                    setProjectDetails({...projectDetails, projectImage: e.target.files[0]})
                                }} />
                                <img src={ preview? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_d76xSD4C-R-iI3RRVqRtd7Pq66EgZcEElw&s"} alt="" className='w-100 h-100'/>
                            </label>
                        </div>
                        <div className="col-md-6 p-3 d-flex align-items-center flex-column justify-content-center">
                            <input type="text" className='w-100 p-1 mt-2 rounded border-secondary border form-control' value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails, title: e.target.value })} placeholder='Title' />
                            <input type="text" className='w-100 p-1 mt-2 rounded border-secondary border form-control' value={projectDetails.language} onChange={(e)=>setProjectDetails({...projectDetails, language: e.target.value })} placeholder='Language' />
                            <input type="text" className='w-100 p-1 mt-2 rounded border-secondary border form-control' value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails, github: e.target.value })} placeholder='Github' />
                            <input type="text" className='w-100 p-1 mt-2 rounded border-secondary border form-control' value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails, website: e.target.value })} placeholder='Website' />
                            <textarea type="text" rows={6} className='w-100 p-1 mt-2 rounded' placeholder='Overview' value={projectDetails.ove} onChange={(e)=>setProjectDetails({...projectDetails, overview: e.target.value })} /> 
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ ()=> handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary btn-warning" onClick={ ()=> handleAdd()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' autoClose={2000} theme='colored' />
        </>
    )
}

export default AddProject