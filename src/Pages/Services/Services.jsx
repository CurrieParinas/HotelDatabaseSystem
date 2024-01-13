import React from 'react'
import './Services.css'

function Services() {
  return (
    <section className="services">
        <div className="servicesContainer">
            <div className="servicesHeader">
            <h2 className=  "servicessecTitle">Services</h2>
            </div>



            <div className="servicesmainContent servicesContent grid">
                {
                  <div className="servicesParentDiv">
                <div className="servicessingleRoom">
                  <div className="servicesImage">
                  <h3> <center>Filler</center></h3>
                        {/* <img src={imgSrc} alt="" /> */}
                  </div>
                  <div className="servicesFooter">
                      <div className="servicesText">
                          <h6>Spa1</h6>
                      
                      </div>
                  </div>
                  
                </div>
               
                <div className="servicessingleRoom">
                  <div className="servicesImage">
                  <h3> <center>Filler</center></h3>
                        {/* <img src={imgSrc} alt="" /> */}
                  </div>
                  <div className="servicesFooter">
                      <div className="servicesText">
                          <h6>Spa2</h6>
                      
                      </div>
                  </div>
                  
                </div><div className="servicessingleRoom">
                  <div className="servicesImage">
                  <h3> <center>Filler</center></h3>
                        {/* <img src={imgSrc} alt="" /> */}
                  </div>
                  <div className="servicesFooter">
                      <div className="servicesText">
                          <h6>Spa3</h6>
                      
                      </div>
                  </div>
                  
                </div>
                
                
                
                </div> //parent div
                
                }
            </div>
        </div>
    </section>
  )
}
  
 


export default Services;
