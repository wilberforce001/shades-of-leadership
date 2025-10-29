import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";

function Resources() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const res = await axios.get(
          "https://sol.rolecolorfinder.com/wp-json/wp/v2/pages?slug=resources"
        );
        setPageData(res.data[0]);
      } catch (err) {
        console.error("Error fetching Resources page:", err);
      }
    };

    fetchPage();
  }, []);

  if (!pageData) return <p>Loading...</p>;

  const acf = pageData.acf || {};

  // Build an array dynamically from all resource_* keys
  const resources = [];
  for (let i = 1; i <= 10; i++) {
    const title = acf[`resource_${i}_title`];
    const description = acf[`resource_${i}_description`];
    const link = acf[`resource_${i}_link`];
    const image = acf[`resource_${i}_image`];
    if (title) {
      resources.push({ title, description, link, image });
    }
  }

  return (
    <div className="py-5 resources-page" style={{ backgroundColor: "#f8f9fa" }}>
      <Container>
        {/* Intro Section */}
        <Row className="text-center mb-4">
          <Col md={8} className="mx-auto">
            <h2 className="fw-bold mb-3">{acf.resources_heading}</h2>
            {acf.resources_intro && (
              <div
                className="lead text-muted"
                dangerouslySetInnerHTML={{ __html: acf.resources_intro }}
              />
            )}
          </Col>
        </Row>

        {/* Resource Cards */}
        <Row className="g-4">
          {resources.length > 0 ? (
            resources.map((resource, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 shadow-sm border-0">
                  {resource.image && (
                    <Card.Img
                      variant="top"
                      src={resource.image}
                      alt={resource.title}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{resource.title}</Card.Title>
                    <Card.Text>{resource.description}</Card.Text>
                    {resource.link && (
                      <Button
                        variant="primary"
                        size="sm"
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Resource
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center text-muted">
                No resources available at the moment.
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Resources;
