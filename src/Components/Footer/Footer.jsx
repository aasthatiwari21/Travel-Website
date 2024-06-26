import React, {useEffect} from 'react'
import './footer.scss'
import video2 from '../../assets/video2.mp4'
import { FiChevronDown, FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay type='video/mp4' muted/>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
            <div className="text" data-aos="fade-up">
              <small>Keep In Touch</small>
              <h2>Travel with us</h2>
            </div>

            <div className="inputDiv flex">
              <input type='text' data-aos="fade-up" placeholder='Enter your Address'/>
              <button className='btn flex' type='submit'>
                SEND <FiSend className='icon'/>
              </button>
            </div>
        </div>

        <div className='footerCard flex'>
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
               <MdOutlineTravelExplore className='icon'/>  Travel
              </a>
            </div>

              <div className="footerParagraph" data-aos="fade-up">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel odit nam temporibus ducimus veniam perferendis, reiciendis voluptas consequuntur, aperiam dolorum excepturi quae. Odio repellendus ducimus sunt voluptatibus quia reiciendis quam?
              </div>

              <div className="footerSocial flex" data-aos="fade-up">
                <AiOutlineTwitter className='icon'/>
                <AiFillYoutube className='icon'/>
                <AiFillInstagram className='icon'/>
                <FaTripadvisor className='icon'/>
              </div>
          </div>

          <div className="footerLinks grid " data-aos="fade-up">
            <div className="linkGroup" data-aos="fade-up" data-aos-duration="4000">
              <span className='groupTitle'>OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>
            {/* Group 2 */}

            <div className="linkGroup" data-aos="fade-up" data-aos-duration="5000">
              <span className='groupTitle'>OUR PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Booking
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                RentCars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
