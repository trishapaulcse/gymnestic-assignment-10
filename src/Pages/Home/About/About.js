import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import HomeImg from "../../../images/gym1.jpg";
import SuccesImg from "../../../images/gym2.jpg"
import Signature from "../../../images/gym3.jpg"
const About = () => {
    return (
        <div className="about-area">
            <Container>
                <Row>
                    <Col>
                        <div className="name-me">
                            <img className="mx-auto d-block" src={HomeImg} alt="" srcset="" />
                            <h2 className="text-center" style={{ fontSize: "1.5em" }}>
                                Fitness & strongest with yourself
                            </h2>
                            <h5 className="text-center" style={{ fontSize: "1em" }}>
                                We are driven to get the best results and have won thousands of cases for our clients.
                            </h5>
                            <img className="mx-auto d-block" src={Signature} alt="" srcset="" />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <img className="mx-auto d-block" src={SuccesImg} alt="" srcset="" />
                            <h2 className="text-center" style={{ fontSize: "1.5em" }}>
                                Fitness & strongest with yourself
                            </h2>
                            <h5 className="text-center" style={{ fontSize: "1em" }}>
                                Experts define physical fitness as “one's ability to execute daily activities with
                                optimal performance, endurance, and strength with the management of disease, fatigue, and stress and
                                reduced sedentary behavior.
                            </h5>
                        </div></Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
