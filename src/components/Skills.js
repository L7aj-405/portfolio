import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJs, FaLaravel, FaPhp, FaReact, FaWordpress } from "react-icons/fa";
import { SiCanva, SiMicrosoftoffice, SiMongodb, SiMysql, SiAdobepremierepro } from "react-icons/si";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>My journey in the tech world began with a fascination for coding, and over the years, I've honed my skills in both front-end and back-end technologies</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                
                                <h5>Back-End</h5>
                                <div className="item-content">
                                  <FaLaravel className="h2 text-danger"/>
                                  <FaPhp className="h2 text-primary"/>
                                  <SiMysql className="h2 text-secondary"/>
                                  <SiMongodb className="h2 text-success"/>
                                </div>
                            </div>
                            <div className="item">
                                
                                <h5>Front-End</h5>
                                <div className="item-content">
                                  <FaReact className="h2 text-info"/>
                                  <FaCss3Alt className="h2 text-primary"/>
                                  <FaHtml5 className="h2 text-danger"/>
                                  <FaJs className="h2 text-warning"/>
                                </div>
                            </div>
                            <div className="item">
                                
                                <h5>Web Design</h5>
                                <div className="item-content">
                                  <FaFigma className="h2 text-info"/>
                                  <SiCanva className="h2 text-primary"/>
                                  
                                </div>
                            </div>
                            <div className="item">
                                
                                <h5>Version control</h5>
                                <div className="item-content">
                                  <FaGitAlt className="h2 text-danger"/>
                                  <FaGithub className="h2 "/>
                                  
                                </div>
                            </div>
                            <div className="item">
                                
                                <h5>Other Tools</h5>
                                <div className="item-content">
                                  <SiMicrosoftoffice className="h2 text-danger"/>
                                  <SiAdobepremierepro className="h2 text-primary"/>
                                  <FaWordpress className="h2 text-info"/>
                                  
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
export default Skills
