import { useRef, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import contactImg from "../assets/img/contact-img1.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

 const Contact = () => {
  const form = useRef();
  const [error,setError]=useState('')
  const [fname,setFame]=useState('')
  const [lname,setLame]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')
const [email,setemail]=useState('')

  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    if (!email || !fname   || !lname || !phone || !message) {
      setError("All fields must be filled")
      setInterval(()=>{
         setError("")
         setButtonText("Send");
      },5000)
 }
 if (email && fname   && lname && phone && message) {

   emailjs.sendForm('service_9ka1l7u', 'template_5zn3xyd', form.current,{
     publicKey: 'CokpaNu_FGOFr5GKo',
   })
   .then((result) => {
    if(result.text){
      setFame('')
      setLame('')
      setPhone('')
      setMessage('')
      setemail('')
      setButtonText("Send");
    }

}, (error) => {
    setError(error.text);
});

}
 }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  {error &&
                  <Alert variant="warning">{error}</Alert>}
                  <form ref={form}  onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={fname} placeholder="First Name" onChange={(e) => setFame( e.target.value)}  name="form_fname"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={lname} placeholder="Last Name" onChange={(e) => setLame( e.target.value)}  name="form_lname"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={email} placeholder="Email Address" onChange={(e) => setemail( e.target.value)}  name="form_email"/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={phone} placeholder="Phone No." onChange={(e) => setPhone( e.target.value)}  name="form_phone"/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={message} placeholder="Message" onChange={(e) => setMessage( e.target.value)} name="message"></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact
