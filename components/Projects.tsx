import { projects } from "@/data/content";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label">// 003</p>
      <h2 className="section-title">Featured Projects</h2>
      <div className="section-line" />
      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.name} className={styles.card}>
            <p className={styles.tag}>{p.tag}</p>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.desc}>{p.description}</p>
            <div className={styles.stack}>
              {p.stack.map((t) => (
                <span key={t} className="stack-tag">{t}</span>
              ))}
            </div>
            {(p.github || p.demo) && (
              <div className={styles.links}>
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub ↗</a>}
                {p.demo   && <a href={p.demo}   target="_blank" rel="noopener noreferrer" className={styles.link}>Live ↗</a>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
