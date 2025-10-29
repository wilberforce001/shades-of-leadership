import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";

function Guests() {
  const [acf, setAcf] = useState(null);

  useEffect(() => {
    axios
      .get("https://sol.rolecolorfinder.com/wp-json/wp/v2/pages/114") // Replace with your Guests page ID
      .then((res) => setAcf(res.data.acf))
      .catch((err) => console.error(err));
  }, []);

  if (!acf) return <p>Loading guests...</p>;

  // Loop through available guests
  const guests = [];
  for (let i = 1; i <= 3; i++) {
    const name = acf[`guest_${i}_name`];
    const roleColor = acf[`guest_${i}_rolecolor`];
    const title = acf[`guest_${i}_title`];
    const img = acf[`guest_${i}_image`];
    const episode = acf[`guest_${i}_episode_link`];
    if (name) guests.push({ name, roleColor, title, img, episode });
  }

  return (
    <Container className="my-5 guests-page">
      <div className="text-center mb-5">
        <h2 className="fw-bold">{acf.guests_heading}</h2>
        <p className="text-muted lead">
          Thought leaders and changemakers from around the world
        </p>
      </div>

      <Row>
        {guests.map((guest, index) => (
          <Col md={4} key={index} className="mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src={guest.img}
                alt={guest.name}
                className="card-img-top"
                style={{ height: "280px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{guest.name}</h5>
                <p className="text-primary fw-semibold">{guest.roleColor}</p>
                <p className="text-muted">{guest.title}</p>
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
        ))}
      </Row>
    </Container>
  );
}

export default Guests;
