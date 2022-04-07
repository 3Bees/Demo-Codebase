import React from "react";
import ListAppenderPairs from "./../../../Components/UI/ListAppender/ListAppenderModifiedPairs";
import Accordion from "./../../../Components/UI/Accordion/Accordion";

const AddFlashCardsAccordion = () => {
  const flashCardsAccordionController = [
    {
      name: "description",
      content: <ListAppenderPairs />,
      panelHeading: "Description",
    },
    {
      name: "Equations",
      content: <ListAppenderPairs />,
      panelHeading: "Equations",
    },
    {
      name: "Key-Concept",
      content: <ListAppenderPairs />,
      panelHeading: "Key Concept",
    },
    {
      name: "Key-Connection",
      content: <ListAppenderPairs />,
      panelHeading: "Key Connection",
    },
    {
      name: "Application",
      content: <ListAppenderPairs />,
      panelHeading: "Application",
    },
    {
      name: "Simulation",
      content: <ListAppenderPairs />,
      panelHeading: "Simulation",
    },
    {
      name: "Example-Problem",
      content: <ListAppenderPairs />,
      panelHeading: "Example Problem",
    },
    {
      name: "Misconceptions",
      content: <ListAppenderPairs />,
      panelHeading: "Misconceptions",
    },
  ];
  return <Accordion accordion_controls={flashCardsAccordionController} />;
};

export default AddFlashCardsAccordion;
