import { Container, Row, Col, Image } from "react-bootstrap";   
import profileImage from '../assets/Divakar.jpg';

function About() {
    return (
        <section>
            <Container>
                <div>
                    <h1>About the Show</h1>
                    <p>Exploring leadership, color, and identity through powerful conversations.</p>
                </div>

                <Row>
                    <Col>
                        <Image 
                            src="https://images.unsplash.com/photo-1581091012184-5c8af0c6e3b1?auto=format&fit=crop&w=800&q=80"
                            alt="Microphone and podcast setup"
                            fluid
                            rounded
                        />
                    </Col>

                    <Col>
                        <h3>The Story Behind "Shades"</h3>
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

                <Row>
                    <Col>
                    <Image 
                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                    alt="Color palette concept"
                    fluid
                    rounded
                    className="shadow-sm"
                    />
                    </Col>

                    <Col>
                    <h3>Why "Shades"?</h3>
                    <p>
                        "Shades" represents the idea that leadership isn't black and white. Each leader
                        brings a unique hue - a distinct perspective shaped by experience, empathy, and emotion. 
                        Through these conversations, we illuminate how diversity of Color
                        and character builds stronger communities. 
                    </p>
                    </Col>
                </Row>

                <Row>
                    <Col>
                    <div>
                        <Image 
                        src={profileImage}
                        alt="Sanjay Divakar"
                        roundedCircle
                        fluid
                        className="shadow-sm"
                        />
                    </div>
                    </Col>

                    <Col>
                    <h3>Hosted by <span>Sanjay Divakar</span></h3>
                    <p>Leadership coach and founder of {" "} 
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
                <Row>
                    <Col>
                    <blockquote>
                        "We're building the world's most color-aware leadership conversation."
                    </blockquote>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;