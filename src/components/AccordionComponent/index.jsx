import React from 'react';
import PropTypes from 'prop-types';
import AccordionPanel from "./AccordionPanel";

const AccordionComponent = ({ panels }) => {
    return (
        <div className="accordion">
            {panels.map((panel, index) => (
                <AccordionPanel key={index} {...panel} />
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
};

export default AccordionComponent;
