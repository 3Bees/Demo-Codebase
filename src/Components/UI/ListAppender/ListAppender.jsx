import React from "react";
import StackComp from "../Layout/Stack/Stack";
import TextFieldComp from "../Input/TextField";
import { Icon, IconButton } from "@mui/material";
import { IoAddCircle } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { useTheme } from "@emotion/react";
import Typography from "../Typography/Typography";
import Alert from "../Alert/Alert";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
const format = [
  {
    name: "first",
  },
  {
    name: "asad",
  },
  {
    name: "third",
  },
];

const ListAppender = ({ label, list, type, hasAutoScroll, setList }) => {
  const theme = useTheme();
  const [name, setName] = React.useState("");
  const [valueAlreadyExists, setValueAlreadyExists] = React.useState(false);
  const [emptyValue, setEmptyValue] = React.useState(false);

  const deleteHandler = (e) => {
    let temp = [...list];
    const id = e.currentTarget.getAttribute("id");
    temp.splice(id, 1);
    setList(temp);
  };

  const addHandler = (e) => {
    if (name === "") {
      setEmptyValue(true);
      return;
    }
    setEmptyValue(false);
    let temp = [...list];
    const alreadyExists = temp.find((each) => each.name === name);
    if (alreadyExists) {
      setValueAlreadyExists(true);
      return;
    }

    setValueAlreadyExists(false);
    temp.push({ name });
    setList(temp);
    setName("");
  };
  const scrollToBottom = () => {
    inputRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [list]);

  const inputRef = React.useRef(null);
  return (
    <StackComp gap={1}>
      {list.length === 0 ? (
        <Alert severity="info" message={`No ${type} added!`} />
      ) : (
        list.map((row, index) => (
          <React.Fragment key={index}>
            <StackComp
              key={index}
              direction="row"
              justifyContent="space-between"
            >
              <StackComp>
                {index + 1}. {row.name}
              </StackComp>
              <StackComp direction="row" gap={0}>
                <IconButton id={index} onClick={deleteHandler}>
                  <MdDelete />
                </IconButton>
              </StackComp>
            </StackComp>
          </React.Fragment>
        ))
      )}

      <StackComp gap={1} direction="row" alignItems="center">
        <TextFieldComp
          error={valueAlreadyExists || emptyValue}
          helperText={
            (valueAlreadyExists && "Please enter a unique name!") ||
            (emptyValue && "Please enter a value!")
          }
          value={name}
          onKeyUp={(e) => {
            e.preventDefault();
            if (e.code === "Enter") {
              addHandler(e);
              e.target.focus();
            }
          }}
          onChange={(e) => {
            setName(e.target.value);
          }}
          label={label}
        />
        {hasAutoScroll && <div ref={inputRef} />}
        <IconButton type="button" onClick={addHandler}>
          <IoAddCircle color={theme.palette.primary.main} />
        </IconButton>
      </StackComp>
    </StackComp>
  );
};

export default ListAppender;
ListAppender.defaultProps = {
  label: "Enter Unit Name",
  list: [],
  getList: (e) => console.log(e, "no props given"),
  hasAutoScroll: false,
  setList: (e) => console.log(e, "no props given"),
};
