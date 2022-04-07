import React from "react";
import Accordion from "./../../../Components/UI/Accordion/Accordion";
const notesAccordionController = [
  {
    name: "description",
    content: <div>rich text editor</div>,
    panelHeading: "Description",
  },
  {
    name: "Equations",
    content: <div>rich text editor</div>,
    panelHeading: "Equations",
  },
  {
    name: "Key-Concept",
    content: <div>rich text editor</div>,
    panelHeading: "Key Concept",
  },
  {
    name: "Key-Connection",
    content: <div>rich text editor</div>,
    panelHeading: "Key Connection",
  },
  {
    name: "Application",
    content: <div>rich text editor</div>,
    panelHeading: "Application",
  },
  {
    name: "Simulation",
    content: <div>rich text editor</div>,
    panelHeading: "Simulation",
  },
  {
    name: "Example-Problem",
    content: <div>rich text editor</div>,
    panelHeading: "Example Problem",
  },
  {
    name: "Misconceptions",
    content: <div>rich text editor</div>,
    panelHeading: "Misconceptions",
  },
];

const AddNotesAccordion = () => {
  return <Accordion accordion_controls={notesAccordionController} />;
};

export default AddNotesAccordion;
