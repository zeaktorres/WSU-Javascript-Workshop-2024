import Image from "next/image";
import styles from "./page.module.css";



function MyButton() {
  return (
    <button>{"I'm a button"}</button>
  );
}

export default function Home() {
  return (
  <>
    <MyButton/>
  </>
 );
}
