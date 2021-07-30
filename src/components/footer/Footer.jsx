import './footer.scss';

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="left">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="./assets/Resume-2021.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/christian-marquez-286a211b2/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/tiroxxx" target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
