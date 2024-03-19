import React from 'react'

function Subfooter() {
  return (
    <>
    <div className="container-fluid bg-secondary py-5">
  <div className="container">
    <div className="row text-center">
      <div className="col-md-4 pt-2">
        <div className="pb-3"><img src="https://ama-foundation.org/images/ama-foundation-logo-2020.jpg" alt="Ama Foundation Logo" className="img-fluid" style={{maxWidth: '100%', height: 'auto'}} /></div>
        <div className="fs-6 text-light">The Ama Foundation is a grassroots, US-based 501(c) (3) non-profit organization that supports Ama Ghar, a permanent care home in Nepal for at-risk homeless children who have been abandoned, trafficked or have lost their home and family to poverty, drug/alcohol abuse or illness. We are dedicated to providing these children with a loving home, an excellent education, health care and the confidence to become productive, self-supporting adults.</div>
      </div>
      <div className="col-md-1" />
      <div className="col-md-4 pt-2">
        <div className="fs-2 pb-2 text-warning fw-semibold">Contact Information</div>
        <div className="text-light fs-6 pb-2"><i className="fa-solid fa-location-dot" /> Subidhanagar Tinkune, Kathmandu</div>
        <div className="text-light fs-6 pb-2"><i className="fa-solid fa-phone-volume" /> +9779840046062 / +9779805761214</div>
        <div className="text-light fs-6"><i className="fa-regular fa-envelope" /> hbohara54@gmail.com</div>
      </div>
      <div className="col-md-3 pt-2">
        <div className="fs-2 pb-2 text-warning fw-semibold">Quick Links</div>
        <div className="fs-6 quick pb-2"><a href="#">Home</a></div>
        <div className="fs-6 quick pb-2"><a href="#">About</a></div>
        <div className="fs-6 quick pb-2"><a href="#">Campaign</a></div>
        <div className="fs-6 quick pb-2"><a href="#">Events</a></div>
        <div className="fs-6 quick pb-2"><a href="#">Gallery</a></div>
        <div className="fs-6 quick pb-2"><a href="#">Contact Us</a></div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Subfooter