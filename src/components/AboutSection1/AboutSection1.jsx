import './AboutSection1.css'
import imgabout from './../../assets/images/aboutPicture.png'
const AboutSection1 = () => {
  return (
    <div className="about">
    <div className="about-img">
        <img src={imgabout} alt="Profile Picture"/>
    </div>
    <div className="about-content">
        <h2 className="heading">ABOUT <span>Me</span> </h2>
        <p>I am a front - end web developer from Dara’a , Syria , specializing
in creating engaging and user - friendly interfaces . With expertise
in HTML , CSS , JavaScript و Reactjs , Nextjs and Mongodb , I transform designs into
interactive websites and applications . I am passionate about
delivering visually appealing and responsive solutions that provide
exceptional user experiences . Constantly learning and staying up -
to - date with the latest technologies , I am dedicated to delivering
high - quality and efficient front - end development .</p>
<a href="#" className='btn'>Read more</a>
    </div>
    

    </div>
  )
}

export default AboutSection1
