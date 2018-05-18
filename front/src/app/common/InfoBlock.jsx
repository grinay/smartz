import React, { PureComponent } from 'react';

export default class InfoBlock extends PureComponent {
    render() {
        const { children, className } = this.props;

        return (
            <section className={className}>
                {children}
            </section>
        );
    }
};