import { Component } from 'react';

import { Footer, Navigator, TopPanel, PostsList, RedactionTop } from '../../organisms/';

import './AlternativeVPNPage.scss';

class AlternativeVPNPage extends Component {
  render() {
    return (
      <>
        <TopPanel />
        <Navigator />
        <div className="alternative-page alternative-page__wrapper">
          <div className="alternative-page__inner">
            <div className="alternative-page__title title-50">Альтернативы VPN</div>
            <div className="alternative-page__description">
              Сервисы VPN из списка, предложенного нами, устанавливаются быстро и просто, работают в фоновом режиме даже
              на смартфонах и не влияют на быстродействие пользовательского девайса.
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

export default AlternativeVPNPage;
