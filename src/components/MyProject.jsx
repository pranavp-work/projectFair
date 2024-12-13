import React from 'react'
import AddProject from './AddProject';
import EditProject from './EditProject'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faTrash } from '@fortawesome/free-solid-svg-icons';

function MyProject() {
    return (
        <>
            <div className='d-flex justify-content-between p-3'>
                <h3 className='text-success'>My Project</h3>
                < AddProject />
            </div>

            <div className='p-3'>
                <div className='d-flex justify-content-between align-items-center p-3 bg-light mt-2'>
                    <h5>Media Player</h5>
                    <div className="d-flex justify-content-around align-items-center">
                        <EditProject />
                        <FontAwesomeIcon icon={faGithub} className='me-4'   />
                        <FontAwesomeIcon icon={faGlobe} className='me-4'   />
                        <FontAwesomeIcon icon={faTrash} className='me-4'   />
                    </div>
                </div>

                <h6 className='text-center text-warning'>No Project Added Yet</h6>
            </div>
        </>
    )
}

export default MyProject