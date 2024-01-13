import React from 'react'
import './Services.css'

function Services() {
  return (
    <section className="services menu">
        <div className="menuContainer">
            <div className="menuHeader">
            <h2 className=  "menusecTitle">Services</h2>
            </div>



            <div className="menumainContent menuContent grid">
                {
                <div className="menuParentDiv">
                  <div className="firstRow">
                    <div className="menusingleRoom">
                      <div className="menuImage">
                      <h3 className = "menuPrice"> <center>Massage Therapy</center></h3>
                            {/* <img src={imgSrc} alt="" /> */}
                      </div>
                      <div className="menuFooter">
                          <div className="menuText">
                              <h6>₱1,500</h6>
                          
                          </div>
                      </div>
                      
                    </div>
                    <div className="menusingleRoom">
                      <div className="menuImage">
                      <h3 className = "menuPrice"> <center>Facial Therapy</center></h3>
                            {/* <img src={imgSrc} alt="" /> */}
                      </div>
                      <div className="menuFooter">
                          <div className="menuText">
                              <h6>₱1,500</h6>
                          
                          </div>
                      </div>
                      
                    </div>
                    <div className="menusingleRoom">
                      <div className="menuImage">
                      <h3 className = "menuPrice"> <center>Water Therapy</center></h3>
                            {/* <img src={imgSrc} alt="" /> */}
                      </div>
                      <div className="menuFooter">
                          <div className="menuText">
                              <h6>₱2,000</h6>
                          
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="firstRow">
                    <div className="menusingleRoom">
                      <div className="menuImage">
                      <h3 className = "menuPrice"> <center>Event Planning</center></h3>
                            {/* <img src={imgSrc} alt="" /> */}
                      </div>
                      <div className="menuFooter">
                          <div className="menuText">
                              <h6>₱5,000</h6>
                          
                          </div>
                      </div>
                      
                    </div>
                    <div className="menusingleRoom">
                      <div className="menuImage">
                      <h3 className = "menuPrice"> <center>Day Tour</center></h3>
                            {/* <img src={imgSrc} alt="" /> */}
                      </div>
                      <div className="menuFooter">
                          <div className="menuText">
                              <h6>₱1,000</h6>
                          
                          </div>
                      </div>
                      
                    </div>
                    <div className="menusingleRoom">
                      <div className="menuImage">
                      <h3 className = "menuPrice"> <center>Airport Transfers</center></h3>
                            {/* <img src={imgSrc} alt="" /> */}
                      </div>
                      <div className="menuFooter">
                          <div className="menuText">
                              <h6>₱2,500</h6>
                          
                          </div>
                      </div>
                    </div>
                  </div>

                  <div className="firstRow">
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>Car Rentals</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>₱2,500</h6>
                        
                        </div>
                    </div>
                    
                  </div>
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>Chauffer Services</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>₱1,800</h6>
                        
                        </div>
                    </div>
                    
                  </div>
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>Laundry Services</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>₱500</h6>
                        
                        </div>
                    </div>
                  </div>
                </div>

                <div className="firstRow">
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>Restocking Amenities</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>₱300</h6>
                        
                        </div>
                    </div>
                    
                  </div>
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>Room Cleaning</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>Free</h6>
                        
                        </div>
                    </div>
                    
                  </div>
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>Maintenance</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>Free</h6>
                        
                        </div>
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
