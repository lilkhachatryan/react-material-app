import React from 'react';
import DatePicker from '../components/DatePicker';
import dayjs from 'dayjs';

export default {
    title: 'Components/DatePicker',
    component: DatePicker,
    argTypes: {
        value: {
            control: 'date',
            defaultValue: dayjs(),
        },
        label: {
            control: 'text',
            defaultValue: 'Date-Time Picker',
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
    },
};

const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
