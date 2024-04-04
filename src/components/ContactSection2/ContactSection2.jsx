import './ContactSection2.css'

const ContactSection2 = ({ img , title1 , title2}) => {
  return (
    <div className='contactcard'>
        <div className="img">{img}</div>
        <div className='title'>

            <h4>{title1}</h4>
            <p>{title2}</p>
    </div>
    </div>
  )
}

export default ContactSection2