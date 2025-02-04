
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhotoFilm } from "@fortawesome/free-solid-svg-icons";

const Skills = () =>{

    const Programming_Languages = ["Java","Python", "C"];
    const Web_Development = ["Html","Css", "jave Script"];
    const Database = ["sql","MYSQL", "Oracle"];
    const Front_End_Framework =["React"];
    const Back_End_Frameworks = ["Spring Boot","Servlet"];
    const Database_ORM = ["Hibernate","JDBC"];
    

    

    return(


        <section id="skills">
            <div className="title">
                <h1>Skills</h1>
            </div>
            <div className="programilSkill">
            <div className="programing language">
                <div className="head">Programing Language</div>
                {Programming_Languages.map((language, index) =>(
                <div key={index}
                className={language === "Java" ? "java" : language === "Python" ? "python" : language === "C" ? "c" :""}
                
                ><h4>{language}</h4> <div className="bar"><span></span></div></div>
                ))}
            </div>


            <div className="Web_Development language">
                <div className="head">Web_Development</div>
                {Web_Development.map((language, index) =>(
                <div key={index}
                
                className={
                    language === "Html" ?" html" :language === "Css" ?"css" :language === "jave Script" ?"js":""
                }
                
                ><h4>{language}</h4> <div className="bar"><span></span></div></div>
                ))}
            </div>

            <div className="Database language">
                <div className="head">Database</div>
                {Database.map((language, index) =>(
                <div key={index}
                
                className={
                    language === "sql" ?"sql" : language === "MYSQL" ? "mysql" : language === "Oracle" ? "oracle" :""
                }
                
                ><h4>{language}</h4> <div className="bar"><span></span></div></div>
                ))}
            </div>
            </div>


            <div className="frameWork">

            <div className="Back_End Frame_works">
                <div className="head">Back_End_Frameworks</div>
                {Back_End_Frameworks.map((language, index) =>(
                <div className="outer_circle">
                    <div className="inner_circle">
                        <span key={index}>{language}</span>
                        <span className={
                            language === "Spring Boot" ? "SB" :language ==="Servlet" ? "servlet" :""
                        }></span>
                    </div>
                </div>

                ))}
            </div>


            <div className="Front_End Frame_works">
                <div className="head">Front_End_Framework</div>
                {Front_End_Framework.map((language, index) =>(
                <div className="outer_circle">
                    <div className="inner_circle">
                        <span key={index}>{language}</span>
                        <span className={
                            language ==="React" ?"react":""
                        }></span>
                    </div>
                </div>

                ))}
            </div>

            <div className="Frame_works Database">
                <div className="head">Database_ORM</div>
                {Database_ORM.map((language, index) =>(
                <div className="outer_circle">
                    <div className="inner_circle">
                        <span key={index}>{language}</span>
                        <span className={
                            language ==="Hibernate" ?"hibernet": language ==="JDBC" ? "jdbc":""
                        }></span>
                    </div>
                </div>

                ))}
            </div>



            </div>

            <div className="tools">

                <ul>
                    <li>Strong analytical and problem-solving skills</li>
                    <li>Excellent communication and teamwork abilities</li>
                    <li>Willing to relocate for the right opportunity </li>
                </ul>

            </div>


        </section>
    );
}

export default Skills;