import { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import FullListItem from './FullListItem';
import { VPNsStore } from '../../../stores/';

import './ListVPN.scss';

const FullListVpn = observer(() => {
  const { vpnsData } = VPNsStore;

  const list = [
    { name: 'Mullvad VPN', rating: 9.7, logo: 'mullvad.png', link: 'mullvad' },
    { name: 'Blanc VPN', rating: 9.6, logo: 'blanc_VPN.png', link: 'Blanc' },
    { name: 'Proton VPN', rating: 8.7, logo: 'proton_VPN.png', link: 'Proton' },
    { name: 'TorGuard VPN', rating: 7.9, logo: 'TorGuard_VPN.png', link: 'TorGuard' },
    { name: 'TunnelBear VPN', rating: 9.9, logo: 'TunnelBear_VPN.png', link: 'TunnelBear' },
    { name: 'Xeovo VPN', rating: 9.7, logo: 'xeovo_VPN.png', link: 'Xeovo' },
    { name: 'Proton VPN', rating: 6.7, logo: 'proton_VPN.png', link: 'Proton' },
    { name: 'TorGuard VPN', rating: 5.9, logo: 'TorGuard_VPN.png', link: 'TorGuard' },
    { name: 'TunnelBear VPN', rating: 4.9, logo: 'TunnelBear_VPN.png', link: 'TunnelBear' },
    { name: 'Xeovo VPN', rating: 2.7, logo: 'xeovo_VPN.png', link: 'Xeovo' }
  ];

  return (
    <div className="vpn-list__inner">
      <div className="background">
        {vpnsData.slice(0, 3).map((node, key) => {
          return <FullListItem key={key} item={node} index={key} />;
        })}
      </div>
      <div className="background">
        {vpnsData.slice(3, list.length).map((node, key) => {
          return <FullListItem key={key} item={node} index={key + 3} />;
        })}
      </div>
      {/* <div className="background">
        {list
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3)
          .map((node, key) => {
            return <FullListItem key={key} item={node} index={key} />;
          })}
      </div>
      <div className="background">
        {list
          .sort((a, b) => b.rating - a.rating)
          .slice(3, list.length)
          .map((node, key) => {
            return <FullListItem key={key} item={node} index={key + 3} />;
          })}
      </div> */}
    </div>
  );
});

export default FullListVpn;
