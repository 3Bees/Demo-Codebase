import React from "react";
import Select from "./../../../Components/UI/Input/Select";
import Checkbox from "./../../../Components/UI/Input/Checkbox";
import { createCourseStepperActions } from "../../../redux/reducers/createCourseStepper";

import { useDispatch } from "react-redux";
import levels from "./../../../config/mockData/levels.json";
import courses from "./../../../config/mockData/courses.json";
import { styled } from "@mui/system";
import BaseUI from "../BaseUI";
import { useNavigate } from "react-router-dom";

const StyledSelect = styled(Select)(({ theme }) => ({
  width: "20rem",
}));

const ConfigureCourse = ({ hasUnits, getHasUnits }) => {
  const navigate = useNavigate();

  const [level, setLevel] = React.useState("o-levels");
  const [course, setCourse] = React.useState("biology");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCourseStepperActions.setPage(2));
  };
  return (
    <form onSubmit={submitHandler}>
      <BaseUI
        title="Configure Course"
        backBtnText="Cancel"
        backBtnProps={{
          onClick: (e) => {
            navigate("/courses", { replace: "true" });
          },
        }}
      >
        <StyledSelect
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          options={levels}
          label="Select Level"
        />
        <StyledSelect
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          options={courses}
          label="Select Course"
        />
        <Checkbox
          checked={hasUnits}
          setChecked={(e) => getHasUnits(e)}
          label="Does this course have units?"
        />
      </BaseUI>
    </form>
  );
};

export default ConfigureCourse;
