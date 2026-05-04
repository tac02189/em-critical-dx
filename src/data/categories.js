export const CATEGORIES = [
  { id: "tox",   label: "Toxicology / Antidotes",   short: "Tox",   color: "#F1B82D" },
  { id: "endo",  label: "Endocrine",                short: "Endo",  color: "#7dd3fc" },
  { id: "neuro", label: "Neuro / NM / Psych",       short: "Neuro", color: "#c4b5fd" },
  { id: "cv",    label: "Cardiovascular",            short: "CV",    color: "#fca5a5" },
  { id: "ob",    label: "OB / Pregnancy",            short: "OB",    color: "#f9a8d4" },
  { id: "ophth", label: "Ophthalmologic",            short: "Ophth", color: "#86efac" },
  { id: "heme",  label: "Heme / Oncologic",          short: "Heme",  color: "#fdba74" },
  { id: "meta",  label: "Metabolic / Electrolyte",   short: "Meta",  color: "#a5f3fc" },
  { id: "env",   label: "Environmental / Altitude",  short: "Env",   color: "#bbf7d0" },
  { id: "surg",  label: "Surgical Emergencies",      short: "Surg",  color: "#e9d5ff" },
];

export const CATEGORY_BY_ID = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c])
);
