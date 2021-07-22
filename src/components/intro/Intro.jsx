import './intro.scss';
import { KeyboardArrowDown } from '@material-ui/icons';

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/Portfolio-Picture.jpg" alt="Christian Marquez" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Christian Marquez</h1>
          <h3>Full Stack Developer</h3>
        </div>
        <a href="#about">
          <KeyboardArrowDown className="downArrow" />
        </a>
      </div>
    </div>
  );
}
