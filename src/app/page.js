import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <header id="header" className={styles.header}>
        <div>
          <h1>
            <span>
              Hello<span className={styles.yellowText}>.</span>
            </span>
            <br />
            <span>
              <span>I am</span>
            </span>
            <br />
            <span>Maxcimiliano Morales</span>
          </h1>
        </div>
      </header>
      <section id="info" className={styles.infosection}>
        <img
          src="imagen-para-website.jpg"
          alt="Imagen"
          className={styles.image}
          />
        <div className={styles.infocontainer}>
          <span className={styles.title + "" + styles.yellowText}>Maxcimiliano</span>
          <br />
          <span className={styles.title}> Morales</span>
        </div>
      <div> className={styles.list}
          <ul>
            <li>
               <span className ={styles.graytext} ></span>age: 27
               </li>
               <li>
              <span className ={styles.graytext} ></span>Nationality: German</li>
                <li>
                <span className ={styles.graytext} ></span>Skill set: Project Management and Financial Performance</li>
                <li>
                <span className ={styles.graytext} ></span>Langages: English, German</li>
          </ul>
          </div>
      </section>
    </main>
  );
}