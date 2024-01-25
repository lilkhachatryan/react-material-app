import React from 'react';
import AccordionPanel from './AccordionPanel';

export default {
    title: 'Components/AccordionPanel',
    component: AccordionPanel,
    argTypes: {
        summary: {
            control: 'text',
            defaultValue: 'Accordion 1',
        },
        details: {
            control: 'text',
            defaultValue: 'Content for accordion 1...',
        },
        actions: {
            control: 'object',
            defaultValue: [
                { label: 'Cancel', onClick: () => console.log('Cancelled!') },
                { label: 'Agree', onClick: () => console.log('Agreed!') },
            ],
        },
        defaultExpanded: {
            control: 'boolean',
            defaultValue: false,
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
        },
    },
};

const Template = (args) => <AccordionPanel {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Expanded = Template.bind({});
Expanded.args = {
    defaultExpanded: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};
