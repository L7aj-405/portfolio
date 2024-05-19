import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/baner-imag1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ParticlesCompennet from "./ParticlesCompennet";
import { tsParticles } from 'tsparticles';
import resume from '../assets/files/resume.pdf'
import { FaFile, FaFilePdf } from "react-icons/fa";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "Web Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  

  return (
    <section className="banner" id="home">
      <Container>
        <span className="html-tag">{"<section>"}</span>
        
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="html-tag">{"<span>"}</span>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <span className="html-tag">{"</span>"}</span>
                  <br/>
                  <span className="html-tag">{"<h1>"}</span>
                  <h1>{`Hi! I'm Mohamed`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "Full Stack Developer", "Web Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <span className="html-tag">{"</h1>"}</span><br/>
                  <span className="html-tag">{"<p>"}</span>
                  <p>Hello! I'm Agday Mohamed, a passionate and versatile full-stack developer with a deep love for crafting innovative and efficient solutions across the entire software development lifecycle.</p>
                  <span className="html-tag">{"</p>"}</span><br/>
                  <span className="html-tag">{"<button>"}</span>
                  <a href={resume} download style={{textDecoration:'none'}}>
                  <button>My Resume <FaFilePdf/> </button>
                  </a>
                  <span className="html-tag">{"</button>"}</span><br/>
                  <span className="html-tag">{"<button>"}</span>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  <span className="html-tag">{"</button>"}</span><br/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <span className="html-tag">{"<img"}</span><br/>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn " : ""}>
                  <div className="contaner-image">

                    <img className="header-img" src={headerImg} alt="Header Img" />
                  </div>
                  
                </div>}
            </TrackVisibility>
            <span className="html-tag">{"/>"}</span><br/>
          </Col>
        </Row>
        <span className="html-tag">{"</section>"}</span>
      </Container>
    </section>
  )
}
export default Banner
