import './popup.css'

const Popup = ({trigger ,settrigger, description,  popuptools , popupurlgh , popupimg}) => {
  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
      <div className='container'>
        <div className='imgContiner'>
          {popupimg?.map((Element ,index)=>{return(
            <img src={Element} key={index} alt="" />
          )})}
{/*           <img src={content.popup.img.food1} alt="" />
          <img src={content.popup.img.food2} alt="" />
          <img src={content.popup.img.food3} alt="" />
          <img src={content.popup.img.food4} alt="" />
          <img src={content.popup.img.food5} alt="" />
          <img src={content.popup.img.food6} alt="" /> */}
        </div >
        <div className='titleContiner'>
        <h2>{description}</h2>
        <h3>Tools</h3>
        <div className='tools'>
          {popuptools?.map((Element )=>{return(
            Element
          )})}
{/*           {content.popup.tools.nextjs}
          {content.popup.tools.Mongodb}
          {content.popup.tools.Reactimg}
          {content.popup.tools.cssimg}
          {content.popup.tools.htmlimg} */}
        </div>
        <a href={popupurlgh}>Go To GitHub</a>
        </div>
        </div>
        <button className='close-btn' onClick={()=>settrigger(false)}>Close</button>
        
      </div>
    </div>
  ) :"";
};

export default Popup;