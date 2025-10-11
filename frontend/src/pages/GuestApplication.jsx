import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


function GuestApplication() {
    return (
        <div>
            <Container>
                {/* Intro Section */}
                <Row>
                    <Col md={8}>
                    <h2>Join the Show</h2>
                    <p>
                        We're always looking for educators, leaders, and change-makers who bring 
                        fresh perspectives to leadership, culture, and identity. If you have a story worth
                        sharing, we'd love to hear from you.
                    </p>
                    </Col>
                </Row>

                {/* Application Form */}
                <Row>
                    <Col>
                    <Card>
                        <h4>Guest Application Form</h4>
                        <Form>
                            <Row>
                                <Col>
                                <Form.Group>
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required/>
                                </Form.Group>
                                </Col>

                                <Col>
                                <Form.Group>
                                    <Form.Label>Role / Title</Form.Label>
                                    <Form.Control type="text" placeholder="e.g Leadership Coach" required />
                                </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group>
                                <Form.Label>Organization</Form.Label>
                                <Form.Control type="text" placeholder="Your organization or company"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>RoleColorFinder Assessment Link</Form.Label>
                                <Form.Control type="url" placeholder="Paste your RoleColorFinder link"></Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Topic Focus</Form.Label>
                                <Form.Control 
                                as="textarea"
                                rows={3}
                                placeholder="Briefly describe what you'd like to discuss on the show"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Availability</Form.Label>
                                <Form.Control type="text" placeholder="e.g weekdays after 3pm"/>
                            </Form.Group>

                            <div>
                                <Button>
                                    Submit Application
                                </Button>
                            </div>
                        </Form>
                    </Card>
                    </Col>
                </Row>

                Testimoninal Section
                <Row>
                    <Col>
                    <blockquote>
                        <p>"The best conversation I've had on leadership - reflective, colorful, and deeply human."</p>
                        <footer>
                            <cite>Former Guest, Shades of Leadership</cite>
                        </footer>
                    </blockquote>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GuestApplication;