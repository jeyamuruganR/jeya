import project1 from '../Images/portfillo_web.jpg'
import project2 from '../Images/FlappyBird.jpg'

const Project = () =>{

    return(

        <section id="project">

            <div className="head">
                <h1>Projects</h1>
            </div>

            <div className="container">
                <div className="project pro1">
                    <div className="proimage">
                            <img src={project1} alt=""  />
                    </div>
                    <div className="text_container">
                        <div className="pro-title">
                            <h1>Portfillo</h1>
                            <h6>Responcive website</h6>
                        </div>
                        <div className="pro-cntent">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, magnam perspiciatis praesentium qui officiis aperiam nam eum nostrum repellat pariatur cumque quae provident id sint suscipit at doloremque aliquid quis.</p>
                        </div>
                        <div className="but">
                            <button>DEMO</button>
                            <button>sourcecode</button>
                            
                        </div>
                    </div>
                    
                </div>
                <div className="project pro2">
                    <div className="proimage">
                        <img src={project2} alt="" />
                    </div>
                    <div className="text_container">
                        <div className="pro-title">
                            <h1>FlappyBirad</h1>
                            <h6>Java AWT project</h6>
                        </div>
                        <div className="pro-cntent">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, magnam perspiciatis praesentium qui officiis aperiam nam eum nostrum repellat pariatur cumque quae provident id sint suscipit at doloremque aliquid quis.</p>
                        </div>
                        <div className="but">
                            <button>DEMO</button>
                            <button>sourcecode</button>
                            
                        </div>
                    </div>
                </div>
                <div className="project pro3">
                    <div className="proimage">
                    <img src={project2} alt="" />
                    </div>
                    <div className="text_container">
                        <div className="pro-title">
                            <h1>Project 1</h1>
                        </div>
                        <div className="pro-cntent">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, magnam perspiciatis praesentium qui officiis aperiam nam eum nostrum repellat pariatur cumque quae provident id sint suscipit at doloremque aliquid quis.</p>
                        </div>
                        <div className="but">
                            <button>DEMO</button>
                            <button>sourcecode</button>
                            
                        </div>
                    </div>
                </div>
                <div className="project pro4">
                    <div className="proimage">
                    <img src={project2} alt="" />
                    </div>
                    <div className="text_container">
                        <div className="pro-title">
                            <h1>Project 1</h1>
                        </div>
                        <div className="pro-cntent">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, magnam perspiciatis praesentium qui officiis aperiam nam eum nostrum repellat pariatur cumque quae provident id sint suscipit at doloremque aliquid quis.</p>
                        </div>
                        <div className="but">
                            <button>DEMO</button>
                            <button>sourcecode</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Project;