// Widgets for react-jsonschema-form

import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';

import FileHashWidget from './widgets/hash-widgets/FileHashWidget';
import StringHashWidget from './widgets/hash-widgets/StringHashWidget';

import 'react-datetime/css/react-datetime.css';

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const FormWidgets = {
  // собственные виджеты
  fileHash: (props) => <FileHashWidget {...props} />,
  stringHash: (props) => <StringHashWidget {...props} />,
  unixTime: (props) => {
    return (
      <Datetime value={moment.unix(props.value)}
        required={props.required}
        onChange={(valueMoment) => props.onChange(valueMoment.format('X'))}
        closeOnSelect={true} />
    );
  },
  // переопределение встроенных виджетов
  CheckboxWidget: (props) => {
    const id = makeid();
    return (
      <div>
        <input
          type="checkbox"
          className="form-field__input  form-field__input--checkbox form-field__input--terms visually-hidden"
          onClick={() => props.onChange(!props.value)}
          defaultChecked={props.value}
          id={id}
        />
        <label className="form-field__label  form-field__label--checkbox  form-field__label--terms" htmlFor={id}>
          <svg className="form-field__icon  form-field__icon-checkbox" width="23" height="23">
            <use className="form-field__icon-off" href="#checkbox" />
            <use className="form-field__icon-on" href="#checkbox-on" />
          </svg>
          <span className="form-field__wrapper">
            <b className="form-field__description  form-field__description--terms">
              {props.label}
            </b>
            <p className="field-description">{props.schema.description}</p>
          </span>
        </label>
      </div>
    );
  },
  RadioWidget: (props) => {
    const {
      options,
      value,
      onChange,
    } = props;
    const name = makeid();
    const { enumOptions } = options;
    return (
      <div className="field-radio-group">
        {enumOptions.map((option, i) => {
          const checked = option.value === value;
          const id = makeid();
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
  },
};

export default FormWidgets;
