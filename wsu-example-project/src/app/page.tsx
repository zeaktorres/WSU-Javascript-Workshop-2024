"use client"
import styles from "./page.module.css";
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


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
        </div>
    );
}
