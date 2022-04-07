import React from "react";
import GridComp from "../../Components/UI/Layout/Grid/Grid";
import Tabs from "../../Components/UI/Tabs/Tabs";
import FlashCards from "./SubComponents/Flashcards";
import LearningObjectives from "./SubComponents/LearningObjectives";
import Notes from "./SubComponents/Notes";
import Config from "./SubComponents/Config";

const controller = [
  {
    value: 0,
    label: "Notes",
    content: <Notes />,
  },
  {
    value: 1,
    label: "Flash Cards",
    content: <FlashCards />,
  },
  {
    value: 2,
    label: "Learning Objectives",
    content: <LearningObjectives />,
  },
  {
    value: 3,
    label: "Config",
    content: <Config />,
  },
];

const Subject = () => {
  return (
    <GridComp item xs={12}>
      <Tabs tabs={controller} />
    </GridComp>
  );
};

export default Subject;
