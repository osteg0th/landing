import { profile, keywords } from "@/data/content";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="about">
      <p className={styles.tag}>{profile.tagline}</p>
      <h1 className={styles.name}>
        {profile.name.toUpperCase()}
        <br />
        <span className={styles.glow}>{profile.surname.toUpperCase()}</span>
        <span className={styles.cursor} aria-hidden="true" />
      </h1>
      <p className={styles.title}>{profile.title}</p>

      <div className={styles.keywords}>
        {keywords.map((kw) => (
          <span key={kw.label} className={`${styles.kw} ${kw.highlight ? styles.kwHot : ""}`}>
            {kw.label}
          </span>
        ))}
      </div>

      <p className={styles.bio}>{profile.bio}</p>

      <div className={styles.actions}>
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="https://storage.googleapis.com/cyber-romulus-assets/CV_Vladyslav_Shevchenko.pdf" download className="btn-primary">Download CV</a>
      </div>
    </section>
  );
}
