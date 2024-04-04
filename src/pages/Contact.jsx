import ContactSection1 from "../components/ContactSection1/ContactSection1"
import ContactSection2 from "../components/ContactSection2/ContactSection2"
import { FaUserTie } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaMobileScreen } from "react-icons/fa6";
import { FaAddressCard } from "react-icons/fa";
const Contact = () => {
  const img1=<FaUserTie/>
  const img2=<MdOutlineEmail/>
  const img3=<FaMobileScreen />
  const img4=<FaAddressCard/>
  const contactBox = [
    {
      img:img1,
      title1: "Full Name",
      title2: "Eman Adnan AL-Mokdad"
    },
    {
      img:img2,
      title1: "Email",
      title2: "emanmokdad.101@gmail.com"
    },
    {
      img:img3,
      title1: "Mobile Number",
      title2: "+9630943566101"
    },
    {
      img:img4,
      title1: "Address",
      title2: "Syria - Dara'a - BosraAlsham"
    },
  ]
  return (
    <div id="Contact">
      <h2 className='heading'> Contact <span> Me</span> </h2>
      <div className="container">
        <div className="contact-S2">

      {
        contactBox.map((Element , index)=>{return(
          <ContactSection2 key={index} img={Element.img} title1={Element.title1} title2={Element.title2} />
          )})
        }
      </div>
      <ContactSection1/>
      </div>
    </div>
  )
}

export default Contact