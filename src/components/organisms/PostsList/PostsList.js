import { useState } from 'react';
import { observer } from 'mobx-react';
import './PostsList.scss';
import PostsItem from './PostsItem';
import { Button } from '../../atoms';
import { PostsStore } from './../../../stores';

const PostsList = observer(() => {
  const { postsData } = PostsStore;
  const [showPosts, setShowPost] = useState(5);

  return (
    <div className="news-list__inner">
      <div className="news__list">
        {postsData.length > 0 && (
          <>
            {postsData.slice(0, showPosts).map((node, key) => {
              return <PostsItem key={key} item={node} />;
            })}
          </>
        )}
      </div>
      {postsData.length > showPosts && (
        <div className="btn btn_all_news">
          <Button
            text="Показать еще"
            align="center"
            handleClick={() => {
              setShowPost(showPosts + 5);
            }}
          />
        </div>
      )}
    </div>
  );
});

export default PostsList;
