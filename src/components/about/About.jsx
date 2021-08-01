import './about.scss';

export default function About() {
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <div className="left">
          <p>
            I'm a Full Stack Developer mainly working with the MERN stack with
            over 9 months of experience in web development. Always looking to
            improve and optimize everything I do. Javascript is my bread and
            MongoDB is my butter.
          </p>
          <p>
            Although the front end is beautiful and I like React, the back end
            is what I enjoy the most.
          </p>
          <p>
            When in need of guidance I go to my parents Google and Youtube, but
            when they're mean I go to my uncle Stackoverflow.
          </p>
        </div>
        <div className="right">
          <img src="./assets/laptop.jpg" alt="Laptop" />
        </div>
      </div>
    </div>
  );
}
