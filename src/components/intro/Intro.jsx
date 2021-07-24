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
      strings: ['Developer', 'Gamer', "Front End Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/selfie.png" alt="Christian Marquez" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Christian Marquez</h1>
          <h3>
            Your <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <KeyboardArrowDown className="downArrow" />
        </a>
      </div>
    </div>
  );
}
