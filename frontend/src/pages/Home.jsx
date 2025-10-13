import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import profileImage from "../assets/Sanjay-Divakar.png";
import '../App.css'

function Home() {
  return (
    <div className="text-center" style={{ fontFamily: "Poppins, sans-serif", color: "#242E42" }}>
      <>
        {/* Hero Section */}
        <section className="text-center py-5"
        style={{ background: "242E42", color: "",}}
        >
          <Container fluid>
            <h1 className="display-4 fw-bold mb-3">Shades of Leadership</h1>
            <p className="lead mb-4" style={{ color: "#FFDD33" }}>Where Leadership Meets Color and Character</p>
            <div>
              <Button variant="warning" className="me-3"
              style={{ 
                backgroundColor: "#FFDD33",
                borderColor: "#FFDD33",
                color: "#000000",
                fontWeight: "500",
              }}
              >
                Listen Now
              </Button>
              <Button variant="outline-light"
              style={{
                borderColor: "#EE2B2B",
                color: "#EE2B2B",
                fontWeight: "500",
              }}
              >Apply to Be a Guest</Button>
            </div>
          </Container>
        </section>

        {/* Featured Episode */}
        <section className="py-5" style={{ backgroundColor: "#F8F9FA" }}>
          <Container>
            <Row className="justify-content-center text-center mb-4">
              <Col md={8}>
                <h2 className="fw-bold mb-3"
                style={{ 
                  borderBottom: "3px solid #FFDD33",
                  display: "inline-block",
                  paddingBottom: "5px",
                }}
                >Featured Episode</h2>
                <p className="text-muted mb-4">Listen to our latest conversation on leadership and identity.</p>

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
                    className="rounded-circle w-100 h-100 shadow mb-3"
                    style={{ objectFit: "cover", objectPosition: "center", border: "5px solid #27BD73" }}
                  />
                </div>
              </Col>
              <Col md={6}>
                <h3 className="fw-bold mb-3">
                  Hosted by {" "} <span style={{ color: "#2B8CEE"}}>Sanjay Divakar</span>
                </h3>
                <p className="lead">
                  Leadership coach and founder of{" "}
                  <a
                    href="https://rolecolorfinder.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#EE2B2B", fontWeight: "500"}}
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
        <section className="py-5 text-center" style={{ backgroundColor: "#F8F9FA" }}>
          <Container fluid>
            <h2 className="fw-bold mb-4"
            style={{
              color: "#242E42",
              borderBottom: "3px solid #FFDD33",
              display: "inline-block",
              paddingBottom: "5px",
            }}
            >Featured Guests</h2>
            <Carousel indicators={false} interval={3000}>
              <Carousel.Item>
                <Row className="justify-content-center align-items-center g-4">
                  <Col md={2}>
                    <img
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
                      alt="Pedro Noguera"
                      className="rounded-circle img-fluid shadow-sm"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        objectPosition: "center",
                        border: "4px solid #FFDD33",
                        margin: "0 auto",
                      }}
                    />
                  </Col>
                  <Col md={2}>
                    <img
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80"
                      alt="Kapono Ciotti"
                      className="rounded-circle img-fluid"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        objectPosition: "center",
                        border: "4px solid #FFDD33",
                        margin: "0 auto",
                      }}
                    />
                  </Col>
                  <Col md={2}>
                    <img
                      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
                      alt="Guest 3"
                      className="rounded-circle img-fluid"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        objectPosition: "center",
                        border: "4px solid #FFDD33",
                        margin: "0 auto",
                      }}
                    />
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row className="justify-content-center align-items-center g-4">
                  <Col md={2}>
                    <img
                      src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
                      alt="Guest 4"
                      className="rounded-circle img-fluid shadow-sm"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        objectPosition: "center",
                        border: "4px solid #FFDD33",
                        margin: "0 auto",
                      }}
                    />
                  </Col>
                  <Col md={2}>
                    <img
                      src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80"
                      alt="Guest 5"
                      className="rounded-circle img-fluid shadow-sm"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        objectPosition: "center",
                        border: "4px solid #FFDD33",
                        margin: "0 auto",
                      }}
                    />
                  </Col>
                  <Col md={2}>
                    <img
                      src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80"
                      alt="Guest 6"
                      className="rounded-circle img-fluid shadow-sm"
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                        objectPosition: "center",
                        border: "4px solid #FFDD33",
                        margin: "0 auto", 
                      }}
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