import React, { PureComponent } from 'react';

export default class FunctionButton extends PureComponent {
    render() {
        const { onClick, title = '' } = this.props;

        return (
            <li className="contract-controls__item">
                <button
                    className="btn-contract contract-controls__button"
                    type="button"
                    onClick={onClick}
                >
                    {title}
                </button>
            </li>
        );
    }
};