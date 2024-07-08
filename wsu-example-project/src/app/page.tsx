"use client"
import styles from "./page.module.css";
import {useEffect, useState} from "react"


function submit(e: any, setForm: Function) { 
    // Prevent the browser from reloading the page
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson)
    console.log(setForm(parseInt(formJson.miles.toString()) / parseInt(formJson.gallons.toString())))
} 

export default function Home(){

    let [form, setForm] = useState(null)

    return (
        <div className={styles.main}>
            <form onSubmit={(e) => {submit(e, setForm)}}>
                <label>
                    Miles Driven: <input name="miles" defaultValue="0" />
                </label>            
                <label>
                    Gallons Used: <input name="gallons" defaultValue="0" />
                </label>                        
                <button type="submit">Submit</button>
                {form}
            </form>
        </div>
    );


}
