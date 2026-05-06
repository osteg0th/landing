import { profile } from "@/data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {new Date().getFullYear()} CYBER-ROMULUS.COM // VLADYSLAV SHEVCHENKO
        </p>
        {profile.availableForHire && (
          <p className={styles.status}>OPEN TO OPPORTUNITIES</p>
        )}
      </div>
    </footer>
  );
}
