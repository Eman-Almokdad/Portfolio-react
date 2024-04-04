import './ContactSection1.css'

const ContactSection1 = () => {
  return (

        <form action="#" className='contact-S1'>
            <div className="input-box">
                <input type="text" placeholder='Full Name' />
                <input type="email" placeholder='Email' />
            </div>
            <div className="input-box">
                <input type="text" placeholder='Mobile Number' />
                <input type="text" placeholder='Address' />
            </div>
            <input type="submit" value="Send Message" className='btn' />
        </form>
  )
}

export default ContactSection1