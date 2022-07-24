import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from '../../../img/banner1.jpg';
import banner2 from '../../../img/banner2.jpg';
import banner3 from '../../../img/banner3.jpg';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 xs-height"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="fs-2 text-danger">We Provide</h3>
                        <h2 className="fs-1 fw-bolder">Full Medical Care</h2>
                        <p className="fs-5">Helping thousands of people to get high-class medical services. Your health is your most important asset.</p>
                        <Button variant="danger" className="my-2 py-2 px-5 rounded-pill">Make Appointment</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 xs-height"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-2 text-danger">We Give Solution</h3>
                        <h2 className="fs-1 fw-bolder">To Your Pain</h2>
                        <p className="fs-5">Helping thousands of people to get high-class medical services. Your health is your most important asset.</p>
                        <Button variant="danger" className="my-2 py-2 px-5 rounded-pill">Make Appointment</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 xs-height"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="fs-2 text-danger">We Provide</h3>
                        <h2 className="fs-1 fw-bolder text-light">Full Medical Care</h2>
                        <p className="fs-5 text-light">Helping thousands of people to get high-class medical services. Your health is your most important asset.</p>
                        <Button variant="danger" className="my-2 py-2 px-5 rounded-pill">Make Appointment</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;