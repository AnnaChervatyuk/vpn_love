import { useState, useEffect } from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { useLocation, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { Footer, Navigator, TopPanel, PostsList } from '../../organisms';
import Categories from './../../organisms/PostsList/molecules/Categories';

import { PostsStore } from '../../../stores/';

import './PostsPage.scss';

const PostsPage = observer(() => {
  const params = useParams().newsName;
  useEffect(() => {
    PostsStore.getPostAsync(params);
  }, [params]);

  const { post } = PostsStore;

  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="news-page page__wrapper news-page__article">
        {post && (
          <div className="page__inner">
            <Categories list={post.categories} />
            <div className="news-page__title title-50">{post.title}</div>
            <div className="news-page__img">
              <img src={require(`../../../images/news/image2.png`)} />
            </div>
            <div className="news-page__content">
              {post.shortDescription && (
                <>
                  <div className="news_page__lead">{post.shortDescription}</div>
                  <div className="line"></div>
                </>
              )}

              <div className="news-page__text" id="textPost">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              <div className="line"></div>
              <div className="news-list__wrapper ">
                <PostsList />
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
});

export default PostsPage;
