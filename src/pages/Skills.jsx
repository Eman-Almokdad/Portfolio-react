import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import BoxSkills from "../components/BoxSkills/BoxSkills";



const Skills = () => {
  const nextjs = <TbBrandNextjs />
  const Mongodb = <SiMongodb />
  const Reactimg = <FaReact />
  const jsimg = <IoLogoJavascript />
  const Bootstrapimg = <FaBootstrap />
  const cssimg = <IoLogoCss3 />
  const htmlimg = < FaHtml5 />
  const gitimg = < FaGitAlt />
  const githubimg = <  FaGithubSquare />
  const skillBox = [
    {
      img: Mongodb,
      title: "Mongodb"
    },
    {
      img: nextjs,
      title: "Nextjs"
    },
    {
      img: Reactimg,
      title: "Reactjs"
    },
    {
      img: jsimg,
      title: "Javascript"
    },
    {
      img: Bootstrapimg,
      title: "Bootstrap"
    },
    {
      img: cssimg,
      title: "CSS"
    },
    {
      img: htmlimg,
      title: "HTML"
    },
    {
      img: gitimg,
      title: "Git"
    },
    {
      img: githubimg,
      title: "GITHUB"
    },

  ]
  return (
    <div className='inner' id="Skills">
      <div className='header'>
        <h2>My <span>Skills</span></h2>
      </div>
      <div className='container'>
        {skillBox.map((element, index) => {
          return (
            <BoxSkills key={index} img={element.img} title={element.title} />
          )
        })}
      </div>

    </div>
  )
}

export default Skills