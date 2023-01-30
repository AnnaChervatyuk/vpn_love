import { Component } from 'react';
import { observer } from 'mobx-react';
import { useState, useEffect } from 'react';
import { toJS } from 'mobx';

import { Footer, Navigator, TopPanel, PostsList, RedactionTop } from '../../organisms/';
import { PostsStore } from '../../../stores/';

import './AlternativeVPNPage.scss';

const AlternativeVPNPage = observer(() => {
  const { categoriesData } = PostsStore;
  console.log('12313', categoriesData.filter((element) => element.slug === 'alternatives')[0].posts);
  console.log('categoriesData', categoriesData);
  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="alternative-page alternative-page__wrapper">
        <div className="alternative-page__inner">
          <div className="alternative-page__title title-50">Альтернативы VPN</div>
          <div className="alternative-page__description">
            <p>
              В&nbsp;данном разделе мы&nbsp;расскажем вам про инструменты, которые можно назвать Альтернативами для VPN
              сервисов. Каждый сервис из&nbsp;этого списка прошел проверку временем, доказал свою надежность, качество
              и&nbsp;простоту в&nbsp;использовании.{' '}
            </p>
            <p>
              Также тут можно будет найти полезные ссылки по&nbsp;настройке, работе и&nbsp;использовании того или иного
              продукта.
            </p>
          </div>

          <div className="alternative-page__banner background banner">
            <a href="https://censortracker.org/" className="banner__link-el" target="_blank">
              <div className="banner__content">
                <div className="banner__title title-70">Censor Tracker</div>
                <div className="banner__description">
                  Расширение для обхода блокировок и выявления сайтов, которые следят за вами. Мы не зарабатываем на
                  наших пользователях и не заглядываем в ваш трафик.
                </div>
                <div className="banner__link">Обзор Censor Tracker</div>
              </div>
              <img src={require('../../../images/CensorTracker.png')} />
            </a>
          </div>
          {categoriesData.length > 0 && (
            <div className="news-list__wrapper">
              <PostsList posts={categoriesData.filter((element) => element.slug === 'alternatives')[0].posts} />
              <RedactionTop />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default AlternativeVPNPage;
