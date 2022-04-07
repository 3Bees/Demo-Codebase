import React from "react";
import BaseUI from "../BaseUI";
import { useDispatch } from "react-redux";
import { createCourseStepperActions } from "../../../redux/reducers/createCourseStepper";
import ListAppender from "../../../Components/UI/ListAppender/ListAppender";
import Alert from "../../../Components/UI/Alert/Alert";

const AddChaptersWithoutUnits = () => {
  const dispatch = useDispatch();
  const [chapters, setChapters] = React.useState([]);
  const [errors, setErrors] = React.useState({
    value: false,
    message: "",
  });

  React.useEffect(() => {
    if (chapters.length === 0) {
      return setErrors({
        value: true,
        message: "Please select atleast one chapter!",
      });
    }

    setErrors({
      value: false,
      message: "",
    });
  }, [chapters]);
  return (
    <div>
      <BaseUI
        title="Add Chapters"
        forwardBtnProps={{
          disabled: errors.value,
          onClick: (e) => {
            e.preventDefault();
            dispatch(createCourseStepperActions.setPage(4));
          },
        }}
        backBtnProps={{
          onClick: (e) => {
            e.preventDefault();
            dispatch(createCourseStepperActions.setPage(1));
          },
        }}
      >
        <ListAppender
          type="Chapters"
          list={chapters}
          setList={(e) => setChapters(e)}
        />
      </BaseUI>
    </div>
  );
};

export default AddChaptersWithoutUnits;
