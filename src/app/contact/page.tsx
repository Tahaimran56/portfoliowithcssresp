
import styles from "../style.module.css"
import Link from "next/link";
export default function Contact() {
  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <h2 className={styles.subHeadline}>Contact Us</h2>
      <p>If you need any help, feel free to contact me.</p>
      <label>
        Name: <input type="text" placeholder="Enter your name" />
      </label>
      <br /><br />
      <label>
        G-mail: <input type="email" placeholder="Enter your email" />
      </label>
      <br /><br />
      <label>
        ContactNum: <input type="number" placeholder="Enter your number" />
      </label>
      <br />
      <button className={styles.submitButton}>Submit</button>
      <br />
      <br />

      <footer className={styles.footer}>
        <p>© 2024 My Site. All rights reserved.</p>
      </footer>

      <section id="sociallink" className={styles.socialLinks}>
        <a href="https://www.instagram.com/723_taha?igsh=N254aGVsZ24yeGFn"> Insta</a>
         <br />
        <a href="https://github.com/Tahaimran56">GitHub</a>
        <br />
        <a href="https://www.linkedin.com/in/taha-khan-37a5792a6/">LinkedIn</a>
      </section>
    </div>
  ) 
}    