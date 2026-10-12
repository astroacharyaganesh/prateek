const services = [
  {
    icon: "✦",
    title: "Job Change",
    description:
      "Considering a new role? Explore your strengths, career direction, and questions around making a transition.",
  },
  {
    icon: "↗",
    title: "Career Growth",
    description:
      "Discuss professional growth, new responsibilities, and the challenges you face in your current role.",
  },
  {
    icon: "☼",
    title: "Business Decisions",
    description:
      "Bring your questions about starting a business, self-employment, or choosing a business partnership.",
  },
];

export default function CareerGuidance() {
  return (
    <section className="section" id="career">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">WHEN YOUR NEXT STEP MATTERS</p>
          <h2>Facing a Career Crossroads?</h2>
          <p>
            Big decisions deserve a thoughtful conversation.
            Start with the questions on your mind.
          </p>
        </div>

        <div className="career-grid">
          {services.map((service) => (
            <article className="career-card" key={service.title}>
              <span className="card-icon" aria-hidden="true">
                {service.icon}
              </span>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}