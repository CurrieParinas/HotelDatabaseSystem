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
                <div className="menusingleRoom">
                  <div className="menuImage">
                  <h3> <center>Filler</center></h3>
                        {/* <img src={imgSrc} alt="" /> */}
                  </div>
                  <div className="menuFooter">
                      <div className="menuText">
                          <h6>Food1</h6>
                      
                      </div>
                  </div>
                  
                </div>
                <div className="menusingleRoom">
                  <div className="menuImage">
                  <h3> <center>Filler</center></h3>
                        {/* <img src={imgSrc} alt="" /> */}
                  </div>
                  <div className="menuFooter">
                      <div className="menuText">
                          <h6>Food2</h6>
                      
                      </div>
                  </div>
                  
                </div>
                <div className="menusingleRoom">
                  <div className="menuImage">
                  <h3> <center>Filler</center></h3>
                        {/* <img src={imgSrc} alt="" /> */}
                  </div>
                  <div className="menuFooter">
                      <div className="menuText">
                          <h6>Food3</h6>
                      
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
