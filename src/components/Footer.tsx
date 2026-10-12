export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <a href="#home" className="logo">
          ACHARYA GANESH
        </a>

        <p>
          © {new Date().getFullYear()} Acharya Ganesh.
          All rights reserved.
        </p>

        <a href="#faq">Consultation FAQs</a>
      </div>
    </footer>
  );
}