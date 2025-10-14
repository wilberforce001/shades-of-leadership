import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Guests() {
  const guests = [
    {
      name: "Sanjay Divakar",
      roleColor: "Gold – Visionary Leader",
      title: "Founder, RoleColorFinder",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      episodeLink: "https://open.spotify.com/episode/example1",
    },
    {
      name: "Aisha Mwangi",
      roleColor: "Blue – Empathetic Innovator",
      title: "Tech Innovator, Nairobi",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
      episodeLink: "https://open.spotify.com/episode/example2",
    },
    {
      name: "David Kimani",
      roleColor: "Red – Creative Strategist",
      title: "Creative Director, D&K Studio",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
      episodeLink: "https://open.spotify.com/episode/example3",
    },
  ];

const logos = [
  "https://cdn.freebiesupply.com/images/large/2x/harvard-logo-transparent.png",
  "https://identity.usc.edu/wp-content/uploads/2022/09/TheSeal_Reg_0921.png",
  "https://globaleducationcoalition.unesco.org/uploads/114_Teach_For_All_color_logo_FYXkHL.png?v=QcqhDjGZVn4PeQ6wsPKlPsfLluvNIxI1-SZk-6IoBoM",
];

  return (
    <Container className="my-5 guests-page">
      {/* Header */}
      <div className="text-center mb-2">
        <h2 className="fw-bold">Our Guests</h2>
        <p className="text-muted lead">Thought leaders and changemakers from around the world</p>
      </div>

      {/* Guest Cards */}
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
                <Button
                  variant="outline-dark"
                  href={guest.episodeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Listen to Episode
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Call to Action */}
      <div className="text-center my-5 featured-logos">
        <h4 className="fw-bold mb-3">Want to be a guest on the show?</h4>
        <Button
          variant="primary"
          size="lg"
          href="/guest-application"
          className="px-4"
        >
          Apply to Be a Guest
        </Button>
      </div>

      {/* Featured Logos */}
      <div className="text-center mt-5">
        <h5 className="fw-bold mb-4">As featured in</h5>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Organization Logo"
                style={{
                  width: "100%",
                  maxWidth: "150px",
                  maxHeight: "70px",
                  objectFit: "contain",
                }}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Guests;
