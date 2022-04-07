import React from "react";
import BaseUI from "./../BaseUI";
import List from "./../../../Components/UI/List/List";
import GridComp from "../../../Components/UI/Layout/Grid/Grid";
import ListAppender from "../../../Components/UI/ListAppender/ListAppender";
import Box from "../../../Components/UI/Layout/Box/Box";
import Paper from "../../../Components/UI/Paper/Paper";
import data from "../../../config/mockData/dummy_chapters.json";
import { capitalize } from "../../../helpers/capitalize";
import LearningObjectivesHandle from "./LearningObjectivesHandle";
import { createCourseStepperActions } from "../../../redux/reducers/createCourseStepper";
import { useDispatch } from "react-redux";

const AddLearningObjectives = () => {
  const dispatch = useDispatch();
  const [chapters, setChapters] = React.useState([]);
  const [selected, setSelected] = React.useState({ name: "", label: "" });
  React.useEffect(() => {
    let temp = data.map((chapter) => {
      console.log(chapter);
      return {
        name: chapter.name.split(" ").join("-"),
        label: capitalize(chapter.name),
      };
    });
    setChapters(temp);
  }, []);

  return (
    <BaseUI
      forwardBtnProps={{
        onClick: (e) => dispatch(createCourseStepperActions.setPage(6)),
      }}
      backBtnProps={{
        onClick: (e) => dispatch(createCourseStepperActions.setPage(4)),
      }}
      title="Add Learning Objectives"
    >
      <GridComp container spacing={2}>
        <GridComp item style={{ paddingLeft: "1rem" }} xs={4}>
          <Paper>
            <List
              items={chapters}
              selectHandler={(e) => setSelected(e)}
              heading="Chapters"
            />
          </Paper>
        </GridComp>
        <GridComp item xs={8}>
          <Paper style={{ width: "95%", margin: "0 auto" }}>
            <Box style={{ padding: "1rem" }}>
              <LearningObjectivesHandle chapterName={selected.name} />
            </Box>
          </Paper>
        </GridComp>
      </GridComp>
    </BaseUI>
  );
};

export default AddLearningObjectives;
