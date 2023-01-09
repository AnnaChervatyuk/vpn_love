import { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

import './ListVPN.scss';

const ListVPN = (props) => {
  const { list } = props;
  console.log('list', list);
  return (
    <div className="vpn-list__inner background">
      {list
        // .sort((a, b) => b.rating - a.rating)
        .slice(0, 6)
        .map((node, key) => {
          return <ListItem key={key} item={node} index={key} />;
        })}
    </div>
  );
};

export default ListVPN;
