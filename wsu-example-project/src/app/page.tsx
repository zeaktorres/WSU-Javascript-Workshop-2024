import styles from "./page.module.css";

function MyButton(): JSX.Element {
    return ( 
            <button>{"ZeakButton"}</button>
           );
}

function MyHeader(): JSX.Element {
    return (
        <h1>{"Zeak's Page"}</h1>
    );
}

export default function Home(){
    return (
        <div className={styles.main}>
            <title>{"Zeak's Button Page"}</title>
            <MyHeader/>
            <MyButton/>
        </div>
    );
}
