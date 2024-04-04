
import './Hero.css'
import Heroimg from './../../assets/images/Hero.svg'
import cv from './../../../public/Eman-CV.pdf'
const Hero = () => {

  return (
    <div id="hero"   >
        <div className='content'>
        <h1 >I am Eman Almokdad </h1>
        <h3 >I am a <span>Front-End</span> Developer .  </h3>
        <p > Our Main Goal to help & Satisficed the Clients by web development solutions .</p>
        <div className="social">
            <a href="#" > <i className="fa-brands fa-linkedin-in"></i>  </a>
            <a href="#" > <i className="fa-brands fa-instagram"></i>  </a>
            <a href="#" >  <i className="fa-brands fa-facebook"></i> </a>
            <a href="#" > <i className="fa-brands fa-github"></i>  </a>
        </div>
        <a href="Eman-CV.pdf" download={cv} className='btn'>Download CV</a>
    </div>
    <div className='imgContainer'>
    <img src={Heroimg} alt="" />
    </div>
        
    </div>
  )
}

export default Hero
