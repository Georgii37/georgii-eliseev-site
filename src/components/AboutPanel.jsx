
function AboutPanel({ isOpen, onClose }) {
  return (
    <section
      className={`about-panel ${isOpen ? "is-open" : ""}`}
      aria-label="About the artist"
      aria-hidden={!isOpen}
      inert={!isOpen}
    >
      <div className="about-content">

        <div className="about-biography">
          <p>
            Georgii Eliseev (b. 1996, Siberia) is a
            New York-based artist whose practice
            encompasses works on paper, digital art,
            and moving image.
          </p>

          <p>
            With a formal background in Information
            Systems (BBA), he examines how digital
            systems engage with the human condition
            through reductive and relational behavior,
            and how lived experience is organized
            and arranged.
          </p>

          <p>
            His work approaches these concerns with
            abstraction, implementing processes of
            repetition, compression, and variation.
            Eliseev explores how new forms, symbols,
            and relationships emerge within established
            conditions, exceeding their initial
            structures.
          </p>

          <p>
            He lives and works in New York.
          </p>
        </div>

        <button
          type="button"
          className="about-hide"
          onClick={onClose}
        >
          <span>hide</span>
          <span
            className="hide-circle"
            aria-hidden="true"
          />
        </button>

      </div>
    </section>
  );
}

export default AboutPanel;
