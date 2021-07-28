import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import { featuredPortfolio, team, own } from '../../data';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Portfolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'team',
      title: 'Team',
    },
    {
      id: 'own',
      title: 'Own',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'team':
        setData(team);
        break;
      case 'own':
        setData(own);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className="item">
            <img src={d.img} alt={d.title} />
            <a className="deployedApp" href={d.deployedApp}>{d.title}</a>
            <a className="repo" href={d.repo}>
              <GitHubIcon />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
