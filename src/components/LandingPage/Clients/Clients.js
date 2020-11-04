import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import logo1 from '../../../img/c1.png'
import logo2 from '../../../img/c2.png'
import logo3 from '../../../img/c3.png'
import logo4 from '../../../img/c4.png'
import logo5 from '../../../img/c5.png'
import logo6 from '../../../img/c6.png'

import './clients.css'

const Clients = () => {
    return (
        <section id="clients" className="py-5 my-5">
            <Container >
                <h2 className=" text-center">Our Clients</h2>
                <hr className="underLine mx-auto my-4"></hr>
                <Row>
                    <Col>
                        <div className="d-flex justify-content-between company-logo">
                            <img className="img-fluid companyLogo" src={logo1} alt="" />
                            <img className="img-fluid companyLogo" src={logo2} alt="" />
                            <img className="img-fluid companyLogo" src={logo3} alt="" />
                            <img className="img-fluid companyLogo" src={logo4} alt="" />
                            <img className="img-fluid companyLogo" src={logo5} alt="" />
                            <img className="img-fluid companyLogo" src={logo6} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Clients;