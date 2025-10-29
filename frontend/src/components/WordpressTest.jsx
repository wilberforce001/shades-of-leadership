import React, { useEffect, useState } from "react";

export default function WordpressTest() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://sol.rolecolorfinder.com/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching WordPress posts:", err));
  }, []);

  if (loading) return null;
  return null;

  return (
    <div className="container my-3 text-end">
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide WP Data" : "Show WP Data"}
      </button>

      {show && (
        <div
          className="mt-3 p-3"
          style={{
            background: "#f8f8f8",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <small className="text-muted">
            ✅ Connected – {posts.length} posts loaded
          </small>
          {posts.slice(0, 2).map((post) => (
            <div key={post.id}>
              <h6 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}