import { Component } from 'react';
import { Footer, Navigator, TopPanel, PostsList, RedactionTop } from '../../organisms';
import './PostsPage.scss';

class PostsListPage extends Component {
  render() {
    return (
      <>
        <TopPanel />
        <Navigator />
        <div className="news-page page__wrapper">
          <div className="page__inner">
            <div className="news-page__title title-50">Новости</div>
            <div className="news-list__wrapper">
              <PostsList />
              <RedactionTop />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default PostsListPage;
