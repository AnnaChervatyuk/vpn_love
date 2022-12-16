import { Link } from 'react-router-dom';
import './NewsList.scss';
import NewsItem from './NewsItem';
import { ButtonLink } from '../../atoms';

const NewsList = () => {
  const listNews = [
    {
      title: 'Собственный VPN в России с возможностью управления пользователями на базе WireGuard',
      url: 'news1',
      img: 'news/image2.png',
      type: ['Новость']
    },
    {
      title: 'Владельцы смартфонов Pixel 7 и 7 Pro получат бесплатный доступ к Google One VPN',
      url: 'news2',
      img: 'news/image2.png',
      type: ['Новость']
    },
    {
      title: 'В Google Play перестанут допускать блокирующие рекламу VPN-клиенты',
      url: 'news3',
      img: 'news/image2.png',
      type: ['Новость']
    },
    {
      title:
        'Все VPN-сервисы в iOS не способны защитить подключение — Apple могла бы это исправить, но ничего не делает',
      url: 'news4',
      img: 'news/image2.png',
      type: ['Обзор']
    },
    {
      title: 'Разворачиваем Tailscale VPN у себя в облаке',
      url: 'news5',
      img: 'news/image2.png',
      type: ['Новость', 'Обзор']
    }
  ];
  return (
    <div className="news-list__inner">
      <div className="news__list">
        {listNews.map((node, key) => {
          return <NewsItem key={key} item={node} />;
        })}
      </div>
      <div className="btn btn_all_news">
        <ButtonLink text="Показать еще" url="/news" align="center" />
      </div>
    </div>
  );
};

export default NewsList;
