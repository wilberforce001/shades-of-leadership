import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Contacts() {
    return (
        <div>
            <Container>
                {/* Page Title */}
                <Row>
                    <Col>
                    <h2>Contact & Partnerships</h2>
                    <p>
                        Interested in collaborating, sponsoring, or featuring shades of Leadership?
                        We'd love to connect with you.
                    </p>
                    </Col>
                </Row>

                {/* Contact Form */}
                <Row>
                    <Col>
                    <Card>
                        <h4>Get in Touch</h4>
                        <Form>
                            <Form.Group>
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" required/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" required/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Organization / Company</Form.Label>
                                <Form.Control type="text" placeholder="Enter organization name"/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Message / Inquiry</Form.Label>
                                <Form.Control 
                                as="textarea"
                                rows={4}
                                placeholder="Tell us how you'd like to collaborate" required
                                />
                            </Form.Group>

                            <div>
                                <Button>
                                    Send Message
                                </Button>
                            </div>
                        </Form>
                    </Card>
                    </Col>
                </Row>

                {/* RoleColorFinder Branding */}
                <Row>
                    <Col>
                    <p>
                        <strong>Shades of Leadership</strong> is a product of {" "}
                        <a href="https://rolecolorfinder.com"
                        target="_blank"
                        rel="noreferrer"
                        >RoleColorFinder</a>.
                    </p>
                    </Col>
                </Row>

                {/* Resource Links */}
                <Row>
                    <Col>
                    <a href="https://rolecolorfinder.com"
                    target="_blank"
                    rel="noreferrer"
                    >
                        Visit RoleColorFinder.com
                    </a>
                    <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="d-block mb-2"
                    >
                    Download Press Kit
                    </a>
                    <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    className="d-block"
                    >
                    View Partnership Deck
                    </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contacts;