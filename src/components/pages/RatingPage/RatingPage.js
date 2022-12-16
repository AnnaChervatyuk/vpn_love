import { Component } from 'react';
import { Link } from 'react-router-dom';

import { ListVPN, Footer, Navigator, TopPanel, NewsList, RedactionTop, Slider, FullListVpn } from '../../organisms/';

import './RatingPage.scss';

class RatingPage extends Component {
  render() {
    return (
      <>
        <TopPanel />
        <Navigator />
        <div className="rating-page page__wrapper">
          <div className="page__inner">
            <div className="tag">Рейтинг</div>
            <div className="title title-50">Рейтинг VPN сервисов</div>
            <div className="description">
              Сервисы VPN из списка, предложенного нами, устанавливаются быстро и просто, работают в фоновом режиме даже
              на смартфонах и не влияют на быстродействие пользовательского девайса.{' '}
              <a href="" className="link">
                Ссылка на методологию
              </a>
              .
            </div>
            <div className="filters">фильтры</div>
            <FullListVpn />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default RatingPage;
