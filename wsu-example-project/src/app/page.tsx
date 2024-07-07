import styles from "./page.module.css";

function sumNumbers(a: number[]) {
    let sum: number = 0
    for (let item of a){
        sum += item
    }
    return sum
}

export default function Home(){
    return (
        <div className={styles.main}>
            {[5, 10, 15].reduce((sum, element) => {return sum + element}, 0)}
        </div>
    );
}
