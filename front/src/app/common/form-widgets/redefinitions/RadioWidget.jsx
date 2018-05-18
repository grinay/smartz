import React, { PureComponent } from 'react';

import { generateId } from '../../../../helpers/utils';

export default class RadioWidget extends PureComponent {
    render() {
        const { options, value, onChange, } = this.props;
        const { enumOptions } = options;

        const name = generateId();

        return (
            <div className="field-radio-group">
                {enumOptions.map((option, i) => {
                    const checked = option.value === value;
                    const id = generateId();

                    return (
                        <div key={i}>
                            <input
                                type="radio"
                                className="form-field__input  form-field__input--radio visually-hidden"
                                checked={checked}
                                id={id}
                                name={name}
                                value={option.value}
                                onChange={_ => onChange(option.value)}
                            />
                            <label className="form-field__label  form-field__label--radio" htmlFor={id}>
                                <svg className="form-field__icon  form-field__icon-radio" width="27" height="27">
                                    <use className="form-field__icon-off" href="#radio" />
                                    <use className="form-field__icon-on" href="#radio-on" />
                                </svg>
                                <span className="form-field__wrapper">
                                    <b className="form-field__name">
                                        {option.label}
                                    </b>
                                </span>
                            </label>
                        </div>
                    )
                })}
            </div>
        )
    }
};