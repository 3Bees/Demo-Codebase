import React from "react";
import BaseUI from "../BaseUI";
import { createCourseStepperActions } from "../../../redux/reducers/createCourseStepper";
import { useDispatch } from "react-redux";
import Accordion from "../../../Components/UI/Accordion/Accordion";
import ListAppender from "../../../Components/UI/ListAppender/ListAppender";
import data from "./../../../config/mockData/dummy_chapters.json";

const AddSnacks = (props) => {
  const [chaps, setChaps] = React.useState([]);
  React.useEffect(() => {
    let temp = [...data].map((chapter) => {
      return { ...chapter, snacks: [] };
    });
    setChaps(temp);
  }, []);

  const accordions_controller = chaps.map((chapter, index) => {
    return {
      name: chapter.name,
      content: (
        <ListAppender
          setList={(e) => {
            let temp = [...chaps];
            const toChange = temp.find((each) => each.name === chapter.name);
            toChange.snacks = [...e];
            setChaps(temp);
          }}
          list={chapter.snacks}
          type="Snacks"
        />
      ),
      panelHeading: `Chapter ${index + 1}`,
      panelDescription: chapter.name,
    };
  });
  const dispatch = useDispatch();
  return (
    <BaseUI
      forwardBtnProps={{
        onClick: (e) => {
          e.preventDefault();
          dispatch(createCourseStepperActions.setPage(5));
        },
      }}
      backBtnProps={{
        onClick: (e) => {
          e.preventDefault();
          dispatch(createCourseStepperActions.setPage(3));
        },
      }}
      title="Add Snacks to Chapters"
    >
      <Accordion accordion_controls={accordions_controller} />
    </BaseUI>
  );
};

export default AddSnacks;
