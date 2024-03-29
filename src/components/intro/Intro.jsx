import { useEffect, useRef } from 'react';
import './intro.scss';
import { KeyboardArrowDown } from '@material-ui/icons';
import { init } from 'ityped';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ['Full Stack Developer', 'Back End Developer', "Front End Developer", "Star Wars Fanatic", "Gamer"],
    });
  }, []);

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
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <KeyboardArrowDown className="downArrow" />
        </a>
      </div>
    </div>
  );
}
