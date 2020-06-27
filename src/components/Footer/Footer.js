import React, { Component } from 'react';

import { Route, NavLink, HashRouter } from 'react-router-dom';
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul className="navigation">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/stuff">Nagrody</NavLink></li>
            <li><NavLink to="/contact">Konsekwencje</NavLink></li>
            <li><NavLink to="/contact">Ustawienia</NavLink></li>
          </ul>

        </div>
      </HashRouter>

    )
  }
}

export default Footer