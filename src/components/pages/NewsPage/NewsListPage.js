import { Component } from 'react';
import { Footer, Navigator, TopPanel, NewsList, RedactionTop } from '../../organisms/';
import './NewsPage.scss';

class NewsListPage extends Component {
  render() {
    return (
      <>
        <TopPanel />
        <Navigator />
        <div className="news-page page__wrapper">
          <div className="page__inner">
            <div className="news-page__title title-50">Новости</div>
            <div className="news-list__wrapper">
              <NewsList />
              <RedactionTop />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default NewsListPage;
