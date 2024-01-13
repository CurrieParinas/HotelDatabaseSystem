import React from 'react'
import './Menu.css'

function Menu() {
  return (
    <section className="menu">
        <div className="menuContainer">
            <div className="menuHeader">
            <h2 className=  "menusecTitle">Menu</h2>
            </div>



            <div className="menumainContent menuContent grid">
                {
                <div className="menuParentDiv">
                <div className="firstRow">
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>Breakfast Buffet</center></h3>
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
                    <h3 className = "menuPrice"> <center>Lunch Buffet</center></h3>
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
                    <h3 className = "menuPrice"> <center>Dinner Buffet</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>₱1,800</h6>
                        
                        </div>
                    </div>
                  </div>
                </div>
                <div className="firstRow">
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>In-room Dining</center></h3>
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
                    <h3 className = "menuPrice"> <center>Bar and Lounge</center></h3>
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
                    <h3 className = "menuPrice"> <center>Garden Tea Party</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>₱1,500</h6>
                        
                        </div>
                    </div>
                  </div>
                </div>

                <div className="firstRow">
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>In-room Chips</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>₱150</h6>
                        
                        </div>
                    </div>
                    
                  </div>
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>In-Room Soda</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>₱150</h6>
                        
                        </div>
                    </div>
                    
                  </div>
                  <div className="menusingleRoom">
                    <div className="menuImage">
                    <h3 className = "menuPrice"> <center>In-Room Chocolates</center></h3>
                          {/* <img src={imgSrc} alt="" /> */}
                    </div>
                    <div className="menuFooter">
                        <div className="menuText">
                            <h6>₱200</h6>
                        
                        </div>
                    </div>
                  </div>
                </div>


                <div className="firstRow">
                  <div className="menusingleRoom">
                      <div className="menuImage">
                      <h3 className = "menuPrice"> <center>In-Room Sparkling Water</center></h3>
                            {/* <img src={imgSrc} alt="" /> */}
                      </div>
                      <div className="menuFooter">
                          <div className="menuText">
                              <h6>₱200</h6>
                          
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
  
 


export default Menu;
