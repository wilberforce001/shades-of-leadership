import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";

function Episodes() {
  const [pageData, setPageData] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageRes = await axios.get(
          "https://sol.rolecolorfinder.com/wp-json/wp/v2/pages?slug=episodes"
        );
        setPageData(pageRes.data[0]);

        const epRes = await axios.get(
          "https://sol.rolecolorfinder.com/wp-json/wp/v2/episode?per_page=100&orderby=date&order=desc"
        );
        setEpisodes(epRes.data);
      } catch (error) {
        console.error("Error fetching episodes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fetch full single episode details
  const handleEpisodeClick = async (epId) => {
    try {
      setDetailLoading(true);
      const res = await axios.get(
        `https://sol.rolecolorfinder.com/wp-json/wp/v2/episode/${epId}`
      );
      setSelectedEpisode(res.data);
    } catch (err) {
      console.error("Error loading episode details:", err);
    } finally {
      setDetailLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
        <p>Loading Episodes...</p>
      </div>
    );
  }

  if (detailLoading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" />
        <p>Loading Episode Details...</p>
      </div>
    );
  }

  // --- EPISODE DETAIL VIEW ---
  if (selectedEpisode) {
    const acf = selectedEpisode.acf || {};
    const themes = [acf.theme_1, acf.theme_2, acf.theme_3].filter(Boolean);
    const resources = [
      { name: acf.resource_1_name, link: acf.resource_1_link },
      { name: acf.resource_2_name, link: acf.resource_2_link },
      { name: acf.resource_3_name, link: acf.resource_3_link },
    ].filter(r => r.name || r.link);
    const listenLinks = [
      { name: acf.listen_1_name, url: acf.listen_1_url },
      { name: acf.listen_2_name, url: acf.listen_2_url },
      { name: acf.listen_3_name, url: acf.listen_3_url },
    ].filter(l => l.name || l.url);

    return (
      <Container className="py-5">
        <Button variant="link" onClick={() => setSelectedEpisode(null)}>
          ← Back to All Episodes
        </Button>

        <h2 className="fw-bold mb-3" dangerouslySetInnerHTML={{ __html: selectedEpisode.title.rendered }} />

        <p className="text-muted mb-4">
          {acf.guest_name}{acf.guest_title ? `, ${acf.guest_title}` : ""}
        </p>

        {acf.episode_image && (
          <img
            src={acf.episode_image}
            alt={acf.guest_name || selectedEpisode.title.rendered}
            className="img-fluid mb-4 rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        )}

        {acf.episode_intro && (
          <div dangerouslySetInnerHTML={{ __html: acf.episode_intro }} className="mb-4" />
        )}

        {themes.length > 0 && (
          <>
            <h4>Key Themes</h4>
            <ul>
              {themes.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </>
        )}

        {acf.pull_quote && (
          <blockquote className="fs-5 fst-italic text-secondary">
            {acf.pull_quote} — {acf.guest_name}
          </blockquote>
        )}

        {acf.about_guest && (
          <>
            <h4>About the Guest</h4>
            <div dangerouslySetInnerHTML={{ __html: acf.about_guest }} />
          </>
        )}

        {resources.length > 0 && (
          <>
            <h4 className="mt-4">Resources Mentioned</h4>
            <ul>
              {resources.map((r, i) => (
                <li key={i}>
                  {r.link ? (
                    <a href={r.link} target="_blank" rel="noreferrer">
                      {r.name || r.link}
                    </a>
                  ) : (
                    r.name || r.link
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        {listenLinks.length > 0 && (
          <div className="mt-4">
            <h5>Listen & Share</h5>
            {listenLinks.map((l, i) => (
              <Button
                key={i}
                variant="outline-primary"
                className="me-2 mb-2"
                href={l.url}
                target="_blank"
                rel="noreferrer"
              >
                {l.name || l.url}
              </Button>
            ))}
          </div>
        )}
      </Container>
    );
  }

  // --- EPISODE INDEX VIEW ---
  return (
    <Container className="py-5">
      <h2 className="fw-bold text-center mb-3">
        {pageData?.acf?.episodes_heading || "All Episodes"}
      </h2>
      <div
        className="text-center text-muted mb-5"
        dangerouslySetInnerHTML={{ __html: pageData?.acf?.episodes_description }}
      />
      <Row className="justify-content-center">
        {episodes.map((ep) => (
          <Col md={4} sm={6} xs={10} key={ep.id} className="mb-4 d-flex justify-content-center">
            <Card className="shadow-sm h-100 border-0">
              {ep.acf?.episode_image && (
                <Card.Img
                  variant="top"
                  src={ep.acf.episode_image}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              )}
              <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{ __html: ep.title.rendered }} />
                <Card.Subtitle className="text-muted mb-2">
                  {ep.acf?.guest_name}
                  {ep.acf?.guest_title ? `, ${ep.acf.guest_title}` : ""}
                </Card.Subtitle>
                <Card.Text>{ep.acf?.teaser}</Card.Text>

                {/*Add this button*/}
                <div className="text-center mt-3">
                  <Button
                    variant="outline-primary"
                    onClick={() => handleEpisodeClick(ep.id)}
                  >
                    View Details →
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Episodes;
