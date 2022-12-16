import { Link, useNavigate } from 'react-router-dom';

import './NewsList.scss';

const NewsItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  return (
    <div className="news-item__wrapper">
      <div
        className="news-item"
        onClick={() => {
          navigate(`/news/${item.url}`);
        }}
      >
        <div className="news-item__content">
          <div className="news-item__type">{item.type.join(' ')}</div>
          <div className="news-item__title">{item.title}</div>
        </div>
        <div className="news-item__img">
          <img src={require(`../../../images/${item.img}`)} />
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
