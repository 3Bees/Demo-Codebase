import React from "react";
import BaseUI from "../BaseUI";
import { useDispatch } from "react-redux";
import { createCourseStepperActions } from "../../../redux/reducers/createCourseStepper";
import Accordion from "../../../Components/UI/Accordion/Accordion";
import List from "../../../Components/UI/List/List";
import GridComp from "../../../Components/UI/Layout/Grid/Grid";
import Paper from "../../../Components/UI/Paper/Paper";
import Box from "../../../Components/UI/Layout/Box/Box";
import data from "../../../config/mockData/dummy_chapters.json";
import Typography from "../../../Components/UI/Typography/Typography";
import StackComp from "../../../Components/UI/Layout/Stack/Stack";
import Tabs from "../../../Components/UI/Tabs/Tabs";
import BoxComp from "../../../Components/UI/Layout/Box/Box";

import AddNotesAccordion from "./AddNotesAccordion";
import AddFlashCardsAccordion from "./AddFlashCardsAccordion";

const tabs = [
  {
    value: 0,
    label: "Notes",
    content: <AddNotesAccordion />,
  },
  {
    value: 1,
    label: "Flash Cards",
    content: <AddFlashCardsAccordion />,
  },
];

const AddSnackFlashCards = () => {
  const [chaps, setChaps] = React.useState([]);
  const [selected, setSelected] = React.useState({ name: "", label: "" });
  React.useEffect(() => {
    setChaps([...data]);
  }, []);
  const dispatch = useDispatch();
  return (
    <BaseUI
      title="Add Content"
      forwardBtnText="Finish"
      forwardBtnProps={{
        onClick: (e) => dispatch(createCourseStepperActions.setPage(7)),
      }}
      backBtnProps={{
        onClick: (e) => dispatch(createCourseStepperActions.setPage(5)),
      }}
    >
      <GridComp container spacing={2}>
        <GridComp item style={{ paddingLeft: "1rem" }} xs={3}>
          <Paper>
            <List
              items={chaps}
              selectHandler={(e) => setSelected({ ...e })}
              heading="Chapters"
            />
          </Paper>
        </GridComp>
        <GridComp item xs={9}>
          {selected.name !== "" && (
            <Paper style={{ width: "95%", margin: "0 auto" }}>
              <Box style={{ padding: "1rem" }}>
                <StackComp>
                  <Typography variant="h6">{selected.label}</Typography>
                  <Tabs tabs={tabs} />
                </StackComp>
              </Box>
            </Paper>
          )}
        </GridComp>
      </GridComp>
    </BaseUI>
  );
};

export default AddSnackFlashCards;
