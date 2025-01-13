import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Homeimg from '../Images/view-3d-man-using-laptop-removebg-preview.png'
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Home = () =>{

    return(

        <section id="home">

            <div className="left">
                <div className="content" >
                    <h1>Hi There ! I am  </h1>
                    <h2>Jeyamurugan <span>Rajendiran</span> <span>BE.MBA</span></h2>
                    <h4>Developer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error exercitationem, aspernatur enim recusandae cum quaerat nostrum aliquid, sapiente earum fugiat, ipsam dignissimos vitae soluta corrupti reprehenderit sunt. Soluta, eius!</p>
                    <div className="button">
                        <button><a href="#about">about  <FontAwesomeIcon icon={faUser} /> </a></button>
                        <button><a href="../Images/JEYAMURUGAN_Resume1.pdf" download="jeyamurugan.pdf" target='_blank' rel="noopener noreferrer">Resume  <FontAwesomeIcon icon={faDownload} /></a></button>
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