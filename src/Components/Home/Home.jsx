import React, {useEffect} from 'react'
import './Home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])
    
  return (
    <section className="home">
        <div className="secContainer container">
            <div className="homeText">
                <h1 className="title">
                    Your Second Home, Mian Curocho
                </h1>
                <p className="subTitle">
                    A place where your comfort is met with unparalleled luxury
                </p>

                <button className="btn"><p>Book Now!</p></button>
            </div>
            <div className="homeCard grid">
                <div className="locationDiv">
                    <label htmlFor="location">Dream Room</label>
                    <input type="text" placeholder='Room Type' />
                </div>
                <div className="distDiv">
                    <label htmlFor="distance">Bed Size</label>
                    <input type="text" placeholder='Standard' />
                </div>
                <div className="priceDiv">
                    <label htmlFor="price">Price</label>
                    <input type="text" placeholder='$140-$500' />
                </div>
                <div className="">
                    <button className="btn">
                        <p>Search</p>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home