import React, { useState } from 'react';
import AccordionComponent from '../components/AccordionComponent';

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

// Controlled story
export const Controlled = () => {
    const [expandedPanel, setExpandedPanel] = useState('panel1');

    const handleChange = (panelId) => {
        setExpandedPanel(expPanel => expPanel === panelId ? null : panelId);
    };

    return (
        <AccordionComponent
            controlled
            expandedPanel={expandedPanel}
            onChange={handleChange}
            panels={[
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
            ]}
        />
    );
};
