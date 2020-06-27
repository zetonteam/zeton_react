import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from '../Home/HomeCaregiver';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div className="content">
                        <Route path="/home" component={Home} />
                    </div>
                </div>
            </HashRouter>

        )
    }
}

export default Main