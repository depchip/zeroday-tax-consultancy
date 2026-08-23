'use client';

import { useMemo, useState } from 'react';
import { calculateSlabTax, salaryTaxSlabs } from '@/data/taxRates';
import styles from './Calculators.module.css';

function formatPkr(value: number): string {
  return `Rs. ${Math.round(value).toLocaleString('en-PK')}`;
}

export default function SalaryTaxCalculator() {
  const [monthlySalaryInput, setMonthlySalaryInput] = useState('250000');

  const result = useMemo(() => {
    const monthlySalary = Number(monthlySalaryInput) || 0;
    const yearlySalary = monthlySalary * 12;
    const yearlyTax = calculateSlabTax(yearlySalary, salaryTaxSlabs);
    const monthlyTax = yearlyTax / 12;

    return {
      monthlySalary,
      monthlyTax,
      monthlyAfterTax: monthlySalary - monthlyTax,
      yearlySalary,
      yearlyTax,
      yearlyAfterTax: yearlySalary - yearlyTax,
    };
  }, [monthlySalaryInput]);

  return (
    <div className={styles.card}>
      <h3 className={styles.cardHeading}>Salary Tax Calculator</h3>
      <p className={styles.cardSubtext}>
        Estimate income tax on a salaried individual&apos;s monthly salary using FBR&apos;s slab-based rates.
      </p>

      <label className={styles.label} htmlFor="monthly-salary">
        Monthly Salary (PKR)
      </label>
      <input
        id="monthly-salary"
        type="number"
        min="0"
        inputMode="numeric"
        className={styles.input}
        value={monthlySalaryInput}
        onChange={(e) => setMonthlySalaryInput(e.target.value)}
        placeholder="e.g. 250000"
      />

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Salary</th>
              <th>Tax</th>
              <th>Salary After Tax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly</td>
              <td>{formatPkr(result.monthlySalary)}</td>
              <td>{formatPkr(result.monthlyTax)}</td>
              <td className={styles.highlight}>{formatPkr(result.monthlyAfterTax)}</td>
            </tr>
            <tr>
              <td>Yearly</td>
              <td>{formatPkr(result.yearlySalary)}</td>
              <td>{formatPkr(result.yearlyTax)}</td>
              <td className={styles.highlight}>{formatPkr(result.yearlyAfterTax)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className={styles.disclaimer}>
        Based on the salary tax slabs configured in <code>src/data/taxRates.ts</code>. Verify
        against the latest FBR notification before relying on this for filing.
      </p>
    </div>
  );
}
