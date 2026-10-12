import { useState } from "react";
import type { FormEvent } from "react";

export default function Booking() {
  const [enquiry, setEnquiry] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const question = String(data.get("question") ?? "").trim();

    setEnquiry(
      `Radhe Radhe 🌸 My name is ${name}. ` +
        `I would like to book a career astrology consultation ` +
        `with Acharya Ganesh. My question: ${question}. ` +
        `Please share availability and consultation details.`
    );

    setCopyStatus("");
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(enquiry);
      setCopyStatus("Enquiry copied.");
    } catch {
      setCopyStatus(
        "Please select and copy the enquiry from the text box."
      );
    }
  }

  return (
    <section className="booking" id="booking">
      <p className="eyebrow">YOUR NEXT CHAPTER</p>

      <h2>Ready to Explore Your Next Career Move?</h2>

      <p>
        Tell us what is on your mind and prepare your
        consultation enquiry.
      </p>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="booking-name">
          Your Name
          <input
            id="booking-name"
            name="name"
            type="text"
            placeholder="Enter your name"
            autoComplete="name"
            maxLength={80}
            required
          />
        </label>

        <label htmlFor="booking-question">
          Your Career Question
          <textarea
            id="booking-question"
            name="question"
            placeholder="Job change, career growth, business plans..."
            maxLength={1000}
            required
          />
        </label>

        <button className="cta" type="submit">
          Prepare My Enquiry
        </button>

        <p>
          This form prepares a message. It does not send your
          details or confirm a booking.
        </p>

        {enquiry && (
          <>
            <label htmlFor="prepared-enquiry">
              Your Prepared Enquiry
              <textarea
                id="prepared-enquiry"
                value={enquiry}
                readOnly
                rows={6}
              />
            </label>

            <button
              className="cta"
              type="button"
              onClick={copyEnquiry}
            >
              Copy Enquiry
            </button>
          </>
        )}

        <p role="status">{copyStatus}</p>
      </form>
    </section>
  );
}