function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <p>© {new Date().getFullYear()} Shades of Leadership | A RoleColorFinder™ Production</p>
      <p>
        <a href="https://spotify.com" target="_blank" rel="noreferrer" className="text-light mx-2">Spotify</a> |
        <a href="https://apple.com" target="_blank" rel="noreferrer" className="text-light mx-2">Apple</a> |
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-light mx-2">YouTube</a>
      </p>
    </footer>
  );
}

export default Footer;
