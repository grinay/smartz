import * as React from 'react';


interface IInfoBlockProps {
    className: any;
    children: any;
}

interface IInfoBlockState { }

export default class InfoBlock extends React.PureComponent<IInfoBlockProps, IInfoBlockState> {
    public render() {
        const { children, className } = this.props;

        return (
            <section className={className}>
                {children}
            </section>
        );
    }
}
