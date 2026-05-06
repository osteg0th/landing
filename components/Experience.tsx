import { experience } from "@/data/content";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className="section" id="work">
      <p className="section-label">// 002</p>
      <h2 className="section-title">Experience</h2>
      <div className="section-line" />
      <div className={styles.list}>
        {experience.map((exp) => (
          <div key={exp.company} className={styles.item}>

            <div className={styles.header}>
              <div className={styles.role}>
                {exp.role}
                {exp.current && <span className={styles.badge}>Current</span>}
              </div>
              <div className={styles.period}>{exp.period}</div>
            </div>

            <div className={styles.meta}>
              {exp.companyUrl ? (
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  {exp.company} ↗
                </a>
              ) : (
                <span className={styles.company}>{exp.company}</span>
              )}
              <span className={styles.metaSep}>//</span>
              <span className={styles.industry}>{exp.industry}</span>
              <span className={styles.metaSep}>//</span>
              <span className={styles.location}>{exp.location}</span>
            </div>

            {exp.companyAbout && (
              <p className={styles.about}>{exp.companyAbout}</p>
            )}

            <ul className={styles.bullets}>
              {exp.bullets.map((b, i) => (
                <li key={i} className={styles.bullet}>{b}</li>
              ))}
            </ul>

            <div className={styles.stack}>
              {exp.stack.map((t) => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
