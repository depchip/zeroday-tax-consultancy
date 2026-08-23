/**
 * FBR rate configuration.
 *
 * IMPORTANT: The figures below are a functional starting point, not a
 * verified current rate card. FBR revises salary tax slabs and withholding
 * tax rates almost every fiscal year (and sometimes mid-year). Before relying
 * on these calculators for real filings, update the numbers in this file
 * against the latest FBR notification / Withholding Tax Card. Nothing else
 * needs to change — every component reads from here.
 */

// ---------------------------------------------------------------------------
// Salary (Income) Tax — Section 149, salaried individuals
// Cumulative "marginal" slabs: base + rate% of the amount exceeding the
// previous bracket's ceiling. Figures below reflect Finance Act 2026 slabs
// (tax year 2026-27, effective 1 July 2026).
// ---------------------------------------------------------------------------

export interface SalarySlab {
  upTo: number | null; // annual taxable income ceiling; null = no upper bound
  base: number; // fixed tax already accumulated at the start of this bracket
  rate: number; // % applied to the amount exceeding the previous ceiling
}

export const salaryTaxSlabs: SalarySlab[] = [
  { upTo: 600_000, base: 0, rate: 0 },
  { upTo: 1_200_000, base: 0, rate: 1 },
  { upTo: 2_200_000, base: 6_000, rate: 11 },
  { upTo: 3_200_000, base: 116_000, rate: 20 },
  { upTo: 4_100_000, base: 316_000, rate: 25 },
  { upTo: 5_600_000, base: 541_000, rate: 29 },
  { upTo: 7_000_000, base: 976_000, rate: 32 },
  { upTo: null, base: 1_424_000, rate: 35 },
];

export function calculateSlabTax(annualIncome: number, slabs: SalarySlab[]): number {
  if (annualIncome <= 0) return 0;

  let previousCeiling = 0;
  for (const slab of slabs) {
    const ceiling = slab.upTo ?? Infinity;
    if (annualIncome <= ceiling) {
      return slab.base + ((annualIncome - previousCeiling) * slab.rate) / 100;
    }
    previousCeiling = ceiling;
  }
  // Should never fall through, but fall back to the top bracket.
  const top = slabs[slabs.length - 1];
  return top.base + ((annualIncome - previousCeiling) * top.rate) / 100;
}

// ---------------------------------------------------------------------------
// Withholding Tax (WHT) — grouped by section / transaction type.
// `flat`   -> a straight percentage of the transaction amount.
// `tiered` -> cumulative marginal brackets, same mechanics as salary tax,
//             computed separately for filer and non-filer.
// ---------------------------------------------------------------------------

export interface WhtFlatRate {
  id: string;
  label: string;
  type: "flat";
  filerRate: number; // %
  nonFilerRate: number; // %
  note?: string;
}

export interface WhtBracket {
  upTo: number | null;
  filerBase: number;
  filerRate: number;
  nonFilerBase: number;
  nonFilerRate: number;
}

export interface WhtTieredRate {
  id: string;
  label: string;
  type: "tiered";
  brackets: WhtBracket[];
  note?: string;
}

export type WhtRate = WhtFlatRate | WhtTieredRate;

export interface WhtGroup {
  group: string;
  items: WhtRate[];
}

export const whtGroups: WhtGroup[] = [
  {
    group: "Sale of Goods — Section 153(1)(a)",
    items: [
      { id: "goods-company", label: "Sale of Goods — by Company", type: "flat", filerRate: 4, nonFilerRate: 8 },
      { id: "goods-individual", label: "Sale of Goods — by Individual & AOP", type: "flat", filerRate: 4.5, nonFilerRate: 9 },
    ],
  },
  {
    group: "Distributors & Wholesalers (Reduced-Rate Sectors)",
    items: [
      { id: "dist-fmcg", label: "Distributors / Wholesalers — FMCG", type: "flat", filerRate: 0.25, nonFilerRate: 0.5 },
      { id: "dist-fertilizer", label: "Distributors / Wholesalers — Fertilizer", type: "flat", filerRate: 0.25, nonFilerRate: 0.5 },
      { id: "dist-electronics", label: "Distributors / Wholesalers — Electronics", type: "flat", filerRate: 0.35, nonFilerRate: 0.7 },
    ],
  },
  {
    group: "Services — Section 153(1)(b)",
    items: [
      { id: "svc-professional", label: "Independent Professionals (Consultants, Doctors, Lawyers)", type: "flat", filerRate: 10, nonFilerRate: 20 },
      { id: "svc-it", label: "IT & IT-Enabled Services", type: "flat", filerRate: 4, nonFilerRate: 8 },
      { id: "svc-advertisement", label: "Advertisement Services", type: "flat", filerRate: 10, nonFilerRate: 20 },
      { id: "svc-transport", label: "Transport Services", type: "flat", filerRate: 2, nonFilerRate: 4 },
      { id: "svc-freight", label: "Freight Forwarding Services", type: "flat", filerRate: 3, nonFilerRate: 6 },
      { id: "svc-courier", label: "Courier Services", type: "flat", filerRate: 3, nonFilerRate: 6 },
      { id: "svc-manpower", label: "Manpower Outsourcing Services", type: "flat", filerRate: 4, nonFilerRate: 8 },
      { id: "svc-hotel", label: "Hotel Services", type: "flat", filerRate: 10, nonFilerRate: 20 },
      { id: "svc-security", label: "Security Guard Services", type: "flat", filerRate: 4, nonFilerRate: 8 },
      { id: "svc-software", label: "Software Development Services", type: "flat", filerRate: 4, nonFilerRate: 8 },
    ],
  },
  {
    group: "Digital Transactions / E-Commerce",
    items: [
      { id: "ecommerce-marketplace", label: "Payments to Online Marketplace Sellers", type: "flat", filerRate: 1, nonFilerRate: 2 },
    ],
  },
  {
    group: "Contracts — Section 153(1)(c)",
    items: [
      { id: "contracts-execution", label: "Execution of Contracts", type: "flat", filerRate: 7, nonFilerRate: 14 },
    ],
  },
  {
    group: "Payments to Non-Residents — Section 152",
    items: [
      { id: "nonresident-royalty", label: "Royalty / Fee for Technical Services", type: "flat", filerRate: 15, nonFilerRate: 15 },
      { id: "nonresident-contract", label: "Contracts / Execution", type: "flat", filerRate: 7, nonFilerRate: 14 },
      { id: "nonresident-other", label: "Other Payments to Non-Residents", type: "flat", filerRate: 20, nonFilerRate: 20 },
    ],
  },
  {
    group: "Brokerage & Commission — Section 233",
    items: [
      { id: "brokerage-commission", label: "Brokerage & Commission", type: "flat", filerRate: 12, nonFilerRate: 24 },
    ],
  },
  {
    group: "Profit on Debt — Section 151 (Tiered)",
    items: [
      {
        id: "profit-on-debt",
        label: "Profit on Debt",
        type: "tiered",
        note: "Illustrative two-bracket structure — replace with the current profit-on-debt slabs.",
        brackets: [
          { upTo: 5_000_000, filerBase: 0, filerRate: 15, nonFilerBase: 0, nonFilerRate: 30 },
          { upTo: null, filerBase: 750_000, filerRate: 17.5, nonFilerBase: 1_500_000, nonFilerRate: 35 },
        ],
      },
    ],
  },
  {
    group: "Dividend — Section 150",
    items: [
      { id: "dividend-company", label: "Dividend — from Company", type: "flat", filerRate: 15, nonFilerRate: 30 },
      { id: "dividend-fund", label: "Dividend — Mutual Funds / IPP", type: "flat", filerRate: 25, nonFilerRate: 50 },
    ],
  },
  {
    group: "Tax on Builders & Developers — Section 7C/7D",
    items: [
      {
        id: "builders-developers",
        label: "Builders & Developers",
        type: "flat",
        filerRate: 5,
        nonFilerRate: 10,
        note: "Actual FBR rate is typically a fixed amount per square foot/yard, not a percentage — treat this as indicative only.",
      },
    ],
  },
  {
    group: "Property Transactions",
    items: [
      { id: "property-236c", label: "Sale / Transfer of Property — Section 236C", type: "flat", filerRate: 3, nonFilerRate: 6 },
      { id: "property-236k", label: "Purchase of Property — Section 236K", type: "flat", filerRate: 3, nonFilerRate: 6 },
    ],
  },
  {
    group: "Rent of Immovable Property — Section 155 (Tiered)",
    items: [
      {
        id: "rent-immovable",
        label: "Rent of Immovable Property",
        type: "tiered",
        brackets: [
          { upTo: 300_000, filerBase: 0, filerRate: 0, nonFilerBase: 0, nonFilerRate: 0 },
          { upTo: 600_000, filerBase: 0, filerRate: 5, nonFilerBase: 0, nonFilerRate: 10 },
          { upTo: 2_000_000, filerBase: 15_000, filerRate: 10, nonFilerBase: 30_000, nonFilerRate: 20 },
          { upTo: null, filerBase: 155_000, filerRate: 25, nonFilerBase: 310_000, nonFilerRate: 30 },
        ],
      },
    ],
  },
  {
    group: "Sale to Distributors, Dealers & Retailers",
    items: [
      { id: "sale-236g", label: "Sale to Distributors / Dealers — Section 236G", type: "flat", filerRate: 0.2, nonFilerRate: 0.4 },
      { id: "sale-236h", label: "Sale to Retailers — Section 236H", type: "flat", filerRate: 0.5, nonFilerRate: 1 },
    ],
  },
  {
    group: "Other Cases",
    items: [
      { id: "auction-tax", label: "Auction Sale — Section 236A", type: "flat", filerRate: 10, nonFilerRate: 20 },
      { id: "prize-lottery", label: "Prize Bonds / Lottery / Raffle Winnings", type: "flat", filerRate: 15, nonFilerRate: 30 },
      { id: "export-proceeds", label: "Export Proceeds", type: "flat", filerRate: 1, nonFilerRate: 1 },
      { id: "life-insurance", label: "Life Insurance Policy Payout", type: "flat", filerRate: 5, nonFilerRate: 10 },
      { id: "telephone-advance", label: "Telephone Bill — Advance Tax", type: "flat", filerRate: 10, nonFilerRate: 10 },
      { id: "internet-advance", label: "Internet / Mobile Prepaid — Advance Tax", type: "flat", filerRate: 15, nonFilerRate: 15 },
    ],
  },
];

export function calculateWht(rate: WhtRate, amount: number): { filerTax: number; nonFilerTax: number } {
  if (amount <= 0) return { filerTax: 0, nonFilerTax: 0 };

  if (rate.type === "flat") {
    return {
      filerTax: (amount * rate.filerRate) / 100,
      nonFilerTax: (amount * rate.nonFilerRate) / 100,
    };
  }

  let previousCeiling = 0;
  for (const bracket of rate.brackets) {
    const ceiling = bracket.upTo ?? Infinity;
    if (amount <= ceiling) {
      const excess = amount - previousCeiling;
      return {
        filerTax: bracket.filerBase + (excess * bracket.filerRate) / 100,
        nonFilerTax: bracket.nonFilerBase + (excess * bracket.nonFilerRate) / 100,
      };
    }
    previousCeiling = ceiling;
  }
  const top = rate.brackets[rate.brackets.length - 1];
  const excess = amount - previousCeiling;
  return {
    filerTax: top.filerBase + (excess * top.filerRate) / 100,
    nonFilerTax: top.nonFilerBase + (excess * top.nonFilerRate) / 100,
  };
}
