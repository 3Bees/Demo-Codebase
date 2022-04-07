import React from "react";
import Grid from "./../../Components/UI/Layout/Grid/Grid";
import Stack from "./../../Components/UI/Layout/Stack/Stack";

import Card from "../../Components/UI/Card/Card";
import constants from "../../config/constants";
import { MdEdit, MdDelete } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const AllCourses = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      {constants.subjects.map((subject, index) => (
        <Grid item xs={3} key={index}>
          <Card title={subject.name}>
            <Stack direction="row" justifyContent="flex-end" gap={1}>
              <IconButton
                onClick={(e) =>
                  navigate(`/courses/${subject.name}`, { replace: true })
                }
                color="primary"
              >
                <MdEdit />
              </IconButton>
              <IconButton color="error">
                <MdDelete />
              </IconButton>
            </Stack>
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default AllCourses;
