import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


function GuestApplication() {
    return (
        <div className="py-5 bg-light">
            <Container>
                {/* Intro Section */}
                <Row className="justify-content-center text-center mb-5">
                    <Col md={8}>
                    <h2 className="fw-bold mb-3">Join the Show</h2>
                    <p className="lead">
                        We're always looking for educators, leaders, and change-makers who bring 
                        fresh perspectives to leadership, culture, and identity. If you have a story worth
                        sharing, we'd love to hear from you.
                    </p>
                    </Col>
                </Row>

                {/* Application Form */}
                <Row className="justify-content-center">
                    <Col md={8}>
                    <Card className="shadow-sm border-0 p-4">
                        <h4 className="mb-3 text-center text-primary">Guest Application Form</h4>
                        <Form>
                            <Row>
                                <Col md={6}>
                                <Form.Group className="mb-3" controlId="formName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" required/>
                                </Form.Group>
                                </Col>

                                <Col md={6}>
                                <Form.Group className="mb-3" controlId="formRole">
                                    <Form.Label>Role / Title</Form.Label>
                                    <Form.Control type="text" placeholder="e.g Leadership Coach" required />
                                </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formOrg">
                                <Form.Label>Organization</Form.Label>
                                <Form.Control type="text" placeholder="Your organization or company"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formAssessment">
                                <Form.Label>RoleColorFinder Assessment Link</Form.Label>
                                <Form.Control type="url" placeholder="Paste your RoleColorFinder link"></Form.Control>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formTopic">
                                <Form.Label>Topic Focus</Form.Label>
                                <Form.Control 
                                as="textarea"
                                rows={3}
                                placeholder="Briefly describe what you'd like to discuss on the show"
                                />
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formAvailability">
                                <Form.Label>Availability</Form.Label>
                                <Form.Control type="text" placeholder="e.g weekdays after 3pm"/>
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="primary" type="submit">
                                    Submit Application
                                </Button>
                            </div>
                        </Form>
                    </Card>
                    </Col>
                </Row>

                {/* Testimoninal Section */}
                <Row className="justify-content-center text-center mt-5">
                    <Col md={8}>
                    <blockquote className="blockquote">
                        <p className="mb-3 fst-italic">"The best conversation I've had on leadership - reflective, colorful, and deeply human."</p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">Former Guest, Shades of Leadership</cite>
                        </footer>
                    </blockquote>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GuestApplication;