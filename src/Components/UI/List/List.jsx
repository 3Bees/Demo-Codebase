import PropTypes from "prop-types";
import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const default_items = [
  {
    name: "first",
    label: "First",
    hasDropDown: true,
    children: [
      {
        name: "first-children",
        label: "First Child",
      },
    ],
  },
  {
    name: "second",
    label: "Second",
    hasDropDown: true,
    children: [
      {
        name: "second-children",
        label: "Second Child",
      },
    ],
  },
  {
    name: "third",
    label: "Third",
    hasDropDown: false,
    children: [
      {
        name: "second-children",
        label: "Third Child",
      },
    ],
  },
  {
    name: "fourth",
    label: "Fourth",
    hasDropDown: false,
  },
];

const CollapsibleItem = ({ nestedItems, parent, selected }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        {parent.icon && <ListItemIcon>{parent.icon}</ListItemIcon>}
        <ListItemText primary={parent.label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {nestedItems.map((item, index) => {
            return (
              <ListItemButton onClick={(e) => selected(item)} key={index}>
                {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                <ListItemText primary={item.label} />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

const NestedList = ({ heading, items, selectHandler }) => {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {heading}
        </ListSubheader>
      }
    >
      {items.map((item, index) => {
        if (item.hasDropDown) {
          return (
            <CollapsibleItem
              key={index}
              selected={selectHandler}
              nestedItems={item.children}
              parent={item}
            />
          );
        } else
          return (
            <ListItemButton onClick={(e) => selectHandler(item)} key={index}>
              {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
              <ListItemText primary={item.label} />
            </ListItemButton>
          );
      })}
    </List>
  );
};

NestedList.propTypes = {
  heading: PropTypes.string,
  items: PropTypes.array,
};

NestedList.defaultProps = {
  heading: "No heading Given",
  items: default_items,
};

export default NestedList;
