import { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

import './ListVPN.scss';

const List = (props) => {
  const { list } = props;

  return (
    <div className="vpn-list__inner background">
      {list
        .sort((a, b) => b.rating - a.rating)
        .map((node, key) => {
          return <ListItem key={key} item={node} index={key} />;
        })}
    </div>
  );
};

export default List;
