import { Component } from 'react';
import { Footer, Navigator, TopPanel, PostsList, RedactionTop, Slider } from '../../organisms/';
import ListVPN from './../../organisms/ListVPN/ListVPN';
import { observer } from 'mobx-react';

import { ButtonLink } from '../../atoms';
import { VPNsStore } from '../../../stores/';

import './MainPage.scss';

// class MainPage extends Component {
const MainPage = observer(() => {
  const { vpnsData } = VPNsStore;
  return (
    <>
      <TopPanel />
      <Navigator />
      <div className="main-page__wrapper">
        <div className="main-page__inner">
          <Slider />
          <div className="news-list__wrapper">
            <PostsList />
            <RedactionTop />
          </div>

          {vpnsData && vpnsData.length > 0 && (
            <div className="vpn-list__wrapper">
              <div className="vpn-list__row">
                <div className="vpn-list__title">Лучшие VPN — полный анализ (обновлено в январе 2023 г.)</div>
                <div className="btn btn_all_vpn">
                  <ButtonLink text="Все" url="/rating" arrowRight={true} />
                </div>
                <div className="btn btn_all_vpn__mobile">
                  <ButtonLink text="" url="/rating" arrowRight={true} />
                </div>
              </div>
              <ListVPN list={vpnsData} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
});

export default MainPage;
