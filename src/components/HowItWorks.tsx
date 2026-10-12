const steps = [
  {
    number: "01",
    title: "Enquire About a Session",
    description:
      "Share your interest in a career consultation and ask about availability and fees.",
  },
  {
    number: "02",
    title: "Prepare Your Birth Details",
    description:
      "Keep your date, time, and place of birth ready, along with your main career questions.",
  },
  {
    number: "03",
    title: "Discuss Your Next Step",
    description:
      "Explore your birth chart and career concerns during a personalised conversation.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Your Consultation, Step by Step</h2>
          <p>A simple way to begin a meaningful conversation.</p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}