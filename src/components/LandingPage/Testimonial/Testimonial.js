import React from 'react';

import testi1 from '../../../img/testi1.jpg'
import testi2 from '../../../img/testi2.jpg'
import testi3 from '../../../img/testi3.jpg'

import './testimonial.css'

const Testimonial = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                    <h2 className="text-center">Testimonial</h2>
                    <hr className="underLine mx-auto my-4"></hr>
                <div className="card-deck mt-5">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card__height">
                            <div className="card-body">
                                <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!</p>
                            </div>
                            <div className="card-footer d-flex  align-items-center">
                                <img className="mx-3" src={testi1} alt="" width="60" />
                                <div>
                                    <h6 className="text-primary">Wilson Harry</h6>
                                    <p className="m-0">California</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card__height">
                            <div className="card-body">
                                <p className="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!</p>
                            </div>
                            <div className="card-footer d-flex  align-items-center">
                                <img className="mx-3" src={testi2} alt="" width="60" />
                                <div>
                                    <h6 className="text-primary">Wilson Harry</h6>
                                    <p className="m-0">California</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card card__height">
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!</p>
                            </div>
                            <div className="card-footer d-flex  align-items-center">
                                <img className="mx-3" src={testi3} alt="" width="60" />
                                <div>
                                    <h6 className="text-primary">Wilson Harry</h6>
                                    <p className="m-0">California</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};


export default Testimonial;