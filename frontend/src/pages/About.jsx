import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Image, Spinner } from "react-bootstrap";

export default function About() {
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch page by slug (more reliable than numeric ID)
    fetch("https://sol.rolecolorfinder.com/wp-json/wp/v2/pages?slug=about")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setPageData(data[0]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching About page:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        <p>Loading About page...</p>
      </div>
    );
  }

  if (!pageData || !pageData.acf) {
    return <p className="text-center mt-5">No About content found.</p>;
  }

  const acf = pageData.acf;

  // Dynamically build sections
  const sections = [
    {
      heading: acf.story_heading,
      content: acf.story_content,
      image: acf.story_image,
    },
    {
      heading: acf.shades_heading,
      content: acf.shades_content,
      image: acf.shades_image,
    },
    {
      heading: acf.host_heading,
      content: acf.host_content,
      image: acf.host_image,
      roundImage: true,
    },
  ].filter((section) => section.heading && section.content); // Only render complete sections

  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      <Container className="py-5">
        {acf.about_heading && acf.about_content && (
          <section className="mb-5 text-center px-3">
            <h2
              className="fw-bold mb-4"
              style={{
                fontSize: "2.2rem",
                color: "#0d6efd",
              }}
            >
              {acf.about_heading}
            </h2>
            <div
              className="mx-auto"
              style={{
                maxWidth: "800px",
                fontSize: "1.15rem",
                lineHeight: "1.8",
                color: "#444",
              }}
              dangerouslySetInnerHTML={{ __html: acf.about_content }}
            />
          </section>
        )}
        {sections.map((section, index) => (
          <Card
            key={index}
            className="mb-5 shadow-sm border-0"
            style={{ borderRadius: "16px", overflow: "hidden" }}
          >
            {section.roundImage ? (
              // Host section — image on top
              <Row className="text-center p-4">
                <Col>
                  <Image
                    src={section.image}
                    alt={section.heading}
                    roundedCircle
                    className="shadow-sm mb-3"
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <h3 className="fw-bold mb-3 text-primary">
                    {section.heading}
                  </h3>
                  <div
                    className="text-muted"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </Col>
              </Row>
            ) : (
              // Default alternating layout
              <Row
                className={`g-0 align-items-center ${
                  index % 2 === 1 ? "flex-md-row-reverse" : ""
                }`}
              >
                {section.image && (
                  <Col md={5} className="p-3 text-center">
                    <Image
                      src={section.image}
                      alt={section.heading}
                      fluid
                      rounded
                      className="shadow-sm"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        maxHeight: "420px",
                      }}
                    />
                  </Col>
                )}
                <Col md={section.image ? 7 : 12} className="p-4">
                  <h3 className="fw-bold mb-3 text-primary">
                    {section.heading}
                  </h3>
                  <div
                    className="text-muted"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </Col>
              </Row>
            )}
          </Card>
        ))}

        {/* 🟣 Quote section */}
        {acf.quote_content && (
          <Card className="p-4 border-0 shadow-sm text-center bg-white">
            <blockquote className="blockquote fs-5 text-secondary mb-0">
              “{acf.quote_content}”
            </blockquote>
          </Card>
        )}
      </Container>
    </div>
  );
}