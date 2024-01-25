import React from 'react';
import AccordionComponent from './index';

export default {
    title: 'Components/AccordionComponent',
    component: AccordionComponent,
    argTypes: {
        panels: {
            control: 'object',
            defaultValue: [
                {
                    id: 'panel1',
                    summary: 'Accordion 1',
                    details: 'Content for accordion 1...',
                    defaultExpanded: true,
                },
                {
                    id: 'panel2',
                    summary: 'Accordion 2',
                    details: 'Content for accordion 2...',
                    actions: [
                        { label: 'Cancel', onClick: () => console.log('Cancelled!') },
                        { label: 'Agree', onClick: () => console.log('Agreed!') },
                    ],
                },
            ],
        },
    },
};

const Template = (args) => <AccordionComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    panels: [
        {
            id: 'panel1',
            summary: 'Accordion 1',
            details: 'Content for accordion 1...',
            defaultExpanded: true,
        },
        {
            id: 'panel2',
            summary: 'Accordion 2',
            details: 'Content for accordion 2...',
            actions: [
                { label: 'Cancel', onClick: () => console.log('Cancelled!') },
                { label: 'Agree', onClick: () => console.log('Agreed!') },
            ],
        },
    ],
};
