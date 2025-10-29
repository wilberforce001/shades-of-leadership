import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";

function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const res = await axios.get("https://sol.rolecolorfinder.com/wp-json/wp/v2/episode");
        // console.log("Fetched episodes:", res.data);
        setEpisodes(res.data);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      }
    };

    fetchEpisodes();
  }, []);

  const filteredEpisodes = episodes.filter((episode) => {
    const title = episode.title?.rendered?.toLowerCase() || "";
    const guest = episode.acf?.guest_name?.toLowerCase() || "";
    return title.includes(searchTerm.toLowerCase()) || guest.includes(searchTerm.toLowerCase());
  });

  return (
    <Container className="episodes-page">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Episodes</h1>
        <p className="text-muted lead">
          Discover conversations exploring leadership, color, and change.
        </p>
      </div>

      {/* 🔍 Search Bar */}
      <Form className="mb-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search by guest or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                borderRadius: "8px",
                borderColor: "#FFDD33",
                padding: "0.5rem 1rem",
              }}
            />
          </Col>
        </Row>
      </Form>

      {/* 🎧 Episodes List */}
      <Row className="justify-content-center">
        {filteredEpisodes.length > 0 ? (
          filteredEpisodes.map((episode) => (
            <Col
              key={episode.id}
              xs={12}
              sm={8}
              md={6}
              lg={4}
              className="d-flex justify-content-center mb-4"
            >
              <Card className="h-100 shadow-sm" style={{ width: "100%", maxWidth: "350px" }}>
                <Card.Img
                  variant="top"
                  src={
                    episode.acf?.episode_image ||
                    "https://placehold.co/800x400?text=No+Image"
                  }
                  alt={episode.title?.rendered}
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    borderTopLeftRadius: "0.5rem",
                    borderTopRightRadius: "0.5rem",
                  }}
                />
                <Card.Body>
                  <Card.Title
                    className="lead"
                    dangerouslySetInnerHTML={{ __html: episode.title?.rendered }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                    {episode.acf?.guest_name}
                  </Card.Subtitle>
                  <Card.Text>{episode.acf?.teaser}</Card.Text>
                  <Button
                    variant="primary"
                    href={episode.acf?.spotify_link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      backgroundColor: "#FFDD33",
                      border: "none",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Listen / Watch
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No episodes found</p>
        )}
      </Row>
    </Container>
  );
}

export default Episodes;