import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../../Assets/logo2nobg.png'
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";



const Navbar = () => {

    const [active, setActive] = useState('navBar')
    const showNav=()=> {
        setActive('navBar activeNavbar')
    }

    const removeNav=()=> {
        setActive('navBar')
    }

    const [transparent, setTransparent] = useState('header')
    const addBg = () => {
        if(window.scrollY >= 300) {
            setTransparent('header activeHeader')
        }
        else {
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg)

  return (
    <section className="navBarSection">
        <div className={transparent}>

            <div className="logoDiv">
                <img src={Logo} className="Logo" alt="logo" /> 
            </div>

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="" className="navLink">
                            Home
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="" className="navLink">
                            Rooms
                        </a>
                    </li>
                    <li className="navItem">
                        <a href="" className="navLink">
                            Contact
                        </a>
                    </li>
                    <div className="headerBtns flex">
                        <button className="btn loginBtn"><a href="">Login</a></button>
                    </div>
                </ul>
                <div onClick={removeNav} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>

            <div onClick={showNav} className="toggleNavbar">
                <TbGridDots className='griddots icon' />
            </div>
        </div>
    </section>
  )
}

export default Navbar