import './ProjectsCard.css'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Popup from './../popup/popup';
import { useState } from 'react';
const ProjectsCard = ({img , title , description , popuptools , popupurlgh , popupimg}) => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <>

            <div className="project-box">
                <img src={img} alt="" />
                <div className="project-layer">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <button className='btnCard' onClick={() => { setButtonPopup(true) }}><FaArrowUpRightFromSquare /></button>
                </div>
            </div>
            <Popup trigger={buttonPopup} settrigger={setButtonPopup} popupimg={popupimg} description={description} popuptools={popuptools} popupurlgh={popupurlgh} >
                
            </Popup>
        </>
    )
}

export default ProjectsCard
