import * as React from 'react';

import './Page404.less';


export default class Page404 extends React.PureComponent {
    public componentDidMount() {
        window.Intercom('update');
    }

    public render() {
        return (
            <div className="page-404">
                <p>Page not found!</p>
                <p>404</p>
            </div>
        );
    }
}
