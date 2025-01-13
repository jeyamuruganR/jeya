import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { ContactUs } from './ConactUs';


const Contect = ()=>{

return(
    <section id="contect">
        <div className="content">
            <div className="title">
                <h1>CONTECT</h1>
            </div>
            <div className="mass">
            <ContactUs/>
                </div>
            <div className="icones">
            <ul>
                <li><a href=""><FontAwesomeIcon icon={faEnvelope}  shake/></a></li>
                <li><a href=""><FontAwesomeIcon icon={faFacebook} shake /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faInstagramSquare} shake /></a></li>
                <li><a href=""><FontAwesomeIcon icon={faWhatsappSquare}  shake/></a></li>
                <li><a href=""><FontAwesomeIcon icon={faHackerrank} shake /></a></li>
                

            </ul>
            </div>
            <div className="addr">

                <address>
                    6/124 sadaiyaneri - sdaiyaneri(post)
                    Mudukulthur(TK) Ramanathapuram(DIS)
                </address>
            </div>
          
        

           
        </div>
    </section>
);


}

export  default Contect