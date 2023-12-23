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
                <h1 data-aos="fade-up" className="title">
                    Your Second Home, Mian Curocho
                </h1>
                <p data-aos="fade-up" data-aos-duration="2500"className="subTitle">
                    A place where your comfort is met with unparalleled luxury
                </p>

                <button data-aos="fade-up" data-aos-duration="3000" className="btn"><p>Book Now!</p></button>
            </div>
            <div className="homeCard grid">
                <div data-aos="fade-right" data-aos-duration="2000"className="locationDiv">
                    <label htmlFor="location">Dream Room</label>
                    <input type="text" placeholder='Room Type' />
                </div>
                <div data-aos="fade-right" data-aos-duration="2000"className="distDiv">
                    <label htmlFor="distance">Bed Size</label>
                    <input type="text" placeholder='Standard' />
                </div>
                <div data-aos="fade-right" data-aos-duration="2000"className="priceDiv">
                    <label htmlFor="price">Price</label>
                    <input type="text" placeholder='$140-$500' />
                </div>
                <div data-aos="fade-left" data-aos-duration="2000"className="">
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