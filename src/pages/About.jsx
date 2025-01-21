// import aboutImage from '../Images/jeyamurugan_About.png'
import aboutImage from '../Images/jeyamurugan_about2.png'

import  {motion} from 'framer-motion'
import {fadeIn} from '../variants'
const About = () =>{

   const Jeya = () =>{
    console.log("jeya");
    
   }

    return(
        <section id="about" onLoad={Jeya}>
            <div className='head'>
                <h1>ABOUT</h1>
            </div>
            <div
            
            
            className="photo">
                <div className="frame"></div>
                <img src={aboutImage} alt="" />
            </div>  
            <div
            
            className="content">
                <p>Hi! My name is Jeyamurugan R, and I am a developer from Ramanathapuram, currently living in Chennai. I have a Master’s degree in Business Administration with a focus on System Management, which I finished in 2024. I also have a Bachelor’s degree in Mechanical Engineering from Anna University, where I graduated in 2021.
                I enjoy working with programming languages like Java and Python, and I know how to build websites using HTML, CSS, and JavaScript. I also have experience with databases using SQL and frameworks like Spring Boot and Hibernate
                </p>
                <p>I have certifications in Java development, web development, Python programming, and AutoCAD. I have good problem-solving skills and enjoy working with others. I am also willing to move for a job opportunity.</p>
              </div>
        </section>
    );
}

export default About;