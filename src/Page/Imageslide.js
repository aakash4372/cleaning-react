import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './page.css';

const images = [
    { before: "/photos/room1.jpg", after: "/photos/room2.jpg" },
    { before: "/photos/room3.jpg", after: "/photos/room4.jpg" },
    { before: "/photos/sofa1.jpg", after: "/photos/sofa2.jpg" },
    { before: "/photos/office2.jpg", after: "/photos/office1.jpg" },
    { before: "/photos/movie1.jpg", after: "/photos/movie2.jpg" },
    { before: "/photos/toilet1.jpg", after: "/photos/toilet2.jpg" },
    { before: "/photos/sink1.jpg", after: "/photos/sink2.jpg" },
    { before: "/photos/toilet3.jpg", after: "/photos/toilet4.jpg" },
    { before: "/photos/window1.jpg", after: "/photos/window2.jpg" },
    { before: "/photos/wood1.jpg", after: "/photos/wood2.jpg" },
    { before: "/photos/fan1.jpg", after: "/photos/fan2.jpg" },
    { before: "/photos/chruch1.jpg", after: "/photos/chruch2.jpg" },
    
];

const ImageCard = () => {
    return (
        <div>
            <h2 className="text-center heading pt-5">
                <span className="line"></span> Our Cleaning Projects <span className="line"></span>
            </h2>
            <Container className="image-card-container">
                <Row>
                    {images.map((image, index) => (
                        <Col lg={4} md={6} sm={12} key={index} className="mb-4">
                            <Card className="image-card">
                                <div className="image-wrapper">
                                    <Card.Img className="before" variant="top" src={image.before} alt={`Before Image ${index + 1}`} />
                                    <Card.Img className="after" variant="top" src={image.after} alt={`After Image ${index + 1}`} />
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ImageCard;
