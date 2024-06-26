import React , {useEffect} from 'react'
import { useState } from 'react'
import './navbar.css'
import './navbar.scss'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { IoCloseCircle } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Navabar = () => {
  const [active, setActive] = useState('navBar')

  //function for toggle Navbar

  const showNav = ()=> {
    setActive(' navBar activeNavBar')
  }

  const removeNav = ()=> {
    setActive('navBar')
  }

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='navBarSection'>
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1> <MdOutlineTravelExplore className= 'icon' />Travel.</h1>
                </a>
            </div>

            <div className={active}>
              <ul className='navLists flex' data-aos="fade-up">
                <li className='navItem'>
                    <a href="#" className="navlink">
                      Home
                    </a>
                </li>
                <li className='navItem'>
                    <a href="#" className="navlink">
                      Packages
                    </a>
                </li>
                <li className='navItem'>
                    <a href="#" className="navlink">
                      Shop
                    </a>
                </li>
                <li className='navItem'>
                    <a href="#" className="navlink">
                      About
                    </a>
                </li>
                <li className='navItem'>
                    <a href="#" className="navlink">
                      Contact
                    </a>
                </li>
                <li className='navItem'>
                    <a href="#" className="navlink">
                      Pages
                    </a>
                </li>
                <button className='btn'>
                  <a href="#">Book Now</a>
                </button>

              </ul>
              <div className="closeNavBar" onClick={removeNav}>
              <IoCloseCircle className='icon'/>
              </div>
            </div>
            <div className="toggleNavbar" onClick={showNav}>
              <TbGridDots className='icon' />
            </div>
        </header>
    </section>
  )
}
export default Navabar
