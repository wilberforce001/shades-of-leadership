import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import axios from "axios";

function Newsletter() {
  const [acf, setAcf] = useState(null);

  useEffect(() => {
    const fetchNewsletter = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/wordpress/blog-page" // same page as Blog
        );
        setAcf(res.data[0]?.acf);
      } catch (err) {
        console.error("Error fetching newsletter section:", err);
      }
    };
    fetchNewsletter();
  }, []);

  if (!acf) return null;

  return (
    <section className="py-5 bg-dark text-white">
      <Container>
        <Row className="text-center mb-4">
          <Col md={8} className="mx-auto">
            <h2 className="fw-bold mb-3">{acf.newsletter_heading}</h2>
            {acf.newsletter_intro && (
              <p className="lead">{acf.newsletter_intro}</p>
            )}
          </Col>
        </Row>

        <Row className="justify-content-center mb-3">
          <Col md={6}>
            <Form
              action={acf.newsletter_form_action}
              method="POST"
              className="d-flex"
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <Button type="submit" variant="primary" className="ms-2">
                {acf.newsletter_cta_text || "Subscribe Now"}
              </Button>
            </Form>
          </Col>
        </Row>

        {acf.newsletter_note && (
          <Row className="text-center">
            <Col md={8} className="mx-auto">
              <small className="text-muted">{acf.newsletter_note}</small>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

export default Newsletter;
