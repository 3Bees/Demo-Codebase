import React from "react";
import Card from "../../../Components/UI/Card/Card";
import Stack from "../../../Components/UI/Layout/Stack/Stack";
import Button from "../../../Components/UI/Button/Button";
import TextFieldComp from "../../../Components/UI/Input/TextField";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const Login = ({ title, fields, actionLabel, alternate }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100vh" }}>
      <Card width="40vw" style={{ maxWidth: "30rem" }} title={title}>
        <Stack>
          {fields.map((field, index) => (
            <TextFieldComp
              size={matches ? "small" : "medium"}
              {...field.props}
              key={index}
              name={field.id}
            />
          ))}
          <Button type="submit" sx={{ alignSelf: "center" }}>
            {actionLabel}
          </Button>
          {alternate}
        </Stack>
      </Card>
    </Stack>
  );
};

export default Login;
