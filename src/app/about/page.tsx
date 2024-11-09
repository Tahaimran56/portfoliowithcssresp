import styles from "../style.module.css";
import Image from "next/image";
import it from "../../../image/temp_image_20241104_235253_2b22b67a-455e-4309-a47b-438f187fde7c.jpg"

import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      
      <section className={styles.section}>
        <h2 className={styles.subHeadline}>About Me</h2>
        <p>  <b>  Currently working at a distribution company managing their website.</b></p>
        <p> <b>  Also working on my own projects.</b> </p>
        <p> <i> Student at </i> <b>giaic</b></p>
        
        <div className={styles.imageCenter}>
          <Image src={it} alt="Project image" height={180} width={180} />
        </div>
        <p><b> My latest works for clients:</b> </p>
        <ul className={styles.projectLinks}>
          <li>
            <a href="https://milestone5-updatecopy.vercel.app/">
              <button className={styles.resumeButton}>Resume Builder</button>
            </a>
          </li>
          <li>
            <a href="https://simple-html-foam-taha.vercel.app/">
              <button className={styles.resumeButton}>Access Foam</button>
            </a>
          </li>
        </ul>
        <p><b>i have done 20+real time projects and so on! </b></p>
        <a href="https://vercel.com/taha-qureshis-projects">
  <button className={styles.vercelButton}>Click to See My Resume</button>
      </a>
      </section>
    </div>
  );
}