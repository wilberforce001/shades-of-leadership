import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Contacts() {
    return (
        <div className="py-5 bg-light">
            <Container>
                {/* Page Title */}
                <Row className="text-center mb-5">
                    <Col md={8} className="mx-auto">
                    <h2 className="fw-bold mb-3">Contact & Partnerships</h2>
                    <p className="lead text-muted">
                        Interested in collaborating, sponsoring, or featuring shades of Leadership?
                        We'd love to connect with you.
                    </p>
                    </Col>
                </Row>

                {/* Contact Form */}
                <Row className="justify-content-center">
                    <Col md={8}>
                    <Card className="p-4 shadow-sm border-0">
                        <h4 className="text-primary mb-3 text-center">Get in Touch</h4>
                        <Form>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" required/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formOrganization">
                                <Form.Label>Organization / Company</Form.Label>
                                <Form.Control type="text" placeholder="Enter organization name"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Message / Inquiry</Form.Label>
                                <Form.Control 
                                as="textarea"
                                rows={4}
                                placeholder="Tell us how you'd like to collaborate" required
                                />
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="primary" type="submit">
                                    Send Message
                                </Button>
                            </div>
                        </Form>
                    </Card>
                    </Col>
                </Row>

                {/* RoleColorFinder Branding */}
                <Row className="text-center mt-5">
                    <Col>
                    <p className="text-muted mb-1">
                        <strong>Shades of Leadership</strong> is a product of {" "}
                        <a href="https://rolecolorfinder.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary fw-semibold"
                        >RoleColorFinder</a>.
                    </p>
                    </Col>
                </Row>

                {/* Resource Links */}
                <Row className="text-center mt-3">
                    <Col>
                    <a href="https://rolecolorfinder.com"
                    target="_blank"
                    rel="noreferrer"
                    className="d-block mb-2"
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