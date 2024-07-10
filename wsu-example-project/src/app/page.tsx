"use client"
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from "next/image"

export default function Home(){
    return (
        <div className={styles.main}>
            <AppBar position="static">        
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {"Zeak's Portfolio"}
                    </Typography>
                    <Button color="inherit">Post</Button>
                </Toolbar>
            </AppBar>
            <Image 
                src={process.env.FILE_LOCATION + "photos/dog_photo.jpg"}
                width={500}
                height={400}
                alt="Dog photo"
            >
            </Image>
        </div>
    );
}
