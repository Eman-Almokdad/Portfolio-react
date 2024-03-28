import ProjectsCard from '../components/ProjectsCard/ProjectsCard'
import bgfood from './../assets/images/lemon.png'
import food1 from './../assets/images/food1.png'
import food2 from './../assets/images/food2.png'
import food3 from './../assets/images/food3.png'
import food4 from './../assets/images/food4.png'
import food5 from './../assets/images/food5.png'
import food6 from './../assets/images/food6.png'
import furniture from './../assets/images/furniture.png'
import furniture1 from './../assets/images/Furniture1.png'
import furniture2 from './../assets/images/Furniture2.png'
import furniture3 from './../assets/images/Furniture3.png'
import furniture4 from './../assets/images/Furniture4.png'
import travel from './../assets/images/travel.png'
import travel1 from './../assets/images/travel1.png'
import travel2 from './../assets/images/travel2.png'
import travel3 from './../assets/images/travel3.png'
import travel4 from './../assets/images/travel4.png'

import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
const Projects = () => {
  const nextjs=<TbBrandNextjs />
  const Mongodb=<SiMongodb />
  const Reactimg=<FaReact />
  const cssimg=<IoLogoCss3 />
  const htmlimg=< FaHtml5 />
    const cardDetails =[
      {
        bgimg :bgfood,
        "title": 'healthy-food-website',
        "description": 'A multi-page website that sells healthy foods and many services ',
        "imgs" : [food1 , food2 , food3 , food4 , food5 , food6],
        "urlgh": 'https://github.com/Eman-Almokdad/healthy-food-website',
        "tools":[nextjs , Mongodb , Reactimg , cssimg , htmlimg],
      },
      {
        bgimg :travel,
        "title": 'Travel Website',
        "description": 'A multi-page website that sells displaying and selling trips ',
        "imgs" : [travel1 , travel2 , travel3 , travel4 ],
        "urlgh": 'https://github.com/Eman-Almokdad/react1',
        "tools":[ Reactimg , cssimg , htmlimg],
      },
      {
        bgimg :furniture,
        "title": 'Furniture Website',
        "description": 'A single-page website for displaying and selling furniture',
        "imgs" : [furniture1 , furniture2 , furniture3 , furniture4 ],
        "urlgh": 'https://github.com/Eman-Almokdad/task5',
        "tools":[ cssimg , htmlimg],
      },
 ]

  return (
    <div className='Projects' id='Projects'>
      <h2 className='heading'>Latest <span>Projects</span></h2>
      <div className="project-container">
      {/* <ProjectsCard cardDetails={cardDetails} /> */}
       {
          cardDetails.map((Element , index)=>{return(
            <ProjectsCard key={index} img={Element.bgimg} title={Element.title} description={Element.description}  
            popuptools={Element.tools} popupurlgh={Element.urlgh}  popupimg={Element.imgs} />
          )})
        }
        
      </div>
    </div>
  )
}

export default Projects