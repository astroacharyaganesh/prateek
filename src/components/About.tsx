const benefits = [
  "Explore your natural strengths and professional interests",
  "Discuss planetary periods and career transitions",
  "Bring your personal career questions into focus",
];



export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about-grid">
        <div className="about-image">
          <img
            src="images\image2.jfif"
            alt="Astrologer Hanish Bagga"
            loading="lazy"
          />
        </div>



        <div className="about-content">
          <p className="eyebrow">A PERSONAL PERSPECTIVE</p>

          <h2>Understand Your Career Through Your Birth Chart</h2>

          <p>
            Explore your career questions with Astrologer Hanish
            Bagga at Acharya Ganesh. Connect traditional Vedic
            astrology with your current circumstances and
            professional goals.
          </p>

          <ul className="about-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <a href="#booking" className="cta">
            Discuss Your Career
          </a>
        </div>
      </div>
    </section>
  );
}


