import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

function Episodes() {
    const episodesData = [
        {
        id: 1,
        title: "The Colors of Leadership",
        guest: "Pedro Noguera",
        teaser: "Exploring how identity and color shape leadership in schools.",
        image: "https://via.placeholder.com/400x250",
        link: "https://open.spotify.com/episode/example1"
        },
        {
        id: 2,
        title: "Teaching with Empathy",
        guest: "Kapono Ciotti",
        teaser: "Building classrooms around human connection and cultural awareness.",
        image: "https://via.placeholder.com/400x250",
        link: "https://open.spotify.com/episode/example2"
        },
        {
        id: 3,
        title: "Leading Beyond Boundaries",
        guest: "Desiree Morales",
        teaser: "How global perspectives influence modern education leadership.",
        image: "https://via.placeholder.com/400x250",
        link: "https://open.spotify.com/episode/example3"
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    // Filter episodes by search term
    const filteredEpisodes = episodesData.filter(
        (episode) => 
            episode.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        episode.guest.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container className="py-5">
            <div className="text-center mb-5">
                <h1 className="fw-bold">Episodes</h1>
                <p className="text-muted">Discover conversations exploring leadership, color, and change.</p>
            </div>

            <Form className="mb-4">
                <Row className="justify-content-center">
                    <Col md={6}>
                    <Form.Control
                    type="text"
                    placeholder="Search by guest or topic..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    </Col>
                </Row>
            </Form>

            <Row>
                {filteredEpisodes.length > 0 ? (
                    filteredEpisodes.map((episode) => (
                        <Col md={4} sm={6} key={episode.id} className="mb-4">
                        <Card className="h-100 shadow-sm">
                        <Card.Img variant="top" src={episode.image} alt={episode.title}/>
                        <Card.Body>
                            <Card.Title>{episode.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{episode.guest}</Card.Subtitle>
                            <Card.Text>{episode.teaser}</Card.Text>
                            <Button 
                            variant="primary"
                            href={episode.link}
                            target="_blank"
                            rel="noreferrer"
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