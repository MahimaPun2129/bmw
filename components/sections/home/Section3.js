import React from "react";
export default function Section3(){
    return (
        <>
        <div>
  <div className="d-lg-flex p-2 p-md-5 pt-md-0">
    {/* Image Section */}
    <div className="p-2 text-center p-md-5 w-100 d-none d-md-block align-item-center d-flex justify-content-center">
      
      <video className="w-100" src="images/Earth.mp4" autoPlay loop muted />
      
    </div>

    {/* Text Section */}
    <div  className="p-2 p-md-5 w-100" data-aos="fade-down">
      <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: "75px" }}>
        We Spread Around the World
      </h2>
      <img  src="images/Earth.webp" className="mobile-image-2 d-md-none pt-3" width="700px" alt="" />
      <h4
        className="pt-4"
        style={{ color: "rgb(66, 66, 66)", fontWeight: 400, textAlign: "justify" }}
      >
        BMW Steels Ltd. was founded in 1990. Our head Office is in Dehradun, Uttarakhand, India. We
        offer state-of-the-art Engineering solutions for Coal Power Plants, Steel Plants, and Cement
        Plants.
      </h4>

      {/* Counter Section */}
      <div  className="d-lg-flex justify-content-between px-2 pt-3">
        {/* Experience Counter */}
        <div className="p-4 m-3"  style={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }}>
          <div className="d-flex">
            <h2 className="counter" id="counter1" style={{ color: "red", fontWeight: 600 }}>
              0
            </h2>
            <h2 style={{ color: "red", fontWeight: 600 }}>+</h2>
          </div>
          <h3>YEARS OF EXPERIENCE</h3>
        </div>

        {/* Offices Counter */}
        <div className="p-4 m-3" style={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }}>
          <h2 className="counter" id="counter2" style={{ color: "red", fontWeight: 600 }}>
            0
          </h2>
          <h3>OFFICES WORLDWIDE</h3>
        </div>

        {/* Workers Counter */}
        <div className="p-4 m-3" style={{ backgroundColor: "#F4F4F4", borderRadius: "20px" }}>
          <div className="d-flex">
            <h2 className="counter" id="counter3" style={{ color: "red", fontWeight: 600 }}>
              0
            </h2>
            <h2 style={{ color: "red", fontWeight: 600 }}>+</h2>
          </div>
          <h3>WORKERS EMPLOYED</h3>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )}