import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutImg from '../../../img/about-us.jpg'

import './about.css'

const About = () => {
    return (
        <section id="about-section" className="py-5 my-5" >
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={aboutImg} alt="" className="about__img"/>
                    </Col>

                    <Col md={6}>
                        <div className="about__content">
                            <h1 className="about__heading">Hi, we are Next IT</h1>
                            <hr className="underLine"></hr>
                            <p className="about__text1">Next IT is a team of experts bringing you innovative web and IT solutions that combine captivating design and flawless functionality in our every project.</p>
                            <p className="about__text2">We’re the leading provider of IT services for companies all over the USA. We operate on a managed services model that offers proactive outsourced IT services aswell as design, development, and management services at affordable, consistent rates.</p>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;