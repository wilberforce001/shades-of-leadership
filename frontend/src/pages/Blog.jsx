import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";

function Blog() {
  const [pageData, setPageData] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [pageRes, blogsRes] = await Promise.all([
          axios.get("http://localhost:5000/api/wordpress/blog-page"),
          axios.get("http://localhost:5000/api/wordpress/blogs"),
        ]);
        setPageData(pageRes.data[0]); // WordPress “Blog” page data
        setBlogs(blogsRes.data); // Blog post data
      } catch (err) {
        console.error("Error fetching blog data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" /> <p>Loading Blog...</p>
      </Container>
    );
  }

  // INDEX VIEW (list of all blogs)
  if (!selectedBlog) {
    return (
      <Container className="my-5">
        <h2 className="mb-3 text-center">
          {pageData?.acf?.section_title || "The Leadership Journal"}
        </h2>

        <p className="text-center mb-4">
          <em>{pageData?.acf?.section_tagline || "Ideas. Frameworks. Reflections."}</em><br />
          {pageData?.acf?.section_intro ||
            "The written side of the Shades of Leadership conversation."}
        </p>

        <p className="text-center text-muted mb-5">
          <strong>Categories:</strong>{" "}
          {pageData?.acf?.categories_text ||
            "Lessons from the Podcast · Leadership & Learning · Systems & Change · Reflections from Sanjay · Guest Essays"}
        </p>

        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {blogs.map((blog) => {

            const featuredImage =
            blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.png";

            return (
              <Col key={blog.id}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={featuredImage} alt={blog.title.rendered} />
                  <Card.Body>
                    <Card.Title
                      dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                    />
                    <Card.Subtitle className="mb-2 text-muted">
                      by {blog._embedded?.author?.[0]?.name || "Unknown Author"}
                    </Card.Subtitle>
                    <Card.Text>{blog.acf?.summary || "No summary available."}</Card.Text>
                    <Button
                      variant="dark"
                      onClick={() => setSelectedBlog(blog)}
                      className="mt-2"
                    >
                      → Read More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }

  // DETAIL VIEW (single blog)
  const blog = selectedBlog;
  const featuredImage =
    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/800x500";

  return (
    <Container className="my-5">
      <Button variant="link" onClick={() => setSelectedBlog(null)}>
        ← Back to Blog
      </Button>

      <h2 className="mt-3" dangerouslySetInnerHTML={{ __html: blog.title.rendered }} />
      {blog.acf?.tagline && <h5 className="text-muted mb-3">{blog.acf.tagline}</h5>}

      <p className="text-muted">
        by {blog._embedded?.author?.[0]?.name || "Unknown Author"} ·{" "}
        {new Date(blog.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <img
        src={featuredImage}
        alt={blog.title.rendered}
        className="img-fluid rounded mb-4 shadow-sm"
      />

      <div
        className="lead"
        dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
      />

      {blog.acf?.pull_quote && (
        <blockquote className="my-4 p-3 border-start border-4 border-dark bg-light fst-italic">
          “{blog.acf.pull_quote}”
        </blockquote>
      )}

      <div className="mt-4">
        {blog.acf?.related_episode && (
          <Button
            variant="outline-dark"
            href={blog.acf.related_episode}
            target="_blank"
            className="me-3"
          >
            → Listen to the Related Episode
          </Button>
        )}
        {blog.acf?.subscribe_link && (
          <Button
            variant="dark"
            href={blog.acf.subscribe_link}
            target="_blank"
          >
            → Subscribe to the Journal
          </Button>
        )}
      </div>
    </Container>
  );
}

export default Blog;
