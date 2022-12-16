import { Component } from 'react';
import { ListVPN, Footer, Navigator, TopPanel, NewsList, RedactionTop, Slider } from '../../organisms/';
import './MainPage.scss';

class MainPage extends Component {
  render() {
    const listVPN = [
      {
        title: 'Лучшие VPN — полный анализ (обновлено в октябре 2022 г.)',
        typeList: 'best',
        url: '/rating',
        listVPN: [
          { name: 'Mullvad VPN', rating: 9.7, logo: 'mullvad.png' },
          { name: 'Blanc VPN', rating: 9.6, logo: 'blanc_VPN.png' },
          { name: 'Proton VPN', rating: 8.7, logo: 'proton_VPN.png' },
          { name: 'TorGuard VPN', rating: 7.9, logo: 'TorGuard_VPN.png' },
          { name: 'TunnelBear VPN', rating: 9.9, logo: 'TunnelBear_VPN.png' },
          { name: 'Xeovo VPN', rating: 9.7, logo: 'xeovo_VPN.png' }
        ]
      },
      {
        title: 'Чёрный список. VPN, которые замешаны в утечках данных',
        typeList: 'black',
        url: '/rating',
        listVPN: [
          { name: 'Mullvad VPN', rating: 9.7, logo: 'mullvad.png' },
          { name: 'Blanc VPN', rating: 9.6, logo: 'blanc_VPN.png' },
          { name: 'Proton VPN', rating: 8.7, logo: 'proton_VPN.png' },
          { name: 'TorGuard VPN', rating: 7.9, logo: 'TorGuard_VPN.png' },
          { name: 'TunnelBear VPN', rating: 9.9, logo: 'TunnelBear_VPN.png' },
          { name: 'Xeovo VPN', rating: 9.7, logo: 'xeovo_VPN.png' }
        ]
      }
    ];
    return (
      <>
        <TopPanel />
        <Navigator />
        <div div className="main-page__wrapper">
          <div className="main-page__inner">
            <Slider />
            <div className="news-list__wrapper">
              <NewsList />
              <RedactionTop />
            </div>

            {listVPN.map((node, key) => {
              return <ListVPN vpnList={node} key={key} />;
            })}
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default MainPage;
