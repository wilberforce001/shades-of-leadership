import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";

function Guests() {
  const [acf, setAcf] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        // Replace PAGE_ID with your Guests page ID (e.g., 114)
        const response = await axios.get(
          "https://sol.rolecolorfinder.com/wp-json/wp/v2/pages/114"
        );
        setAcf(response.data.acf);
      } catch (error) {
        console.error("Error fetching guests:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGuests();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
        <p>Loading guests...</p>
      </div>
    );
  }

  if (!acf) {
    return (
      <div className="text-center py-5">
        <p>No guest data available.</p>
      </div>
    );
  }

  // Dynamically build guest list from ACF fields
  const guests = [];
  for (let i = 1; i <= 6; i++) { // support up to 6 guests if added later
    const name = acf[`guest_${i}_name`];
    const roleColor = acf[`guest_${i}_rolecolor`];
    const title = acf[`guest_${i}_title`];
    const img = acf[`guest_${i}_image`];
    const episode = acf[`guest_${i}_episode_link`];
    if (name) guests.push({ name, roleColor, title, img, episode });
  }

  return (
    <Container className="py-5 guests-section">
      {/* Section Heading */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">
          {acf.guests_heading || "Meet the Voices Behind the Mic"}
        </h2>
        <p
          className="text-muted lead"
          dangerouslySetInnerHTML={{
            __html:
              acf.guests_description ||
              "Thought leaders and changemakers from around the world",
          }}
        />
      </div>

      {/* Guest Cards */}
      <Row>
        {guests.length > 0 ? (
          guests.map((guest, index) => (
            <Col md={4} key={index} className="mb-4">
              <div
                className="card border-0 shadow-sm h-100 hover-shadow transition-all"
                style={{ cursor: "pointer", borderRadius: "1rem" }}
              >
                {guest.img && (
                  <img
                    src={guest.img}
                    alt={guest.name}
                    className="card-img-top"
                    style={{
                      height: "280px",
                      objectFit: "cover",
                      borderTopLeftRadius: "1rem",
                      borderTopRightRadius: "1rem",
                    }}
                  />
                )}
                <div className="card-body text-center p-4">
                  <h5 className="card-title fw-bold mb-1">{guest.name}</h5>
                  {guest.roleColor && (
                    <p className="text-primary fw-semibold mb-1">
                      {guest.roleColor}
                    </p>
                  )}
                  {guest.title && (
                    <p className="text-muted mb-3">{guest.title}</p>
                  )}
                  {guest.episode && (
                    <Button
                      variant="outline-dark"
                      href={guest.episode}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Listen to Episode
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          ))
        ) : (
          <p className="text-center text-muted">No guests found.</p>
        )}
      </Row>
    </Container>
  );
}

export default Guests;
