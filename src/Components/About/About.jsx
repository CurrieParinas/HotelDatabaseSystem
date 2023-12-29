import React, {useEffect} from 'react'
import './About.css'

import image1 from '../../Assets/guest.jpg'
import image2 from '../../Assets/room.jpg'
import image3 from '../../Assets/review.jpg'

import video from '../../Assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

  return (
    <section className="about section">
        <div className="secContainer">
            <h2 className="title">
                Why Mian Curocho?
            </h2>

            <div className="mainContent aboutContent container grid">
                <div className="singleItem">
                    <img src={image1} alt="" />
                    <h3>
                        500+ Guests
                    </h3>
                    <p>
                    Enjoy a lavish stay at our hotel, known for 
                    its refined services, attracting over 500 satisfied guests 
                    every month.
                    </p>
                </div>
                <div className="singleItem">
                    <img src={image2} alt="" />
                    <h3>
                        730+ Rooms
                    </h3>
                    <p>
                    Choose from a variety of inviting room types at our hotel, 
                    ranging from cozy standard rooms for a comfortable retreat 
                    to spacious suites with breathtaking views, providing a 
                    tailored accommodation experience for every traveler.
                    </p>
                </div>
                <div className="singleItem">
                <img src={image3} alt="" />
                    <h3>
                        1100+ Reviews
                    </h3>
                    <p>
                    <b>"</b>My recent stay at this hotel was truly delightful. The 
                    perfect blend of simplicity and refined service made it a 
                    memorable experience. From the cozy rooms to the attentive 
                    staff, every detail contributed to a comfortable and 
                    welcoming atmosphere. Looking forward to my next visit!<b>"</b>
                    </p>
                </div>
            </div>

            <div className="videoCard container">
                <div className="cardContent grid">
                    <div className="cardText">
                        <h2>
                            Unforgettable experiences, timeless memories
                        </h2>
                        <p>
                            Discover a one-of-a-kind home, you'll never find a place 
                            quite like this. Secure your reservation for an unparalleled 
                            experience
                        </p>
                    </div>

                    <div className="cardVideo">
                        <video src={video} autoPlay loop muted type="video/mp4"></video>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default About