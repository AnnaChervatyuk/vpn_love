import { Component } from 'react';
import { Link } from 'react-router-dom';
import List from './List';
import { ButtonLink } from '../../atoms';

import './ListVPN.scss';

const ListVPN = (props) => {
  const { vpnList } = props;
  return (
    <div className="vpn-list__wrapper">
      <div className="vpn-list__row">
        <div className="vpn-list__title">{vpnList.title}</div>
        <div className="btn btn_all_vpn">
          <ButtonLink text="Все" url={vpnList.url} arrowRight={true} />
        </div>
        <div className="btn btn_all_vpn__mobile">
          <ButtonLink text="" url={vpnList.url} arrowRight={true} />
        </div>
      </div>
      <List list={vpnList.listVPN} />
    </div>
  );
};

export default ListVPN;
