import { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import FullListItem from './FullListItem';
import { VPNsStore } from '../../../stores/';

import './ListVPN.scss';

const FullListVpn = observer(() => {
  const { vpnsData } = VPNsStore;

  return (
    <div className="vpn-list__inner">
      <div className="background">
        {vpnsData.slice(0, 3).map((node, key) => {
          return <FullListItem key={key} item={node} index={key} />;
        })}
      </div>
      <div className="background">
        {vpnsData.slice(3, vpnsData.length).map((node, key) => {
          return <FullListItem key={key} item={node} index={key + 3} />;
        })}
      </div>
    </div>
  );
});

export default FullListVpn;
