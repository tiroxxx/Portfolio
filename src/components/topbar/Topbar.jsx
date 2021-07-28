import './topbar.scss';
import { Person, Mail, LinkedIn } from '@material-ui/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Christian M.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 (352) 242-7902</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>christianmarquez41@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/christian-marquez-286a211b2/">
            <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/tiroxxx">
            <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
