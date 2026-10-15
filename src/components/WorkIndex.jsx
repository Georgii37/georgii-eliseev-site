
const artworks = [
  {
    id: "deflections",
    title: "Deflections",
    href: "/assets/pdfs/deflections.pdf",
  },
  {
    id: "permitted-forms",
    title: "Permitted Forms",
    href: "/assets/pdfs/permitted-forms.pdf",
  },
  {
    id: "a-macron",
    title: "Ā",
    href: "/assets/pdfs/a-macron.pdf",
  },
];

function WorkIndex() {
  return (
    <nav className="work-index" aria-label="Selected works">
      <div className="work-grid">
        <a
          className="artwork-title work-deflections"
          href={artworks[0].href}
          target="/assets/pdfs/deflections.pdf"
          rel="noopener noreferrer"
        >
          {artworks[0].title}
        </a>

        <a
          className="artwork-title work-permitted"
          href={artworks[1].href}
          target="/assets/pdfs/permitted-forms.pdf"
          rel="noopener noreferrer"
        >
          {artworks[1].title}
        </a>

        <a
          className="artwork-title work-a"
          href={artworks[2].href}
          target="/assets/pdfs/a-macron.pdf"
          rel="noopener noreferrer"
        >
          {artworks[2].title}
        </a>

        <div className="work-horizontal" aria-hidden="true" />
        <div className="work-vertical" aria-hidden="true" />
      </div>
    </nav>
  );
}



export default WorkIndex;
