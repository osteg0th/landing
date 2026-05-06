import { stats } from "@/data/content";
import styles from "./Stats.module.css";

export default function Stats() {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        {stats.map((s, i) => (
          <>
            <div
              key={s.index}
              className={styles.block}
              style={{ "--step": i } as React.CSSProperties}
            >
              <div className={styles.index}>{s.index}</div>
              <div className={styles.value}>{s.value}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
            {i < stats.length - 1 && (
              <div key={`div-${i}`} className={styles.divider} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
