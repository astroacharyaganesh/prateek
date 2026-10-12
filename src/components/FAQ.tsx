const questions = [
  {
    question: "What birth details do I need?",
    answer:
      "Prepare your date of birth, birth time, and birthplace. It also helps to write down your current career concerns.",
  },
  {
    question: "Can I discuss both a job and a business?",
    answer:
      "Yes. Mention both in your enquiry so your questions can guide the consultation.",
  },
  {
    question: "What if I do not know my exact birth time?",
    answer:
      "Let the team know before booking. They can explain what can be explored with the information available.",
  },
  {
    question: "Does a consultation guarantee career success?",
    answer:
      "No. Astrology offers an interpretive perspective. Career outcomes also depend on your skills, decisions, effort, and opportunities.",
  },
];

export default function FAQ() {
  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">BEFORE YOU BEGIN</p>
          <h2>Frequently Asked Questions</h2>
          <p>Know what to expect from your consultation.</p>
        </div>

        <div className="faq-list">
          {questions.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}