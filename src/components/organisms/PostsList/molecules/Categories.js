import { Link } from 'react-router-dom';
import './Categories.scss';

const PostCategories = (props) => {
  const { list } = props;
  return (
    <div className="categories">
      {list.map((node, key) => {
        return (
          <Link to={`../${node.slug}`} key={key} style={{ marginRight: '5px' }}>
            {node.name}
          </Link>
        );
      })}
    </div>
  );
};

export default PostCategories;
