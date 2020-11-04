import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './contact.css'

const ContactUS = () => {
    return (
        <section className="contact-section py-5 ">
            <Container>
                <Row>
                    <Col md={5}>
                        <div className="contact-content">
                            <h2 className="contact-heading">Let us handle your project, professionally.</h2>
                            <p className="contact-description">
                                With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
                            </p>
                        </div>
                    </Col>
                    <Col md={7}>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="Your email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group">
                                <input type="name" placeholder="Your name/company name" className="form-control" id="exampleInputName" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your Message" name="message" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button className="btn btn-success">Send</button>
                        </form>
                    </Col>
                </Row>
                <p >Copyright &copy; {new Date().getFullYear()}</p>
            </Container>
        </section>
    );
};

export default ContactUS;