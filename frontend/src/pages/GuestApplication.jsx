import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Spinner } from "react-bootstrap";
import axios from "axios";

function GuestApplication() {
  const [acf, setAcf] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sol.rolecolorfinder.com/wp-json/wp/v2/pages?slug=guest-application")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setAcf(res.data[0].acf);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching ACF data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (!acf) {
    return (
      <div className="text-center py-5">
        <p>Content not found. Please check WordPress ACF fields.</p>
      </div>
    );
  }

  return (
    <div className="py-5 bg-light guest-app-page">
      <Container>
        {/* Intro Section */}
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h2 className="fw-bold mb-3 text-primary">{acf.guestapp_heading}</h2>
            <p className="lead">{acf.guestapp_intro}</p>
          </Col>
        </Row>

        {/* Application Form */}
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm border-0 p-4">
              <h4 className="mb-3 text-center text-primary">{acf.guestapp_form_title}</h4>

              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" required />
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
                  <Form.Control type="text" placeholder="Your organization or company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formAssessment">
                  <Form.Label>RoleColorFinder Assessment Link</Form.Label>
                  <Form.Control type="url" placeholder="Paste your RoleColorFinder link" />
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
                  <Form.Control type="text" placeholder="e.g weekdays after 3pm" />
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

        {/* Testimonial Section */}
        <Row className="justify-content-center text-center mt-5">
          <Col md={8}>
            <blockquote className="blockquote">
              <p className="mb-3 fst-italic">“{acf.guestapp_testimonial}”</p>
              <footer className="blockquote-footer">
                <cite>{acf.guestapp_author}</cite>
              </footer>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GuestApplication;
