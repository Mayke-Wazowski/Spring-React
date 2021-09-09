const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a
            href="https://github.com/Mayke-Wazowski"
            target="_blank"
            rel="noreferrer"
          >
            Mayke Wazouski
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://www.instagram.com/maykewfx/"
              target="_blank"
              rel="noreferrer"
            >
              @maykewfx
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
