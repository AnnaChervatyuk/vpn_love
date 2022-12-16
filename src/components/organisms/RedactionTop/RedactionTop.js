import { Component } from 'react';
import RedactionItem from './RedactionItem';
import './RedactionTop.scss';

class RedactionTop extends Component {
  render() {
    const listTop = [
      { name: 'Разворачиваем Tailscale VPN у себя в облаке', url: '' },
      { name: 'Собственный VPN в России с возможностью управления пользователями на базе WireGuard', url: '' },
      { name: 'Россия вышла на второе место в мире по числу скачиваний VPN-клиентов', url: '' },
      { name: 'Обзор «The Only Free VPN You Can Trust»', url: '' },
      { name: 'Разворачиваем Tailscale VPN у себя в облаке', url: '' }
    ];
    return (
      <div className="redaction-top background">
        <div className="title-36 redaction-top__title">Топ редакции</div>
        <div className="line"></div>
        <div className="redaction-top__list">
          {listTop.map((node, key) => {
            return <RedactionItem key={key} item={node} />;
          })}
        </div>
      </div>
    );
  }
}

export default RedactionTop;
