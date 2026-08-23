'use client';

import { useMemo, useState } from 'react';
import { calculateWht, whtGroups } from '@/data/taxRates';
import styles from './Calculators.module.css';

function formatPkr(value: number): string {
  return `Rs. ${Math.round(value).toLocaleString('en-PK')}`;
}

const allRates = whtGroups.flatMap((g) => g.items);

export default function WithholdingTaxCalculator() {
  const [rateId, setRateId] = useState(allRates[0].id);
  const [amountInput, setAmountInput] = useState('100000');

  const selectedRate = allRates.find((r) => r.id === rateId) ?? allRates[0];

  const result = useMemo(() => {
    const amount = Number(amountInput) || 0;
    const { filerTax, nonFilerTax } = calculateWht(selectedRate, amount);
    return {
      amount,
      filerTax,
      nonFilerTax,
      filerAfterTax: amount - filerTax,
      nonFilerAfterTax: amount - nonFilerTax,
    };
  }, [amountInput, selectedRate]);

  return (
    <div className={styles.card}>
      <h3 className={styles.cardHeading}>Withholding Tax Calculator</h3>
      <p className={styles.cardSubtext}>
        Estimate withholding tax (WHT) deducted at source for filers and non-filers across
        common transaction categories.
      </p>

      <label className={styles.label} htmlFor="wht-category">
        Withholding Tax Category
      </label>
      <select
        id="wht-category"
        className={styles.input}
        value={rateId}
        onChange={(e) => setRateId(e.target.value)}
      >
        {whtGroups.map((group) => (
          <optgroup label={group.group} key={group.group}>
            {group.items.map((item) => (
              <option value={item.id} key={item.id}>
                {item.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>

      <label className={styles.label} htmlFor="wht-amount">
        Taxable Amount (PKR)
      </label>
      <input
        id="wht-amount"
        type="number"
        min="0"
        inputMode="numeric"
        className={styles.input}
        value={amountInput}
        onChange={(e) => setAmountInput(e.target.value)}
        placeholder="e.g. 100000"
      />

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Filer</th>
              <th>Non-Filer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amount of WHT</td>
              <td>{formatPkr(result.filerTax)}</td>
              <td>{formatPkr(result.nonFilerTax)}</td>
            </tr>
            <tr>
              <td>Payment After Tax</td>
              <td className={styles.highlight}>{formatPkr(result.filerAfterTax)}</td>
              <td className={styles.highlight}>{formatPkr(result.nonFilerAfterTax)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {'note' in selectedRate && selectedRate.note && (
        <p className={styles.noteBox}>{selectedRate.note}</p>
      )}

      <p className={styles.disclaimer}>
        Rates are illustrative placeholders configured in <code>src/data/taxRates.ts</code> —
        update them against the current FBR Withholding Tax Card before relying on this
        calculator.
      </p>
    </div>
  );
}
