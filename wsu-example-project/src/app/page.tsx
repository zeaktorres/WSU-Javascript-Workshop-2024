"use client";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { PostDialog } from "./postDialog";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <div className={styles.main}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {"Zeak's Portfolio"}
          </Typography>
          <Button onClick={openDialog} color="inherit">Post</Button>
        </Toolbar>
      </AppBar>
      <Image
        src={process.env.NEXT_PUBLIC_FILE_LOCATION + "photos/dog_photo.jpg"}
        width={500}
        height={400}
        alt="Dog photo"
      ></Image>
      <PostDialog open={open} closeDialog={closeDialog} />
    </div>
  );
}
