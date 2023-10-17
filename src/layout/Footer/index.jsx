const Footer = () => {
  return (
    <footer className="page-footer #ff6f00 amber darken-4">
      <div className="footer-copyright #ffca28 amber lighten-1">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  );
};

export { Footer };
