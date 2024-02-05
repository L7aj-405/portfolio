import React from 'react'
import { Col, Row } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"
import headerImg from "../assets/img/baner-imag1.jpg";

function About() {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about-bx wow zoomIn">
                        <h2>About</h2>
                        <div >
                        <Row className="aligh-items-center">

                        <Col xs={12} md={6} xl={5}>

                            <div className=''>
                            <img className="about-img" src={headerImg} alt="Header Img" />

                            </div>
                        </Col>
                        <Col xs={12} md={6} xl={7} >

                            
                            <p>Passionate and skilled Full Stack Developer, specializing in the creation of robust web applications. Possessing a strong expertise in both front-end and back-end development, I have advanced skills in technologies such as React JS, Laravel, and SQL. My academic journey at ISTA NTIC Beni Mellal, coupled with hands-on projects, has enhanced my understanding of digital development concepts.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        </Col>
                        </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default About