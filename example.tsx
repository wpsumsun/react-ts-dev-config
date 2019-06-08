import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import './reset.scss'
import './example.scss'

ReactDOM.render(
    <Router>
        <div className="ying-wrapper">
            <header>
                <div className="logo">
                    ying-ui
                </div>

            </header>
            <div className="ying-wrapper-content">
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to="/icon">Icon</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}/>
                </main>
            </div>
        </div>
    </Router>
    , document.querySelector('#root'));