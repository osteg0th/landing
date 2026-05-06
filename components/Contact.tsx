import { socials, profile } from "@/data/content";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <p className="section-label">// 004</p>
      <h2 className="section-title">Connect</h2>
      <div className="section-line" />
      <div className={styles.row}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className={styles.link}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
          >
            ⬡ {s.label}
          </a>
        ))}
      </div>
    </section>
  );
}
