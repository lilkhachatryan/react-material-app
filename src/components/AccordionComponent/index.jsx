import React from 'react';
import PropTypes from 'prop-types';
import AccordionPanel from './AccordionPanel';

const AccordionComponent = ({ panels, controlled, expandedPanel, onChange }) => {
    return (
        <div className="accordion">
            {panels.map(panel => (
                <AccordionPanel
                    key={panel.id}
                    {...panel}
                    expanded={controlled ? expandedPanel === panel.id : undefined}
                    onChange={controlled ? onChange : undefined}
                />
            ))}
        </div>
    );
};

AccordionComponent.propTypes = {
    panels: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            summary: PropTypes.string.isRequired,
            details: PropTypes.string.isRequired,
            actions: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    onClick: PropTypes.func,
                })
            ),
            defaultExpanded: PropTypes.bool,
            disabled: PropTypes.bool,
        })
    ).isRequired,
    controlled: PropTypes.bool,
    expandedPanel: PropTypes.string,
    onChange: PropTypes.func,
};

export default AccordionComponent;
