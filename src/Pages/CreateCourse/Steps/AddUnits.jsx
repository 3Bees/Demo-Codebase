import React from "react";
import { createCourseStepperActions } from "../../../redux/reducers/createCourseStepper";
import { useDispatch } from "react-redux";
import ListAppender from "./../../../Components/UI/ListAppender/ListAppender";
import BaseUI from "../BaseUI";

const AddUnits = () => {
  const [units, setUnits] = React.useState([]);
  const [noUnitAdded, setNoUnitAdded] = React.useState(true);
  const dispatch = useDispatch();
  const retrieveListHandler = (e) => {
    if (e.length > 0) {
      setNoUnitAdded(false);
    } else {
      setNoUnitAdded(true);
    }
    setUnits(e);
  };

  React.useEffect(() => {
    if (units.length > 0) {
      setNoUnitAdded(false);
    } else {
      setNoUnitAdded(true);
    }
  }, [units]);
  return (
    <div>
      <BaseUI
        forwardBtnProps={{
          disabled: noUnitAdded,
          submitbtntype: "button",
          onClick: (e) => {
            e.preventDefault();
            dispatch(createCourseStepperActions.setPage(3));
          },
        }}
        title="Add Units"
        backBtnProps={{
          onClick: (e) => {
            dispatch(createCourseStepperActions.setPage(1));
          },
        }}
      >
        <ListAppender
          getList={retrieveListHandler}
          list={units}
          setList={(e) => {
            setUnits(e);
          }}
          hasAutoScroll={true}
          type="Units"
        />
      </BaseUI>
    </div>
  );
};

export default AddUnits;
