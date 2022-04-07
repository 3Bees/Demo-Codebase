import React from "react";
import ListAppender from "../../../Components/UI/ListAppender/ListAppender";
import StackComp from "../../../Components/UI/Layout/Stack/Stack";
import Typography from "../../../Components/UI/Typography/Typography";
import { capitalize } from "../../../helpers/capitalize";

const LearningObjectivesHandle = ({ chapterName }) => {
  const [learningObj, setLearningObj] = React.useState([]);
  React.useEffect(() => {
    setLearningObj((prevState) => []);
  }, [chapterName]);

  return (
    <StackComp>
      <Typography variant="h5">Learning Objectives</Typography>
      <Typography variant="h6">{capitalize(chapterName)}</Typography>
      {console.log("render")}
      <ListAppender
        type="Learning Objectives"
        setList={(e) => setLearningObj(e)}
        list={learningObj}
      />
    </StackComp>
  );
};

export default LearningObjectivesHandle;

LearningObjectivesHandle.defaultProps = {
  chapterName: "no chapter name given",
};
