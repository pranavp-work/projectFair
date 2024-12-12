import React from 'react'

function PageNotFound() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <img src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="no gif" style={{height: '50%'}}/>
      </div>
      <div className='d-flex justify-content-center align-items-center flex-column' style={{marginBottom: '100px'}}>
        <h1>Look like you're lost</h1>
        <h2>Page not found</h2>
         <button className='text-white bg-success h-100' style={{border: 0}}>Go back Home</button>
      </div>
    </>
  )
}

export default PageNotFound