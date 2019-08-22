import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SignUpIcon from "@material-ui/icons/AssignmentIndOutlined";

import Router from "next/router";
const items = [
  {
    onClick(setOpen: Function) {
      return () => {
        setOpen(false);
        Router.push("/signup");
      };
    },
    text: "회원가입",
    icon: SignUpIcon
  }
];
const MenuList: React.FC<{ setOpen: Function }> = ({ setOpen }) => (
  <List>
    {items.map(({ onClick, text, icon: Icon }, i) => (
      <ListItem button key={i} onClick={onClick(setOpen)}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    ))}
  </List>
);

export default MenuList;
