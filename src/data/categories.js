export const CATEGORIES = [
  { id: "cv",    label: "Cardiovascular",            short: "CV",    color: "#fca5a5" },
  { id: "endo",  label: "Endocrine",                short: "Endo",  color: "#7dd3fc" },
  { id: "env",   label: "Environmental / Altitude",  short: "Env",   color: "#bbf7d0" },
  { id: "heme",  label: "Heme / Oncologic",          short: "Heme",  color: "#fdba74" },
  { id: "meta",  label: "Metabolic / Electrolyte",   short: "Meta",  color: "#a5f3fc" },
  { id: "neuro", label: "Neuro / NM / Psych",       short: "Neuro", color: "#c4b5fd" },
  { id: "ob",    label: "OB / Pregnancy",            short: "OB",    color: "#f9a8d4" },
  { id: "ophth", label: "Ophthalmologic",            short: "Ophth", color: "#86efac" },
  { id: "surg",  label: "Surgical Emergencies",      short: "Surg",  color: "#e9d5ff" },
  { id: "tox",   label: "Toxicology / Antidotes",   short: "Tox",   color: "#F1B82D" },
];

export const CATEGORY_BY_ID = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
);
