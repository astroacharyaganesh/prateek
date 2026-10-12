export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#home" className="logo">
          ACHARYA GANESH
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#career">Career Guidance</a>
          <a href="#about">About</a>
          <a href="#faq">FAQs</a>

          <a href="#booking" className="cta">
            Book Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}