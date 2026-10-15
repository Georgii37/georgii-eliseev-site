
function Header({ onAboutClick }) {
  return (
    <>
      <header className="site-header">
        <h1>GEORGII ELISEEV</h1>

        <button
          className="about-button"
          type="button"
          onClick={onAboutClick}
        >
          ABOUT
        </button>
      </header>

      <div className="header-divider" />
    </>
  );
}

export default Header;
