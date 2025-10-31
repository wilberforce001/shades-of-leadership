import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchHomeData = async () => {
    try {
      const res = await axios.get(
        "https://sol.rolecolorfinder.com/wp-json/wp/v2/pages?slug=home"
      );
      if (res.data && res.data.length > 0) {
        setHomeData(res.data[0].acf);
      }
    } catch (err) {
      console.error("Error fetching home data:", err);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  if (!homeData) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p>Loading homepage content...</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", color: "#242E42" }}>
      {/* HERO SECTION */}
      <section className="py-5 text-center" style={{ backgroundColor: "#FFFFFF" }}>
        <Container>
          <h1 className="fw-bold display-5 mb-3" style={{ color: "#27BD73" }}>
            {homeData.hero_heading}
          </h1>
          <p className="lead mb-4">{homeData.hero_description}</p>
          <Button
            variant="warning"
            style={{
              backgroundColor: "#FFDD33",
              borderColor: "#FFDD33",
              color: "#000",
              fontWeight: "600",
              padding: "0.75rem 1.5rem",
              borderRadius: "8px",
            }}
          >
            {homeData.hero_button_label}
          </Button>
        </Container>
      </section>

      {/* WHY IT EXISTS */}
      <section className="py-5" style={{ backgroundColor: "#F8FAFC" }}>
        <Container className="text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#1E293B" }}>
            {homeData.why_title}
          </h2>
          <div
            className="text-muted mx-auto"
            style={{ maxWidth: "800px" }}
            dangerouslySetInnerHTML={{ __html: homeData.why_description }}
          />
        </Container>
      </section>

      {/* FEATURED EPISODES */}
      <section className="py-5" style={{ backgroundColor: "#FFFFFF" }}>
        <Container className="text-center">
          <h2 className="fw-bold mb-3" style={{ color: "#1E293B" }}>
            {homeData.featured_title}
          </h2>
          <div
            className="mb-4 text-muted"
            dangerouslySetInnerHTML={{ __html: homeData.featured_description }}
          />
          <Button
            variant="outline-primary"
            onClick={() => window.open(homeData.featured_cta_link, "_self")}
          >
            {homeData.featured_cta_label}
          </Button>
        </Container>
      </section>

      {/* HOST SECTION */}
      <section className="py-5 text-center" style={{ backgroundColor: "#F8FAFC" }}>
        <Container>
          <h3 className="fw-bold mb-3" style={{ color: "#1E293B" }}>
            {homeData.host_title}
          </h3>
          <div className="mb-4">
            <img
              src={homeData.host_image}
              alt="Host"
              className="rounded-circle shadow mb-3"
              style={{
                width: "180px",
                height: "180px",
                objectFit: "cover",
                border: "3px solid #27BD73",
              }}
            />
          </div>
          <div
            className="lead mb-4"
            dangerouslySetInnerHTML={{ __html: homeData.host_bio }}
          />
          <Button
            variant="outline-success"
            onClick={() => window.open(homeData.host_cta_link, "_self")}
          >
            {homeData.host_cta_label}
          </Button>
        </Container>
      </section>

      {/* COMMUNITY SECTION */}
      <section className="py-5 text-center" style={{ backgroundColor: "#FFFFFF" }}>
        <Container>
          <h2 className="fw-bold mb-3" style={{ color: "#1E293B" }}>
            {homeData.community_title}
          </h2>
          <p className="text-muted mb-4">{homeData.community_description}</p>
          <Button
            variant="success"
            onClick={() => window.open(homeData.community_cta_link, "_self")}
          >
            {homeData.community_cta_label}
          </Button>
        </Container>
      </section>
    </div>
  );
}

export default Home;
