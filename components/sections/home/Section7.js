import React from "react";
export default function Section7(){
    return (
        <>

<div className="mt-5">
  <div className="text-center px-md-5 px-2">
    <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
      Our Manufacturing Plants
    </h2>
    <div className="px-md-5 text-start">
      <h4 style={{ color: 'rgb(66, 66, 66)', fontWeight: 400 }}>
        BMW Steels Ltd. operates state-of-the-art manufacturing plants equipped with cutting-edge technologies in Hathras and Khurja, specializing in advanced fabrication, assembly, and the production of high-quality wear-resistant and coal flow management solutions, ensuring precision and efficiency at every step.
      </h4>
    </div>
  </div>

  {/* Carousel */}
  <div className="container">
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner pt-2">
        <div className="carousel-item active">
          <img
            src="images/banner-2 (1).png"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              left: '100px',
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            <h3>Hathras, Uttar Pradesh</h3>
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Fabrication and Assembly Unit</h4>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/banner-2 (2).png"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              left: '100px',
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            <h3>Hathras, Uttar Pradesh</h3>
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Fabrication and Assembly Unit</h4>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/banner-2 (3).png"
            style={{ borderRadius: '15px' }}
            className="d-block w-100"
            alt="..."
          />
          <div
            className="p-3 section-6"
            style={{
              color: 'black',
              backgroundColor: '#D9D9D9',
              display: 'inline-block',
              position: 'relative',
              bottom: '50px',
              left: '100px',
              borderRadius: '10px',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}
          >
            <h3>Hathras, Uttar Pradesh</h3>
            <h4 style={{ color: 'rgb(68, 67, 67)' }}>Fabrication and Assembly Unit</h4>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  {/* Carousel END */}
</div>

{/* Section 7 */}
<div className="px-md-5 px-2 my-5">
  <div className="d-lg-flex justify-content-center align-items-center px-md-5">
    <div className="w-100 d-flex justify-content-center align-items-center flex-column ps-md-5 justify-content-md-start align-items-md-start">
      <h2 className="pt-4 mobile-fonts-heading" style={{ fontSize: '75px' }}>
        Frequently Asked Questions
      </h2>
      <img
        src="images/section-7.webp"
        className="w-75 my-4"
        style={{
          borderRadius: '10px',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        }}
        alt=""
      />
    </div>
    <div className="w-100 pe-md-5">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne" style={{ backgroundColor: '#D9D9D9', borderRadius: '5px' }}>
            <button
              className="accordion-button fs-4 my-2"
              style={{ backgroundColor: '#D9D9D9', borderRadius: '5px' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How can I buy Products from your website?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body btn-danger" style={{ borderRadius: '5px' }}>
              <h4 className="fs-6 text-white" style={{ color: 'rgb(66, 66, 66)', fontWeight: 300 }}>
                BMW Steels Ltd. operates state-of-the-art manufacturing plants equipped with cutting-edge technologies in Hathras and Khurja, specializing in advanced fabrication, assembly, and the production of high-quality wear-resistant and coal flow management solutions, ensuring precision and efficiency at every step.
              </h4>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo" style={{ backgroundColor: '#D9D9D9', borderRadius: '5px' }}>
            <button
              className="accordion-button collapsed fs-4 my-2"
              style={{ backgroundColor: '#D9D9D9', borderRadius: '5px' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How can I buy Products from your website?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body btn-danger" style={{ borderRadius: '5px' }}>
              <h4 className="fs-6 text-white" style={{ color: 'rgb(66, 66, 66)', fontWeight: 300 }}>
                BMW Steels Ltd. operates state-of-the-art manufacturing plants equipped with cutting-edge technologies in Hathras and Khurja, specializing in advanced fabrication, assembly, and the production of high-quality wear-resistant and coal flow management solutions, ensuring precision and efficiency at every step.
              </h4>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingthree" style={{ backgroundColor: '#D9D9D9', borderRadius: '5px' }}>
            <button
              className="accordion-button collapsed fs-4 my-2"
              style={{ backgroundColor: '#D9D9D9', borderRadius: '5px' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsethree"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How can I buy Products from your website?
            </button>
          </h2>
          <div
            id="collapsethree"
            className="accordion-collapse collapse"
            aria-labelledby="headingthree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body btn-danger" style={{ borderRadius: '5px' }}>
              <h4 className="fs-6 text-white" style={{ color: 'rgb(66, 66, 66)', fontWeight: 300 }}>
                BMW Steels Ltd. operates state-of-the-art manufacturing plants equipped with cutting-edge technologies in Hathras and Khurja, specializing in advanced fabrication, assembly, and the production of high-quality wear-resistant and coal flow management solutions, ensuring precision and efficiency at every step.
              </h4>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingfour" style={{ backgroundColor: '#D9D9D9', borderRadius: '5px' }}>
            <button
              className="accordion-button collapsed fs-4 my-2"
              style={{ backgroundColor: '#D9D9D9', borderRadius: '5px' }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsefour"
              aria-expanded="false"
              aria-controls="collapsefour"
            >
              How can I buy Products from your website?
            </button>
          </h2>
          <div
            id="collapsefour"
            className="accordion-collapse collapse"
            aria-labelledby="headingfour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body btn-danger" style={{ borderRadius: '0 0px 5px 5px' }}>
              <h4 className="fs-6 text-white" style={{ color: 'rgb(66, 66, 66)', fontWeight: 300 }}>
                BMW Steels Ltd. operates state-of-the-art manufacturing plants equipped with cutting-edge technologies in Hathras and Khurja, specializing in advanced fabrication, assembly, and the production of high-quality wear-resistant and coal flow management solutions, ensuring precision and efficiency at every step.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )}