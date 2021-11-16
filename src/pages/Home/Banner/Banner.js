import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


const Banner = () => {
    return (
        <Carousel className="items">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://i.ibb.co/mbymHWw/cycle-banner-2-jpg-xfh-Lx-QFa.jpg"}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://i.ibb.co/jf2xCZs/113041-commute.jpg"}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://i.ibb.co/xhdG0r0/ENGLISH-s.jpg"}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={"https://i.ibb.co/tYTC6pN/2-1920x975.jpg"}
                    alt="Fourth slide"
                />

            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;