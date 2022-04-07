import React from "react";
import BaseUI from "../BaseUI";
import { createCourseStepperActions } from "../../../redux/reducers/createCourseStepper";
import { createCourseActions } from "../../../redux/reducers/createCourse";
import { useDispatch, useSelector } from "react-redux";
import Accordion from "../../../Components/UI/Accordion/Accordion";
import ListAppender from "../../../Components/UI/ListAppender/ListAppender";
import data from "../../../config/mockData/dummy_units.json";
import Alert from "../../../Components/UI/Alert/Alert";

const AddChaptersWithUnits = (props) => {
  const [incompleteUnits, setIncompleteUnits] = React.useState({
    value: false,
    message: "",
  });
  const [units, setUnits] = React.useState([]);
  React.useEffect(() => {
    let temp = [...data].map((unit) => {
      return { ...unit, chapters: [] };
    });
    setUnits(temp);
  }, []);

  React.useEffect(() => {
    let temp = { ...incompleteUnits };
    const chapterIsMissingTest = units.every(
      (unit) => unit.chapters.length > 0
    );
    temp.value = !chapterIsMissingTest;
    temp.message = "Each unit must contain atleast one chapter!";
    setIncompleteUnits(temp);
  }, [units]);

  const accordions_controller = units.map((unit, index) => {
    return {
      name: unit.name,
      content: (
        <ListAppender
          setList={(e) => {
            let temp = [...units];
            const toChange = temp.find((each) => each.name === unit.name);
            toChange.chapters = [...e];
            setUnits(temp);
          }}
          list={unit.chapters}
          type="Chapters"
        />
      ),
      panelHeading: `Unit ${index + 1}`,
      panelDescription: unit.name,
    };
  });
  const dispatch = useDispatch();
  return (
    <BaseUI
      forwardBtnProps={{
        disabled: incompleteUnits.value,
        onClick: (e) => {
          e.preventDefault();
          dispatch(createCourseStepperActions.setPage(4));
        },
      }}
      backBtnProps={{
        onClick: (e) => {
          e.preventDefault();
          dispatch(createCourseStepperActions.setPage(2));
        },
      }}
      title="Add Chapters to Units"
    >
      <Accordion accordion_controls={accordions_controller} />
      {incompleteUnits.value && (
        <Alert message={incompleteUnits.message} severity="warning" />
      )}
    </BaseUI>
  );
};

export default AddChaptersWithUnits;
