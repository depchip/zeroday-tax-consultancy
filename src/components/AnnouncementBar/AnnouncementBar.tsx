import styles from "./AnnouncementBar.module.css";

const MESSAGE =
  "⚠ INCOME TAX RETURN FILING DEADLINE: 30 SEPTEMBER 2026 — FILE EARLY AND AVOID LAST-MINUTE DELAYS ⚠";

export default function AnnouncementBar() {
  return (
    <div className={styles.bar} role="status">
      <div className={styles.track}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span className={styles.item} key={i}>
            {MESSAGE}
          </span>
        ))}
      </div>
    </div>
  );
}
