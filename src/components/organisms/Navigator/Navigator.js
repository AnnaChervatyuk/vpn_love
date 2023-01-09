import { Link } from 'react-router-dom';

import './Navigator.scss';

const Navigator = () => {
  const navigatorList = [
    { link: 'rating', name: 'Рейтинг VPN' },
    { link: 'alternativeVPN', name: 'Альтернативы VPN' },
    // { link: 'news', name: 'Новости' },
    { link: 'about', name: 'О нас' }
  ];
  return (
    <div className="navigator__wrapper">
      <div className="navigator__list">
        {navigatorList.map((node, key) => {
          return (
            <Link to={`/${node.link}`} className="navigator__item" key={key}>
              {node.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navigator;
