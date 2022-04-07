import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import Card from "../Card/Card";

const Content = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "white",
  border: "2px solid #000",
  padding: "10px",
  borderRadius: 5,
  position: "relative",
  minHeight: "150px",
}));

const CrossButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: 5,
  right: 5,
  cursor: "pointer",
}));

export default function Model({ title, open, setOpen, children, ...props }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        {...props}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Content>
          <CrossButton onClick={() => setOpen(false)}>
            <CloseIcon />
          </CrossButton>
          {children}
        </Content>
      </Modal>
    </div>
  );
}

Model.defaultProps = {
  title: "No title given in modal",
};
