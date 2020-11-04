import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { FcTwoSmartphones } from "react-icons/fc";
import { MdLaptopWindows, MdLanguage, MdHeadsetMic} from "react-icons/md";
import './services.css'

const Services = () => {
    return (
        <section id="services" className="service-section my-5 py-5">
            <Container>
                <h2 className="text-center">Our Services</h2>
                <hr className="underLine mx-auto my-4"></hr>

                <Row>
                    <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                            <div className="card " >
                            <FcTwoSmartphones className="iconSize mx-auto"/>
                                <div className="card-body">
                                <h5 className="sevice-title">Mobile Apps Development</h5>
                                <p className="sevice-description">At Rhombus, we work for our customers every day to deliver the best mobile applications for any purposes. We work both with individual and corporate customers.</p>

                                </div>
                            </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                        <div className="card " >
                            <MdLaptopWindows className="iconSize mx-auto" />
                            <div className="card-body">
                                <h5 className="sevice-title">Website Design</h5>
                                <p className="sevice-description">Our expert team can design a website of any complexity, from a landing page to a corporate multipage website. Everything depends on what you are looking for.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                        <div className="card " >
                            <MdHeadsetMic className="iconSize mx-auto" />
                            <div className="card-body">
                                <h5 className="sevice-title">IT Consulting</h5>
                                <p className="sevice-description">Our team is glad to provide you with professional IT consulting services 24/7. We have been helping lots of companies since our establishment.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 text-center">
                        <div className="card " >
                            <MdLanguage className="iconSize mx-auto" />
                            <div className="card-body">
                                <h5 className="sevice-title">Internet Marketing</h5>
                                <p className="sevice-description">In the modern world of rapid web development, internet marketing plays a vital role in your company’s promotion. We are happy to assist you with it.</p>

                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Services;