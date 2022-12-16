import { Component } from 'react';
import { Link } from 'react-router-dom';

import './TopPanel.scss';

class TopPanel extends Component {
  render() {
    return (
      <div className="top_panel__wrapper">
        <div className="top_panel__inner">
          <Link to="/" className="logo logo-vpn" />
        </div>
      </div>
    );
  }
}

export default TopPanel;
