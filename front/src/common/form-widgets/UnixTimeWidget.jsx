import React, { Component } from 'react';
import moment from 'moment';
import Datetime from 'react-datetime';

export default class UnixTimeWidget extends Component {
    constructor(props) {
        super(props);

        this.val = '';
    }

    onChangeLocal = (valueMoment) => {
        try {
            const formatDate = valueMoment.format('X');

            this.val = moment.unix(formatDate);

            this.props.onChange(formatDate);
        } catch (error) {
            this.val = 'choose date'

            this.props.onChange(this.val);
        }
    };

    render() {
        const { required } = this.props;


        return (
            <Datetime
                value={this.val}
                required={required}
                onChange={(valueMoment) => this.onChangeLocal(valueMoment)}
                closeOnSelect={true}
            />
        );
    }
};
