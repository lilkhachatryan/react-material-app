import React from 'react';
import PropTypes from 'prop-types';
import { DateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const DatePicker = ({ value, onChange, label, disabled }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
                    value={value}
                    onChange={onChange}
                    label={label}
                    disabled={disabled}
                    className="date-picker"
                />
        </LocalizationProvider>
    );
}

DatePicker.propTypes = {
    value: PropTypes.object,
    onChange: PropTypes.func,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

DatePicker.defaultProps = {
    value: dayjs(),
    onChange: undefined,
    label: 'Date-Time Picker',
    disabled: false,
};

export default DatePicker;
