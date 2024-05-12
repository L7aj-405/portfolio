import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecommerce.png";
import projImg2 from "../assets/img/hoc.png";
import projImg3 from "../assets/img/sidebar.png";
import projImg4 from "../assets/img/musicapp.png";
import projImg5 from "../assets/img/admin_space.png";
import projImg6 from "../assets/img/jamilafood.png";
import projImg7 from "../assets/img/MENARA1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const reactprojects = [
    
    {
      title: "Hotel Space",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Library",
      description: "API library",
      imgUrl: projImg3,
    },
    
    {
      title: "Admin Design",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Food and Juce page",
      description: "Design & Development of tamplet",
      imgUrl: projImg6,
    },
  ];
  const laravelprojects = [
    
    
    
    {
      title: "Management of correspondence",
      description: "Court App Program",
      imgUrl: projImg4,
    },
    
    
  ];
  const complixprojects = [
    {
      title: "Website for an Office of studies",
      description: "Content management,users & project requests",
      imgUrl: projImg1,
    },
    {
      title: "Website for Menara Holding",
      description: "Content management,users, Order & Products ",
      imgUrl: projImg7,
    },
    
    
    
    
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I take pride in my ability to seamlessly connect the dots
                    between front-end and back-end, creating cohesive
                    applications that not only look good but also perform
                    exceptionally well.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">React & Design</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Laravel & System</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Complex Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {reactprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {laravelprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {complixprojects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
