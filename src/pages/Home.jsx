import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Homeimg from '../Images/view-3d-man-using-laptop-removebg-preview.png'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faHackerrank } from '@fortawesome/free-brands-svg-icons';
import  Earth from '../Images/earth.mp4'
const Home = () =>{

   const phoneNumber = "919095268014"; 
  const message = "Hello, I want to chat with you!";
    return(

        <section id="home">
            <div className="video">
                <video autoPlay loop muted >
                <source src={Earth} type='video/mp4'/>
                </video>
            </div>
            <div className="left">
                <div className="content" >
                    <span></span>
                    <h1>Hi There ! I am  </h1>
                    <h2>Jeyamurugan <span>Rajendiran</span> <span>BE.MBA</span></h2>
                    <h4>Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error exercitationem, aspernatur enim recusandae cum quaerat nostrum aliquid, sapiente earum fugiat, ipsam dignissimos vitae soluta corrupti reprehenderit sunt. Soluta, eius!</p>
                    <div className="button">
                        <button><a href="#about">about  <FontAwesomeIcon icon={faUser} /> </a></button>
                        <button><a href="../Images/JEYAMURUGAN_Resume1.pdf" download="jeyamurugan.pdf" target='_blank' rel="noopener noreferrer">Resume  <FontAwesomeIcon icon={faDownload} /></a></button>
                    </div>
                    <div className="icons">
                        <ul>
                            <li><a href=""><FontAwesomeIcon icon={faEnvelope}  shake/></a></li>
                            
                            <li><a href=""><FontAwesomeIcon icon={faInstagramSquare} shake /></a></li>
                            <li><a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                            target="_blank"
                            rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsappSquare}  shake/></a></li>
                            <li><a href="https://www.hackerrank.com/profile/jeyamuruganraje1" target='_blank'><FontAwesomeIcon icon={faHackerrank} shake /></a></li>
                            
            
                        </ul>
                        </div>
                </div>
            </div>

            <div className="right">
               <div>
               <img src={Homeimg} alt="" />
               </div>
            </div>
           

        </section>
    );
}

export default Home;