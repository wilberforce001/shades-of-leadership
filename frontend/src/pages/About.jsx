import { Container, Row, Col, Image } from "react-bootstrap";   
import profileImage from '../assets/Divakar.jpg';

function About() {
    return (
        <section className="py-5 about-page">
            <Container>
                {/* Page Header */}
                <div className="text-center mb-4">
                    <h1 className="fw-bold">About the Show</h1>
                    <p className="text-muted lead">Exploring leadership, color, and identity through powerful conversations.</p>
                </div>

                {/* Story Section */}
                <Row className="align-items-center mb-5 about-section">
                    <Col md={6}>
                        <Image 
                            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                            alt="Microphone and podcast setup"
                            fluid
                            rounded
                            className="shadow-sm mb-4"
                        />
                    </Col>

                    <Col md={6}>
                        <h3 className="fw-semibold mb-2">The Story Behind "Shades"</h3>
                        <p>
                            <strong>Shades of Leadership</strong> was born from the vision of 
                            <a
                                href="https://rolecolorfinder.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-primary ms-1"
                            >
                                RoleColorFinder
                            </a>
                            -a platform helping people discover their unique leadership colors.
                            The Product brings that same philosophy to life through vibrant conversations
                            with leaders, educators, and change-makers around the world.
                        </p>
                        <p>
                            Each episode uncovers how our personal "colors" - our traits, stories, and 
                            backgrounds - shape the way we lead, connect, and inspire.
                        </p>
                    </Col>
                </Row>

                {/* Why "Shades" */}
                <Row className="align-items-center mb-5 flex-md-row-reverse about-section">
                    <Col md={6}>
                    <Image 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                    alt="Color palette concept"
                    fluid
                    rounded
                    className="shadow-sm mb-4"
                    />
                    </Col>

                    <Col md={6}>
                    <h3 className="fw-semibold mb-2">Why "Shades"?</h3>
                    <p>
                        "Shades" represents the idea that leadership isn't black and white. Each leader
                        brings a unique hue - a distinct perspective shaped by experience, empathy, and emotion. 
                        Through these conversations, we illuminate how diversity of Color
                        and character builds stronger communities. 
                    </p>
                    </Col>
                </Row>

                {/* Host Section */}
                <Row className="align-items-center text-center text-md-start">
                    <Col md={4}>
                    <div className="mx-auto mb-3" style={{ maxWidth: "200px"}}>
                        <Image 
                        src={profileImage}
                        alt="Sanjay Divakar"
                        roundedCircle
                        fluid
                        className="shadow-sm"
                        />
                    </div>
                    </Col>

                    <Col md={8}>
                    <h3 className="fw-semibold">Hosted by <span className="text-primary">Sanjay Divakar</span></h3>
                    <p className="lead">Leadership coach and founder of {" "} 
                        <a 
                        href="https://rolecolorfinder.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary"
                        >
                            RoleColorFinder
                        </a>
                        , Sanjay brings deep insights into how personality, culture, and color intersect
                        to shape modern leadership. Together with guests from around the world, he sparks
                        conversations that celebrate the many shades of what it means to lead.
                    </p>
                    </Col>
                </Row>

                {/* Vision Statement */}
                <Row className="mt-5">
                    <Col className="text-center">
                    <blockquote className="blockquote fw-bold fs-5 text-secondary">
                        "We're building the world's most color-aware leadership conversation."
                    </blockquote>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;