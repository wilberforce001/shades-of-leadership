import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import axios from "axios";

function Contacts() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchContactPage = async () => {
      try {
        const res = await axios.get(
          "https://sol.rolecolorfinder.com/wp-json/wp/v2/pages?slug=contact"
        );
        setPageData(res.data[0]);
      } catch (err) {
        console.error("Error fetching contact page:", err);
      }
    };
    fetchContactPage();
  }, []);

  if (!pageData) return <p>Loading...</p>;

  const acf = pageData.acf || {};

  return (
    <div className="py-5 bg-light">
      <Container>
        {/* Page Title */}
        <Row className="text-center mb-5">
          <Col md={8} className="mx-auto">
            <h2 className="fw-bold mb-3">{acf.contact_heading}</h2>
            {acf.contact_intro && (
              <div
                className="lead text-muted"
                dangerouslySetInnerHTML={{ __html: acf.contact_intro }}
              />
            )}
          </Col>
        </Row>

        {/* Contact Form */}
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-sm border-0">
              <h4 className="text-primary mb-3 text-center">
                {acf.contact_form_title}
              </h4>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formOrganization">
                  <Form.Label>Organization / Company</Form.Label>
                  <Form.Control type="text" placeholder="Enter organization name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message / Inquiry</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Tell us how you'd like to collaborate"
                    required
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

        {/* Branding */}
        <Row className="text-center mt-5">
          <Col>
            <p className="text-muted mb-1">
              <strong>Shades of Leadership</strong> is a product of{" "}
              <a
                href={acf.contact_branding_link_url}
                target="_blank"
                rel="noreferrer"
                className="text-primary fw-semibold"
              >
                {acf.contact_branding_link_text}
              </a>
              .
            </p>
          </Col>
        </Row>

        {/* Resource Links */}
        <Row className="text-center mt-3">
          <Col>
            {acf.contact_branding_link_url && (
              <a
                href={acf.contact_branding_link_url}
                target="_blank"
                rel="noreferrer"
                className="d-block mb-2"
              >
                Visit {acf.contact_branding_link_text}.com
              </a>
            )}
            {acf.contact_presskit_link && (
              <a
                href={acf.contact_presskit_link}
                target="_blank"
                rel="noreferrer"
                className="d-block mb-2"
              >
                Download Press Kit
              </a>
            )}
            {acf.contact_deck_link && (
              <a
                href={acf.contact_deck_link}
                target="_blank"
                rel="noreferrer"
                className="d-block"
              >
                View Partnership Deck
              </a>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contacts;
