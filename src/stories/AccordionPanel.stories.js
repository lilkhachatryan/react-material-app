import React, { useState } from 'react';
import AccordionPanel from '../components/AccordionComponent/AccordionPanel';

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

// Controlled story
export const Controlled = () => {
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = (id) => (event, isExpanded) => {
        setExpanded(isExpanded);
    };

    return (
        <AccordionPanel
            id="panel1"
            summary="Controlled Accordion"
            details="This is a controlled Accordion panel."
            actions={[
                { label: 'Action 1', onClick: () => console.log('Action 1 clicked') },
                { label: 'Action 2', onClick: () => console.log('Action 2 clicked') },
            ]}
            expanded={expanded}
            onChange={handleAccordionChange}
        />
    );
};
