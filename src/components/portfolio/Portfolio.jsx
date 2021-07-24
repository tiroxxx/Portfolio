import './portfolio.scss';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Team</li>
        <li>Own</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="./assets/SubAway.PNG" alt="SubAway" />
          <h3>SubAway</h3>
        </div>
        <div className="item">
          <img src="./assets/wine&dines.JPG" alt="Wine&Dines" />
          <h3>Wine&Dines</h3>
        </div>
        <div className="item">
          <img src="./assets/spotify-lyrical.png" alt="Spotify Lyrical" />
          <h3>Spotify Lyrical</h3>
        </div>
        <div className="item">
          <img src="./assets/personal-cloud.png" alt="Personal Cloud Storage" />
          <h3>Personal Cloud Storage</h3>
        </div>
        <div className="item">
          <img src="./assets/Bookmark.PNG" alt="Bookmark" />
          <h3>Bookmark</h3>
        </div>
      </div>
    </div>
  );
}
