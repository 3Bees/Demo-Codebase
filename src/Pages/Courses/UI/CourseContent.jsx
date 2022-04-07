import React from "react";
import List from "../../../Components/UI/List/List";
import GridComp from "../../../Components/UI/Layout/Grid/Grid";
import Paper from "../../../Components/UI/Paper/Paper";
import Button from "../../../Components/UI/Button/Button";
import Table from "../../../Components/UI/Table/Table";
import Stack from "../../../Components/UI/Layout/Stack/Stack";
import Modal from "../../../Components/UI/Modal/Modal";
import Select from "../../../Components/UI/Input/Select";
import Card from "../../../Components/UI/Card/Card";
const UI = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <GridComp container spacing={2}>
        <GridComp item xs={3}>
          <Paper>
            <List />
          </Paper>
        </GridComp>
        <GridComp item xs={9}>
          <Paper>
            <Stack sx={{ p: "1rem" }}>
              <Button
                onClick={(e) => setOpen(true)}
                width="10rem"
                style={{ alignSelf: "flex-end" }}
              >
                Select Course
              </Button>
              <Table />
            </Stack>
          </Paper>
        </GridComp>
      </GridComp>
    </React.Fragment>
  );
};

export default UI;
