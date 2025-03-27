import Link from "next/link";
import React from "react";
export default function Footer() {
    return(
    <>


<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{ backgroundColor: "rgb(0, 0, 0)", color: "#D9D9D9" }}>
    
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
   

    
    <div>
      <a href="" className="me-4 text-reset text-decoration-none">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset text-decoration-none">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset text-decoration-none">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 text-reset text-decoration-none">
        <i className="fab fa-instagram"></i>
      </a>
      
      
    </div>
    
  </section>
  

  
  <section className="" style={{ backgroundColor: "rgb(0, 0, 0)", color: "#D9D9D9" }}>
    <div className="container text-center text-md-start pt-5" >
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <a className="navbar-brand" href="#"><img src="images/llogo.png" height="100px" alt=""/></a>
          <p>
            BMW Steels Ltd
55, Pritam Road, Dalanwala, Dehradun-248001
Mobile: +91-96390 17070
Email: sales@bmwsteels.com
          </p>
        </div>
        

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Company
          </h6>
          <p>
            <Link href="/" className="text-reset text-decoration-none now ">Home</Link>
          </p>
          <p>
            <Link href="/AluminiaCeramic" className="text-reset  text-decoration-none now">Aluminia Ceramic</Link>
          </p>
          <p>
            <Link href="/CastBasalt" className="text-reset text-decoration-none now">Cast Basalt</Link>
          </p>
          <p>
            <Link href="ContactUs" className="text-reset text-decoration-none now">Contact</Link>
          </p>
        </div>
        

      
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            SITE MAP
          </h6>
          <p>
            <Link href="/ResearchDevelopmentDepartment" className="text-reset text-decoration-none now">Research & Development Department</Link>
          </p>
          <p>
            <Link href="/FusedAluminaAbrasive" className="text-reset text-decoration-none now">Fused Alumina Abrasive</Link>
          </p>
          <p>
            <Link href="/WearSealDiamondPutty" className="text-reset text-decoration-none now">Wear Seal Diamond Putty</Link>
          </p>
          <p>
            <Link href="/BasalticMineralFertilizer" className="text-reset text-decoration-none now">Basaltic Mineral Fertilizer</Link>
          </p>
        </div>
        

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
    
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          
          <p className="now">
            <i className="fas fa-envelope me-3 "></i>
            Sales@bmwsteels.com
          </p>
          <p className="now"><i className="fas fa-phone me-3"></i> +91-01 234 567 88</p>
          <p className="now"><i className="fas fa-print me-3"></i> +91-01 234 567 89</p>
        </div>
        
      </div>
      
    </div>
  </section>
  

  
  <div className="text-center p-4" style={{ backgroundColor: "rgb(0, 0, 0)", color: "#D9D9D9" }}>
    © 2025 Copyright:
    <a className="text-reset fw-bold now" href="https://www.starnexxt.com/">Starnexxt.com</a>
  </div>
  
</footer>



    </>

    )
}