import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function Resources() {
    const articles = [
        {
        title: "The Psychology of Color in Leadership",
        author: "Sanjay Divakar",
        date: "September 2025",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        excerpt:
            "Colors influence how we perceive power, trust, and empathy. Discover how leaders can harness color to communicate more effectively.",
        },
        {
        title: "Leading with Authenticity in a Diverse World",
        author: "Desiree Thomas",
        date: "August 2025",
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
        excerpt:
            "Authenticity creates connection. Learn how today’s leaders can use self-awareness and vulnerability to inspire trust.",
        },
        {
        title: "From Conflict to Collaboration: Lessons from the Classroom",
        author: "Pedro Noguera",
        date: "July 2025",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        excerpt:
            "Education teaches us that leadership isn’t about control — it’s about cultivating understanding. Here’s what educators can teach CEOs.",
        },
    ];

    return (
        <div className="py-5 bg-light">
                <Container>
                    {/* Intro Section */}
                    <Row className="text-center mb-5">
                        <Col md={8} className="mx-auto">
                        <h2 className="fw-bold mb-3">Leadership Insights</h2>
                        <p className="lead text-muted">Eplore thought pieces, reflections, and insights from Sanjay and guests on 
                            leadership, Psychology, and color theory.
                        </p>
                        </Col>
                    </Row>

                    {/* Articles Grid */}
                    <Row className="g-4">
                        {articles.map((article, index) => {
                            <Col md={4} key={index}>
                            <Card className="h-100 shadow-sm border-0">
                                <Card.Img 
                                variant="top"
                                src={article.img}
                                style={{ height: "220px", objectFit: "cover" }}
                                />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {article.author} • {article.date}
                                    </Card.Subtitle>
                                    <Card.Text>{article.excerpt}</Card.Text>
                                    <Button variant="primary" size="sm">Read More</Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        })}
                    </Row>

                    {/* Highlights / Guest Quotes */}
                    <Row className="justify-content-center text-center mt-5 ">
                        <Col md={8}>
                        <blockquote className="blockquote">
                            <p className="fst-italic mb-3">
                                "Leadership is not about standing above - it's about bringing others
                                into the light."
                            </p>
                            <footer className="blockquote-footer">
                                Kapono Ciotti, <cite title="Guest">Eposide 7 - Leadership in Color</cite>
                            </footer>
                        </blockquote>
                        </Col>
                    </Row>

                    {/* Newsletter Signup  */}
                    <Row className="justify-content-center mt-5">
                        <Col md={6} className="text-center">
                        <h4 className="mb-3">Subscribe to Leadership Insights</h4>
                        <p className="text-muted">Get new articles and updates delivered straight to your inbox.</p>
                        <Form className="d-flex justify-content-center">
                            <Form.Control 
                            type="email"
                            placeholder="Enter your email" 
                            className="me-2"
                            style={{ maxWidth: "300px" }}/>

                            <Button variant="primary" type="submit">Subscribe</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Resources;