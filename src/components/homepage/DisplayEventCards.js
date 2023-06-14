import React from "react";
import "./../../styles/DisplayEventCards.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Holi from './../../assets/Holi.jpg';
import { Container } from "react-bootstrap";

function DisplayEvents(){
    return(
        <>
            <Container>
                <Row xs={1} md={3} className="mt-4">
                        <Col className="mb-4 colEvent">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Holi} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Festival of Colors
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-4 colEvent">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Holi} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Festival of Colors
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-4 colEvent">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Holi} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Festival of Colors
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    
                    
                        <Col className="mb-4 colEvent">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Holi} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Festival of Colors
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-4 colEvent">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Holi} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Festival of Colors
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="mb-4 colEvent">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Holi} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Festival of Colors
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                
                    
                </Row>
            </Container>
        </>
    )
}

export default DisplayEvents;