import { useNavigate, Link } from 'react-router-dom';
import Categories from './molecules/Categories';

import './PostsList.scss';

const PostsItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  return (
    <div className="news-item__wrapper">
      <Categories list={item.categories} />
      <div
        className="news-item"
        onClick={() => {
          navigate(`/news/${item.slug}`);
        }}
      >
        <div className="news-item__content">
          <div className="news-item__title">{item.title}</div>
        </div>
        <div className="news-item__img">
          {/* <img src={require(`../../../images/${item.img}`)} /> */}
          <img src={require('../../../images/news/image2.png')} />
        </div>
      </div>
    </div>
  );
};

export default PostsItem;
