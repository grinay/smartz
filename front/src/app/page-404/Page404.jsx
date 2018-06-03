import React, { PureComponent } from 'react';

import './Page404.less';

export default class Page404 extends PureComponent {
    componentDidMount() {
        window.Intercom("update");
    }

    render() {
        return (
            <div className="page-404">
                <p>Page not found!</p>
                <p>404</p>
            </div>
        );
    }
};