import React, { useState } from "react";

import style from "./NavBar.module.scss";

import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuList from "./MenuList";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  function openDrawer() {
    setOpen(true);
  }
  function closeDrawer() {
    setOpen(false);
  }
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open Drawer"
            onClick={openDrawer}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Snacker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div className={style.header}>
          <IconButton onClick={closeDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <MenuList />
      </Drawer>
    </>
  );
};

export default NavBar;
