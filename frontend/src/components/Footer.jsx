function Footer() {
  return (
    <footer className="text-center py-3 mt-5"
    style={{ 
      backgroundColor: "#242E42",
      color: "#FFFFFF",
      fontFamily: "'Poppins', sans-serif",
      borderRadius: "15px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
    }}
    >
      <p className="mb-2"
      style={{ fontWeight: "500" }}
      >© {new Date().getFullYear()}{" "}
      <span style={{ color: "#FFDD33" }}>Shades of Leadership</span> |{" "} 
      <span style={{ color: "#2B8CEE" }}>A RoleColorFinder™ Production</span>
       </p>
      <p className="mb-0">
        <a href="https://spotify.com" target="_blank" rel="noreferrer" className="mx-2"
        style={{
          color: "#FFDD33",
          textDecoration: "none",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.color = "#EE2B2B")}
        onMouseLeave={(e) => (e.target.style.color = "#FFDD33")}
        >Spotify</a> |
        <a href="https://apple.com" target="_blank" rel="noreferrer" className="mx-2"
        style={{
          color: "#FFDD33",
          textDecoration: "none",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.color = "#EE2B2B")}
        onMouseLeave={(e) => (e.target.style.color = "#FFDD33")}
        >Apple</a> |
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="mx-2"
        style={{
          color: "#FFDD33",
          textDecoration: "none",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => (e.target.style.color = "#EE2B2B")}
        onMouseLeave={(e) => (e.target.style.color = "#FFDD33")}
        >YouTube</a>
      </p>
    </footer>
  );
}

export default Footer;
