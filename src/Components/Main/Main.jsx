import React, {useEffect} from 'react'
import './main.scss'

import img from '../../assets/img.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data= [
  {
    id: 1,
    imgScr: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL  RELAX',
    fees: '$700',
    description: "The epitome  of romance , Bora Bora  is one of the travel destinations  in the World . the place is known for its luxirous stays and adventurous activities"
  },
  {
    id: 2,
    imgScr: img1,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL  RELAX',
    fees: '$200',
    description: "The epitome  of romance , Bora Bora  is one of the travel destinations  in the World . the place is known for its luxirous stays and adventurous activities"
  },
  {
    id: 3,
    imgScr: img2,
    destTitle: 'Eiffle Tower',
    location: 'Paris',
    grade: 'CULTURAL  RELAX',
    fees: '$700',
    description: "The epitome  of romance , Bora Bora  is one of the travel destinations  in the World . the place is known for its luxirous stays and adventurous activities"
  },
  {
    id: 4,
    imgScr: img3,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL  RELAX',
    fees: '$300',
    description: "The epitome  of romance , Bora Bora  is one of the travel destinations  in the World . the place is known for its luxirous stays and adventurous activities"
  },
  {
    id: 5,
    imgScr: img4,
    destTitle: 'Big Ben',
    location: 'London',
    grade: 'CULTURAL  RELAX',
    fees: '$900',
    description: "The epitome  of romance , Bora Bora  is one of the travel destinations  in the World . the place is known for its luxirous stays and adventurous activities"
  },
  {
    id: 6,
    imgScr: img5,
    destTitle: 'Chilang May',
    location: 'Thailand',
    grade: 'CULTURAL  RELAX',
    fees: '$500',
    description: "The epitome  of romance , Bora Bora  is one of the travel destinations  in the World . the place is known for its luxirous stays and adventurous activities"
  },
  {
    id: 7,
    imgScr: img6,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL  RELAX',
    fees: '$600',
    description: "The epitome  of romance , Bora Bora  is one of the travel destinations  in the World . the place is known for its luxirous stays and adventurous activities"
  },

  {
    id: 8,
    imgScr: img7,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL  RELAX',
    fees: '$700',
    description: "The epitome  of romance , Bora Bora  is one of the travel destinations  in the World . the place is known for its luxirous stays and adventurous activities"
  },
]

const Main = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    
   <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most visited destination
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgScr , destTitle ,location , grade , fees , description})=> {
            return(
              <div key={id} className='singleDestination' data-aos="fade-up">
                {/* {

                } */}
                <div className='imageDiv'>
                  <img src={imgScr} alt={destTitle}></img>
                </div>
                <div className="cardInfo">
                  <h4 className="descTitle">{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade} <small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    Details <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
      }
      </div>
   </section>
  )
}

export default Main
