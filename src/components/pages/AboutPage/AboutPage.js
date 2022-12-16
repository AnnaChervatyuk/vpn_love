import { Component } from 'react';
import { Footer, Navigator, TopPanel } from '../../organisms/';
import './AboutPage.scss';

class AboutPage extends Component {
  render() {
    return (
      <>
        <TopPanel />
        <Navigator />
        <div className="about-page about-page__wrapper">
          <div className="about-page__inner">
            <div className="about-page__title title-50">О нас</div>
            <div className="about-page__description">
              Сервисы VPN из списка, предложенного нами, устанавливаются быстро и просто, работают в фоновом режиме даже
              на смартфонах и не влияют на быстродействие пользовательского девайса.
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AboutPage;
