import React, { PureComponent } from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';

export default class UnixTimeWidget extends PureComponent {
    render() {
        const { value, required, onChange } = this.props;

        return (
            <Datetime
                value={moment.unix(value)}
                required={required}
                onChange={(valueMoment) => onChange(valueMoment.format('X'))}
                closeOnSelect={true}
            />
        );
    }
};
