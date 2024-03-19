import React from 'react'

function Details() {
  return (
    <>
    <div className="py-5">
  <div className="container py-5">
    <div className="row py-5">
      <div className="col-md-4 pb-3">
        <div className="service-item rounded-4 text-bg-danger pt-4">
          <div className="p-4">
            <div className="d-flex justify-content-evenly pb-3">
              <div className="fs-3 fs-md-1"><i className="fa-solid fa-trophy" /></div>
              <div className="fs-3 fs-md-1 fw-semibold">Our Vision</div>
            </div>
            <p className="text-center">We envision transforming their lives for good; an equitable world where children, women and elderly thrive in love, respect, care and support.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 pb-3">
        <div className="service-item rounded-4 text-bg-danger pt-4">
          <div className="p-4">
            <div className="d-flex justify-content-evenly pb-3">
              <div className="fs-3 fs-md-1"><i className="fa-solid fa-handshake" /></div>
              <div className="fs-3 fs-md-1 fw-semibold">Our Mission</div>
            </div>
            <p className="text-center">We strive to achieve lasting improvements in the quality of life, living with dignity and purpose of deprived children, women, and senior citizens.</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="service-item rounded-4 text-bg-danger pt-4">
          <div className="p-4">
            <div className="d-flex justify-content-evenly pb-3">
              <div className="fs-3 fs-md-1"><i className="fa-solid fa-gem" /></div>
              <div className="fs-3 fs-md-1 fw-semibold">Our Values</div>
            </div>
            <p className="text-center">Since its founding, Prayas Nepal has upheld accountability, integrity, love and compassion, inclusivity, and teamwork as its core values.</p>
          </div>
        </div>
      </div>
     
    </div>
    <div className="text-center pt-4">
    <button type="button" className="btn btn-primary">Know More</button>
    </div>
  </div>
  </div>



    </>
  )
}

export default Details