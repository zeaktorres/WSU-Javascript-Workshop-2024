"use client"
import styles from "./page.module.css";
import Button from '@mui/material/Button';


export default function Home(){
    return (
        <div className={styles.main}>
            <div>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </div>
        </div>
    );
}
