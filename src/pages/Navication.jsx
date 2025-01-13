import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faGears } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faContactCard } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';


const Navication = () =>{

    

    return(

        <div className="navcontainer">
            <div className="logo">
                    <h2>JEYAMURUGAN</h2>
            </div>
            
            <div className="nav">
                        
                    <ul>

                        <li><a href="#home"><span>Home</span> <span className='home_icone'><FontAwesomeIcon icon={faHome} /></span></a></li>
                        <li><a href="#about" ><span>About</span><span className='about_icone'><FontAwesomeIcon icon={faUser} /></span></a></li>
                        <li><a href="#project" ><span>Project</span><span className='project_icone'><FontAwesomeIcon icon={faProjectDiagram}  shake/></span></a></li>
                        <li><a href="#skills" ><span>Skill</span><span className='skill_icone'><FontAwesomeIcon icon={faGears} /></span></a></li>
                        <li><a href="#eduction" ><span>Eduction</span><span className='eduction_icone'><FontAwesomeIcon icon={faSchool} /></span></a></li>
                        <li><a href="#contect" ><span>Contect</span><span className='contect_icone'><FontAwesomeIcon icon={faContactCard} /></span></a></li>
                    </ul>
            </div>
        </div>
    );
}

export default Navication