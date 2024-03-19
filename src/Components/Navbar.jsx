import React from 'react'

function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-secondary  ">
  <div className="container">
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="navbar-nav flex-grow-1 justify-content-between mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-link fw-bold navvv" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown ">
          <a className="nav-link dropdown-toggle fw-bold navvv" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Who We Are
          </a>
          <ul className="dropdown-menu  ">
            <li><a className="dropdown-item fw-bold navvv" href="#">Mission</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">Board of Directors</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">Staff</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">History</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">Financials</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-bold navvv" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          What We Do
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item fw-bold navvv" href="#">Aama Ghar Home</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">Schoolarship</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">Beyond Aama Ghar</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">Our Home</a></li>
           
            
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-bold navvv" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Get Involved
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item fw-bold navvv" href="#">Support A Child</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">Visit Aama Ghar</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">Fundraising</a></li>
            
          </ul>
        </li>

        <li className="nav-item ">
          <a className="nav-link fw-bold navvv" aria-current="page" href="#">The Children</a>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle fw-bold navvv" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Family
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item fw-bold navvv" href="#">Aama GHar Alummi</a></li>
            <li><a className="dropdown-item fw-bold navvv" href="#">Aama Tika</a></li>
          </ul>
        </li>



        <li className="nav-item ">
          <a className="nav-link fw-bold navvv" aria-current="page " href="#">Contact Us</a>
        </li>

        <li className="nav-item ">
          <a className="nav-link  fw-bold navvv" aria-current="page" href="#">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    </>
  )
}

export default Navbar