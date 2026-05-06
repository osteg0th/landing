import { skills } from "@/data/content";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className="section" id="about">
      <p className="section-label">// 001</p>
      <h2 className="section-title">Tech Stack</h2>
      <div className="section-line" />
      <div className={styles.grid}>
        {skills.map((skill) => (
          <div key={skill} className={styles.chip}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
