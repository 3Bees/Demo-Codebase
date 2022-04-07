import React from "react";
import AlertComp from "@mui/material/Alert";

const Alert = ({ severity, message }) => {
  return <AlertComp severity={severity}>{message}</AlertComp>;
};

export default Alert;

Alert.defaultProps = {
  severity: "info",
  message: "This is an alert!",
};
