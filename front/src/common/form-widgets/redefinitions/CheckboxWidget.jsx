import React, { PureComponent } from 'react';

import { generateId } from '../../../helpers/utils';

export default class CheckboxWidget extends PureComponent {

    render() {
        const { onChange, value, schema, label } = this.props;

        const id = generateId();

        return (
            <div>
                <input
                    type="checkbox"
                    className="form-field__input  form-field__input--checkbox form-field__input--terms visually-hidden"
                    onClick={() => onChange(!value)}
                    defaultChecked={value}
                    id={id}
                />
                <label
                    className="form-field__label  form-field__label--checkbox  form-field__label--terms"
                    htmlFor={id}
                >
                    <svg
                        className="form-field__icon  form-field__icon-checkbox"
                        width="23"
                        height="23"
                    >
                        <use className="form-field__icon-off" href="#checkbox" />
                        <use className="form-field__icon-on" href="#checkbox-on" />
                    </svg>
                    <span className="form-field__wrapper">
                        <b className="form-field__description  form-field__description--terms">
                            {label}
                        </b>
                        <p className="field-description">{schema.description}</p>
                    </span>
                </label>
            </div>
        );
    }
};