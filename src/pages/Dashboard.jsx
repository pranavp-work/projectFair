import React from 'react'
import Header from './../components/Header';
import MyProject from './../components/MyProject';
import Profile from './../components/Profile';

function Dashboard() {
  return (
    <>
    <Header />
      <div className="container p-5">
        <h3>Welcome <span className='text-warning'>User</span></h3>
        <div className="row mt-4">
          <div className="col-md-1"></div>
          <div className="col-md-7 border shadow p-2 m-1">
            < MyProject />
          </div>
          <div className="col-md-3 border shadow p-2 m-1">
            < Profile />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard