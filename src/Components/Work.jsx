import React from 'react'

function Work() {
  return (
    <>
    <div className="container py-5">
    <div className="fs-1 fw-bold text-danger text-center pb-5">OUR WORK</div>
    <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-6 pb-2">
            <div className="premium-hover">
                <div className="image-container">
                    <img src="https://www.sos-childrensvillages.org/getmedia/85706123-f5ac-4f70-8fb3-fb656906d1b0/Kenya-FS-Nairobi-03-father-holding-hands-with-children-walking,-Antony-s-Story,-Jakob-Fuhrsquare.jpg?width=425"  alt="Tour in Nepal" />
                    <div className="overlay" />
                    <div className="content">
                        <div className="fs-5 fw-bold text-warning">PREVENTION</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 pb-2">
            <div className="premium-hover">
                <div className="image-container">
                    <img src="https://www.sos-childrensvillages.org/getmedia/1a37faed-25c7-4a00-947d-164d37591100/20221022_palaestina_bethlehem_community_house_alea_horst5278-square.jpg?width=425" alt="Trekking in Nepal" />
                    <div className="overlay" />
                    <div className="content">
                        <div className="fs-5 fw-bold text-warning">PROTECTION</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-6 pb-2">
            <div className="premium-hover">
                <div className="image-container">
                    <img src="https://www.sos-childrensvillages.org/getmedia/77d0ea76-d086-4164-9ad1-7988eed30e66/Young-people-at-the-Applying-Safe-Behaviours-event-Magdalena-Sikorska-(4)-banner-square.jpg?width=425" alt="Flight Booking" />
                    <div className="overlay" />
                    <div className="content">
                        <div className="fs-5 fw-bold text-warning">ADVOCACY</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    </>
  )
}

export default Work