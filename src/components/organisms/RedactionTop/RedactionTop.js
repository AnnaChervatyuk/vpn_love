import RedactionItem from './RedactionItem';
import { PostsStore } from '../../../stores/';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import './RedactionTop.scss';

const RedactionTop = observer(() => {
  const { topRatedData } = PostsStore;
  return (
    <div className="redaction-top background">
      <div className="title-36 redaction-top__title">Топ редакции</div>
      <div className="line"></div>
      <div className="redaction-top__list">
        {topRatedData.map((node, key) => {
          return <RedactionItem key={key} item={node} />;
        })}
      </div>
    </div>
  );
});

export default RedactionTop;
