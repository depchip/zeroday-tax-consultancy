import SalaryTaxCalculator from './SalaryTaxCalculator';
import WithholdingTaxCalculator from './WithholdingTaxCalculator';
import styles from './Calculators.module.css';

export default function CalculatorsSection() {
  return (
    <section id="calculators" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Tax Calculators</h2>
          <p className={styles.sectionSubtitle}>
            Quick, indicative estimates for salary income tax and withholding tax —
            configured against editable FBR rate tables.
          </p>
        </div>
        <div className={styles.grid}>
          <SalaryTaxCalculator />
          <WithholdingTaxCalculator />
        </div>
      </div>
    </section>
  );
}
