import { Link } from 'react-router-dom';
import './Slider.scss';

const SliderItem = (props) => {
  const { title, url, img, description, backgroundColor, titleUrl } = props.item;
  return (
    <div className="slider_item banner background" style={{ backgroundColor: `${backgroundColor}` }}>
      <Link to={url} className="banner__link-el">
        <div className="banner__content">
          <div className="banner__title title-70">{title}</div>
          <div className="banner__description">{description}</div>
          <div className="banner__link">{titleUrl}&nbsp;&rarr;</div>
        </div>
        <img src={require(`../../../images/${img}`)} />
      </Link>
    </div>
  );
};

export default SliderItem;
