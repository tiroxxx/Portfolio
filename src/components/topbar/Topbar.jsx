import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Christian Marquez
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 (352) 242-7902</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>christianmarquez41@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
