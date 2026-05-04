export const CATEGORIES = [
  { id: "tox", label: "Toxicology / Antidotes", short: "Tox", color: "#F1B82D" },
  { id: "endo", label: "Endocrine", short: "Endo", color: "#7dd3fc" },
  { id: "neuro", label: "Neuro / NM / Psych", short: "Neuro", color: "#c4b5fd" },
  { id: "cv", label: "Cardiovascular", short: "CV", color: "#fca5a5" },
  { id: "ob", label: "OB / Pregnancy", short: "OB", color: "#f9a8d4" },
  { id: "ophth", label: "Ophthalmologic", short: "Ophth", color: "#86efac" },
  { id: "heme", label: "Reversal / Heme", short: "Heme", color: "#fdba74" },
];

export const CATEGORY_BY_ID = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
);
