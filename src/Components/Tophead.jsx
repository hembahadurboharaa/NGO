import React from 'react'

function Tophead() {
  return (
    <>
<div className="container-fluid py-1 border-bottom bg-light border-secondary sticky-top  ">
  <div className="container ">
    <div className="d-flex justify-content-between align-items-center">
     <a href=""> <div className="logo"><img src="https://ama-foundation.org/images/ama-foundation-logo-2020.jpg" alt /></div></a>
      <div className="d-flex gap-2">
        <div className="donate fw-bold"><a href="#">Donate</a></div>
        <div className="sign fw-bold"><a href="#">Newsletter Sign-up</a></div>
      </div>
      <div id='lan'  className="dropdown align-self-center">
        <a  className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Language
        </a>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="#">English</a></li>
          <li><a className="dropdown-item" href="#">Nepali</a></li>
          <li><a className="dropdown-item" href="#">Hindi</a></li>
          <li><a className="dropdown-item" href="#">Chinese</a></li>
          <li><a className="dropdown-item" href="#">Japanese</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Tophead