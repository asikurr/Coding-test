import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import './projects.css'

const Projects = () => {
    return (
        <section id="project" className="text-center py-5 my-5">
                <Container>
                <h2 className="text-center">Our Projects</h2>
                <hr className="underLine mx-auto my-4"></hr>

                    <Row>
                        <Col lg={3} md={4} sm={12}>
                            <div className="project-Single">
                                <h1>
                                    <CountUp start={0} end={350}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <p>Happy Clients</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <div className="project-Single">
                                <h1>
                                    <CountUp start={0} end={640}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <p>Good Projects</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <div className="project-Single">
                                <h1>
                                    <CountUp start={0} end={325}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <p>Day Of Work</p>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={12}>
                            <div className="project-Single">
                                <h1>
                                    <CountUp start={0} end={33}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <p>Pending Projects</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
        </section>
    );
};

export default Projects;