import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const AccordionPanel = ({ summary, details, actions, defaultExpanded, disabled }) => {
    return (
        <Accordion disabled={disabled}  defaultExpanded={defaultExpanded}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel-content" id="panel-header">
                <Typography>{summary}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{details}</Typography>
            </AccordionDetails>
            {actions && (
                <AccordionActions>
                    {actions.map((action, index) => (
                        <Button key={index} onClick={action.onClick}>
                            {action.label}
                        </Button>
                    ))}
                </AccordionActions>
            )}
        </Accordion>
    );
};

AccordionPanel.propTypes = {
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
};

AccordionPanel.defaultProps = {
    actions: [],
    defaultExpanded: false,
    disabled: false,
};

export default AccordionPanel
