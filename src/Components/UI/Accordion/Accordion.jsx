import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const accordions_controller = [
  {
    name: "first",
    content: <div>First Accordion Content</div>,
    panelHeading: "First",
    panelDescription: "first",
  },
  {
    name: "second",
    content: <div>First Accordion Content</div>,
    panelHeading: "Second",
    panelDescription: "second",
  },
  {
    name: "third",
    content: <div>First Accordion Content</div>,
    panelHeading: "Third",
    panelDescription: "third",
  },
];

export default function ControlledAccordions({ accordion_controls }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      {accordion_controls.map((accordion, index) => (
        <Accordion
          key={index}
          expanded={expanded === accordion.name}
          onChange={handleChange(accordion.name)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: 500 }}>
              {accordion.panelHeading}
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              {accordion.panelDescription}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>{accordion.content}</AccordionDetails>
        </Accordion>
      ))}
    </React.Fragment>
  );
}

ControlledAccordions.defaultProps = {
  accordion_controls: accordions_controller,
};
