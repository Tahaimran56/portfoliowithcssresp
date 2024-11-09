import Image from "next/image";
import styles from "../app/style.module.css";
import Link from 'next/link';
import tahapic from "../../image/temp_image_20241104_235926_2b7cc9f9-95d8-49fa-83ba-1af6794ea400.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      
      <section id="home" className={styles.section}>
        <h1 className={styles.headline}>Welcome to My PORTFOLIO</h1>
        <div className={`${styles.imageCenter} ${styles.imageHover}`}>
          <Image src={tahapic} alt="Taha-pic" height={300} width={300} />
        </div>
        <p className={styles.description}>
          <b>Hello, I am Taha Qureshi. </b>
          <br />
          <b>I have expertise in web development and designs.</b>
         <br />
          <b> I  create a responsive user-friendly websites using the <strong>latest technologies</strong> <br />
          <i>including </i> <strong>TypeScript , React,Next  tailwand Css and m more! </strong>
          </b>    
         </p>
        <a href="https://milestone1-taha-resumeupdate.vercel.app/">
  <button className={styles.resumeButton}>Click to See My Resume</button>
      </a>
      </section>
    </div>
  );
}