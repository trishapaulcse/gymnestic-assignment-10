import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";

import SuccesImg from "../../../images/gym1.jpg"
import Signature from '../../../images/gym2.jpg'
const About = () => {
    return (
        <div className="about-area">
            <Container>
                <Row>
                    <Col>
                        <div className="name-me">
                            {/* <img className="mx-auto img-fluid" src={HomeImg} alt="" srcset="" /> */}
                            <h2 className="text-center" style={{ fontSize: "1.5em" }}>
                                Fitness and strongest with yourself......
                            </h2>
                            <h5 className="text-center" style={{ fontSize: "1em" }}>
                                We are driven to get the best results and have won thousands of benefits for our customers.
                            </h5>
                            <div class="text-center">
                                <img style={{ maxWidth: "350px" }} className="mx-auto img-fluid" src={Signature} alt="" srcset="" />
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div class="text-center">
                                <img style={{ maxWidth: "350px" }} className="mx-auto img-fluid" src={Signature} alt="" srcset="" />
                            </div>
                            <h2 className="text-center" style={{ fontSize: "1.5em" }}>
                                Challenging yourself & the sweating your best........
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
