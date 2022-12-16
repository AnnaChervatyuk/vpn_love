import { Link } from 'react-router-dom';
import './RedactionTop.scss';

const RedactionItem = (props) => {
  const { item } = props;
  return (
    <div className="redaction-top__item">
      <div className="icon_triangle"></div>
      <Link to={item.url}>{item.name}</Link>
    </div>
  );
};

export default RedactionItem;
