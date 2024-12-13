import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Profile() {
    return (
        <>
            <div className='d-flex justify-content-between p-3'>
                <h3 className='text-warning'>Profile</h3>
                <button className='border-warning text-warning px-2' style={{backgroundColor: 'white'}}><FontAwesomeIcon icon={faCaretDown} /></button>
            </div>

            <div className='p-1 d-flex align-items-center justify-content-center flex-column'>
                <label htmlFor="changePicture">
                    <input type="file" id='changePicture' className='d-none'/>
                    <img src="https://static.vecteezy.com/system/resources/previews/032/310/851/non_2x/edit-user-icon-in-trendy-outline-style-isolated-on-white-background-edit-user-silhouette-symbol-for-your-website-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="" className='h-100 w-100'/>
                </label>
                <input type="text" placeholder='username' className='form-control p-1 mt-2 rounded' />
                <input type="text" placeholder='password' className='form-control p-1 mt-2 rounded' />
                <button className='btn btn-success w-100 p-1 mt-3 rounded'>Update</button>
            </div>
        </>
    )
}

export default Profile