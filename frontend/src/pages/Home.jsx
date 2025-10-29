import { Container, Row, Col, Button, Spinner, Card } from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [homeData, setHomeData] = useState(null);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPodcasts, setShowPodcasts] = useState(false);

  // Fetch Home Page data directly from WordPress (ACF fields)
  const fetchHomeData = async () => {
    try {
      const res = await axios.get(
        "https://sol.rolecolorfinder.com/wp-json/wp/v2/pages?slug=home"
      );
      console.log("WordPress home data:", res.data);

      if (res.data && res.data.length > 0) {
        setHomeData(res.data[0].acf); // Store ACF data
      }
    } catch (err) {
      console.error("Error fetching home data:", err);
    }
  };

  // Fetch Podcasts from backend API
  const fetchPodcasts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/wordpress/podcasts`
      );
      console.log("Fetched podcasts:", res.data);
      setPodcasts(res.data || []);
    } catch (err) {
      console.error("Error fetching podcasts:", err);
      alert("Failed to fetch podcasts. Please check your server connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleListenNow = () => {
    setShowPodcasts(true);
    fetchPodcasts();
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  // Loading fallback
  if (!homeData) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p>Loading homepage content...</p>
      </div>
    );
  }

  // Page Content
  return (
    <div
      className="text-center"
      style={{ fontFamily: "Poppins, sans-serif", color: "#242E42" }}
    >
      <>
        {/*Hero Section */}
        <section
          className="text-center py-5"
          style={{ background: "#FFFFFF", color: "#F8FAFC" }}
        >
          <Container fluid="sm" className="px-4">
            <h1
              className="display-4 fw-bold mb-3"
              style={{ color: "#27BD73" }}
            >
              {homeData.hero_title}
            </h1>
            <p className="lead mb-4" style={{ color: "#242E42" }}>
              {homeData.hero_tagline}
            </p>

            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
              <Button
                variant="warning"
                className="mb-2 mb-md-0"
                style={{
                  backgroundColor: "#FFDD33",
                  borderColor: "#FFDD33",
                  color: "#000000",
                  fontWeight: "600",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                }}
                onClick={handleListenNow}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      animation="border"
                      size="sm"
                      className="me-2"
                      role="status"
                    />
                    Loading...
                  </>
                ) : (
                  homeData.cta_button_1_label || "Listen Now"
                )}
              </Button>

              <Button
                variant="outline-light"
                style={{
                  borderColor: "#2B8CEE",
                  color: "#2B8CEE",
                  fontWeight: "600",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "8px",
                }}
                onClick={() =>
                  window.open(homeData.cta_button_2_link, "_blank")
                }
              >
                {homeData.cta_button_2_label || "Explore Episodes"}
              </Button>
            </div>
          </Container>
        </section>

        {/* 🎧 Podcasts Section */}
        {showPodcasts && (
          <section className="py-5" style={{ backgroundColor: "#F8FAFC" }}>
            <Container>
              <h2
                className="text-center mb-5 fw-bold"
                style={{ color: "#1E293B" }}
              >
                Latest Podcasts
              </h2>
              <Row className="gy-4">
                {Array.isArray(podcasts) && podcasts.length > 0 ? (
                  podcasts.map((podcast) => (
                    <Col key={podcast._id || podcast.title} md={6}>
                      <Card
                        className="h-100 shadow-sm border-0"
                        style={{
                          borderRadius: "12px",
                          overflow: "hidden",
                          backgroundColor: "#FFFFFF",
                        }}
                      >
                        <Card.Body className="d-flex flex-column justify-content-between">
                          <div>
                            <Card.Title
                              className="fw-bold mb-4"
                              style={{ color: "#1E293B" }}
                            >
                              {podcast.title}
                            </Card.Title>
                            <Card.Text
                              style={{
                                color: "#475569",
                                fontSize: "0.95rem",
                                marginBottom: "1rem",
                              }}
                            >
                              {podcast.description}
                            </Card.Text>
                          </div>
                          <div className="text-center mt-auto">
                            <audio
                              controls
                              style={{
                                width: "100%",
                                borderRadius: "8px",
                                backgroundColor: "#E2E8F0",
                              }}
                            >
                              <source
                                src={podcast.audioUrl}
                                type="audio/mpeg"
                              />
                              Your browser does not support the audio element.
                            </audio>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  <p className="text-center text-muted">
                    No podcasts available at the moment.
                  </p>
                )}
              </Row>
            </Container>
          </section>
        )}

        {/* 🌟 Featured Episode */}
        <section className="py-2" style={{ backgroundColor: "#F8F9FA" }}>
          <Container>
            <Row className="justify-content-center text-center mb-4">
              <Col md={8}>
                <h2
                  className="fw-bold mb-3"
                  style={{
                    borderBottom: "3px solid #FFDD33",
                    display: "inline-block",
                    paddingBottom: "5px",
                  }}
                >
                  Featured Episode
                </h2>
                <p className="text-muted mb-4">
                  {homeData.featured_description ||
                    "Listen to our latest conversation on leadership and identity."}
                </p>

                <div className="ratio ratio-16x9">
                  <iframe
                    src={
                      homeData.featured_embed_link ||
                      "https://open.spotify.com/embed/episode/your-episode-id"
                    }
                    title="Featured Episode"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* 👤 Host Section */}
        <section className="py-3 text-center">
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
                    src={homeData.host_image}
                    alt={homeData.host_name || "Host"}
                    className="rounded-circle w-100 h-100 shadow mb-3"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                      border: "3px solid #27BD73",
                    }}
                  />
                </div>
              </Col>
              <Col md={6}>
                <h3 className="fw-bold mb-3">
                  Hosted by{" "}
                  <span style={{ color: "#2B8CEE" }}>
                    {homeData.host_name || "Sanjay Divakar"}
                  </span>
                </h3>
                <p
                  className="lead"
                  dangerouslySetInnerHTML={{ __html: homeData.host_bio }}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    </div>
  );
}

export default Home;
