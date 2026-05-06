"use client";
import styles from "./Nav.module.css";

const links = [
  { href: "#about",    label: "./about"    },
  { href: "#work",     label: "./work"     },
  { href: "#projects", label: "./projects" },
  { href: "#contact",  label: "./contact"  },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          cyber<span className={styles.accent}>-</span>romulus
          <span className={styles.dim}>.com</span>
        </div>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
