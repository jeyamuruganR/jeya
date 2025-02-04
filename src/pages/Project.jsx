import project1 from '../Images/portfillo_web.jpg'
import project2 from '../Images/FlappyBird.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
const Project = () =>{

    return(

        <section id="project">

            <div className="head">
                <h1>Projects</h1>
            </div>

            <div className="container">
                <div className="project pro1">
                    
                    <div className="innerBox">
                        <div className="proimage">
                                <img src={project1} alt=""  />
                        </div>
                        <div className="detailes">
                        <div className="pro-title">
                            <h1>Portfillo</h1>
                            <h6>Responcive website</h6>
                        </div>
                       
                        <div className="but">
                        <button>DEMO</button>
                            <button>sourcecode</button>
                            
                        </div>


                        </div>
                    </div>
                    
                </div>
                <div className="project pro2">
                    
                    <div className="innerBox">
                    <div className="proimage">
                        <img src={project2} alt="" />
                    </div>
                        <div className="detailes">
                        <div className="pro-title">
                            <h1>FlappyBirad</h1>
                            <h6>Java AWT project</h6>
                        </div>
                       
                        <div className="but">
                        <button>DEMO</button>
                            <button>sourcecode</button>
                            
                        </div>
                        </div>
                    </div>
                </div>
                <div className="project pro3">
                    
                    <div className="innerBox">
                    <div className="proimage">
                    <img src={project2} alt="" />
                    </div>
                        <div className="detailes">
                        <div className="pro-title">
                            <h1>FlappyBirad</h1>
                            <h6>Java AWT project</h6>
                        </div>
                       
                        <div className="but">
                        <button>DEMO</button>
                            <button>sourcecode</button>
                            
                        </div>

                    
                        </div>
                    </div>
                </div>

                {/*  project  */}
                <div className="project pro4">
                    
                    <div className="innerBox">
                    <div className="proimage">
                    <img src={project2} alt="" />
                    </div>
                    <div className="detailes">
                        <div className="pro-title">
                            <h1>FlappyBirad</h1>
                            <h6>Java AWT project</h6>
                        </div>
                       
                        <div className="but">
                            <button>DEMO</button>
                            <button>sourcecode</button>
                            
                        </div>
                        </div>
                    </div>
                </div>


                
            </div>
        </section>
    );
}
export default Project;