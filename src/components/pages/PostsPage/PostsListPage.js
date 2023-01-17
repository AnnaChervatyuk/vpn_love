import { Footer, Navigator, TopPanel, PostsList } from '../../organisms';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import { PostsStore } from '../../../stores/';

import './PostsPage.scss';

const PostsListPage = observer(() => {
  const location = useLocation().pathname.replace('/', '');
  const { categoriesData } = PostsStore;
  const category = categoriesData.find((element) => element.slug === location);
  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="news-page page__wrapper">
        <div className="page__inner">
          {category && (
            <>
              <div className="news-page__title title-50">{category.name}</div>
              <div className="news-list__wrapper">
                <PostsList posts={category.posts} />
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default PostsListPage;
