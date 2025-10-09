import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import profileImage from "../assets/Sanjay-Divakar.png";

function Home() {
  return (
    <div className="text-center">
      <>
        {/* Hero Section */}
        <section className="bg-dark text-light text-center py-5">
          <Container fluid>
            <h1 className="display-4 fw-bold">Shades of Leadership</h1>
            <p className="lead mb-4">Where Leadership Meets Color and Character</p>
            <div>
              <Button variant="primary" className="me-3">
                Listen Now
              </Button>
              <Button variant="outline-light">Apply to Be a Guest</Button>
            </div>
          </Container>
        </section>

        {/* Featured Episode */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="justify-content-center text-center mb-4">
              <Col md={8}>
                <h2 className="fw-bold mb-3">Featured Episode</h2>
                <p>Listen to our latest conversation on leadership and identity.</p>

                <div className="ratio ratio-16x9">
                  <iframe
                    src="https://open.spotify.com/embed/episode/your-episode-id"
                    title="Featured Episode"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Host Section */}
        <section className="py-5 text-center">
          <Container fluid="md">
            <Row className="align-items-center justify-content-center">
              <Col md={4} className="text-center">
                <div
                  style={{
                    width: "100%",
                    maxWidth: "200px",
                    aspectRatio: "1/1",
                    margin: "0 auto",
                  }}
                >
                  <img
                    src={profileImage}
                    alt="Sanjay Divakar"
                    className="rounded-circle w-100 h-100"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              </Col>
              <Col md={6}>
                <h3>
                  Hosted by <span className="text-primary">Sanjay Divakar</span>
                </h3>
                <p className="lead">
                  Leadership coach and founder of{" "}
                  <a
                    href="https://rolecolorfinder.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    RoleColorFinder
                  </a>
                  . Sanjay brings deep insights on personality, culture, and
                  leadership identity.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Guest Carousel */}
        <section className="py-5 bg-light text-center">
          <Container fluid>
            <h2 className="fw-bold mb-4">Featured Guests</h2>
            <Carousel indicators={false} interval={3000}>
              <Carousel.Item>
                <Row className="justify-content-center">
                  <Col md={2}>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Pedro Noguera"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col md={2}>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Kapono Ciotti"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col md={2}>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Guest 3"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row className="justify-content-center">
                  <Col md={2}>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Guest 4"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col md={2}>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Guest 5"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                  <Col md={2}>
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Guest 6"
                      className="rounded-circle img-fluid"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Container>
        </section>
      </>
    </div>
  );
}

export default Home; 