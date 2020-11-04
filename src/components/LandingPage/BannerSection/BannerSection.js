import React from 'react';
import { Col, Container } from 'react-bootstrap';

import './bannersection.css'

const BannerSection = () => {
    return (
        <div className="banner-container">
            <Container>
                <div className="banner__container mx-auto text-center">
                    <h1 className="banner__heading">Inspirational Technologies</h1>
                    <p className="banner__text ">Next IT was created with the idea of bringing you multipurpose and flexible IT Solutions. We use various innovative technologies that make your work not only easier but more productive without unnecessary coding.</p>
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </Container>
        </div>
    );
};

export default BannerSection;