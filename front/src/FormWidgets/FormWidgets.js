// Widgets for react-jsonschema-form

import React from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const FormWidgets = {
  unixTime: (props) => {
    return (
      <Datetime value={moment.unix(props.value)}
        required={props.required}
        onChange={(valueMoment) => props.onChange(valueMoment.format('X'))}
        closeOnSelect={true} />
    );
  }
};

export default FormWidgets;
