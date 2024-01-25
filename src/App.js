import React, { useState } from 'react';
import dayjs from 'dayjs';
import AccordionComponent from "./components/AccordionComponent";
import DatePicker from "./components/DatePicker";
import './App.css';

const panelsData = [
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
    {
        id: 'panel3',
        summary: 'Accordion 2',
        details: 'Content for accordion 2...',
        disabled: true,
    },
];

function App() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [expandedPanel, setExpandedPanel] = useState(null);
    const [controlled, setControlled] = useState(false);

    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);
    };

    const handleAccordionChange = (panelId) => (event, isExpanded) => {
        if (controlled) {
            setExpandedPanel(isExpanded ? panelId : null);
        }
    };

    return (
        <div className="App">
            <AccordionComponent
                panels={panelsData}
                controlled={controlled}
                expandedPanel={expandedPanel}
                onChange={handleAccordionChange}
            />
            <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
            />
        </div>
    );
}

export default App;
