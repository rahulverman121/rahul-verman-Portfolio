import './Contact.css';
import {SiGmail, SiWhatsapp} from 'react-icons/si';
import {BsTelephoneFill} from 'react-icons/bs';

function Contact() {
    return (
        <section id="contact">
            
            <div class="title">Contact Me</div>
            <hr width="250rem" align="left" color="#d4aa8c"/>
            
            <section className="contacs">
              
              <a href="mailto:rahulverman44@gmail.com" target="_blank" rel="noopener noreferrer" className="contac">
                <SiGmail size="5rem" color='#e94034'/>
                <div className='contactitle'>rahulverman44@gmail.com</div>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=%2B918904323240&text=Hi+Rahul%2C+I+went+through+your+profile+and+quite+liked+it+and+we+are+interested+having+you+in+our+organization." target="_blank" rel="noopener noreferrer" className="contac">
                <SiWhatsapp size="5rem" color='#44c052'/>
                <div className='contactitle'>+91 8904323240</div>
              </a>
              <a href="tel:+918904323240" target="_blank" rel="noopener noreferrer" className="contac">
                <BsTelephoneFill size="5rem" color='#0094c6'/>
                <div className='contactitle'>+91 8904323240</div>
              </a>
            </section>
            
        </section>
    )
}
export default Contact;