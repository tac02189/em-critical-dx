// Item strings support **bold** and `dose` markers (backtick-wrapped = gold chip in UI)

export const DIAGNOSES = [
  // ─── TOXICOLOGY / ANTIDOTES ──────────────────────────────────────────────
  {
    id: "tca-overdose",
    name: "TCA Overdose",
    subtitle: "Tricyclic antidepressant toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Secure airway early — deterioration is rapid",
          "Continuous cardiac monitoring; 12-lead ECG",
          "IV access × 2; NS resuscitation",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Sodium bicarbonate** — `1–2 mEq/kg IV bolus` for QRS >100 ms, hypotension, or arrhythmia; repeat until QRS narrows, then infusion (3 amps in 1L D5W at 200–250 mL/hr); goal pH 7.50–7.55",
          "**Intubation** — if altered, seizing, or airway compromise; use ketamine for RSI; avoid succinylcholine if prolonged arrest",
          "**Seizures** — `Lorazepam 2–4 mg IV`; benzos first-line; **avoid phenytoin**",
          "**Hypotension refractory to bicarb** — `Norepinephrine` vasopressor of choice; avoid dopamine",
          "**Lipid emulsion** (refractory arrest) — `Intralipid 20%: 1.5 mL/kg IV bolus` over 1 min, then `0.25 mL/kg/min × 30–60 min`",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Physostigmine — may cause asystole",
          "Flumazenil — lowers seizure threshold",
          "Class IA/IC antiarrhythmics (procainamide, flecainide)",
          "Physostigmine",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU for all symptomatic patients; monitor ≥6 h if asymptomatic after intentional ingestion"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Blocks fast sodium channels → wide QRS, hypotension, seizures",
          "Blocks cardiac potassium channels → QTc prolongation, torsades risk",
          "Anti-cholinergic effects → tachycardia, urinary retention, ileus, altered mental status",
          "Alpha-1 blockade → vasodilation/hypotension",
          "GABA-A antagonism → seizures",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Classic triad: **altered mental status, wide QRS, hypotension**",
          "QRS >100 ms — sensitivity ~79% for seizure; QRS >160 ms — high risk ventricular arrhythmia",
          "Terminal R wave in aVR >3 mm, R:S ratio >0.7 in aVR (sign of Na-channel blockade)",
          "Anticholinergic toxidrome: dry flushed skin, mydriasis, urinary retention, ileus, tachycardia",
          "Rapidly deteriorating: patient may walk in talking and arrest within 60 minutes",
        ],
      },
      {
        heading: "Workup",
        items: [
          "ECG (serial), BMP, CBC, LFTs, coags, serum TCA level (qualitative only — doesn't guide management), acetaminophen/ASA levels, urine tox",
          "CXR if aspiration concern",
          "Urine drug screen positive for TCA (note: carbamazepine, cyclobenzaprine can cross-react)",
        ],
      },
      {
        heading: "Bicarb therapy detail",
        items: [
          "Sodium loading narrows QRS by reversing Na-channel blockade",
          "Alkalinization increases protein binding of TCA, reducing free drug",
          "Give boluses until QRS narrows, then start infusion",
          "Wean bicarb slowly over hours; don't stop abruptly",
          "Target arterial pH 7.50–7.55; check iCa2+ — alkalosis can drop ionized calcium",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Normal ECG on arrival does NOT rule out TCA toxicity — repeat ECGs",
          "Physostigmine contraindicated — case reports of asystole",
          "Seizures consume enormous bicarbonate buffer — re-bolus after each seizure",
          "Sodium bicarb preferred even over hyperventilation (direct Na-loading effect)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 191", "Toxicology LITFL — TCA Toxicity", "UpToDate: Tricyclic antidepressant poisoning"],
      },
    ],
  },

  {
    id: "digoxin-overdose",
    name: "Digoxin Overdose",
    subtitle: "Cardiac glycoside toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access, continuous cardiac monitoring, 12-lead ECG",
          "Check digoxin level, BMP (potassium critical), Mg, renal function",
          "Do NOT cardiovert digitalis-toxic arrhythmias (VF risk)",
        ],
      },
      {
        heading: "Antidote",
        items: [
          "**Digoxin-specific antibody fragments (Digibind / DigiFab)** — definitive treatment",
          "Empiric dosing (unknown level): `10 vials IV` acute overdose; `5–6 vials IV` chronic toxicity",
          "Level-based: # vials = (serum level [ng/mL] × weight [kg]) ÷ 100",
          "Ingestion-based: # vials = mg ingested × 0.8 ÷ 0.5",
          "Infuse over 30 min (over 60 min if stable); push if cardiac arrest",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Hyperkalemia** — do NOT give calcium (may worsen stone heart); give `sodium bicarb`, `insulin/dextrose`, `kayexalate`; dialysis if refractory",
          "**Bradycardia/heart block** — `Atropine 0.5–1 mg IV`; temporary pacing if needed (use lowest threshold to avoid triggering VF)",
          "**Ventricular arrhythmia** — `Lidocaine 1–1.5 mg/kg IV`; phenytoin historical alternative",
          "**Hypomagnesemia** — `MgSO₄ 2 g IV over 15 min`",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Calcium gluconate/chloride (stone heart syndrome in hyperkalemia from dig toxicity)",
          "Synchronized cardioversion if possible (VF risk)",
          "Class IA antiarrhythmics",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Inhibits Na/K-ATPase → intracellular Na↑ → intracellular Ca2+↑ → increased inotropy and automaticity",
          "Increases vagal tone → AV block, bradycardia",
          "Narrow therapeutic index: 0.5–2.0 ng/mL; toxicity typically >2 ng/mL",
          "Chronic toxicity often occurs at 'therapeutic' levels — look at the whole picture",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "GI symptoms first: nausea, vomiting, abdominal pain, anorexia",
          "Visual: yellow-green halos, blurred vision, altered color vision",
          "Cardiac: **any arrhythmia + heart block combination is classic** (PAT with block, bidirectional VT, regularized AF)",
          "Hyperkalemia in acute overdose (hypokalemia worsens toxicity in chronic)",
          "Bidirectional VT is essentially pathognomonic",
        ],
      },
      {
        heading: "Dig-specific Fab detail",
        items: [
          "Works within 20–30 min; may see transient hypokalemia post-treatment (K shifts back intracellularly)",
          "Post-Fab digoxin levels are unreliable (measures bound drug)",
          "Renal failure prolongs Fab half-life but drug still works — don't withhold",
          "10 vials = 400 mg Digibind or DigiFab; cost ~$5,000–$8,000 per vial — still give appropriate dose",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Other plants cause cardiac glycoside toxicity: oleander, foxglove, lily of the valley — Dig-Fab still works",
          "Digoxin-like immunoreactive substances (DLIS) can cause false positive levels in neonates, pregnancy, renal failure",
          "Hypokalemia (diuretic users) dramatically increases sensitivity to digoxin",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 195", "LITFL Digoxin Toxicity", "UpToDate: Digitalis (cardiac glycoside) poisoning"],
      },
    ],
  },

  {
    id: "ccb-overdose",
    name: "CCB Overdose",
    subtitle: "Calcium channel blocker toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access × 2, cardiac monitor, 12-lead ECG",
          "Atropine for bradycardia (often fails — don't waste time)",
          "Early intubation if hemodynamically compromised",
          "Whole bowel irrigation for sustained-release formulations: `PEG 1–2 L/hr PO/NG` until clear rectal effluent",
        ],
      },
      {
        heading: "First-line antidotes",
        items: [
          "**Calcium** — `Calcium chloride 1 g IV (10 mL of 10% solution)` or `Calcium gluconate 3 g IV`; repeat q3–5 min × 3–4; then infusion `0.2–0.4 mEq/kg/hr`",
          "**High-dose insulin euglycemia (HIE)** — `Regular insulin 1 unit/kg IV bolus`, then `1 unit/kg/hr infusion`; D50 bolus + dextrose infusion to maintain glucose 100–250; check glucose q15–30 min; check K+ q30–60 min",
          "**Norepinephrine** — vasopressor of choice for hypotension; titrate to MAP >65",
        ],
      },
      {
        heading: "Second-line / refractory",
        items: [
          "**Lipid emulsion** — `Intralipid 20%: 1.5 mL/kg IV bolus` over 1 min, then `0.25 mL/kg/min × 30–60 min`",
          "**Glucagon** — `3–10 mg IV bolus`, then `3–10 mg/hr infusion` (limited evidence, often fails CCB)",
          "**Methylene blue** — `1–2 mg/kg IV` if vasoplegic (refractory vasoplegia/distributive shock)",
          "**ECMO** — early consideration in refractory shock; activate team early",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU; all intentional CCB ingestions require 24 h observation (SR formulations may delay onset 8–12 h)"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Block L-type voltage-gated Ca2+ channels in myocardium and vascular smooth muscle",
          "Dihydropyridines (amlodipine, nifedipine): predominantly vascular → vasodilation, reflex tachycardia",
          "Non-dihydropyridines (verapamil, diltiazem): predominantly cardiac → bradycardia, heart block, negative inotropy",
          "At toxic doses all CCBs cause cardiovascular collapse",
          "Impaired insulin secretion (Ca2+-dependent) → hyperglycemia — a marker of severity",
        ],
      },
      {
        heading: "High-dose insulin rationale",
        items: [
          "Myocardium prefers glucose/lactate as fuel in shock states; insulin shifts metabolism back to carbohydrates",
          "Positive inotropic effect at doses >>physiologic; onset 15–45 min",
          "Maintain glucose 100–250 mg/dL — generous dextrose infusion needed",
          "Hypokalemia common (insulin drives K+ intracellularly) — replace aggressively, target K+ >3.0",
          "Evidence: case reports, registry data; dose as high as 10 units/kg/hr reported in refractory cases",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Bradycardia + hypotension + hyperglycemia = CCB until proven otherwise",
          "PR prolongation, heart block, wide QRS in severe cases",
          "Sustained-release (verapamil SR, diltiazem XR, amlodipine): onset delayed 6–12 h after ingestion",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Atropine rarely effective — don't delay calcium and HIE",
          "ECMO should be considered early before irreversible end-organ injury",
          "Beta blockers co-ingestion dramatically worsens prognosis",
          "Glucagon largely ineffective for CCB (works better for BB overdose)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 196", "LITFL CCB Toxicity", "St-Onge et al, Ann Emerg Med 2017 (CCB Consensus)"],
      },
    ],
  },

  {
    id: "bb-overdose",
    name: "Beta-Blocker Overdose",
    subtitle: "Beta-adrenergic blocker toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access × 2, cardiac monitor, 12-lead ECG",
          "Atropine first for symptomatic bradycardia: `0.5–1 mg IV` (often inadequate but quick to try)",
          "WBI for sustained-release formulations",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Glucagon** (first-line for BB) — `3–10 mg IV bolus over 1 min`, then `3–10 mg/hr infusion`; acts via non-adrenergic cAMP pathway; onset 5–10 min; watch for vomiting",
          "**High-dose insulin euglycemia (HIE)** — `Regular insulin 1 unit/kg IV bolus`, then `1 unit/kg/hr`; dextrose co-infusion; increasingly preferred over glucagon",
          "**Calcium** — `Calcium chloride 1 g IV q5 min × 3`; especially useful for membrane-stabilizing BB (propranolol)",
          "**Norepinephrine or epinephrine** — vasopressor/chronotrope for refractory shock",
          "**Lipid emulsion** — `Intralipid 20%: 1.5 mL/kg bolus` for lipid-soluble BB (propranolol, metoprolol, carvedilol)",
          "**Sodium bicarb** — `1–2 mEq/kg IV` if QRS widened (propranolol has Na-channel blocking properties)",
        ],
      },
      {
        heading: "Refractory",
        items: [
          "**ECMO** — activate early if escalating vasopressors and no response",
          "**Transvenous pacing** — for refractory bradycardia/heart block",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Competitive antagonism of beta-1 (cardiac) and beta-2 (bronchial/vascular) receptors",
          "Propranolol additionally blocks Na+ channels → QRS widening (membrane-stabilizing activity)",
          "Some (sotalol) also block K+ channels → QT prolongation, torsades",
          "Decreased cAMP → decreased chronotropy and inotropy",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Bradycardia + hypotension; may see AV block",
          "Propranolol: wide QRS, seizures, bronchospasm",
          "Sotalol: QT prolongation, torsades de pointes",
          "Hypoglycemia (especially pediatric patients)",
          "Bronchospasm in asthmatic patients",
        ],
      },
      {
        heading: "Glucagon mechanism",
        items: [
          "Binds glucagon receptors → activates adenylate cyclase → ↑cAMP independent of beta-receptors",
          "Bypass blocked receptors; works even in full beta blockade",
          "Onset 5–10 min; short duration — must run as infusion",
          "Nausea/vomiting common — have suction ready; aspiration risk",
          "Reconstitute in NS or D5W, NOT supplied diluent (contains phenol)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Sotalol toxicity is different — treat torsades with Mg2+, pacing; glucagon less effective",
          "Hypoglycemia especially in pediatrics/diabetics — check glucose early and often",
          "Lipid solubility predicts response to lipid emulsion: propranolol > metoprolol > atenolol",
          "ECMO survival rates improving — don't wait too long",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 196", "LITFL Beta-blocker toxicity", "DeWitt & Waksman, Ann Emerg Med 2004"],
      },
    ],
  },

  {
    id: "last",
    name: "LAST",
    subtitle: "Local anesthetic systemic toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Stop injection immediately",
          "Call for help; get Lipid Emulsion (Intralipid 20%) at bedside immediately",
          "Airway: 100% O₂; intubate if needed",
          "Seizures: `Benzodiazepines` first-line (small doses); **avoid propofol** (cardiac depression)",
          "Cardiac arrest: start ACLS; **reduce epinephrine dose to <1 mcg/kg** (higher doses may worsen outcome)",
        ],
      },
      {
        heading: "Lipid emulsion (definitive treatment)",
        items: [
          "`Intralipid 20%: 1.5 mL/kg IV bolus` over 1 min (≈100 mL for 70 kg adult)",
          "Then `0.25 mL/kg/min continuous infusion` (≈18 mL/min for 70 kg)",
          "If cardiovascular collapse persists: repeat bolus × 1–2",
          "Continue infusion for at least 10 min after hemodynamic stability",
          "Max dose: `~12 mL/kg`",
        ],
      },
      {
        heading: "ACLS modifications",
        items: [
          "Avoid vasopressin; reduce epinephrine to `≤1 mcg/kg`",
          "Avoid beta-blockers and calcium channel blockers",
          "Amiodarone for ventricular arrhythmia",
          "Prolonged resuscitation justified — lipid emulsion may take time; consider ECMO",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Local anesthetics block Na+ channels in neurons AND cardiac myocytes",
          "High plasma levels (injection into vessel, excess dose, high vascularity site) overwhelm cardiac safety margin",
          "Bupivacaine most cardiotoxic (high lipid solubility, slow dissociation from Na channels)",
          "CNS symptoms typically precede cardiac (though may be simultaneous with bupivacaine)",
        ],
      },
      {
        heading: "Recognition — prodrome",
        items: [
          "CNS excitation: perioral tingling/numbness, metallic taste, tinnitus, agitation, confusion",
          "CNS depression: drowsiness, dysarthria, altered mental status",
          "Then: **seizures, cardiovascular collapse** (often rapidly progressive)",
          "Onset: usually within 60 s of intravascular injection; delayed up to 30 min with nerve blocks (depot effect)",
        ],
      },
      {
        heading: "Lipid sink hypothesis",
        items: [
          "Intralipid creates lipid phase in plasma that 'traps' lipid-soluble local anesthetic",
          "Draws drug away from myocardium and into lipid compartment",
          "Also has direct cardiac metabolic effect (fatty acid substrate for myocardium)",
        ],
      },
      {
        heading: "Prevention",
        items: [
          "Aspirate before injection, inject in incremental doses (3–5 mL at a time)",
          "Use lowest effective dose; add epinephrine marker (1:200,000) to detect intravascular injection",
          "Have Intralipid immediately available wherever blocks are performed",
          "ASRA guidelines: Intralipid kit should be in all procedure areas",
        ],
      },
      {
        heading: "References",
        items: ["ASRA LAST Checklist 2020", "Neal et al, Reg Anesth Pain Med 2018", "LITFL LAST"],
      },
    ],
  },

  {
    id: "hydrofluoric-acid",
    name: "Hydrofluoric Acid",
    subtitle: "HF exposure / systemic fluoride toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Immediate decontamination",
        items: [
          "Remove contaminated clothing (gloves, gown, eye protection for providers)",
          "Copious water irrigation ≥15–20 min immediately",
          "Do NOT induce vomiting for ingestion",
        ],
      },
      {
        heading: "Calcium (binds fluoride)",
        items: [
          "**Topical (skin burns)** — `2.5% calcium gluconate gel` massaged into affected area continuously until pain-free; re-apply q10–15 min; can make gel: mix 3.5 g calcium gluconate powder in 150 mL water-soluble lubricant",
          "**Subcutaneous/intradermal injection** — `5% calcium gluconate solution 0.5 mL/cm²` of burn area (needle deposition under and around lesion)",
          "**Intra-arterial infusion (hand/digits)** — `10 mL of 10% calcium gluconate in 40 mL D5W` infused into radial or brachial artery over 4 h via arterial line; consider for refractory digital pain",
          "**Systemic / IV** — `Calcium gluconate 10–20 mL of 10% IV` for systemic toxicity/dysrhythmia; aggressive repletion",
        ],
      },
      {
        heading: "Systemic toxicity treatment",
        items: [
          "12-lead ECG and cardiac monitoring — fluoride causes fatal arrhythmias (QT prolongation, VF)",
          "**Hypomagnesemia** — `MgSO₄ 2 g IV`; fluoride chelates Mg2+",
          "**Hypocalcemia** — continuous calcium infusion; goal iCa2+ normal",
          "**Hypokalemia** — aggressive replacement",
          "Hemodialysis for severe systemic toxicity (removes fluoride)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "HF is a weak acid — tissue penetration is deeper than strong acids (doesn't coagulate surface proteins)",
          "Fluoride ion is the toxic moiety: chelates calcium and magnesium → hypocalcemia, hypomagnesemia",
          "Fluoride inhibits multiple enzyme systems including Na/K-ATPase → cellular death",
          "Cardiac: QT prolongation, VF (often lethal); can occur with as little as 2.5% BSA burns with concentrated HF",
          "Even small concentrated HF exposures (>50% concentration, >1% BSA) can be fatal",
        ],
      },
      {
        heading: "Presentation by concentration",
        items: [
          "<20% HF: pain onset delayed 1–8 h; may present without visible burn initially",
          "20–50% HF: pain onset 1–8 h; more significant burns",
          ">50% HF: immediate pain, rapid systemic toxicity",
          "Exposure to >3 mL/kg of any concentration = potentially fatal systemic toxicity",
        ],
      },
      {
        heading: "Ingestion management",
        items: [
          "High mortality; immediate calcium supplementation systemically",
          "NGT placement for calcium gluconate lavage (dilute solution to bind fluoride in GI tract)",
          "Early GI/surgery consultation for potential esophagoscopy if concentrated ingestion",
          "Aggressive monitoring: QTc, iCa2+, Mg2+, K+ q30–60 min initially",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 218", "LITFL HF Acid", "Mayer & Seger, J Med Toxicol 2016"],
      },
    ],
  },

  {
    id: "aspirin-toxicity",
    name: "Aspirin Toxicity",
    subtitle: "Salicylate poisoning",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Serum salicylate level, ABG, BMP, glucose (critical to check frequently)",
          "Do NOT rely on level alone — clinical status guides management",
          "Activated charcoal `1 g/kg PO/NG` if airway intact and within 2 h of ingestion (or enteric-coated/large ingestion up to 4–6 h)",
          "**Do NOT intubate unless absolutely necessary** — loss of compensatory hyperventilation is catastrophic; if must intubate, ventilate at very high RR matching pre-intubation rate",
        ],
      },
      {
        heading: "Urinary alkalinization",
        items: [
          "`Sodium bicarb 1–2 mEq/kg IV bolus`, then infusion: 3 amps NaHCO₃ in 1L D5W at 1.5–2× maintenance",
          "Goal **urine pH 7.5–8.0** (traps ionized salicylate in urine) and **serum pH 7.45–7.55**",
          "Potassium repletion mandatory — hypokalemia prevents urinary alkalinization",
          "Avoid glucose-containing fluids in hypoglycemia (brain may be hypoglycemic even with normal serum glucose)",
        ],
      },
      {
        heading: "Hemodialysis indications",
        items: [
          "Salicylate level **>100 mg/dL** (acute) or **>60–80 mg/dL** (chronic/symptomatic)",
          "Severe altered mental status / cerebral edema",
          "Refractory acidemia, hemodynamic instability",
          "Pulmonary edema, renal failure",
          "**Call nephrology/poison control early**",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Uncouples oxidative phosphorylation → metabolic acidosis, hyperthermia, increased O₂ consumption",
          "Direct respiratory stimulation via medullary chemoreceptors → respiratory alkalosis (early)",
          "Net result: mixed respiratory alkalosis + anion-gap metabolic acidosis (classic ABG pattern)",
          "CNS: salicylate penetrates blood-brain barrier more readily in acidic conditions → altered mental status, cerebral edema",
          "Non-cardiogenic pulmonary edema (ARDS-like) — mechanism not fully understood",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Classic: **tinnitus, tachypnea, diaphoresis** + anion-gap metabolic acidosis + respiratory alkalosis",
          "Altered mental status = severe; carry high mortality",
          "Hypoglycemia, hypokalemia, hyponatremia common",
          "Severity correlates with acid-base status more than absolute level",
          "Chronic toxicity (elderly on ASA + renal impairment) presents more subtly — confusion, tachypnea — often misdiagnosed",
        ],
      },
      {
        heading: "Intubation warning",
        items: [
          "Patients compensate with extreme hyperventilation (RR 30–40); seizing or over-sedating loses this",
          "If intubated: must match or exceed pre-intubation minute ventilation (may need TV 8+ mL/kg, RR 30–40)",
          "Failure to do so → rapid acidemia → CNS salicylate flood → death",
          "Bicarb bolus immediately before/during intubation; have ventilator set aggressively before you push drugs",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Enteric-coated tablets have erratic absorption — serial levels q2h until peak established",
          "Normal or 'therapeutic' salicylate level in chronic toxicity does not rule out clinical toxicity",
          "Pulmonary edema with fluids — be conservative with fluids; use bicarb in D5W, not NS",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 194", "LITFL Salicylate Toxicity", "Juurlink, CJEM 2016 salicylate review"],
      },
    ],
  },

  {
    id: "cyanide-toxicity",
    name: "Cyanide Toxicity",
    subtitle: "Cyanide poisoning / cellular asphyxia",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Remove from exposure; 100% O₂",
          "Decontaminate skin: copious water; remove clothing",
          "Think cyanide: **smoke inhalation** (burning plastics/synthetics) + **altered mental status** + **elevated lactate** + **anion gap** + minimal response to O₂",
        ],
      },
      {
        heading: "Antidote — give empirically if suspected",
        items: [
          "**Hydroxocobalamin (Cyanokit)** — first-line, safe in fire victims: `5 g IV over 15 min` (adult); pediatric `70 mg/kg IV`; can repeat × 2 for maximum `15 g` total",
          "**Sodium thiosulfate** (adjunct) — `12.5 g (50 mL of 25% solution) IV over 10–20 min`; safe to combine with hydroxocobalamin",
          "**Sodium nitrite** — `300 mg (10 mL of 3% solution) IV over 5–15 min` — use if hydroxocobalamin unavailable; **avoid in smoke inhalation** (methemoglobin on top of CO-Hgb worsens O₂ carrying capacity)",
        ],
      },
      {
        heading: "Supportive",
        items: [
          "High-flow O₂ or intubation for airway compromise",
          "Seizures: benzodiazepines",
          "Hemodynamic support: fluids, vasopressors",
          "Treat co-existing CO toxicity (see Carbon Monoxide entry)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Cyanide binds cytochrome c oxidase (complex IV) → blocks mitochondrial electron transport chain",
          "Cells cannot use O₂ → cellular asphyxia despite adequate O₂ delivery",
          "Result: lactic acidosis (anaerobic metabolism), multiorgan failure",
          "Sources: smoke from burning plastics/synthetics, industrial exposures, amygdalin (apricot pits), nitroprusside infusion (accumulated thiocyanate/cyanide)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Smoke inhalation + lactate >8–10 mmol/L** — strongly suggests cyanide toxicity",
          "Classic: bitter almond odor (50% of people cannot smell it)",
          "Rapid cardiovascular collapse: profound hypotension, bradycardia then cardiac arrest",
          "Seizures, altered mental status",
          "Venous PO₂ paradoxically elevated (cells not extracting O₂)",
          "No POC test — treat empirically based on clinical picture",
        ],
      },
      {
        heading: "Hydroxocobalamin detail",
        items: [
          "Cobalt in vitamin B12 precursor binds cyanide → cyanocobalamin (excreted renally)",
          "Turns skin/urine/secretions red-pink — document and warn patient/family",
          "Safe in CO poisoning (unlike nitrites)",
          "Interferes with colorimetric lab tests (co-oximetry, some chemistry panels) — draw labs before giving if possible",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 217", "LITFL Cyanide Toxicity", "Borron et al, Ann Emerg Med 2007"],
      },
    ],
  },

  {
    id: "methemoglobinemia",
    name: "Methemoglobinemia",
    subtitle: "Acquired methemoglobin toxicity",
    category: "tox",
    tldr: [
      {
        heading: "Recognition",
        items: [
          "Cyanosis NOT responsive to O₂ + pulse ox reading ~85% (regardless of true saturation) = think MetHgb",
          "Chocolate-brown blood (on blood draw or on filter paper)",
          "Co-oximetry gives true MetHgb% — standard pulse ox is inaccurate",
        ],
      },
      {
        heading: "Antidote — Methylene Blue",
        items: [
          "`Methylene blue 1–2 mg/kg IV` (1% solution = 10 mg/mL) over 5 min",
          "Repeat `1 mg/kg IV` q30–60 min PRN (max `7 mg/kg` total)",
          "Response expected within 30–60 min",
          "**Contraindicated in G6PD deficiency** — can cause hemolysis; use exchange transfusion or hyperbaric O₂ instead",
        ],
      },
      {
        heading: "Supportive",
        items: [
          "High-flow O₂ (supplemental O₂ helps even though SpO₂ reads falsely low)",
          "Remove offending agent (dapsone, benzocaine, nitrates, prilocaine, topical anesthetics, sulfonamides, nitrites)",
          "Treat seizures with benzodiazepines",
          "Exchange transfusion if G6PD deficiency or methylene blue fails",
        ],
      },
      { heading: "Dispo", items: ["ICU for MetHgb >30%; admit if symptomatic; repeat co-oximetry 1 h post-treatment"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Normal Hgb: iron in Fe²⁺ (ferrous) state — can carry O₂",
          "Methemoglobin: iron oxidized to Fe³⁺ (ferric) — cannot bind O₂",
          "Also shifts oxyhemoglobin dissociation curve left → remaining Hgb doesn't release O₂ to tissues",
          "Endogenous NADH-cytochrome-b5 reductase continuously reduces MetHgb back to Hgb (<1% normal)",
          "Oxidant stress overwhelms this system → MetHgb accumulates",
        ],
      },
      {
        heading: "Common causes",
        items: [
          "Topical anesthetics: **benzocaine** (most common EM culprit — throat sprays, endoscopy), prilocaine, EMLA",
          "**Dapsone** — slow-onset, prolonged; requires NAC adjunct",
          "Nitrites (amyl nitrite, sodium nitrite 'poppers'), nitrates (in well water, foods)",
          "Sulfonamides, antimalarials (primaquine)",
          "Industrial: aniline dyes, nitrobenzene",
        ],
      },
      {
        heading: "Methylene blue mechanism",
        items: [
          "Methylene blue accepts electrons from NADPH (via NADPH methemoglobin reductase) → leucomethylene blue → reduces Fe³⁺ back to Fe²⁺",
          "Requires functioning G6PD to generate NADPH — fails in G6PD deficiency",
          "Paradox: very high doses of methylene blue itself can cause MetHgb",
          "For dapsone: add NAC `70 mg/kg/day PO` (inhibits dapsone hydroxylamine metabolite)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 222", "LITFL Methemoglobinemia", "Wright et al, Ann Emerg Med 1999"],
      },
    ],
  },

  {
    id: "organophosphate",
    name: "Organophosphate Toxicity",
    subtitle: "Cholinergic crisis / OP/carbamate poisoning",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Provider protection first**: level B/C PPE; dermal exposure requires full decontamination",
          "Remove clothing; irrigate skin and eyes copiously",
          "Secure airway early — secretions + bronchospasm + weakness kill",
        ],
      },
      {
        heading: "Atropine (titrate to drying secretions)",
        items: [
          "`Atropine 2–4 mg IV` initial bolus; double dose q5 min until secretions dry",
          "**Endpoint: dry secretions, not heart rate** (tachycardia is expected)",
          "May require **hundreds of mg** of atropine in severe poisoning — don't underdose",
        ],
      },
      {
        heading: "Pralidoxime (2-PAM) — OP only, not carbamates",
        items: [
          "`Pralidoxime (2-PAM) 1–2 g IV over 15–30 min`, then `0.5 g/hr infusion`",
          "Give as early as possible — reactivates cholinesterase before 'aging' occurs (24–48 h window for most agents)",
          "Controversial in some guidelines but still standard of care in US for OP",
        ],
      },
      {
        heading: "Seizures",
        items: [
          "Benzodiazepines: `Diazepam 5–10 mg IV` or `lorazepam 2–4 mg IV`; escalate aggressively",
          "Phenobarbital for refractory seizures; propofol/ketamine infusion if needed",
          "Phenytoin is **ineffective** for cholinergic seizures",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "OPs irreversibly inhibit acetylcholinesterase → ACh accumulates at muscarinic and nicotinic receptors",
          "Muscarinic (SLUDGE/DUMBELS): Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis + Bradycardia, Bronchospasm, Miosis",
          "Nicotinic (muscles): fasciculations, weakness, paralysis",
          "CNS: anxiety, seizures, coma",
          "Aging: OP-AChE bond becomes irreversible over hours–days (agent specific); 2-PAM must be given before aging",
        ],
      },
      {
        heading: "Toxidrome recognition",
        items: [
          "**SLUDGE** mnemonic: Salivation, Lacrimation, Urination, Defecation, GI upset, Emesis",
          "**DUMBELS**: Defecation, Urination, Miosis, Bradycardia, Bronchospasm/Bronchorrhea, Emesis, Lacrimation, Salivation",
          "Nicotinic: muscle fasciculations, weakness → flaccid paralysis, respiratory failure",
          "Miosis almost always present (if not, consider other toxidrome)",
          "Plasma and RBC cholinesterase levels confirm but don't wait for them",
        ],
      },
      {
        heading: "Atropine titration",
        items: [
          "Massive doses may be needed — have atropine stocked in bulk in ED",
          "Monitor for: excessive secretions, bronchospasm (end-points to treat) vs. tachycardia, urinary retention, ileus (acceptable side effects of atropine therapy)",
          "Atropine does NOT address nicotinic (muscle weakness/paralysis) — that requires 2-PAM and supportive care",
          "Carbamates (sevin/carbaryl): self-limited inhibition; 2-PAM not needed and may worsen; atropine same",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 223", "LITFL Organophosphate Toxicity", "Eddleston et al, Lancet 2008"],
      },
    ],
  },

  {
    id: "iron-overdose",
    name: "Iron Overdose",
    subtitle: "Iron toxicity / acute iron poisoning",
    category: "tox",
    tldr: [
      {
        heading: "Assess severity",
        items: [
          "Serum iron level: `<350 mcg/dL` — likely non-toxic; `350–500 mcg/dL` — potentially toxic; `>500 mcg/dL` — severe toxicity",
          "Phase I GI (0–6 h): N/V/D/hematemesis; Phase III systemic (6–24 h): shock, metabolic acidosis, liver failure",
        ],
      },
      {
        heading: "Antidote — Deferoxamine",
        items: [
          "**Indications**: iron level >500 mcg/dL, hemodynamic instability, significant acidosis, altered mental status, persistent GI symptoms >6 h",
          "`Deferoxamine 15 mg/kg/hr IV` continuous infusion (max rate; can start lower if hemodynamically stable)",
          "Max dose: `6 g/24 h` in children; adjust in adults",
          "Continue until patient asymptomatic, urine clears (vin rosé urine disappears), iron level <350 mcg/dL and falling",
          "Stop within 24 h if possible — prolonged use causes ARDS",
        ],
      },
      {
        heading: "Supportive",
        items: [
          "Aggressive IV fluid resuscitation for GI losses and third-spacing",
          "Whole bowel irrigation `PEG 1–2 L/hr` if radiopaque tablets on AXR and ingestion within 6 h",
          "Correct coagulopathy, metabolic acidosis",
          "GI hemorrhage: blood products as needed",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology — 5 phases",
        items: [
          "**Phase I (0–6 h)**: Direct GI mucosal injury → N/V/D, hematemesis; free iron absorbed",
          "**Phase II (6–24 h)**: Apparent improvement — misleading; systemic distribution occurring",
          "**Phase III (12–48 h)**: Systemic toxicity — shock, metabolic acidosis, liver failure, coagulopathy, CNS depression",
          "**Phase IV**: Hepatotoxicity peak (2–4 days)",
          "**Phase V** (2–4 wk): GI strictures/scarring from mucosal damage",
          "Free iron → Fenton reaction → free radical production → oxidative damage to cells",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Serum iron (peak 2–6 h after ingestion), TIBC (less useful acutely), LFTs, BMP, coags, CBC",
          "ABG: metabolic acidosis with elevated anion gap",
          "AXR: radiopaque tablets visible in ~50% of cases (not reliable to rule out)",
          "TIBC/iron ratio no longer recommended for management decisions",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Phase II 'improvement' is false reassurance — most deaths occur in Phase III",
          "Deferoxamine creates iron-chelate complex that is nephrotoxic if prolonged — stop within 24 h",
          "Vin rosé urine (orange-pink) confirms iron chelation is occurring; absence doesn't exclude toxicity",
          "Pediatric iron preparations (prenatal vitamins) are extremely dangerous in toddlers",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 198", "LITFL Iron Toxicity", "UpToDate: Acute iron poisoning"],
      },
    ],
  },

  {
    id: "methanol-eg",
    name: "Methanol / Ethylene Glycol",
    subtitle: "Toxic alcohol poisoning",
    category: "tox",
    tldr: [
      {
        heading: "Identify early (before labs return)",
        items: [
          "High anion-gap metabolic acidosis + high osmol gap + known ingestion of antifreeze/windshield washer fluid/moonshine",
          "Osmol gap = measured osm − calculated osm; >10 suspicious; >25 strongly suggests toxic alcohol",
        ],
      },
      {
        heading: "Antidote — Fomepizole first-line",
        items: [
          "`Fomepizole (4-MP) 15 mg/kg IV loading dose` over 30 min, then `10 mg/kg IV q12h × 4 doses`, then `15 mg/kg q12h`",
          "Blocks alcohol dehydrogenase — prevents formation of toxic metabolites",
          "Use ethanol if fomepizole unavailable: target blood ethanol level `100–150 mg/dL`",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Folate** (methanol) — `Leucovorin 1 mg/kg IV` (max 50 mg) q6h, enhances formate elimination",
          "**Pyridoxine + thiamine** (ethylene glycol) — `Pyridoxine 50 mg IV q6h`, `Thiamine 100 mg IV q6h`; promote non-toxic oxalate metabolism",
          "**Hemodialysis** — for severe acidosis (pH <7.25), level >25 mg/dL (methanol) or >50 mg/dL (EG), visual symptoms, renal failure, refractory to treatment",
          "Sodium bicarbonate for metabolic acidosis",
        ],
      },
    ],
    extended: [
      {
        heading: "Methanol metabolism",
        items: [
          "Methanol → formaldehyde → **formate** (via alcohol dehydrogenase and aldehyde dehydrogenase)",
          "Formate: inhibits cytochrome c oxidase, causes optic nerve and CNS toxicity",
          "Classic: **visual disturbance** (blurry vision, 'snowfield' vision, photophobia) → blindness",
          "Sources: windshield washer fluid, fuel additives, solvents, bootleg alcohol",
          "Latent period 12–24 h before acidosis develops (longer if ethanol co-ingested)",
        ],
      },
      {
        heading: "Ethylene glycol metabolism",
        items: [
          "EG → glycolaldehyde → glycolate → **oxalate** (via alcohol dehydrogenase)",
          "Oxalate + calcium → calcium oxalate crystals → acute tubular necrosis, renal failure",
          "Classic: **calcium oxalate crystals in urine**, acute kidney injury, hypocalcemia",
          "Fluorescence of urine under Wood's lamp (antifreeze additive) — 50% sensitivity only",
          "Sources: antifreeze, de-icer, hydraulic fluid",
        ],
      },
      {
        heading: "Lab pearl — osmol gap vs. anion gap timing",
        items: [
          "Early: high osmol gap (parent compound present), anion gap normal/low",
          "Late: osmol gap normalizes (parent metabolized), anion gap rises (toxic metabolites accumulated)",
          "Normal osmol gap does NOT rule out late-presenting toxic alcohol poisoning",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 193", "LITFL Toxic Alcohols", "Kraut & Kurtz, CJASN 2008"],
      },
    ],
  },

  {
    id: "inh-overdose",
    name: "INH Toxicity",
    subtitle: "Isoniazid / pyridoxine-responsive seizures",
    category: "tox",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "Refractory seizures (status epilepticus) in patient on TB treatment or with INH access",
          "Severe anion-gap metabolic acidosis (lactic acidosis from seizures + INH effect on cellular metabolism)",
          "Classic triad: **refractory seizures + severe AG metabolic acidosis + exposure to INH**",
        ],
      },
      {
        heading: "Antidote — Pyridoxine (Vitamin B6)",
        items: [
          "**If known INH amount ingested**: `Pyridoxine 1 g IV per gram of INH ingested` over 5–10 min",
          "**If amount unknown**: `Pyridoxine 5 g IV` over 5–10 min; repeat until seizures stop",
          "Pediatric: `70 mg/kg IV` (max 5 g)",
          "**This is the definitive treatment** — benzodiazepines alone are often insufficient",
          "Pyridoxine may need to be specially ordered — call pharmacy immediately",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "Benzodiazepines for seizures while getting pyridoxine: `Lorazepam 2–4 mg IV` or `Diazepam 5–10 mg IV`",
          "Sodium bicarbonate for severe metabolic acidosis",
          "Activated charcoal if airway intact and early presentation",
          "Hemodialysis for extreme toxicity or renal failure",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "INH inhibits pyridoxal phosphokinase → depletes pyridoxal-5-phosphate (active B6)",
          "Pyridoxal-5-phosphate is a cofactor for glutamic acid decarboxylase → GABA synthesis",
          "Low GABA → excitatory neurotoxicity → seizures",
          "INH also inhibits lactate dehydrogenase → lactic acidosis, worsened by seizures",
          "Toxic dose: >30–40 mg/kg acute; 10 mg/kg in children",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Classic presentation: 1–3 h after large INH ingestion",
          "N/V/D early, then sudden seizures often progressing to status",
          "Seizures often refractory to standard AEDs without pyridoxine",
          "Lactic acidosis can be profound (pH <7.0 reported)",
          "Look for: history of TB therapy, refugee population, prison population, drug-resistant TB treatment",
        ],
      },
      {
        heading: "Pyridoxine logistics",
        items: [
          "Many EDs do not stock adequate amounts — call pharmacy early",
          "If not on formulary: often in multivitamin preparations at limited concentration",
          "5 g = 5000 mg = 50 vials of 100 mg/mL preparation — pre-alert pharmacy",
          "IV pyridoxine often eliminates seizures within minutes",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 201", "LITFL INH Toxicity", "Morrow et al, Ann Emerg Med 2006"],
      },
    ],
  },

  {
    id: "carbon-monoxide",
    name: "Carbon Monoxide Poisoning",
    subtitle: "CO toxicity / cellular asphyxia",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Remove from exposure; 100% O₂ via NRB mask immediately",
          "Co-oximetry for true COHgb% (standard pulse ox unreliable — reads falsely normal)",
          "12-lead ECG (ischemia, arrhythmia), troponin",
          "Assess for cyanide co-poisoning if smoke inhalation",
        ],
      },
      {
        heading: "Oxygen therapy",
        items: [
          "**Normobaric O₂**: 100% O₂ via tight-fitting NRB (reduces CO half-life from 5 h on room air to ~60 min)",
          "Continue until COHgb <5% and patient asymptomatic (minimum 4–6 h)",
          "Intubate and ventilate with FiO₂ 1.0 if obtunded",
        ],
      },
      {
        heading: "Hyperbaric oxygen (HBO) — consider if any present",
        items: [
          "**Syncope or LOC** at any point",
          "**Neurologic symptoms** (ataxia, confusion, focal deficits)",
          "**COHgb >25%** (>15% in pregnancy)",
          "**Pregnancy** (fetal Hgb has higher CO affinity)",
          "**Cardiac involvement** (ischemia, arrhythmia, troponin elevation)",
          "Transfer to HBO center if indicated — call early",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "CO binds Hgb with 240× affinity of O₂ → carboxyhemoglobin → decreased O₂ carrying capacity",
          "CO shifts oxyhemoglobin curve left → impairs O₂ delivery to tissues",
          "CO binds cytochrome c oxidase → directly impairs cellular respiration (like cyanide)",
          "Inflammatory cascade → delayed neurologic sequelae (days to weeks later)",
          "Sources: incomplete combustion, house fires, generators, car exhaust, faulty heaters",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Headache** most common; also nausea, dizziness, confusion",
          "Cherry-red skin classic but unreliable (often absent)",
          "Multiple patients from same location (fire, CO leak) — classic cluster presentation",
          "SpO₂ falsely normal — COHgb registers as oxyHgb on standard pulse ox",
          "High suspicion in winter months, poorly ventilated spaces, groups presenting simultaneously",
        ],
      },
      {
        heading: "Delayed neurological sequelae",
        items: [
          "DNS occurs in 10–30% of moderate-severe CO poisoning, 2–28 days after apparent recovery",
          "Cognitive impairment, personality change, Parkinsonism",
          "HBO may reduce incidence of DNS — key benefit beyond acute COHgb clearance",
          "Follow-up in 30 days with neuropsychiatric testing if at risk",
        ],
      },
      {
        heading: "Pregnancy",
        items: [
          "Fetal COHgb levels 10–15% higher than maternal",
          "Fetal Hgb has higher CO affinity; fetus more susceptible",
          "HBO indicated at lower thresholds in pregnancy",
          "Continuous fetal monitoring if viable",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 216", "Weaver et al, NEJM 2002 (HBO RCT)", "LITFL Carbon Monoxide Poisoning"],
      },
    ],
  },

  {
    id: "antidotes-quickref",
    name: "Antidotes Quick Reference",
    subtitle: "Common antidote dosing at a glance",
    category: "tox",
    tldr: [
      {
        heading: "Poison → Antidote → Dose",
        items: [
          "**Acetaminophen** → N-Acetylcysteine → `150 mg/kg IV over 1 h, then 50 mg/kg over 4 h, then 100 mg/kg over 16 h`",
          "**Opioid** → Naloxone → `0.4–2 mg IV/IM/IN` q2–3 min (infusion: 2/3 of reversal dose per hour)",
          "**Benzodiazepine** → Flumazenil → `0.2 mg IV q1 min` (max 1 mg); **avoid if seizure risk or TCA co-ingestion**",
          "**Warfarin** → Vitamin K + 4F-PCC → `Vitamin K 10 mg IV slow`; `4F-PCC per INR-based dosing`",
          "**Dabigatran** → Idarucizumab → `5 g IV (two 2.5 g vials)`",
          "**Rivaroxaban/Apixaban** → Andexanet alfa → `400 or 800 mg IV bolus` (dose depends on agent/dose/timing)",
          "**Heparin** → Protamine → `1 mg per 100 units heparin IV` (given within 30 min); max `50 mg`",
          "**Beta-blocker** → Glucagon → `3–10 mg IV bolus`, then `3–10 mg/hr`",
          "**CCB** → Calcium + HIE → see CCB entry",
          "**Digoxin** → Digoxin Fab → see Digoxin entry",
          "**TCA** → Sodium bicarbonate → see TCA entry",
          "**Organophosphate** → Atropine + 2-PAM → see OP entry",
          "**Cyanide** → Hydroxocobalamin → `5 g IV over 15 min`",
          "**Methanol/EG** → Fomepizole → `15 mg/kg IV load`, then `10 mg/kg q12h`",
          "**Iron** → Deferoxamine → `15 mg/kg/hr IV`",
          "**INH** → Pyridoxine → `1 g per gram INH ingested` or `5 g IV empiric`",
          "**Methemoglobin** → Methylene blue → `1–2 mg/kg IV over 5 min`",
          "**LAST** → Intralipid 20% → `1.5 mL/kg IV bolus`, then `0.25 mL/kg/min`",
          "**HF acid** → Calcium gluconate → topical gel, SQ, or IV per route",
        ],
      },
    ],
    extended: [
      {
        heading: "N-Acetylcysteine (NAC) — Acetaminophen",
        items: [
          "Replenishes glutathione; converts NAPQI to non-toxic metabolite",
          "Most effective within 8 h of ingestion; still beneficial up to 24 h and beyond for fulminant hepatic failure",
          "Anaphylactoid reaction: slow infusion rate, treat with diphenhydramine, epinephrine if severe",
          "PO route (140 mg/kg load, 70 mg/kg q4h × 17 doses) — equivalent; IV preferred if vomiting or altered",
        ],
      },
      {
        heading: "Naloxone — Opioids",
        items: [
          "Half-life 60–90 min — shorter than most opioids; re-sedation common",
          "Titrate to adequate respiration, not full reversal (avoid precipitating withdrawal/acute agitation/pulmonary edema)",
          "For sustained-release opioids or methadone: continuous infusion 2/3 reversal dose per hour",
          "Fentanyl analogs (carfentanil, nitazenes): may require massive doses of naloxone (10+ mg)",
          "IN route: 4 mg/0.1 mL — faster to administer in prehospital; may need repeat",
        ],
      },
      {
        heading: "4-Factor PCC (Kcentra) — Warfarin reversal",
        items: [
          "INR 2–4: `25 units/kg` (max 2500 units); INR 4–6: `35 units/kg` (max 3500 units); INR >6: `50 units/kg` (max 5000 units)",
          "Give with vitamin K 10 mg IV to prevent rebound coagulopathy",
          "Onset within 30 min; check repeat INR 30–60 min after dose",
          "For life-threatening bleeding or urgent surgery",
        ],
      },
      {
        heading: "Andexanet alfa — Xa inhibitors",
        items: [
          "Low dose (400 mg bolus + 480 mg infusion): rivaroxaban ≤10 mg or apixaban ≤5 mg within 8 h",
          "High dose (800 mg bolus + 960 mg infusion): rivaroxaban >10 mg, apixaban >5 mg, or unknown dose",
          "Very expensive; availability limited; consider 4F-PCC 25–50 units/kg as alternative",
          "Thrombotic risk post-reversal — anticoagulation resumption planning critical",
        ],
      },
      {
        heading: "References",
        items: ["Goldfrank's Toxicologic Emergencies 11e", "Tintinalli 9e Part 10", "LITFL Toxicology Library"],
      },
    ],
  },

  // ─── ENDOCRINE ───────────────────────────────────────────────────────────
  {
    id: "thyroid-storm",
    name: "Thyroid Storm",
    subtitle: "Thyrotoxic crisis",
    category: "endo",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access, cardiac monitor (AF is common), aggressive fluid resuscitation",
          "Cooling measures: acetaminophen (NOT aspirin — displaces T4 from binding proteins), cooling blankets, ice packs",
          "Treat precipitating cause (infection most common)",
        ],
      },
      {
        heading: "Treatment sequence (order matters)",
        items: [
          "**1. Beta-blocker** — `Propranolol 60–80 mg PO q4h` or `0.5–1 mg IV q15 min`; reduces peripheral T4→T3 conversion, controls heart rate; use esmolol infusion if severe hemodynamic compromise",
          "**2. Thionamide** (give before iodine!) — `PTU 500–1000 mg PO/NG loading`, then `250 mg q4h`; PTU preferred over methimazole in storm (also blocks peripheral conversion)",
          "**3. Iodine** (1 h after PTU) — `Lugol's solution 8 drops PO q6h` or `SSKI 5 drops PO q6h`; blocks thyroid hormone release (Wolff-Chaikoff); **must give thionamide first** or iodine fuels more hormone synthesis",
          "**4. Corticosteroids** — `Hydrocortisone 300 mg IV load`, then `100 mg q8h`; reduces T4→T3 conversion, treats relative adrenal insufficiency",
          "**5. Cholestyramine** — `4 g PO q6h` to interrupt enterohepatic recirculation",
        ],
      },
      { heading: "Dispo", items: ["ICU; mortality 10–30% without aggressive treatment"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Life-threatening exacerbation of thyrotoxicosis; precipitant unmasks decompensation",
          "Common precipitants: infection, trauma, surgery, iodine load (contrast CT), RAI, thyroid palpation, non-compliance with antithyroid meds, MI, stroke",
          "Excess thyroid hormone → beta-adrenergic hypersensitivity → tachycardia, fever, high-output heart failure",
          "T3 (active form): T4 peripherally converted to T3; PTU and beta-blockers both block this",
        ],
      },
      {
        heading: "Burch-Wartofsky criteria (diagnostic aid)",
        items: [
          "Score ≥45: highly suggestive of thyroid storm",
          "Scored on: temperature, CNS effects, GI-hepatic dysfunction, tachycardia, CHF, AF",
          "Treat clinically — do not wait for thyroid levels (T3/T4 levels may overlap with uncomplicated thyrotoxicosis)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Never give iodine before thionamide — iodine provides substrate for more hormone synthesis (Jod-Basedow)",
          "Avoid aspirin for fever — displaces T4 from TBG, raises free T4",
          "AF in thyroid storm: rate control (not cardioversion) until euthyroid; anticoagulation if AF >48 h or hemodynamically unstable",
          "Liver failure can occur — monitor LFTs; PTU has hepatotoxicity risk with prolonged use",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 225", "Burch & Wartofsky, Endocrinol Metab Clin 1993", "LITFL Thyroid Storm"],
      },
    ],
  },

  {
    id: "myxedema-coma",
    name: "Myxedema Coma",
    subtitle: "Severe hypothyroidism / myxedema crisis",
    category: "endo",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Assess airway early — decreased respiratory drive, macroglossia; intubate if needed",
          "Passive rewarming; external heat for temperature <30°C",
          "12-lead ECG (bradycardia, low voltage, QT prolongation, electrical alternans if effusion)",
          "Empirically treat for adrenal insufficiency before thyroid hormone replacement",
        ],
      },
      {
        heading: "Thyroid hormone replacement",
        items: [
          "**IV T4 (Levothyroxine)** — `200–400 mcg IV loading dose`, then `50–100 mcg IV daily`",
          "**IV T3 (Liothyronine)** — add if critically ill or cardiac arrest: `5–20 mcg IV load`, then `2.5–10 mcg q8h`; faster onset than T4",
          "Combined T4+T3 therapy preferred in severe cases; risk of precipitating MI/arrhythmia — monitor closely",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Corticosteroids** — `Hydrocortisone 100 mg IV q8h` until AI excluded (cortisol level or empiric treatment)",
          "**Fluids** — cautious isotonic fluid resuscitation; risk of fluid overload (decreased cardiac output, dilutional hyponatremia)",
          "**Hyponatremia** — free water restriction; T4 treatment corrects this; avoid rapid Na+ correction",
          "Glucose monitoring — hypoglycemia common; treat with dextrose",
          "Avoid sedatives, narcotics, antipsychotics — markedly prolonged metabolism",
        ],
      },
      { heading: "Dispo", items: ["ICU; mortality 20–60%; all require monitoring for arrhythmia during rewarming and T4 initiation"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Severe hypothyroidism → decreased cardiac output, respiratory drive, thermoregulation, mental status",
          "Myxedema: glycosaminoglycan accumulation in tissues → edema, macroglossia, pericardial/pleural effusions",
          "Precipitants: cold exposure, infection, surgery, sedatives/narcotics, stroke, MI, non-compliance",
          "Relative adrenal insufficiency frequent — autoimmune thyroid disease can coexist with Addison's disease",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Altered mental status (confusion → coma), hypothermia, bradycardia, hypotension",
          "Classic findings: puffy face, periorbital edema, dry/coarse skin, hoarse voice, hair loss, macroglossia",
          "Hyponatremia (often severe), hypoglycemia, hypercapnia, normocytic anemia",
          "High TSH, low free T4 confirms diagnosis",
          "Pericardial effusion on echo (low voltage + electrical alternans on ECG)",
        ],
      },
      {
        heading: "Cardiac rewarming caution",
        items: [
          "Ventricular fibrillation risk during rewarming if temperature <30°C",
          "Active rewarming only for <30°C or hemodynamically unstable",
          "ECMO for refractory hypothermic cardiac arrest",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 225", "Wartofsky, J Clin Endocrinol Metab 2006", "LITFL Myxedema Coma"],
      },
    ],
  },

  {
    id: "adrenal-crisis",
    name: "Adrenal Crisis",
    subtitle: "Acute adrenal insufficiency",
    category: "endo",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access, aggressive fluid resuscitation: `NS 1 L bolus immediately`, then continue",
          "Check cortisol (random) if not delaying treatment — treat empirically if suspected",
          "Glucose: check and correct hypoglycemia with dextrose",
        ],
      },
      {
        heading: "Corticosteroids — give immediately",
        items: [
          "**Hydrocortisone** — `100 mg IV bolus`, then `50–100 mg IV q6–8h` (or 200 mg/day continuous infusion)",
          "If hydrocortisone unavailable: `Dexamethasone 4 mg IV` (does not interfere with cortisol assay — can draw stim test after); follow with fludrocortisone later",
          "Do NOT delay steroids waiting for stim test results in hemodynamic compromise",
        ],
      },
      {
        heading: "Identify precipitant",
        items: [
          "Infection (most common), surgery, trauma, medication non-compliance, abrupt steroid taper",
          "Bilateral adrenal hemorrhage (Waterhouse-Friderichsen in meningococcemia, anticoagulation, sepsis)",
          "Pituitary apoplexy (secondary adrenal insufficiency)",
        ],
      },
      { heading: "Dispo", items: ["ICU for hemodynamic compromise; step down to oral steroids once stable; titrate and taper per endocrinology"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Primary: adrenal gland failure — Addison's, autoimmune, bilateral hemorrhage/infarction, TB, metastases",
          "Secondary: pituitary failure (apoplexy, Sheehan's) → low ACTH → adrenal atrophy",
          "Tertiary (most common in ED): chronic exogenous steroid use → HPA suppression → crisis when steroids withdrawn or physiologic stress",
          "Cortisol deficiency: hemodynamic instability (catecholamine potentiation), hypoglycemia, nausea, confusion",
          "Aldosterone deficiency (primary only): hyponatremia, hyperkalemia, volume depletion",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Classic triad**: hypotension (refractory to fluids/vasopressors), hyponatremia, hyperkalemia",
          "Abdominal pain, N/V, fever, weakness, fatigue, altered mental status",
          "Hyperpigmentation (primary AI — elevated ACTH → MSH stimulation) — skin creases, buccal mucosa",
          "Hypoglycemia",
          "In secondary AI: no hyperpigmentation, no hyperkalemia (aldosterone intact)",
        ],
      },
      {
        heading: "Cosyntropin stim test (for non-emergent diagnosis)",
        items: [
          "`Cosyntropin 250 mcg IV/IM`, check cortisol at 0, 30, 60 min",
          "Normal: peak cortisol >18–20 mcg/dL",
          "In crisis: treat first, test when stable",
          "Dexamethasone does not cross-react with cortisol assay — preferred if stim test planned",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 227", "Rushworth et al, NEJM 2019", "LITFL Adrenal Crisis"],
      },
    ],
  },

  // ─── NEURO / NM / PSYCH ─────────────────────────────────────────────────
  {
    id: "nms",
    name: "NMS",
    subtitle: "Neuroleptic malignant syndrome",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Stop all antipsychotics and dopamine-blocking agents** immediately",
          "Aggressive cooling: mist and fans, ice packs to axillae/groin, cool IV fluids; target temp <38.5°C",
          "Aggressive IV hydration for rhabdomyolysis: `NS 1–2 L bolus`, then `250–500 mL/hr`; target UOP >1 mL/kg/hr",
        ],
      },
      {
        heading: "Pharmacotherapy",
        items: [
          "**Benzodiazepines** — `Lorazepam 1–2 mg IV q2h` for agitation and muscle rigidity; first-line",
          "**Bromocriptine** — `2.5 mg PO/NG q8h`, titrate to `10 mg q8h`; dopamine agonist; onset 24–48 h",
          "**Dantrolene** — `2.5 mg/kg IV` for severe hyperthermia or muscle rigidity refractory to benzos; same target as MH; `1–2.5 mg/kg IV q6h` ongoing",
          "Intubation + neuromuscular blockade (non-depolarizing) if temperature uncontrolled or airway compromised; **avoid succinylcholine** (hyperkalemia risk with rhabdo)",
        ],
      },
      { heading: "Duration", items: ["NMS resolves over 1–2 weeks; depot antipsychotics may prolong course significantly"] },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Dopamine D2 receptor blockade (antipsychotics, antiemetics like metoclopramide/promethazine, abrupt withdrawal of dopaminergic drugs in Parkinson's)",
          "Hypothalamic D2 blockade → impaired thermoregulation → hyperthermia",
          "Skeletal muscle D2 blockade → rigidity, increased heat generation",
          "CK elevation from rhabdomyolysis can be massive (>100,000 IU/L)",
        ],
      },
      {
        heading: "Recognition — diagnostic criteria",
        items: [
          "**Altered mental status** (confusion → coma)",
          "**Muscle rigidity** (lead-pipe rigidity is classic, not cogwheel)",
          "**Hyperthermia** (often >38.5°C, can exceed 41°C)",
          "**Autonomic instability** (tachycardia, labile BP, diaphoresis, tachypnea)",
          "**Elevated CK** — often dramatically elevated; leukocytosis common",
          "Exposure to dopamine antagonist or withdrawal of dopamine agonist",
        ],
      },
      {
        heading: "NMS vs. Serotonin Syndrome",
        items: [
          "**NMS**: slower onset (days), lead-pipe rigidity, bradyreflexia/normal DTRs, low CK early vs. high CK late, dopaminergic drug trigger",
          "**SS**: rapid onset (hours), clonus/hyperreflexia, tremor/myoclonus > rigidity, serotonergic drug trigger",
          "Overlap can occur — management principles similar (stop offending agent, supportive, cyproheptadine for SS)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Metoclopramide, promethazine, droperidol can all trigger NMS — often missed",
          "Abrupt clozapine or levodopa discontinuation in Parkinson's = withdrawal NMS",
          "Succinylcholine contraindicated with rhabdomyolysis — use rocuronium",
          "Restart antipsychotics no sooner than 2 weeks after full resolution; use low-potency agent",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 293", "Gurrera, J Clin Psychopharmacol 2017", "LITFL NMS"],
      },
    ],
  },

  {
    id: "serotonin-syndrome",
    name: "Serotonin Syndrome",
    subtitle: "Serotonergic toxidrome",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Stop all serotonergic agents** immediately",
          "Cooling: aggressive external measures; target temp <38.5°C",
          "IV hydration for rhabdomyolysis",
          "Continuous monitoring",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Benzodiazepines** — `Lorazepam 2–4 mg IV` q2h for agitation, myoclonus, rigidity; first-line and very effective",
          "**Cyproheptadine** — `12 mg PO/NG loading dose`, then `4–8 mg q6h` (max 32 mg/day); antihistamine with 5-HT1A/2A antagonism; most effective serotonin antagonist available",
          "**Severe hyperthermia (>41.1°C or refractory)** — intubate + `Vecuronium` (non-depolarizing) NMB; this is the most important cooling intervention; **avoid succinylcholine**",
          "**Dantrolene** — generally NOT as effective as in MH; some use if NMB contraindicated",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Physical restraints — increase heat production, worsen rhabdomyolysis",
          "Succinylcholine (hyperkalemia with rhabdo)",
          "Avoid serotonergic analgesics (tramadol, meperidine, fentanyl in high doses)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Excess serotonin stimulation at 5-HT1A and 5-HT2A receptors in CNS and periphery",
          "Usually requires combination of serotonergic drugs or overdose",
          "Common combinations: SSRI + MAOi (most dangerous), SSRI + tramadol, SSRI + linezolid, SSRI + St. John's Wort, SSRI + fentanyl",
          "MAOi combinations: life-threatening — meperidine + MAOi, triptan + MAOi",
        ],
      },
      {
        heading: "Hunter Criteria (recognition)",
        items: [
          "Serotonergic agent + ONE of the following: spontaneous clonus; inducible clonus + agitation or diaphoresis; ocular clonus + agitation or diaphoresis; tremor + hyperreflexia; hypertonia + temperature >38°C + ocular or inducible clonus",
          "**Clonus is the key finding** — particularly lower extremity inducible clonus",
          "Onset within hours of exposure (vs. NMS = days)",
        ],
      },
      {
        heading: "Severity grading",
        items: [
          "**Mild**: tremor, tachycardia, diaphoresis, mydriasis, myoclonus — may only need drug cessation and observation",
          "**Moderate**: above + hyperthermia (38–40°C), hyperreflexia, clonus, agitation — needs benzodiazepines + cyproheptadine",
          "**Severe**: temp >41°C, rigidity, rhabdo, metabolic acidosis, renal failure — NMB + intubation, ICU",
        ],
      },
      {
        heading: "References",
        items: ["Boyer & Shannon, NEJM 2005", "Buckley et al, Lancet 2014", "LITFL Serotonin Syndrome"],
      },
    ],
  },

  {
    id: "malignant-hyperthermia",
    name: "Malignant Hyperthermia",
    subtitle: "Anesthesia-triggered muscle crisis",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Stop triggering agents immediately** — all volatile anesthetics (halothane, isoflurane, sevoflurane, desflurane) and succinylcholine",
          "Call for help; activate MH emergency protocol; contact MHAUS hotline: **1-800-644-9737**",
          "Switch to non-triggering anesthesia: `Propofol TIVA` + `Opioids` + `Midazolam`",
          "Hyperventilate with 100% O₂ at 2–3× normal minute ventilation (CO₂ washout)",
          "Aggressive cooling: iced saline 15 mL/kg IV bolus, ice packs, cold gastric/bladder lavage; target temp <38°C then stop (overshoot risk)",
        ],
      },
      {
        heading: "Dantrolene (definitive)",
        items: [
          "`Dantrolene 2.5 mg/kg IV bolus` immediately — get it regardless of whether MH 100% confirmed",
          "Repeat `1–2.5 mg/kg` q5 min until rigidity resolves, temperature falls, ETCO₂ normalizes",
          "Average total dose: `10 mg/kg`; can use up to `30 mg/kg`",
          "`Dantrolene 1 mg/kg IV q4–6h × 24–48 h` after acute episode to prevent recurrence",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Hyperkalemia** — insulin/dextrose, bicarb, calcium (for cardiac protection only)",
          "**Arrhythmia** — lidocaine or amiodarone; **avoid calcium channel blockers** (dantrolene interaction → hyperkalemia + cardiac depression)",
          "**Acidosis** — sodium bicarbonate `1–2 mEq/kg IV`",
          "**Rhabdomyolysis** — aggressive IV hydration, target UOP >1 mL/kg/hr; may need CRRT",
          "**DIC** — FFP, cryoprecipitate, platelets",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autosomal dominant mutation in ryanodine receptor (RYR1) gene — most common; also dihydropyridine receptor mutation",
          "Triggering agents → uncontrolled Ca2+ release from sarcoplasmic reticulum → sustained muscle contraction",
          "Uncontrolled muscle contraction: hyperthermia, rigidity, hypermetabolic state, CO₂ production, O₂ consumption, lactic acidosis",
          "Cascade: muscle rigidity → hyperthermia → rhabdomyolysis → DIC → hyperkalemia → cardiac arrest",
          "Incidence: 1:50,000 adults, 1:15,000 children; higher in males",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Earliest sign: unexplained rise in ETCO₂** (increased CO₂ production from hypermetabolism)",
          "Masseter spasm after succinylcholine (early warning — may precede full crisis)",
          "Tachycardia, tachypnea, temperature rise (may lag behind other signs by 30–60 min)",
          "**Rigidity**: may be subtle initially; succinylcholine may produce jaw rigidity instead of paralysis",
          "PO₂ falls on ABG; mixed acidosis; myoglobinuria",
          "Clinical rule: ETCO₂ rising unexpectedly during anesthesia = MH until proven otherwise",
        ],
      },
      {
        heading: "Dantrolene details",
        items: [
          "Mechanism: blocks RYR1 → prevents SR Ca2+ release → reduces muscle contracture",
          "Available as Dantrium (powder reconstitute in sterile water — labor intensive) or Ryanodex (suspension, rapid reconstitution)",
          "Hospitals with OR must stock ≥36 vials (minimum 10 mg/kg for 70 kg patient)",
          "Side effects: muscle weakness, respiratory depression, nausea; monitor respiratory status post-dose",
          "Propylene glycol solvent in Dantrium → use Ryanodex in hepatic or renal failure when possible",
        ],
      },
      {
        heading: "References",
        items: ["MHAUS Guidelines mhaus.org", "Rosenberg et al, Orphanet 2015", "Hopkins et al, BJA 2015"],
      },
    ],
  },

  {
    id: "myasthenia-crisis",
    name: "Myasthenic Crisis",
    subtitle: "NMJ failure / respiratory crisis in MG",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Assess respiratory function**: FVC <20 mL/kg or NIF worse than −20–25 cmH₂O → prepare for intubation",
          "Rule of 20-20-20: FVC <20, NIF worse than −20, RR >20 → intubate preemptively",
          "Hold pyridostigmine during intubation (excess cholinergic secretions; reintroduce after extubation)",
          "Identify and treat precipitant: infection (most common), medications, missed doses",
        ],
      },
      {
        heading: "Immunotherapy",
        items: [
          "**IVIG** — `2 g/kg IV total` divided over 2–5 days (`1 g/kg/day × 2 days` or `0.4 g/kg/day × 5 days`); onset 3–7 days",
          "**Plasma exchange (PLEX)** — 5–7 exchanges every other day; faster onset than IVIG (~3–5 days); preferred in most severe crises or pre-op",
          "IVIG and PLEX are equally effective; PLEX faster; use PLEX if rapid response needed",
          "**Corticosteroids**: `Prednisone 1 mg/kg/day PO` (caution — may transiently worsen at initiation); consider IV solumedrol if can't take PO",
        ],
      },
      {
        heading: "Drugs to avoid in MG",
        items: [
          "Aminoglycosides, fluoroquinolones, macrolides (worsening NMJ blockade)",
          "Magnesium sulfate, calcium channel blockers, beta-blockers",
          "Neuromuscular blockers (highly sensitive — avoid or drastically reduce dose)",
          "Succinylcholine (resistance; prolonged phase II block possible)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autoimmune: anti-AChR antibodies in 85%, anti-MuSK in 5%, seronegative ~10%",
          "Antibodies → neuromuscular junction blockade, complement-mediated AChR destruction",
          "Thymus often abnormal (hyperplasia in younger, thymoma in older patients)",
          "Fatigable weakness: worse with repeated use, better with rest",
        ],
      },
      {
        heading: "Myasthenic vs. Cholinergic crisis",
        items: [
          "**Myasthenic crisis**: insufficient acetylcholine effect — weakness; may respond to edrophonium test (Tensilon)",
          "**Cholinergic crisis**: excess ACh from pyridostigmine overdose — SLUDGE + weakness; STOP pyridostigmine",
          "Edrophonium (Tensilon) test: `2 mg IV test dose`, then `8 mg` if no adverse reaction — improvement in ptosis or fatigability confirms myasthenic crisis",
          "In practice: if crisis present, hold pyridostigmine and give IVIG/PLEX regardless",
        ],
      },
      {
        heading: "Respiratory monitoring",
        items: [
          "Bedside spirometry q4h in deteriorating patients",
          "FVC most reliable; NIF measures inspiratory muscle strength",
          "Bulbar weakness (dysphagia, dysarthria, nasal voice) predicts aspiration risk — intubate earlier",
          "Avoid BiPAP as sole intervention in myasthenic crisis — bridge only; airway protection paramount",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 172", "Gilhus, NEJM 2016", "LITFL Myasthenic Crisis"],
      },
    ],
  },

  {
    id: "botulism",
    name: "Botulism",
    subtitle: "Clostridium botulinum neurotoxin",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Protect airway — descending paralysis; early intubation if respiratory compromise",
          "Serial respiratory monitoring: FVC, NIF q2–4h",
          "**Notify public health immediately** (botulism = reportable; antitoxin obtained through CDC/public health)",
          "Call CDC Emergency Operations Center: **770-488-7100** for antitoxin",
        ],
      },
      {
        heading: "Antitoxin",
        items: [
          "**Heptavalent botulinum antitoxin (HBAT)** — available through CDC, strategic national stockpile",
          "Give as early as possible — neutralizes unbound toxin only (does not reverse established paralysis)",
          "1 vial IV per standard dosing; contact CDC for dosing guidance",
          "Equine-derived — skin test for allergy before giving; have epinephrine ready",
          "**Infant botulism**: BabyBIG (human-derived botulinum immune globulin) — call CA Dept of Public Health: **510-231-7600**",
        ],
      },
      {
        heading: "Supportive",
        items: [
          "Mechanical ventilation — mainstay of treatment; can require weeks to months",
          "NG tube feeding (dysphagia)",
          "Wound botulism: surgical debridement + penicillin `10–20 million units/day IV` + antitoxin",
          "**Avoid aminoglycosides** — worsen NMJ blockade",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Botulinum toxin cleaves SNARE proteins → blocks ACh vesicle release at NMJ → flaccid paralysis",
          "Serotypes A, B, E cause most human disease",
          "Descending paralysis: cranial nerves first (diplopia, dysarthria, dysphagia) → extremities → respiratory muscles",
          "No CNS penetration — patient fully alert; sensory function intact",
        ],
      },
      {
        heading: "Clinical forms",
        items: [
          "**Foodborne**: home-canned goods, fermented foods; nausea/vomiting may precede paralysis",
          "**Wound**: injection drug use (black tar heroin), traumatic wounds; no GI symptoms; fever possible",
          "**Infantile**: honey, soil; constipation first; 3–26 weeks of age",
          "**Iatrogenic**: therapeutic injection (cosmetic Botox) at excess dose",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Classic triad**: afebrile (or low grade), symmetric descending paralysis, alert mental status",
          "Cranial nerve involvement: diplopia (CN III/IV/VI), ptosis, dysarthria, dysphagia",
          "Autonomic: constipation, urinary retention, dry mouth, pupillary dilation (sluggish reactivity)",
          "Normal sensation, normal mentation",
          "EMG: incremental response to rapid repetitive stimulation (distinguishes from Eaton-Lambert → facilitating)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 173", "CDC Botulism Clinical Guidance 2021", "LITFL Botulism"],
      },
    ],
  },

  {
    id: "spinal-epidural-abscess",
    name: "Spinal Epidural Abscess",
    subtitle: "SEA — surgical emergency, don't miss",
    category: "neuro",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "MRI spine with gadolinium — imaging of choice; emergent",
          "Blood cultures × 2 before antibiotics if delay acceptable (do not delay antibiotics for cultures if deteriorating)",
          "Neurosurgery consult immediately — surgical emergency",
          "Do NOT perform LP (risk of seeding meningeal space)",
        ],
      },
      {
        heading: "Empiric antibiotics",
        items: [
          "`Vancomycin 25–30 mg/kg IV` (loading dose, target trough 15–20; or AUC-based dosing) — covers MRSA",
          "`Cefepime 2 g IV q8h` OR `Piperacillin-tazobactam 4.5 g IV q6h` — gram-negative coverage",
          "Add `Metronidazole 500 mg IV q8h` if anaerobic source suspected (GI surgery, odontogenic)",
          "Duration typically 4–8 weeks (IV → PO transition per ID)",
        ],
      },
      {
        heading: "Surgical vs. medical management",
        items: [
          "**Surgery** (laminectomy/decompression): neurologic deficit (weakness, sensory changes), bladder/bowel dysfunction, or failure to improve on medical therapy",
          "**Medical only**: no neurologic deficit, significant surgical risk, complete paralysis >72 h (limited recovery expected) — rare; requires close monitoring",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Infection in epidural space → cord compression from abscess mass effect OR vascular compromise (thrombophlebitis of spinal arteries)",
          "Most common organism: **Staph aureus** (MRSA in IV drug users, healthcare-associated)",
          "Also: gram-negatives, Streptococcus spp, anaerobes, TB (Pott's disease)",
        ],
      },
      {
        heading: "Risk factors",
        items: [
          "IV drug use, diabetes, immunosuppression, HIV, renal failure",
          "Spinal procedures: epidural, steroid injections, spinal surgery",
          "Skin/soft tissue infections, endocarditis (hematogenous spread)",
          "Urinary tract infection (hematogenous)",
        ],
      },
      {
        heading: "Classical progression",
        items: [
          "**Stage 1**: Back pain, point tenderness over spine, fever",
          "**Stage 2**: Nerve root pain (radicular, shooting)",
          "**Stage 3**: Motor weakness, sensory deficits, bowel/bladder dysfunction",
          "**Stage 4**: Paralysis",
          "This progression can occur over hours to days — do not wait for later stages",
        ],
      },
      {
        heading: "The diagnostic trap",
        items: [
          "Classic presentation of back pain + fever + neurologic deficit is present in <50% of cases",
          "Up to 50% have normal WBC; fever absent in 50%",
          "Clinical rule: **spinal tenderness + any risk factor + back pain → MRI**",
          "MRI with gadolinium is the standard — CT may miss early or small collections",
          "LP contraindicated if SEA suspected",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 176", "Darouiche, NEJM 2006", "Davis et al, JAAEM 2020"],
      },
    ],
  },

  // ─── CARDIOVASCULAR ─────────────────────────────────────────────────────
  {
    id: "aortic-dissection",
    name: "Aortic Dissection",
    subtitle: "Acute aortic syndrome — Type A and B",
    category: "cv",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "IV access × 2 large bore, arterial line (both arms), continuous monitoring",
          "Immediate CTA chest/abdomen/pelvis with contrast if hemodynamically stable",
          "Cardiac surgery and vascular surgery consult immediately",
          "**Type A (ascending): immediate surgical intervention**",
          "**Type B (descending): medical management unless complicated**",
        ],
      },
      {
        heading: "Anti-impulse therapy (both types)",
        items: [
          "Goal: HR <60 bpm, SBP 100–120 mmHg (tolerated) — reduce aortic wall stress",
          "**Beta-blocker first** — `Esmolol 500 mcg/kg IV bolus`, then `50–200 mcg/kg/min infusion`; OR `Labetalol 20 mg IV q10 min` (max 300 mg), then infusion",
          "**Add vasodilator if SBP still elevated after HR controlled**: `Nicardipine 5 mg/hr IV`, titrate to 15 mg/hr; OR `Sodium nitroprusside 0.5–10 mcg/kg/min` (only after beta-blocker given)",
          "**Never give vasodilator without beta-blocker** — reflex tachycardia ↑ aortic shear stress",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Anticoagulation (unless mechanical complication requiring intervention)",
          "Thrombolytics (catastrophic)",
          "Aggressive fluid resuscitation in Type A",
        ],
      },
    ],
    extended: [
      {
        heading: "Stanford classification",
        items: [
          "**Type A**: involves ascending aorta (±descending); surgical emergency; 1–2%/h mortality without surgery",
          "**Type B**: descending aorta only; medical management; TEVAR if complicated",
          "Complicated Type B: malperfusion (limb, renal, mesenteric ischemia), uncontrolled pain, refractory hypertension, rapid expansion → TEVAR",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Sudden-onset severe chest/back/abdominal pain** — 'tearing,' 'ripping,' or 'knife-like'; pain maximal at onset",
          "Pulse differentials (>20 mmHg SBP between arms), aortic regurgitation murmur, neurologic deficits",
          "Painless dissection in up to 6% (diabetic, elderly) — presents with stroke, syncope, or heart failure",
          "CXR: widened mediastinum (>8 cm) in 60%; normal CXR does NOT rule out",
          "D-dimer <500 ng/mL: high NPV for acute aortic syndrome (ADvISED trial) — use as a rule-out tool",
        ],
      },
      {
        heading: "Malperfusion syndromes",
        items: [
          "**Coronary** (RCA most common): ST elevation MI (type A) — do NOT go to cath lab first; surgery first",
          "**Cerebral**: stroke (carotid involvement), coma",
          "**Spinal cord**: paraplegia",
          "**Mesenteric**: ischemic abdomen",
          "**Renal**: AKI, severe hypertension",
          "**Extremity**: limb ischemia, pulse deficit",
        ],
      },
      {
        heading: "STEMI mimic",
        items: [
          "Type A dissection can cause ST elevation (RCA involvement) — coronary angiography prior to surgery delays definitive care and may worsen outcome",
          "If aortic dissection suspected in STEMI presentation: obtain CTA FIRST (bedside echo if too unstable)",
          "Pericardial effusion/tamponade on echo is highly suggestive of Type A — go to surgery",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 60", "IRAD Registry data", "Nazerian et al ADvISED trial, Circulation 2018", "LITFL Aortic Dissection"],
      },
    ],
  },

  // ─── OB / PREGNANCY ─────────────────────────────────────────────────────
  {
    id: "eclampsia",
    name: "Eclampsia / Severe HTN in Pregnancy",
    subtitle: "Pre-eclampsia with severe features, eclampsia, HELLP",
    category: "ob",
    tldr: [
      {
        heading: "Eclampsia (seizures)",
        items: [
          "**Magnesium sulfate** — `4–6 g IV over 15–20 min loading dose`, then `2 g/hr infusion`",
          "Refractory seizures: `MgSO₄ 2 g IV bolus` repeat; then lorazepam or diazepam; monitor for Mg toxicity",
          "Magnesium toxicity: loss of DTRs (first sign), respiratory depression, cardiac arrest — treat with `Calcium gluconate 1 g IV`",
          "Lateral decubitus positioning; supplemental O₂; prepare for emergency delivery",
        ],
      },
      {
        heading: "Severe hypertension (SBP ≥160 or DBP ≥110 mmHg) — treat within 30–60 min",
        items: [
          "**Labetalol** — `20 mg IV`, then 40 mg, then 80 mg q10 min (max 220 mg); OR `200 mg PO`",
          "**Hydralazine** — `5–10 mg IV q20 min` (max 20 mg); also acceptable first-line",
          "**Nifedipine** — `10 mg PO immediate release`, repeat q20 min (max 30 mg)",
          "**Nicardipine infusion** — `5 mg/hr` titrating to `15 mg/hr` if IV only option",
          "Goal: SBP 140–155 mmHg, DBP 90–105 mmHg (not lower — risks placental hypoperfusion)",
        ],
      },
      {
        heading: "Definitive treatment",
        items: [
          "**Delivery** is the only cure — obstetrics consult immediately; timing based on gestational age and maternal/fetal condition",
          "Betamethasone `12 mg IM q24h × 2 doses` for fetal lung maturity if 24–34 weeks and delivery not imminent",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Defective placental implantation → placental ischemia → antiangiogenic factor release (sFlt-1, soluble endoglin) → endothelial dysfunction",
          "Systemic endothelial dysfunction → vasospasm, hypertension, proteinuria, end-organ damage",
          "Eclampsia: cerebral vasospasm and auto-regulatory breakthrough → seizures; mechanism similar to hypertensive encephalopathy",
          "HELLP: Hemolysis, Elevated Liver enzymes, Low Platelets — variant of severe PEC",
        ],
      },
      {
        heading: "Magnesium sulfate — why it works",
        items: [
          "Mechanism in eclampsia: cerebral vasodilation (blocks NMDA receptors), membrane stabilization — NOT a traditional anticonvulsant",
          "Superior to phenytoin, diazepam for prevention of recurrent seizures in eclampsia (Magpie Trial)",
          "Monitor for toxicity: DTRs (check q1h), UOP (>25–30 mL/hr required for clearance), RR >12",
          "Therapeutic range: 4–8 mEq/L; DTR loss >8; respiratory arrest >12; cardiac arrest >15",
          "Magnesium use does NOT require a normal BP; it's seizure prophylaxis/treatment",
        ],
      },
      {
        heading: "HELLP syndrome",
        items: [
          "LDH >600, AST/ALT >70, platelets <100,000",
          "RUQ/epigastric pain classic (liver distension)",
          "Complications: hepatic rupture, DIC, placental abruption, ARDS",
          "Delivery is definitive; stabilize, consult MFM urgently",
          "Platelet transfusion if <50,000 and delivery planned; DIC protocol if indicated",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Up to 25% of eclampsia occurs postpartum — can be up to 4 weeks after delivery",
          "Avoid nitroprusside in pregnancy if possible (fetal cyanide risk)",
          "ACE inhibitors and ARBs are CONTRAINDICATED in pregnancy",
          "Goal BP is not normalization — too low → uteroplacental insufficiency",
          "Magnesium + calcium channel blockers → potentiated hypotension/NMJ blockade",
        ],
      },
      {
        heading: "References",
        items: ["ACOG Practice Bulletin 222 (2020)", "Magpie Trial Lancet 2002", "LITFL Eclampsia", "Tintinalli 9e Ch 103"],
      },
    ],
  },

  {
    id: "postpartum-hemorrhage",
    name: "Postpartum Hemorrhage",
    subtitle: "≥1000 mL blood loss or bleeding with hypovolemia within 24h of birth",
    category: "ob",
    tldr: [
      {
        heading: "Resuscitate (parallel with stopping bleeding)",
        items: [
          "Call OB + activate **massive transfusion protocol** early; 2 large-bore IVs",
          "Type & crossmatch, CBC, coags, fibrinogen; **fibrinogen <200 mg/dL predicts severe PPH**",
          "Warmed crystalloid + early balanced blood products (target 1:1:1); don't over-resuscitate with crystalloid",
          "**Tranexamic acid 1 g IV over 10 min** — give within 3 h of delivery (WOMAN trial); repeat 1 g if bleeding continues after 30 min",
          "Keep patient warm; monitor for hypothermia, acidosis, hypocalcemia (lethal triad)",
        ],
      },
      {
        heading: "Identify cause — the 4 T's",
        items: [
          "**Tone** — uterine atony (70–80%, most common): boggy uterus",
          "**Trauma** — lacerations (cervix/vagina/perineum), hematoma, uterine rupture/inversion",
          "**Tissue** — retained placenta or products of conception",
          "**Thrombin** — coagulopathy (DIC, HELLP, AFE, anticoagulants, dilutional)",
        ],
      },
      {
        heading: "Atony — uterotonics + maneuvers",
        items: [
          "**Bimanual uterine massage** first-line, immediately",
          "**Oxytocin** — `10–40 units in 500–1000 mL NS IV infusion` (or 10 units IM); avoid rapid IV push (hypotension)",
          "**Methylergonovine** — `0.2 mg IM` q2–4h; **contraindicated in HTN/pre-eclampsia**",
          "**Carboprost (Hemabate)** — `250 mcg IM` q15–90 min (max 2 mg); **contraindicated in asthma**",
          "**Misoprostol** — `800–1000 mcg rectal/sublingual` ×1",
          "Refractory: intrauterine balloon tamponade (Bakri), uterine packing",
        ],
      },
      {
        heading: "Escalate if refractory",
        items: [
          "Retained tissue → manual removal / D&C",
          "Trauma → repair lacerations; evacuate/ligate hematoma; **uterine inversion → immediate manual replacement before uterus contracts** (consider tocolytic to relax, then uterotonics after)",
          "Definitive: uterine artery embolization (IR), B-Lynch compression suture, artery ligation, **hysterectomy** (lifesaving — don't delay)",
          "Correct coagulopathy: FFP, cryoprecipitate (fibrinogen <150–200), platelets; consider fibrinogen concentrate",
        ],
      },
    ],
    extended: [
      {
        heading: "Definition & classification",
        items: [
          "Cumulative blood loss ≥1000 mL OR blood loss with signs/symptoms of hypovolemia within 24h of birth (ACOG 2017 — route-independent)",
          "Classic thresholds: ≥500 mL vaginal, ≥1000 mL cesarean",
          "**Primary PPH**: within 24h of delivery (most common, usually atony)",
          "**Secondary (delayed) PPH**: 24h to 12 weeks postpartum — retained products, endometritis, subinvolution, abnormal placentation",
          "Vital signs are late — young healthy parturients compensate; estimate blood loss is unreliable (often underestimated)",
        ],
      },
      {
        heading: "Risk factors",
        items: [
          "Atony: prolonged/augmented labor, chorioamnionitis, multiple gestation, polyhydramnios, macrosomia, grand multiparity, prior PPH",
          "Trauma: operative vaginal delivery, precipitous labor, episiotomy, prior cesarean",
          "Tissue: placenta accreta spectrum, prior uterine surgery, succenturiate lobe",
          "Thrombin: HELLP, abruption, amniotic fluid embolism, sepsis, fetal demise, anticoagulation, inherited bleeding disorders",
        ],
      },
      {
        heading: "Uterotonic dosing & contraindications",
        items: [
          "**Oxytocin (Pitocin)** — 10–40 units/500–1000 mL infusion or 10 units IM; first-line; rapid IV bolus → hypotension",
          "**Methylergonovine (Methergine)** — 0.2 mg IM q2–4h; CONTRAINDICATED in hypertension, pre-eclampsia, Raynaud's, CAD",
          "**Carboprost / 15-methyl PGF2α (Hemabate)** — 250 mcg IM q15–90 min, max 8 doses; CONTRAINDICATED in asthma; caution in hepatic/renal/cardiac disease; causes diarrhea/fever/bronchospasm",
          "**Misoprostol (PGE1)** — 800–1000 mcg rectal/SL/buccal; causes fever, shivering",
          "**Tranexamic acid** — 1 g IV over 10 min within 3 h; repeat ×1 if continued bleeding at 30 min (WOMAN trial — reduces death from bleeding)",
        ],
      },
      {
        heading: "Mechanical & surgical interventions",
        items: [
          "Bimanual uterine compression/massage — immediate, first-line for atony",
          "Intrauterine balloon tamponade — Bakri balloon, or improvised (condom catheter); definitive in ~85%",
          "Uterine packing (gauze)",
          "Tranexamic acid as above",
          "Uterine artery embolization — IR, if hemodynamically stable",
          "B-Lynch / compression sutures, uterine or internal iliac artery ligation",
          "**Hysterectomy** — definitive; don't delay in life-threatening hemorrhage or placenta accreta spectrum",
          "Uterine inversion: replace immediately; uterine rupture: laparotomy",
        ],
      },
      {
        heading: "Resuscitation & transfusion",
        items: [
          "Activate massive transfusion protocol early; balanced 1:1:1 (PRBC:FFP:platelets)",
          "Tranexamic acid early (within 3h)",
          "Fibrinogen is the first factor to fall in obstetric hemorrhage — target >150–200 mg/dL; give cryoprecipitate or fibrinogen concentrate",
          "Calcium replacement (citrate from massive transfusion → hypocalcemia)",
          "Avoid the lethal triad: hypothermia, acidosis, coagulopathy — warm fluids/patient",
          "Point-of-care testing (ROTEM/TEG) if available to guide product use",
          "Cell salvage in select cases",
        ],
      },
      {
        heading: "ED / out-of-hospital considerations",
        items: [
          "Delayed (secondary) PPH may present to ED days–weeks postpartum: retained products, endometritis, subinvolution",
          "Get OB/Gyn emergently; ultrasound for retained products; treat endometritis with broad-spectrum antibiotics",
          "Precipitous delivery in ED: have oxytocin ready, controlled cord traction, inspect for lacerations",
          "Consider uterine artery embolization or D&C for retained products",
          "Sheehan syndrome (postpartum pituitary necrosis) is a late complication of severe PPH",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "All significant PPH → OB management, typically ICU/L&D monitoring",
          "Serial Hgb, coags, urine output; watch for ongoing/recurrent bleeding",
          "Transfer to higher level of care if accreta spectrum, IR/surgical capability needed",
          "Debrief and document estimated blood loss, interventions, response",
        ],
      },
      {
        heading: "References",
        items: ["ACOG Practice Bulletin 183 (2017, reaffirmed)", "WOMAN Trial, Lancet 2017", "Tintinalli 9e Ch 103", "RCOG Green-top Guideline 52"],
      },
    ],
  },

  {
    id: "ectopic-pregnancy",
    name: "Ectopic Pregnancy",
    subtitle: "Implantation outside uterine cavity — leading cause of 1st-trimester maternal death",
    category: "ob",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "**Any reproductive-age female with abdominal pain or vaginal bleeding → β-hCG until proven otherwise**",
          "Classic triad (amenorrhea + abdominal pain + vaginal bleeding) — but presentation highly variable",
          "Risk factors: prior ectopic, tubal surgery/ligation, PID, IUD in place, ART/IVF, prior STI — but **50% have no risk factors**",
          "Ruptured: peritoneal signs, shoulder pain (diaphragmatic irritation), syncope, hemodynamic instability",
        ],
      },
      {
        heading: "Unstable / ruptured — resuscitate + emergency surgery",
        items: [
          "2 large-bore IVs, type & cross, activate **massive transfusion** if shock",
          "**Immediate OB/Gyn consult for operative laparoscopy/laparotomy** — do NOT delay for imaging if unstable + positive pregnancy test",
          "FAST/bedside US: free fluid + positive β-hCG + instability = OR",
          "Resuscitate with blood products; permissive approach until surgical control",
        ],
      },
      {
        heading: "Stable — diagnostic workup",
        items: [
          "Quantitative **β-hCG** + **transvaginal ultrasound**",
          "TVUS: intrauterine pregnancy (IUP) essentially excludes ectopic (heterotopic rare ~1:4000, higher with ART)",
          "**Discriminatory zone**: β-hCG ≥1500–3500 with no IUP on TVUS → concern for ectopic",
          "No definitive IUP and stable → serial β-hCG q48h (normal IUP rises ≥35–53% in 48h); abnormal rise/plateau suggests ectopic or nonviable",
          "Type & screen — give **Rho(D) immune globulin (RhoGAM 50–300 mcg IM) if Rh-negative**",
        ],
      },
      {
        heading: "Management of confirmed ectopic",
        items: [
          "**Methotrexate** (medical) — stable, unruptured, β-hCG <5000 (ideally), no fetal cardiac activity, mass <3.5–4 cm, reliable follow-up; `50 mg/m² IM` (single-dose protocol)",
          "**Surgery** — unstable, ruptured, contraindication to/failure of MTX, heterotopic, large mass or cardiac activity (salpingostomy vs salpingectomy)",
          "Expectant management — selected, declining low β-hCG, asymptomatic, very close follow-up",
        ],
      },
    ],
    extended: [
      {
        heading: "Epidemiology & sites",
        items: [
          "~2% of pregnancies; leading cause of 1st-trimester pregnancy-related death",
          "**Ampullary (~70%)** most common; isthmic, fimbrial, interstitial/cornual (more catastrophic bleeding), ovarian, cervical, cesarean scar, abdominal",
          "Heterotopic (concurrent IUP + ectopic): ~1:4000 spontaneous, up to 1:100 with ART — IUP does NOT fully exclude in ART patients",
        ],
      },
      {
        heading: "Risk factors",
        items: [
          "Prior ectopic (10–25% recurrence), prior tubal surgery or ligation",
          "PID / prior chlamydia or gonorrhea, tubal pathology",
          "IUD in situ (overall ↓ pregnancy, but if pregnant, ↑ proportion ectopic)",
          "Assisted reproductive technology / IVF, ovulation induction",
          "Smoking, increasing maternal age, prior pelvic/abdominal surgery, DES exposure",
          "~50% of patients have NO identifiable risk factor — never use absence to exclude",
        ],
      },
      {
        heading: "Clinical presentation",
        items: [
          "Abdominal/pelvic pain (often unilateral), amenorrhea, vaginal bleeding/spotting",
          "Ruptured: severe pain, syncope, shoulder tip pain (Kehr sign), peritonitis, hemorrhagic shock",
          "Adnexal tenderness ± palpable mass; cervical motion tenderness",
          "May mimic: appendicitis, ovarian torsion, ruptured ovarian cyst, PID, threatened abortion, UTI",
          "A patient can rupture with relatively low β-hCG and a 'reassuring' exam — maintain suspicion",
        ],
      },
      {
        heading: "Diagnostics",
        items: [
          "Urine qualitative β-hCG (screen) → quantitative serum β-hCG",
          "Transvaginal ultrasound — most useful single test; look for IUP (yolk sac/fetal pole), adnexal mass, tubal ring, free fluid",
          "Discriminatory zone (β-hCG ~1500–3500 mIU/mL) institution- and US-dependent; no IUP above it raises concern but is not diagnostic alone",
          "Serial β-hCG q48h in stable indeterminate cases: minimal expected rise ~35–53% over 48h; abnormal kinetics → ectopic or failed IUP",
          "Progesterone (adjunct): <5 ng/mL suggests nonviable; >20 favors viable IUP (not definitive)",
          "CBC, type & screen/cross, Rh status; consider D&C/uterine aspiration if differentiating failed IUP vs ectopic",
        ],
      },
      {
        heading: "Methotrexate (medical management)",
        items: [
          "Folate antagonist — halts trophoblast proliferation",
          "Best candidates: hemodynamically stable, unruptured, β-hCG <5000 (success ↓ as β-hCG ↑), no fetal cardiac activity, mass <3.5–4 cm, able/willing to follow up",
          "Single-dose protocol: 50 mg/m² IM; check β-hCG day 4 and day 7 — expect ≥15% decline day 4→7; if not, repeat dose or surgery",
          "**Absolute contraindications**: hemodynamic instability/rupture, IUP, breastfeeding, immunodeficiency, hepatic/renal/hematologic dysfunction, peptic ulcer, active pulmonary disease, inability to follow up",
          "Counsel: avoid folic acid, NSAIDs, alcohol, sun exposure, and intercourse until resolved; expect transient 'separation pain'",
          "Avoid pregnancy for ~3 months after MTX",
        ],
      },
      {
        heading: "Surgical management",
        items: [
          "Indications: instability, rupture, MTX contraindicated/failed, heterotopic pregnancy, large mass or cardiac activity, patient preference",
          "Laparoscopy preferred if stable; laparotomy if unstable",
          "Salpingostomy (tube-sparing) vs salpingectomy — salpingectomy if uncontrolled bleeding, severely damaged tube, recurrent ectopic in same tube, or completed childbearing",
          "Persistent trophoblast after salpingostomy → follow β-hCG to zero; may need MTX",
        ],
      },
      {
        heading: "Rh & disposition",
        items: [
          "Give Rho(D) immune globulin if Rh-negative (50 mcg if <12 wk, otherwise 300 mcg) — give to all Rh-neg with ectopic/bleeding",
          "Admit: ruptured/unstable, surgical management, unreliable follow-up, indeterminate with concerning features",
          "Discharge (selected stable, MTX or expectant): strict return precautions, scheduled β-hCG follow-up, OB/Gyn arranged",
          "Document a clear 'pregnancy of unknown location' follow-up plan — missed ectopic is a high-risk diagnosis",
        ],
      },
      {
        heading: "References",
        items: ["ACOG Practice Bulletin 193 (2018, reaffirmed)", "Tintinalli 9e Ch 98", "ACEP Clinical Policy: Early Pregnancy 2017", "Barnhart, NEJM 2009"],
      },
    ],
  },

  // ─── OPHTHALMOLOGIC ─────────────────────────────────────────────────────
  {
    id: "acute-angle-closure",
    name: "Acute Angle-Closure Glaucoma",
    subtitle: "Ophthalmic emergency — IOP crisis",
    category: "ophth",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Ophthalmology consult immediately — definitive treatment is laser iridotomy or surgical iridectomy",
          "Lay patient supine (helps open angle)",
          "Measure IOP (Tono-pen if available; normal <21 mmHg; crisis usually 40–80 mmHg)",
          "Goal: rapidly lower IOP while awaiting ophthalmology",
        ],
      },
      {
        heading: "IOP-lowering medications (give simultaneously)",
        items: [
          "**Timolol 0.5%** (beta-blocker) — `1 drop topically`; decreases aqueous production; avoid in asthma/COPD/heart block",
          "**Brimonidine 0.2%** (alpha-2 agonist) — `1 drop topically`; decreases production, increases outflow",
          "**Pilocarpine 1–2%** (cholinergic) — `1 drop topically`; constricts pupil, opens angle; **wait 1 h after other drops** (may not work until sphincter muscle ischemia resolves)",
          "**Dorzolamide 2%** (carbonic anhydrase inhibitor) — `1 drop topically`",
          "**Acetazolamide** (systemic CAI) — `500 mg IV or PO`; systemic IOP lowering",
          "**Mannitol** (for severe/refractory) — `1–2 g/kg IV over 30–45 min`; osmotic dehydration of vitreous",
        ],
      },
      {
        heading: "Analgesia & antiemetics",
        items: [
          "Pain and nausea are severe — treat aggressively: opioids, ondansetron",
          "Nausea can worsen IOP (Valsalva) — critical to control",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Narrow anatomic angle between iris and cornea → pupillary block → aqueous humor unable to drain through trabecular meshwork",
          "Triggers: pupil mid-dilation (dim light, sympathomimetics, anticholinergics) → iris contacts lens → blocks flow",
          "Rapid IOP rise → ischemia of optic nerve and retinal ganglion cells → permanent vision loss if not treated",
          "Risk factors: far-sighted (hyperopia), shallow anterior chamber, Asian ethnicity, female sex, age >60",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Sudden severe unilateral eye pain + headache + nausea/vomiting + halos around lights + blurred vision**",
          "Exam: injected eye, **fixed mid-dilated pupil**, hazy/steamy cornea, red eye, rock-hard globe on palpation",
          "Frequently misdiagnosed as migraine, GI illness — look at the eye!",
          "IOP >40 mmHg typical; >60 mmHg in severe cases",
        ],
      },
      {
        heading: "Precipitating drugs in susceptible patients",
        items: [
          "Anticholinergics: atropine, ipratropium, diphenhydramine, TCAs, antipsychotics",
          "Sympathomimetics: pseudoephedrine, phenylephrine, cocaine",
          "Topiramate (idiosyncratic — bilateral, not pupil-dependent mechanism)",
          "Sulfonamides",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 241", "Prum et al AAO PPP 2016", "LITFL Acute Angle Closure Glaucoma"],
      },
    ],
  },

  // ─── HEMATOLOGY / REVERSAL ───────────────────────────────────────────────
  {
    id: "anticoagulation-reversal",
    name: "Anticoagulation Reversal",
    subtitle: "Emergent reversal of anticoagulants",
    category: "heme",
    tldr: [
      {
        heading: "Warfarin (vitamin K antagonist)",
        items: [
          "**Life-threatening bleed**: `4F-PCC (Kcentra)` — INR 2–4: `25 units/kg` IV; INR 4–6: `35 units/kg`; INR >6: `50 units/kg`; max 5000 units",
          "Add `Vitamin K 10 mg IV slow infusion` (prevents rebound coagulopathy)",
          "**Non-life-threatening bleed**: `Vitamin K 2.5–5 mg PO` or IV; hold warfarin",
          "Check INR 30–60 min after PCC",
        ],
      },
      {
        heading: "Dabigatran (direct thrombin inhibitor)",
        items: [
          "**Idarucizumab (Praxbind)** — `5 g IV` (two 2.5 g vials, give sequentially); complete reversal within minutes",
          "If unavailable: `4F-PCC 50 units/kg` or aPCC (FEIBA) `80 units/kg`",
          "Dialyzable (unlike direct Xa inhibitors) — consider if massive overdose",
        ],
      },
      {
        heading: "Rivaroxaban / Apixaban / Edoxaban (direct Xa inhibitors)",
        items: [
          "**Andexanet alfa (Andexxa)**:",
          "Low dose: `400 mg IV bolus over 15–30 min`, then `480 mg IV over 2 h` — for rivaroxaban ≤10 mg, apixaban ≤5 mg taken >8 h ago",
          "High dose: `800 mg IV bolus`, then `960 mg IV over 2 h` — for rivaroxaban >10 mg, apixaban >5 mg, or unknown",
          "If andexanet unavailable: `4F-PCC 25–50 units/kg IV`",
        ],
      },
      {
        heading: "Heparin / LMWH",
        items: [
          "**UFH**: `Protamine 1 mg per 100 units heparin` (given within 30 min; reduce to 0.5 mg/100 units if >30 min); max single dose `50 mg IV` slow over 10 min; anaphylaxis risk",
          "**LMWH**: Protamine partially effective — `1 mg per 1 mg enoxaparin`; only neutralizes ~60% of anti-Xa activity",
        ],
      },
    ],
    extended: [
      {
        heading: "4-Factor PCC details",
        items: [
          "Contains factors II, VII, IX, X, Protein C, Protein S — complete reversal of vitamin K-dependent factors",
          "Onset: 5–15 min; duration 6–12 h; must pair with Vitamin K for sustained reversal",
          "Volume: ~20–100 mL (vs. FFP which requires 15–30 mL/kg = large volumes causing volume overload)",
          "Thrombosis risk: ~1.4%; still use in life-threatening bleed",
          "FDA approved for warfarin but commonly used off-label for direct Xa inhibitors",
        ],
      },
      {
        heading: "Andexanet alfa details",
        items: [
          "Recombinant modified Factor Xa decoy — sequesters Xa inhibitors",
          "Approved for rivaroxaban and apixaban (approved indication); edoxaban and betrixaban off-label",
          "Very expensive ($25,000–$50,000/dose); not universally stocked",
          "Associated with thrombotic events in ~10% (high-risk population); anticoagulation resumption planning essential",
          "4F-PCC is a reasonable alternative when andexanet unavailable",
        ],
      },
      {
        heading: "Idarucizumab details",
        items: [
          "Monoclonal antibody fragment that binds dabigatran with 350× the affinity of thrombin",
          "Complete reversal in minutes; duration 24 h",
          "REVERSE-AD trial: near-complete reversal in >90% within minutes",
          "Dabigatran may re-accumulate after 12–24 h if renal failure (dabigatran is renally cleared)",
          "Re-anticoagulate when appropriate: DOACs can resume 24 h after idarucizumab",
        ],
      },
      {
        heading: "Intracranial hemorrhage considerations",
        items: [
          "Fastest reversal possible — every minute counts",
          "For all anticoagulated patients with ICH: reverse immediately, neurosurgery consult",
          "Target INR <1.4 (warfarin) before surgical intervention",
          "Tranexamic acid `1 g IV over 10 min` may reduce hematoma expansion as adjunct",
          "Platelet transfusion if antiplatelet agents + ICH — controversial; may be harmful (PATCH trial suggests no benefit); discuss with neurosurgery",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 246", "Frontera et al, Neurocrit Care 2016", "ANNEXA-4 Trial (andexanet)", "REVERSE-AD Trial (idarucizumab)", "LITFL Anticoagulant Reversal"],
      },
    ],
  },

  // ─── HEME / ONCOLOGIC (new) ──────────────────────────────────────────────
  {
    id: "hyperleukocytosis",
    name: "Hyperleukocytosis / Leukostasis",
    subtitle: "WBC crisis in acute leukemia",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Urgent hematology/oncology consult",
          "**Do NOT transfuse RBCs** — increases whole blood viscosity at already critical levels",
          "**Do NOT transfuse platelets** unless <10K or life-threatening bleed",
          "Aggressive IV hydration; avoid diuretics",
          "Avoid supplemental O₂ above what is needed (hyperoxia may worsen leukostasis)",
        ],
      },
      {
        heading: "Cytoreduction",
        items: [
          "**Leukapheresis** — emergent for WBC >100K with symptoms (altered mental status, hypoxia, priapism, visual changes); temporizing measure",
          "**Hydroxyurea** — `50–100 mg/kg/day PO` (max 8 g) to reduce WBC while arranging apheresis",
          "Definitive: chemotherapy per hematology",
        ],
      },
      {
        heading: "APL (AML-M3) special case",
        items: [
          "**Start ATRA immediately** — `45 mg/m² PO daily` in 2 divided doses; do NOT wait for pathology confirmation if strong suspicion",
          "**Do NOT give leukapheresis** in APL — worsens coagulopathy and outcomes",
          "Monitor for differentiation syndrome: fever, dyspnea, hypoxia, weight gain within days of ATRA start — treat with `Dexamethasone 10 mg IV q12h`",
          "DIC is common in APL — monitor coags and fibrinogen q6–8h; replace aggressively",
        ],
      },
      {
        heading: "Monitor for complications",
        items: [
          "Tumor lysis syndrome — see Tumor Lysis entry",
          "DIC — monitor PT, fibrinogen, D-dimer",
          "Hyperuricemia, hyperkalemia, hyperphosphatemia",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "WBC >50,000–100,000 → microvascular sludging (leukostasis) in brain, lung, and other organs",
          "Leukemic blasts are large, rigid, and sticky — more prone to leukostasis than mature WBCs",
          "Most common in AML (especially M4/M5 monocytic), CML blast crisis; less common in ALL",
          "Hyperviscosity + blast consumption of O₂ in microvasculature → ischemia",
        ],
      },
      {
        heading: "Clinical presentations of leukostasis",
        items: [
          "**CNS**: altered mental status, headache, blurred vision, diplopia, tinnitus, stroke-like symptoms",
          "**Pulmonary**: dyspnea, hypoxia, bilateral infiltrates (mimics pulmonary edema or pneumonia)",
          "**Other**: priapism, retinal vein occlusion, limb ischemia, renal failure",
          "Paradox: WBC can be so high that ABG is unreliable — leukocytes consume O₂ in the syringe (leukocyte larceny); use co-oximetry",
        ],
      },
      {
        heading: "APL emergency details",
        items: [
          "APL (AML-M3): PML-RARA fusion → coagulopathy (DIC + hyperfibrinolysis) is the primary killer",
          "ATRA initiates differentiation of promyelocytes; dramatically reduces coagulopathy and mortality",
          "Arsenic trioxide (ATO) added by hematology for definitive induction",
          "Differentiation syndrome: treat with dexamethasone; hold ATRA only if severe respiratory failure",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 234", "Ganzel et al, Blood Reviews 2012", "LITFL Hyperleukocytosis"],
      },
    ],
  },

  {
    id: "dic",
    name: "DIC",
    subtitle: "Disseminated intravascular coagulation",
    category: "heme",
    tldr: [
      {
        heading: "First: treat the underlying cause",
        items: [
          "Sepsis → antibiotics + source control; Obstetric → delivery; APL → ATRA; Trauma → damage control",
          "DIC will not resolve without treating the driver",
        ],
      },
      {
        heading: "Replace what is being consumed (bleed-predominant)",
        items: [
          "**Low fibrinogen (<150 mg/dL) + bleeding** → `Cryoprecipitate 10 units IV` (each unit raises fibrinogen ~10 mg/dL in an adult); recheck fibrinogen 30–60 min after",
          "**Thrombocytopenia (<50K) + bleeding** → `Platelets 1 apheresis unit` (goal >50K for active bleed, >100K for CNS bleed)",
          "**Prolonged PT/INR + bleeding** → `FFP 15–30 mL/kg IV`; also replaces fibrinogen (less efficiently than cryo)",
          "**Target fibrinogen >150–200 mg/dL** — most sensitive/specific therapeutic target",
        ],
      },
      {
        heading: "Thrombosis-predominant DIC",
        items: [
          "**Heparin** (therapeutic UFH) — only for thrombotic phenotype: purpura fulminans, acral ischemia, limb-threatening thrombosis",
          "**Avoid TXA** in mixed DIC (risk of catastrophic thrombosis); TXA may be considered in hyperfibrinolysis-predominant (trauma, obstetric) after discussion with hematology",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Simultaneous uncontrolled systemic coagulation AND fibrinolysis — consumptive coagulopathy",
          "Tissue factor release → thrombin generation → fibrin deposition in microvasculature → organ ischemia",
          "Plasmin activation → fibrinolysis → bleeding from consumption of clotting factors and platelets",
          "End result: paradoxical simultaneous thrombosis AND bleeding",
        ],
      },
      {
        heading: "Common causes",
        items: [
          "**Sepsis** (most common — gram-negative endotoxin, gram-positive exotoxins)",
          "**Trauma** (tissue factor release, especially brain, fat emboli)",
          "**Obstetric** (amniotic fluid embolism, placental abruption, HELLP, retained dead fetus)",
          "**Malignancy** (APL most acute; also mucin-secreting adenocarcinomas)",
          "**Envenomation** (viper/rattlesnake venom — venom-induced consumption coagulopathy, VICC)",
          "**Others**: burns, massive transfusion, anaphylaxis, aortic aneurysm",
        ],
      },
      {
        heading: "Labs and ISTH scoring",
        items: [
          "Overt DIC score (ISTH): platelets (<50=2, 50–100=1), D-dimer (strong↑=3, moderate↑=2), PT (>6s=2, 3–6s=1), fibrinogen (<1 g/L=1); **score ≥5 = overt DIC**",
          "↑D-dimer, ↓fibrinogen, ↓platelets, ↑PT/aPTT, microangiopathic hemolytic anemia (schistocytes)",
          "Fibrinogen is an acute-phase reactant — can be normal-high in early DIC (false reassurance)",
          "Serial monitoring (q6–8h in acute DIC): fibrinogen, platelets, coags",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Chasing lab numbers without treating underlying cause is futile",
          "FFP volume required to raise factor levels meaningfully is large (risk of volume overload); cryo is preferred for fibrinogen",
          "4F-PCC raises factor levels rapidly but does NOT restore fibrinogen — still need cryo",
          "Heparin in bleed-predominant DIC is contraindicated; only for thrombotic phenotype",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 246", "Levi & van der Poll, Semin Thromb Hemost 2010", "LITFL DIC"],
      },
    ],
  },

  {
    id: "ttp",
    name: "TTP",
    subtitle: "Thrombotic thrombocytopenic purpura",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Do NOT transfuse platelets** (worsens microvascular thrombosis) — only if life-threatening bleed AND no other option",
          "Send ADAMTS13 activity level BEFORE plasma exchange (PLEX affects result); also send inhibitor assay",
          "Urgent hematology consult",
        ],
      },
      {
        heading: "Plasma exchange (PLEX) — start immediately",
        items: [
          "`1–1.5 plasma volumes daily` with FFP replacement — start as soon as TTP suspected, do not wait for ADAMTS13",
          "Continue daily until platelet count >150K for ≥2 consecutive days, then taper",
          "Most important intervention — without it: >90% mortality",
        ],
      },
      {
        heading: "Adjuncts",
        items: [
          "**Corticosteroids** — `Methylprednisolone 1 g IV daily × 3 days`, then prednisone `1 mg/kg/day PO`",
          "**Caplacizumab (Cablivi)** — `11 mg IV` day 1 (before PLEX), then `11 mg SQ daily`; anti-VWF nanobody; reduces recurrence, time to platelet response, and mortality; continue 30 days after last PLEX",
          "**Rituximab** — `375 mg/m² IV weekly × 4` for ADAMTS13 <10% or refractory/relapsing disease",
          "Folic acid supplementation (hemolysis); PPI (steroid prophylaxis)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autoimmune antibodies against **ADAMTS13** (VWF-cleaving protease) → uncleaved ultra-large VWF multimers accumulate",
          "Ultra-large VWF → platelet adhesion and aggregation → microthrombi in arterioles and capillaries",
          "Microthrombi → shearing of RBCs → **microangiopathic hemolytic anemia (MAHA)**; organ ischemia",
          "ADAMTS13 <10% is diagnostic of acquired TTP",
        ],
      },
      {
        heading: "Clinical recognition",
        items: [
          "Classic pentad: MAHA + thrombocytopenia + neurological symptoms + renal dysfunction + fever — present together in <25%; don't wait for all 5",
          "**Practical trigger**: unexplained thrombocytopenia + schistocytes on smear + elevated LDH → presumptive TTP → start PLEX",
          "Neurological: headache, confusion, focal deficits, seizures, stroke (fluctuating — classic)",
          "Renal: usually mild (distinguishes from HUS); severe AKI → consider HUS or aHUS",
          "Schistocytes usually >2% on peripheral smear",
        ],
      },
      {
        heading: "TTP vs. HUS vs. aHUS",
        items: [
          "**TTP**: ADAMTS13 <10%, neurological predominant, adult, normal ADAMTS13 in HUS",
          "**Typical HUS**: children, Shiga toxin (E. coli O157:H7), renal predominant, NO PLEX needed",
          "**aHUS**: complement dysregulation, no Shiga toxin, all ages; treat with eculizumab",
          "PLASMIC score: 7-variable tool predicting ADAMTS13 <10%; score ≥5 → start PLEX empirically",
        ],
      },
      {
        heading: "Triggers and associations",
        items: [
          "Drugs: quinine (most common drug cause), ticlopidine, clopidogrel, cyclosporine, tacrolimus, gemcitabine",
          "Pregnancy (TTP in 2nd/3rd trimester vs. HELLP in 3rd trimester/postpartum — distinction critical)",
          "Infections: HIV, COVID-19",
          "Autoimmune: SLE",
        ],
      },
      {
        heading: "References",
        items: ["George & Nester, NEJM 2014", "HERCULES trial (caplacizumab)", "LITFL TTP", "Tintinalli 9e Ch 236"],
      },
    ],
  },

  {
    id: "hus",
    name: "Hemolytic Uremic Syndrome (HUS)",
    subtitle: "Triad: MAHA + thrombocytopenia + AKI",
    category: "heme",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "**Triad**: microangiopathic hemolytic anemia (schistocytes) + thrombocytopenia + acute kidney injury",
          "**Typical (STEC-HUS)** — child with bloody diarrhea 5–10 days prior; E. coli O157:H7 (Shiga toxin); summer peak",
          "**Atypical HUS (aHUS)** — complement dysregulation; family history, recurrent episodes, no diarrhea prodrome",
          "Other: Strep pneumoniae, drugs (calcineurin inhibitors, quinine, gemcitabine), pregnancy, HIV",
          "Overlap with TTP — but HUS = renal dominant, normal ADAMTS13; TTP = neuro dominant, ADAMTS13 <10%",
        ],
      },
      {
        heading: "ED management",
        items: [
          "**Supportive care is mainstay** — IV fluids (cautious — avoid overload with AKI), correct electrolytes",
          "**Do NOT give antibiotics for confirmed/suspected STEC** — antibiotics may increase Shiga toxin release and worsen HUS",
          "**Avoid antimotility agents** (loperamide) — prolong toxin exposure",
          "Transfuse pRBCs for severe anemia; platelets only for active bleeding or pre-procedure (microthrombi consume platelets)",
          "Nephrology consult early — many require renal replacement therapy",
          "Hypertension control (often volume-mediated)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "CBC, peripheral smear (schistocytes), reticulocytes, LDH, haptoglobin, indirect bilirubin",
          "BMP — Cr, BUN, K⁺; urinalysis (hematuria, proteinuria)",
          "Coags (usually normal in HUS — distinguishes from DIC)",
          "**Stool culture/PCR for Shiga toxin / E. coli O157:H7** — confirms STEC-HUS",
          "**ADAMTS13** to differentiate from TTP (normal in HUS, <10% in TTP)",
          "Complement (C3, C4, CH50) if atypical HUS suspected; family history",
        ],
      },
      {
        heading: "Disposition / treatment",
        items: [
          "All HUS → admit (often ICU); pediatric nephrology / hematology",
          "Renal replacement (hemodialysis) in 50–60% of STEC-HUS pediatric cases",
          "**aHUS**: `Eculizumab` (anti-C5 monoclonal Ab) — vaccinate or empirically treat for meningococcus (eculizumab ↑ risk)",
          "STEC-HUS recovery typically 1–3 weeks; long-term renal monitoring (CKD in ~5–10%)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "**STEC-HUS**: Shiga toxin (E. coli O157:H7 or Shigella dysenteriae) binds Gb3 receptors on glomerular endothelium → endothelial injury → microthrombi formation",
          "**Atypical HUS**: complement dysregulation — mutations in CFH, CFI, MCP, C3, CFB; triggered by infection, pregnancy, drugs",
          "**Pneumococcal HUS**: neuraminidase exposes T-antigen → endogenous IgM cross-reaction",
          "Result: thrombotic microangiopathy with platelet consumption, RBC fragmentation, ischemic organ injury (kidney > others)",
        ],
      },
      {
        heading: "Clinical features",
        items: [
          "STEC-HUS prodrome: 5–10 days of bloody diarrhea, abdominal pain, then sudden pallor, oliguria, edema, hematuria",
          "AKI: oliguria, hypertension, edema; ~50% require dialysis (children)",
          "CNS: irritability, seizures (in 20–30%), stroke (rare but severe)",
          "GI: severe colitis, intussusception, pancreatitis (~10%), rarely bowel perforation",
          "Cardiac: myocardial injury, pericardial effusion (rare)",
          "Adults: worse prognosis than children; mortality 5–15%",
        ],
      },
      {
        heading: "Differential diagnosis (TMA)",
        items: [
          "TTP — fever + neuro symptoms more prominent, ADAMTS13 <10% (severely deficient)",
          "DIC — abnormal coags (low fibrinogen, ↑ PT/PTT, ↑ D-dimer); HUS coags usually normal",
          "Malignant hypertension — TMA can occur",
          "Pre-eclampsia / HELLP — pregnant or postpartum",
          "Catastrophic antiphospholipid syndrome",
          "Drug-induced TMA: quinine, calcineurin inhibitors (tacrolimus, cyclosporine), gemcitabine, mitomycin C",
        ],
      },
      {
        heading: "Treatment details",
        items: [
          "**STEC-HUS**: supportive — IV fluids (careful, AKI), electrolyte correction, dialysis as needed",
          "Antibiotics CONTRAINDICATED for confirmed STEC (worsens outcomes)",
          "Plasma exchange NOT routinely beneficial for STEC-HUS (unlike TTP)",
          "Antimotility drugs (loperamide), NSAIDs CONTRAINDICATED — worsen kidney injury and toxin clearance",
          "**Atypical HUS**: eculizumab (5 mg/kg IV weekly ×4, then maintenance) — must vaccinate for meningococcus or give prophylactic antibiotics (ceftriaxone, penicillin)",
          "Ravulizumab — longer-acting alternative to eculizumab",
          "**Pneumococcal HUS**: treat infection, plasma exchange may help; do NOT use plasma (contains anti-T antibodies)",
        ],
      },
      {
        heading: "Prognosis",
        items: [
          "STEC-HUS: 70–85% complete renal recovery; 5–10% chronic kidney disease; 3–5% ESRD; 3–5% mortality",
          "Atypical HUS pre-eculizumab era: 50% progression to ESRD; mortality 25%; markedly improved with eculizumab",
          "Long-term: hypertension, proteinuria, chronic kidney disease — lifelong renal follow-up",
          "Risk factors for poor outcome: age <2 or adult, anuria >2 weeks, leukocytosis, CNS involvement, severe colitis",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Admit all suspected HUS — usually pediatric ICU or nephrology service",
          "Renal replacement therapy in 50–60% pediatric STEC-HUS",
          "Atypical HUS: hematology + nephrology consult; eculizumab access",
          "Long-term nephrology follow-up — annual BP, UA, creatinine",
          "Public health notification for STEC outbreaks",
        ],
      },
      {
        heading: "References",
        items: ["Noris & Remuzzi, NEJM 2009", "Loirat & Frémeaux-Bacchi, Orphanet J Rare Dis 2011", "Cody & Dixon, Pediatr Clin N Am 2019", "Tintinalli 9e Ch 236"],
      },
    ],
  },

  {
    id: "itp",
    name: "Immune Thrombocytopenia (ITP)",
    subtitle: "Isolated thrombocytopenia from autoimmune platelet destruction",
    category: "heme",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "Isolated thrombocytopenia (often <50k, can be <10k) with **otherwise normal CBC**",
          "Mucocutaneous bleeding: petechiae, purpura, epistaxis, gum bleeding, menorrhagia",
          "**Severe bleeding rare** unless platelets <10–20k — wet purpura (oral blisters) is a warning sign",
          "Children: often post-viral, acute, self-limiting; **Adults: typically chronic** (>3–12 months)",
          "Diagnosis of exclusion — rule out drug-induced thrombocytopenia, HIT, leukemia, MDS, TTP",
        ],
      },
      {
        heading: "When to treat",
        items: [
          "**Platelets <20–30k** OR active bleeding OR procedure planned",
          "Asymptomatic with platelets >30k → observe (especially children)",
          "Severe bleeding / ICH suspected → emergency treatment regardless of count",
        ],
      },
      {
        heading: "ED treatment",
        items: [
          "**Corticosteroids** (first-line): `Prednisone 1 mg/kg PO daily` × 1–2 weeks, taper; OR `Dexamethasone 40 mg PO daily × 4 days` (rapid response)",
          "**IVIG `1 g/kg IV` × 1–2 doses** — rapid platelet rise (24–48h); for severe bleeding, pre-procedure, or steroid-resistant",
          "**Anti-D (WinRho)** `50–75 mcg/kg IV` — only in Rh+ non-splenectomized; risk of intravascular hemolysis",
          "**Severe / life-threatening bleeding (ICH)**: IVIG + high-dose steroids (methylprednisolone 1 g IV) + **platelet transfusion** (typically futile alone but use as adjunct in life threat) + antifibrinolytics (TXA)",
          "Refractory / second-line: rituximab, TPO-receptor agonists (eltrombopag, romiplostim), splenectomy",
        ],
      },
      {
        heading: "Workup & disposition",
        items: [
          "CBC + peripheral smear (large platelets, no schistocytes, normal RBC/WBC), reticulocytes",
          "Rule out HIV, HCV, HIT, drug-induced (quinine, sulfonamides, vancomycin, heparin, others), pregnancy",
          "Coags normal; LDH normal; consider H. pylori testing (treating may improve ITP)",
          "Bone marrow biopsy not routinely needed in classic presentation; consider if >60yo or atypical",
          "Discharge if no bleeding, platelets >20–30k after treatment, reliable follow-up; hematology referral",
          "Admit: active bleeding, platelets <10k, neuro symptoms (ICH), social/follow-up concerns",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autoantibodies (usually IgG, anti-GPIIb/IIIa or anti-GPIb/IX) bind platelets → splenic destruction",
          "Also impaired megakaryocyte production / reduced TPO response",
          "Primary ITP: idiopathic (~80%)",
          "Secondary ITP: HIV, HCV, H. pylori, SLE, CLL, drugs, post-vaccination, post-viral",
        ],
      },
      {
        heading: "Diagnostic criteria",
        items: [
          "Isolated thrombocytopenia (platelets <100k)",
          "Otherwise normal CBC and peripheral smear (no schistocytes, no blasts)",
          "Normal coagulation studies",
          "Exclusion of: drug-induced TP, HIT, TTP/HUS, DIC, hematologic malignancy, MDS, pseudothrombocytopenia (clumping)",
          "Diagnosis is clinical — antiplatelet antibody testing not routinely useful",
        ],
      },
      {
        heading: "Differential — must exclude",
        items: [
          "**Pseudothrombocytopenia** — EDTA-induced clumping; repeat in citrate tube",
          "**Drug-induced** — quinine, vancomycin, sulfonamides, NSAIDs, heparin (HIT), GP IIb/IIIa inhibitors, linezolid",
          "**HIT** — recent heparin exposure, 4T score, anti-PF4 antibodies",
          "**TTP / HUS** — schistocytes on smear, MAHA, AKI, neuro symptoms; ADAMTS13",
          "**DIC** — abnormal coags, low fibrinogen, elevated D-dimer",
          "**Hematologic malignancy** — leukemia, MDS, lymphoma (look for cytopenias, blasts, abnormal cells on smear)",
          "**Aplastic anemia, MAS, HLH** — pancytopenia patterns",
          "**Liver disease / splenomegaly** — secondary sequestration",
          "**Pregnancy** — gestational thrombocytopenia (usually >70k), HELLP, AFLP, pre-eclampsia",
        ],
      },
      {
        heading: "Treatment specifics",
        items: [
          "**First-line: corticosteroids**",
          "  • Prednisone 1 mg/kg/day PO × 1–2 wk then taper over 4–6 wk (response 50–80%, slower)",
          "  • Dexamethasone 40 mg PO daily × 4 days (single cycle, rapid response within 2–5 days; may repeat × 2–6 cycles)",
          "**IVIG 1 g/kg IV** × 1–2 doses — for severe bleeding, pre-procedure, pregnancy, or steroid-resistant; rapid response 24–48h",
          "**Anti-D immune globulin (WinRho) 50–75 mcg/kg IV** — Rh+ non-splenectomized patients only; risk of severe hemolysis (~1:1000); contraindicated if Rh- or splenectomized",
          "**Platelet transfusion** — generally not helpful (antibodies destroy transfused platelets); reserve for life-threatening bleeding alongside IVIG/steroids",
          "**Tranexamic acid (TXA)** — 1 g IV/PO TID adjunct for mucosal bleeding",
          "**Second-line**: rituximab 375 mg/m² IV weekly × 4; TPO-RAs (eltrombopag, romiplostim, avatrombopag); splenectomy (>50% sustained remission)",
          "**Refractory**: fostamatinib (SYK inhibitor), mycophenolate, cyclophosphamide, danazol",
        ],
      },
      {
        heading: "Special populations",
        items: [
          "**Pediatric ITP** — usually self-limited (post-viral); observe if asymptomatic; treat only if bleeding or counts <10–20k; IVIG preferred over steroids",
          "**Pregnancy** — IVIG and corticosteroids safe; goal platelets >20–30k throughout pregnancy, >50k for delivery, >80k for epidural",
          "**HIV-associated ITP** — antiretroviral therapy often improves counts",
          "**HCV-associated ITP** — treat HCV; eltrombopag well-studied",
          "**Refractory adult ITP** — splenectomy still highly effective (>2/3 long-term remission); vaccinate first (Strep pneumo, H. flu, meningococcus)",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Discharge if: no bleeding, platelets >20–30k after treatment, asymptomatic, reliable follow-up",
          "Admit if: active bleeding, platelets <10k, neurologic symptoms (concern for ICH), failed outpatient management",
          "Activity restrictions: avoid contact sports, IM injections, NSAIDs, antiplatelets",
          "Hematology follow-up within 1–2 weeks",
          "Patient education: head injury precautions, bleeding monitoring",
        ],
      },
      {
        heading: "References",
        items: ["Neunert et al, ASH 2019 Guidelines", "Provan et al, Blood Advances 2019", "Cines & Bussel, Blood 2005", "Tintinalli 9e Ch 232"],
      },
    ],
  },

  {
    id: "acute-chest-syndrome",
    name: "Acute Chest Syndrome",
    subtitle: "Sickle cell pulmonary crisis",
    category: "heme",
    tldr: [
      {
        heading: "Diagnose",
        items: [
          "New pulmonary infiltrate on CXR **+ ≥1 of**: fever, chest pain, cough, dyspnea, hypoxia in sickle cell patient",
          "CXR may lag 24–48 h behind clinical deterioration — treat clinically if high suspicion",
        ],
      },
      {
        heading: "Immediate treatment",
        items: [
          "O₂ to maintain **SpO₂ >95%** (HFNC or NIV if needed); avoid hyperoxia",
          "**Incentive spirometry** — `10 breaths q2h` while awake; prevents further atelectasis-driven sickling",
          "**Pain control**: opioids titrated carefully — avoid over-sedation (hypoventilation → splinting → worsens ACS)",
          "**Bronchospasm**: `Albuterol 2.5 mg nebulized q4h`",
        ],
      },
      {
        heading: "Transfusion",
        items: [
          "**Simple transfusion** if Hgb <9 g/dL or ≥1 g/dL below baseline — target Hgb 10 g/dL; reduces HbS%",
          "**Exchange transfusion** (erythrocytapheresis) for: severe/rapidly worsening ACS, multilobar disease, SpO₂ <90% despite O₂, respiratory failure, neurological involvement — target HbS <30%; call hematology urgently",
        ],
      },
      {
        heading: "Antibiotics",
        items: [
          "`Ceftriaxone 1–2 g IV daily` (typical organisms) + `Azithromycin 500 mg IV/PO daily` (atypicals: Mycoplasma, Chlamydia — major triggers)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Leading cause of death in adults with sickle cell disease",
          "Multiple converging mechanisms: pulmonary fat embolism (from bone marrow infarction), infection (atypicals most common), in-situ sickling in pulmonary vasculature, hypoventilation-driven atelectasis",
          "Sickling → vascular occlusion → pulmonary infarction → inflammation → further sickling (vicious cycle)",
          "Rib infarction (common) → splinting → hypoventilation → atelectasis → ACS",
        ],
      },
      {
        heading: "Triggers",
        items: [
          "Post-operative hypoventilation (most preventable — incentive spirometry mandatory peri-op in SCD)",
          "Opioid over-sedation during vaso-occlusive crisis",
          "Infection: **Mycoplasma, Chlamydophila, RSV, parvovirus B19, influenza**",
          "Fat/bone marrow emboli (especially with long bone pain preceding ACS)",
          "Cold, dehydration, high altitude",
        ],
      },
      {
        heading: "Exchange transfusion details",
        items: [
          "Goal: reduce HbS to <30% while maintaining Hgb 10–11 g/dL (avoid Hgb >11 → hyperviscosity)",
          "Automated erythrocytapheresis preferred over manual exchange",
          "Alloimmunization risk — patients should be on extended RBC antigen matched units",
          "Acute indications: PaO₂ <60 mmHg, multilobar (≥3 lobes), rapid deterioration",
        ],
      },
      {
        heading: "Long-term prevention",
        items: [
          "Hydroxyurea: induces HbF → reduces sickling frequency; reduces ACS incidence ~50%",
          "Chronic transfusion therapy for recurrent severe ACS",
          "Voxelotor (anti-sickling agent), crizanlizumab (anti-P-selectin) — newer agents",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 235", "NHLBI SCD Evidence-Based Management Guidelines 2014", "LITFL Acute Chest Syndrome"],
      },
    ],
  },

  {
    id: "hyperviscosity",
    name: "Hyperviscosity Syndrome",
    subtitle: "Serum viscosity crisis",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Do NOT transfuse RBCs** (worsens viscosity)",
          "IV hydration: `NS bolus 500 mL–1 L` to reduce viscosity; avoid diuretics",
          "Urgent hematology consult for emergent apheresis",
          "Ophthalmology: fundoscopic exam for dilated/tortuous veins, retinal hemorrhages, papilledema",
        ],
      },
      {
        heading: "Definitive treatment",
        items: [
          "**Plasmapheresis/therapeutic plasma exchange** — emergent; removes immunoglobulin; 1–2 sessions reduce serum viscosity 60–75%",
          "**Polycythemia vera**: phlebotomy `500 mL` with NS replacement; target Hct <45% (male) / <42% (female)",
          "**Leukostasis (leukemia)**: leukapheresis — see Hyperleukocytosis entry",
          "All above are temporizing — definitive treatment is chemotherapy of the underlying malignancy",
        ],
      },
    ],
    extended: [
      {
        heading: "Causes and mechanisms",
        items: [
          "**Waldenström macroglobulinemia** (most common) — IgM paraprotein; large pentameric IgM most prone to hyperviscosity even at modest concentrations",
          "**Multiple myeloma** — IgA or IgG (IgA most viscogenic due to polymerization)",
          "**Polycythemia vera** — elevated RBC mass increases whole blood viscosity",
          "**Hyperleukocytosis** — blasts increase viscosity mechanically",
          "Serum viscosity >4 cP (normal 1.4–1.8) → symptomatic; rule of thumb ≥4 = treat",
        ],
      },
      {
        heading: "Clinical triad",
        items: [
          "**Bleeding** — platelet dysfunction (coating by immunoglobulins) + coagulation factor inhibition; mucosal bleeds most common",
          "**Neurological** — headache, vertigo, tinnitus, nystagmus, ataxia, altered mental status, stroke, visual loss",
          "**Visual** — dilated tortuous retinal veins (sausage link / boxcar pattern), retinal hemorrhages, papilledema",
          "Also: heart failure (from plasma volume expansion by IgM), Raynaud's (cryoglobulin overlap)",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 236", "Gertz, Oncology 2020", "LITFL Hyperviscosity Syndrome"],
      },
    ],
  },

  // ─── METABOLIC / ELECTROLYTE ─────────────────────────────────────────────
  {
    id: "hyperkalemia",
    name: "Hyperkalemia",
    subtitle: "Elevated serum potassium / cardiac emergency",
    category: "meta",
    tldr: [
      {
        heading: "Assess urgency",
        items: [
          "12-lead ECG immediately — peaked T waves → PR prolongation → wide QRS → sine wave → VF/PEA",
          "**K+ >6.5 mEq/L OR any ECG changes → treat immediately**",
          "Confirm: repeat level, check for hemolysis, ensure proper sample collection (pseudohyperkalemia)",
        ],
      },
      {
        heading: "1. Cardiac membrane stabilization (ECG changes present)",
        items: [
          "`Calcium gluconate 1 g IV` (10 mL of 10% solution) over 2–3 min; onset 1–3 min, lasts 30–60 min",
          "Repeat `1 g IV q5 min × 3` if ECG changes persist or worsen",
          "Use `Calcium chloride 1 g` (central line preferred) for faster ionized calcium rise if coding",
          "**Does NOT lower K+** — only stabilizes cardiac membrane",
        ],
      },
      {
        heading: "2. Shift K+ intracellularly (onset 15–30 min)",
        items: [
          "`Regular insulin 10 units IV` + `Dextrose 25 g IV` (D50 50 mL) simultaneously — lowers K+ 0.5–1.5 mEq/L",
          "`Albuterol 10–20 mg nebulized` (high-dose) — lowers K+ 0.5–1.0 mEq/L; additive to insulin; avoid if tachydysrhythmia",
          "`Sodium bicarbonate 150 mEq in 1L D5W` — most effective if concomitant metabolic acidosis; less effective in ESRD",
        ],
      },
      {
        heading: "3. Remove K+ from body",
        items: [
          "`Furosemide 40–80 mg IV` if not anuric — renal K+ excretion",
          "`Patiromer 8.4 g PO` (preferred) or `Sodium zirconium cyclosilicate 10 g PO` — onset 1–2 h; potassium binders",
          "**Hemodialysis** — fastest definitive removal; for refractory/severe hyperkalemia or AKI/ESRD; contact nephrology early",
        ],
      },
      {
        heading: "Intubation note",
        items: [
          "**Avoid succinylcholine** — depolarization releases ~0.5–1.0 mEq/L K+; potentially fatal in hyperkalemia",
          "Use `Rocuronium 1.2 mg/kg IV` for RSI",
        ],
      },
    ],
    extended: [
      {
        heading: "Common causes",
        items: [
          "AKI/CKD (decreased renal excretion), ACE inhibitors/ARBs/potassium-sparing diuretics",
          "Rhabdomyolysis, massive hemolysis, tumor lysis, extensive burns, crush injury",
          "Metabolic acidosis (H⁺/K⁺ exchange), DKA (insulin deficiency + acidosis)",
          "Adrenal insufficiency (hypoaldosteronism → impaired renal K+ excretion)",
          "Medications: heparin, NSAIDs, trimethoprim, calcineurin inhibitors, digoxin toxicity",
        ],
      },
      {
        heading: "ECG progression (memorize this sequence)",
        items: [
          "**Peaked/tall T waves** (earliest; most sensitive in precordial leads V2-V5)",
          "**Flat/absent P waves** (SA nodal depression)",
          "**Prolonged PR interval**",
          "**Wide QRS** (>120 ms — dangerous, mimics bundle branch block)",
          "**Sine wave pattern** (QRS merges with T wave — pre-arrest)",
          "**VF or PEA cardiac arrest**",
          "Note: ECG can appear normal even with K+ >7 mEq/L, especially in chronic CKD",
        ],
      },
      {
        heading: "Insulin/dextrose details",
        items: [
          "Onset 15–30 min; peak effect 60 min; duration 4–6 h — effect is temporary, K+ rises again",
          "Monitor glucose at 30, 60, 90 min — hypoglycemia in 10–14% (especially in non-diabetics)",
          "Can give D10 infusion (125 mL/hr × 6 h) after bolus to prevent delayed hypoglycemia",
          "In hyperglycemic patients (DKA): insulin alone without dextrose",
        ],
      },
      {
        heading: "Kayexalate vs. patiromer",
        items: [
          "Sodium polystyrene sulfonate (Kayexalate): risk of intestinal necrosis (especially post-op, with sorbitol); less predictable efficacy",
          "Patiromer (Veltassa): safer, more predictable; binds K+ in colon; takes hours",
          "Sodium zirconium cyclosilicate (Lokelma): fastest onset among binders (1–2 h); also binds K+ in proximal GI",
          "All binders take hours — not for acute management; complement to shift strategies",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 20", "Elliott et al, BMJ 2010", "Rafique, J Intensive Care Med 2018", "LITFL Hyperkalemia"],
      },
    ],
  },

  {
    id: "hypercalcemia",
    name: "Hypercalcemia",
    subtitle: "Elevated serum calcium / hypercalcemic crisis",
    category: "meta",
    tldr: [
      {
        heading: "Assess severity",
        items: [
          "**Corrected Ca** = measured Ca + 0.8 × (4 − albumin); or use ionized calcium directly",
          "Mild 10.5–12 mg/dL (usually asymptomatic) · Moderate 12–14 · **Severe ≥14 → emergency**",
          "ECG: short QT (Ca >12); ST elevation, bradydysrhythmias, AV block at very high levels",
          "Symptoms: 'stones, bones, abdominal groans, psychiatric overtones' — polyuria, AMS, n/v, weakness, constipation",
        ],
      },
      {
        heading: "1. Volume resuscitation (cornerstone)",
        items: [
          "`Normal saline 200–300 mL/h IV` — target UOP 100–150 mL/h",
          "Most patients severely volume-depleted (calcium-induced nephrogenic DI)",
          "Restores GFR + promotes urinary calcium excretion",
          "Caution in CHF/ESRD — adjust rate, consider early dialysis",
        ],
      },
      {
        heading: "2. Calcitonin (rapid onset — hours)",
        items: [
          "`Calcitonin 4 IU/kg IM/SC q12h` (can escalate to 8 IU/kg q6h)",
          "Onset 4–6 h; lowers Ca 1–2 mg/dL",
          "**Tachyphylaxis in 48–72 h** — bridge to bisphosphonate, not standalone",
          "Test dose 1 IU SC first if allergy concern (salmon-derived)",
        ],
      },
      {
        heading: "3. Bisphosphonate (definitive, delayed onset)",
        items: [
          "`Zoledronic acid 4 mg IV over 15 min` — preferred, more potent",
          "`Pamidronate 60–90 mg IV over 2–4 h` — alternative",
          "Onset 24–48 h; effect lasts 2–4 weeks",
          "Renal dosing — avoid if CrCl <30 (zoledronic acid)",
          "Watch for hypocalcemia 5–7 days post-dose",
        ],
      },
      {
        heading: "4. Refractory / renal failure options",
        items: [
          "`Denosumab 60–120 mg SC` — for bisphosphonate-refractory or severe CKD",
          "`Hydrocortisone 200–300 mg IV` — for hypercalcemia of lymphoma, granulomatous disease (sarcoid, TB), vitamin D toxicity",
          "**Hemodialysis** — Ca >18, severe symptoms with renal failure, or unresponsive to medical therapy",
          "`Furosemide 20–40 mg IV` — ONLY if volume overloaded; not routine (older teaching)",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Thiazide diuretics — worsen hypercalcemia",
          "Loop diuretics as first-line (only if fluid overloaded)",
          "Volume restriction — most patients are dry, not wet",
        ],
      },
    ],
    extended: [
      {
        heading: "Common causes",
        items: [
          "**Malignancy** (most common in hospitalized): bone metastases, PTHrP (squamous cell, renal, breast), lymphoma (1,25-OH vit D), multiple myeloma",
          "**Primary hyperparathyroidism** (most common outpatient — often asymptomatic, elevated PTH)",
          "**Granulomatous disease**: sarcoidosis, TB, histoplasmosis (extra-renal 1α-hydroxylase activity)",
          "**Medications**: thiazides, lithium, excessive vitamin D, vitamin A, calcium supplements",
          "Milk-alkali syndrome (calcium carbonate + dairy)",
          "Immobilization (especially Paget disease, young patients)",
          "Endocrine: thyrotoxicosis, adrenal insufficiency, pheochromocytoma",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Stones**: nephrolithiasis, nephrocalcinosis, polyuria/polydipsia (nephrogenic DI)",
          "**Bones**: bone pain, pathologic fractures (especially with malignancy)",
          "**Abdominal groans**: n/v, constipation, ileus, pancreatitis, peptic ulcer",
          "**Psychiatric overtones**: AMS, lethargy, confusion, depression, coma",
          "**Cardiac**: short QT, bradycardia, hypertension, digitalis sensitivity",
          "Hypercalcemic crisis: severe AMS + dehydration + AKI + Ca >14",
        ],
      },
      {
        heading: "Workup",
        items: [
          "BMP (Cr, Ca), ionized Ca, Mg, Phos, albumin, PTH, PTHrP, 25-OH and 1,25-OH vitamin D",
          "TSH, SPEP/UPEP (if myeloma suspected), 24-h urine calcium",
          "ECG — short QT, dysrhythmias",
          "Imaging guided by suspected etiology (CXR for sarcoid/malignancy, skeletal survey for myeloma)",
          "PTH high or inappropriately normal → hyperparathyroidism; PTH low → malignancy or granulomatous",
        ],
      },
      {
        heading: "Mechanism of treatments",
        items: [
          "**IV fluids**: dilute serum Ca, restore GFR, promote calciuresis",
          "**Calcitonin**: inhibits osteoclast bone resorption + ↑ renal Ca excretion (rapid, weak, tachyphylaxis)",
          "**Bisphosphonates**: inhibit osteoclast bone resorption (potent, delayed onset)",
          "**Denosumab**: monoclonal Ab against RANKL → inhibits osteoclast formation",
          "**Glucocorticoids**: ↓ 1,25-OH vit D production in granulomas/lymphoma; ↓ GI calcium absorption",
          "**Dialysis**: low-calcium bath; fastest definitive removal",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Severe (Ca >14) or symptomatic — ICU admission",
          "Moderate (12–14) with symptoms — admit telemetry",
          "Mild asymptomatic — outpatient workup, ensure hydration, avoid thiazides",
          "Identify and treat underlying cause — oncology, endocrinology consults as appropriate",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 21", "Rosen's 10e Ch 116", "Goldner, J Endocr Soc 2016", "Stewart, NEJM 2005"],
      },
    ],
  },

  {
    id: "tumor-lysis",
    name: "Tumor Lysis Syndrome",
    subtitle: "Metabolic emergency from cell lysis",
    category: "meta",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Aggressive IVF: `NS 200–300 mL/hr`; goal urine output `100–200 mL/hr`; avoid K+/PO₄ in fluids",
          "Cardiac monitor; check K+, PO₄, Ca²⁺, uric acid, creatinine q4–6h",
          "Treat each abnormality; contact oncology and nephrology early",
        ],
      },
      {
        heading: "Hyperuricemia",
        items: [
          "**Rasburicase** (drug of choice for severe) — `0.2 mg/kg IV once`; converts uric acid → allantoin (highly soluble); onset 4 h; **contraindicated in G6PD deficiency** (causes hemolysis/methemoglobinemia)",
          "**Allopurinol** (prophylaxis/mild-moderate) — `300 mg PO TID`; blocks uric acid production; takes days to work; less effective once TLS established",
          "**Do NOT give allopurinol and rasburicase together** — rasburicase degrades xanthine (allopurinol's substrate) → xanthine nephropathy",
        ],
      },
      {
        heading: "Hyperkalemia",
        items: ["Treat per Hyperkalemia protocol — see Hyperkalemia entry; dialysis often needed"],
      },
      {
        heading: "Hyperphosphatemia",
        items: [
          "`Sevelamer 1600 mg PO TID with meals` (phosphate binder); avoid calcium-based binders (precipitates Ca-PO₄)",
          "**Do NOT replace calcium unless symptomatic** (tetany, arrhythmia, seizure) — calcium + high PO₄ → vascular/renal calcification",
        ],
      },
      {
        heading: "Renal failure / refractory",
        items: [
          "Hemodialysis for: oliguria/anuria despite fluids, K+ >6.5 refractory, severe hyperphosphatemia, symptomatic hypocalcemia with high PO₄",
          "Urine alkalinization no longer recommended (promotes xanthine and Ca-PO₄ precipitation)",
        ],
      },
    ],
    extended: [
      {
        heading: "Cairo-Bishop criteria",
        items: [
          "**Lab TLS**: ≥2 of the following within 3 days before or 7 days after treatment start:",
          "Uric acid ≥8 mg/dL (or 25% increase), K+ ≥6 mEq/L (or 25% increase), PO₄ ≥6.5 mg/dL (or 25% increase), Ca²⁺ ≤7 mg/dL (or 25% decrease)",
          "**Clinical TLS**: Lab TLS + AKI (Cr ≥1.5× ULN), cardiac arrhythmia, seizure, or death",
        ],
      },
      {
        heading: "High-risk malignancies",
        items: [
          "Burkitt lymphoma (highest risk — very rapid doubling time)",
          "ALL (especially T-cell, high WBC)",
          "AML (especially M4/M5 with high WBC)",
          "Large bulky aggressive lymphomas (DLBCL with high LDH)",
          "Any large tumor burden with rapid proliferation",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "Massive cell lysis → release of intracellular contents: purines (→ uric acid), K+, PO₄",
          "Uric acid: precipitates in renal tubules → acute urate nephropathy → AKI",
          "Hyperphosphatemia: CaPO₄ precipitation in renal tubules + microvasculature → further AKI",
          "Hypocalcemia: PO₄ chelates calcium; symptomatic hypocalcemia (tetany, QTc prolongation, seizures)",
          "Hyperkalemia: life-threatening arrhythmias",
        ],
      },
      {
        heading: "Rasburicase handling",
        items: [
          "Keep blood sample on ice after collection; assay within 4 h — room temperature causes ex vivo uric acid degradation → falsely low levels",
          "Very expensive; not available in all hospitals; call pharmacy ahead",
          "G6PD screening: if time allows before administration in at-risk populations (African, Mediterranean, Asian descent)",
        ],
      },
      {
        heading: "References",
        items: ["Cairo & Bishop, Br J Haematol 2004", "Howard et al, NEJM 2011", "LITFL Tumour Lysis Syndrome"],
      },
    ],
  },

  // ─── ENVIRONMENTAL / ALTITUDE ────────────────────────────────────────────
  {
    id: "hypothermia",
    name: "Hypothermia",
    subtitle: "Core temperature <35°C",
    category: "env",
    tldr: [
      {
        heading: "Assess and monitor",
        items: [
          "Core temperature only (rectal or esophageal probe) — oral/axillary/tympanic unreliable",
          "Continuous cardiac monitoring — J (Osborn) waves, AF, VF below 30°C",
          "**Minimize movement** — VF easily triggered by physical manipulation below 30°C",
          "Warm, dry patient; remove all wet clothing",
        ],
      },
      {
        heading: "Rewarming by severity",
        items: [
          "**Mild (32–35°C)**: passive rewarming only — insulation, warm environment, warm beverages if alert",
          "**Moderate (28–32°C)**: active external rewarming — forced warm air (Bair Hugger), warming blankets, warm IV fluids (38–42°C); warm humidified O₂",
          "**Severe (<28°C) or hemodynamically unstable**: active internal rewarming — warm gastric/bladder/pleural lavage (40–42°C NS); escalate to ECMO if cardiac arrest or refractory instability",
          "**ECMO** — gold standard for hypothermic cardiac arrest or refractory VF below 30°C; 'not dead until warm and dead'",
        ],
      },
      {
        heading: "Cardiac arrest management",
        items: [
          "Start CPR; attempt defibrillation for VF × 1–3 times — may be ineffective below 30°C; **do not repeat shocks** until core temp >30°C",
          "**Epinephrine**: withhold if core temp <30°C (drug accumulates → toxic upon rewarming); reduce dosing frequency if 30–35°C",
          "Target rewarming to >32°C before declaring resuscitation failed",
          "**K+ >12 mEq/L** in cardiac arrest from hypothermia suggests non-survivable cell death — consider termination; K+ <12 → continue aggressive resuscitation",
        ],
      },
    ],
    extended: [
      {
        heading: "Classification",
        items: [
          "**Mild (32–35°C)**: shivering, tachycardia, hypertension, ataxia, confusion, poor judgment",
          "**Moderate (28–32°C)**: shivering stops, paradoxical undressing, bradycardia, hypotension, AF, stupor",
          "**Severe (<28°C)**: coma, no shivering, fixed dilated pupils, absent reflexes, VF/asystole",
          "**Profound (<24°C)**: virtually no cardiac activity; appearance of death; still potentially salvageable with ECMO",
        ],
      },
      {
        heading: "ECG findings",
        items: [
          "**J (Osborn) waves**: positive deflection at J point (junction of QRS and ST); most prominent V4–V6; pathognomonic",
          "Progressive PR and QRS prolongation; QTc prolongation",
          "AF (most common arrhythmia in moderate hypothermia — usually resolves with rewarming)",
          "VF risk increases sharply below 30°C",
        ],
      },
      {
        heading: "Special considerations",
        items: [
          "**Afterdrop**: core temperature continues to fall 1–2°C after rewarming starts as cold blood returns from periphery — expected; do not stop rewarming",
          "**Alcohol**: peripheral vasodilation masks heat loss + impairs shivering + impairs judgment; most common precipitant",
          "**Secondary hypothermia**: look for underlying cause — hypothyroidism, adrenal insufficiency, CNS injury, drugs",
          "Warm fluids IV (38–42°C): prevents iatrogenic cooling from cold saline; not primary rewarming method alone",
        ],
      },
      {
        heading: "ECMO for hypothermic arrest",
        items: [
          "VA-ECMO: warms blood as it passes through circuit; most effective rewarming method",
          "Activate ECMO team early — setup takes time",
          "Prognostic factors for survival: K+ <12, age, no underlying lethal disease, witnessed arrest",
          "Reports of survival with good neurological outcome after >6 h cardiac arrest from hypothermia",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 215", "Paal et al, Resuscitation 2016 (wilderness guidelines)", "LITFL Hypothermia"],
      },
    ],
  },

  {
    id: "hace-hape",
    name: "HACE / HAPE",
    subtitle: "High altitude cerebral & pulmonary edema",
    category: "env",
    tldr: [
      {
        heading: "Both conditions: DESCEND IMMEDIATELY",
        items: [
          "**Descent is the most effective treatment** — even 300–1000 m makes a dramatic difference",
          "If descent delayed: **Gamow bag** (portable hyperbaric chamber at 2 psi = simulates descent of ~2500 m)",
          "`Supplemental O₂`: 2–4 L/min (HACE) or 4–8 L/min (HAPE); titrate to SpO₂ >90%",
        ],
      },
      {
        heading: "HACE (cerebral edema)",
        items: [
          "**Dexamethasone** — `8 mg IM/IV/PO` initial dose, then `4 mg q6h`; reduces cerebral edema; buys time for descent but is NOT a substitute",
          "`Acetazolamide 250 mg PO q8h` — adjunct; stimulates respiratory drive",
          "Intubate if comatose; avoid hypo-ventilation",
        ],
      },
      {
        heading: "HAPE (pulmonary edema)",
        items: [
          "**Nifedipine** (pulmonary vasodilator) — `30 mg extended-release PO`, then `30 mg q12h`; reduces pulmonary hypertension",
          "Alternatives if nifedipine unavailable: `Tadalafil 10 mg PO q12h` or `Sildenafil 50 mg PO q8h`",
          "`Salmeterol 125 mcg inhaled q12h` — adjunct (increases alveolar fluid clearance)",
          "**Do NOT use diuretics** — patients are usually volume-depleted at altitude",
          "CPAP if available and descent unavailable",
        ],
      },
    ],
    extended: [
      {
        heading: "HACE pathophysiology",
        items: [
          "Hypoxia at altitude → HIF-1α activation → VEGF upregulation → increased BBB permeability → vasogenic cerebral edema",
          "Also: hypoxic cerebral vasodilation → increased cerebral blood flow and volume",
          "Presents at >3000–3500 m (10,000–12,000 ft); onset 6–96 h after ascent",
          "Diagnosis: **severe AMS + ataxia OR altered consciousness**; (AMS = headache + ≥1 of: fatigue, dizziness, GI symptoms)",
          "HACE and HAPE often coexist — assess for both",
        ],
      },
      {
        heading: "HAPE pathophysiology",
        items: [
          "**Leading cause of altitude-related death**; mortality >50% without treatment",
          "Individual susceptibility greatest risk factor (recurs in same individuals)",
          "Hypoxic pulmonary vasoconstriction → ↑pulmonary artery pressure → capillary stress failure → non-cardiogenic pulmonary edema (protein-rich, high-pressure edema)",
          "Clinical: dry cough → dyspnea at rest → pink frothy sputum; bilateral crackles; SpO₂ dramatically low for altitude",
          "CXR: bilateral patchy infiltrates (right side often worse)",
        ],
      },
      {
        heading: "Prevention",
        items: [
          "Gradual ascent: >2500 m, ascend no faster than 300–500 m/day of sleeping altitude; rest day every 1000 m",
          "Acetazolamide prophylaxis `125–250 mg PO q12h` starting 1–2 days before ascent; reduces AMS incidence ~50%",
          "HAPE-susceptible individuals: nifedipine or tadalafil prophylaxis for high-altitude travel",
        ],
      },
      {
        heading: "References",
        items: ["Luks et al, WEMS Guidelines 2019", "Gallagher & Bhatt, Chest 2019", "LITFL High Altitude Illness"],
      },
    ],
  },

  {
    id: "envenomations",
    name: "Envenomations",
    subtitle: "Snake, spider, scorpion, marine",
    category: "env",
    tldr: [
      {
        heading: "All envenomations",
        items: [
          "**Poison Control: 1-800-222-1222** — call early for antivenom availability and guidance",
          "Immobilize affected extremity at heart level; remove jewelry/constrictive clothing",
          "**Do NOT**: tourniquet, incise, suck, apply ice/electric shock",
          "IV access, monitor, baseline labs (CBC, BMP, coags, fibrinogen, CK, UA)",
        ],
      },
      {
        heading: "Pit vipers (rattlesnake, copperhead, cottonmouth)",
        items: [
          "Antivenom indications: progressive local swelling, coagulopathy (VICC), systemic symptoms (hypotension, altered mental status)",
          "**CroFab**: `4–6 vials IV over 1 h` initial; repeat `4–6 vials` if symptoms not controlled at 1 h; maintenance `2 vials q6h × 3 doses`",
          "**Anavip**: `10 vials IV over 1 h`; re-dose `10 vials` if recurrent coagulopathy",
          "Fasciotomy: rarely needed — antivenom resolves pseudocompartment syndrome in most cases",
        ],
      },
      {
        heading: "Coral snake",
        items: [
          "**Do NOT wait for symptoms** — neurotoxin is irreversible once bound; treat early",
          "North American Coral Snake Antivenin (if available) — call Poison Control for source",
          "Supportive: mechanical ventilation for respiratory failure; onset of paralysis may be delayed 12 h",
        ],
      },
      {
        heading: "Scorpion (Centruroides)",
        items: [
          "**Anascorp antivenom** — `3 vials IV over 10 min`; repeat × 1 if needed; dramatically reduces symptom duration",
          "`Midazolam 0.1 mg/kg IV` for neuromuscular excitability (roving eye movements, hypersalivation, agitation in children)",
        ],
      },
      {
        heading: "Black widow (Latrodectus)",
        items: [
          "Opioids + `Benzodiazepines` for severe muscle cramps",
          "Antivenom for: severe refractory pain, respiratory compromise, hypertensive crisis, pregnancy — call Poison Control for availability",
        ],
      },
      {
        heading: "Brown recluse (Loxosceles)",
        items: ["Supportive; wound care; surgery for large necrotic wounds — **delay ≥6–8 weeks** until wound stabilizes"],
      },
    ],
    extended: [
      {
        heading: "Pit viper envenomation details",
        items: [
          "Hemotoxic venom: proteases, phospholipases, hyaluronidase, L-amino acid oxidase → tissue necrosis, coagulopathy",
          "VICC (venom-induced consumption coagulopathy): fibrinogen consumption, thrombocytopenia, prolonged PT/INR — can mimic DIC",
          "Local: pain, edema advancing proximally with ecchymosis (draw proximal border with marker q30 min)",
          "Dry bite (no envenomation) in 20–25% of pit viper strikes",
          "Mojave rattlesnake: neurotoxic venom — may cause respiratory failure with minimal local swelling",
          "CroFab vs. Anavip: both effective; Anavip longer half-life → less rebound coagulopathy; CroFab more widely available",
        ],
      },
      {
        heading: "Black widow (Latrodectus) details",
        items: [
          "Alpha-latrotoxin → massive ACh and catecholamine release from nerve terminals",
          "Latrodectism: severe crampy abdominal pain, muscle rigidity, diaphoresis — mimics acute abdomen (appendicitis, peritonitis)",
          "Hypertension, tachycardia, diaphoresis from catecholamine surge",
          "Calcium gluconate IV: anecdotal benefit for muscle cramps; mostly historic",
          "Antivenom (Merck Black Widow Spider Antivenin): equine-derived; very effective; anaphylaxis risk — premedicate",
        ],
      },
      {
        heading: "Coral snake details",
        items: [
          "Elapidae family: fixed front fangs; venom is postsynaptic neurotoxin (blocks nicotinic ACh receptors at NMJ)",
          "Pattern: red on yellow = kill a fellow (North American coral snake); red on black = venom lack (non-dangerous mimic)",
          "Symptoms: cranial nerve palsies, ptosis, dysarthria, dysphagia → respiratory paralysis — **may be delayed up to 12–13 h**",
          "Antivenom supply: North American Coral Snake Antivenin no longer manufactured; limited supply; call Poison Control urgently",
        ],
      },
      {
        heading: "Marine envenomations",
        items: [
          "**Stingray**: immerse in hot water (45°C) until pain resolves; explore wound for retained spine; antibiotics for Aeromonas/Vibrio",
          "**Box jellyfish (Chironex fleckeri)**: most dangerous; hot water or vinegar to deactivate; CPR; no proven antivenom in US",
          "**Stonefish**: hot water immersion; antivenom available in Australia",
          "**Cone snail**: supportive; neurotoxin; respiratory failure possible",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 209–212", "ACMT/AAPCC Antivenom Guidelines", "LITFL Envenomations", "Poison Control 1-800-222-1222"],
      },
    ],
  },

  // ─── SURGICAL EMERGENCIES ─────────────────────────────────────────────────
  {
    id: "boerhaave",
    name: "Boerhaave Syndrome",
    subtitle: "Spontaneous esophageal perforation",
    category: "surg",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "NPO immediately; large-bore IV access; resuscitation",
          "**Urgent thoracic surgery consult** — mortality doubles every 12 h without intervention",
          "**Do NOT place NG tube** without surgical guidance (risk of extending perforation)",
        ],
      },
      {
        heading: "Imaging",
        items: [
          "**CT chest/abdomen with oral contrast** (water-soluble — Gastrografin) — gold standard; shows extraluminal air, mediastinal/pleural fluid, contrast leak",
          "**Never use barium** — causes severe mediastinitis if extravasates",
          "CXR: pneumomediastinum, pleural effusion (usually left), subcutaneous emphysema",
          "Esophagography (water-soluble contrast) if CT inconclusive",
        ],
      },
      {
        heading: "Antibiotics (start immediately)",
        items: [
          "`Piperacillin-tazobactam 4.5 g IV q6h` + `Fluconazole 400 mg IV loading dose` (covers oral flora, gram-negatives, Candida)",
          "Alternatively: `Meropenem 1 g IV q8h` + antifungal for critically ill/immunocompromised",
        ],
      },
      {
        heading: "Surgical decision",
        items: [
          "**Early (<24 h)**: primary surgical repair + drainage (best outcomes)",
          "**Delayed (24–72 h)**: drainage + T-tube repair or stenting; primary repair may still be possible",
          "**Late (>72 h) or poor surgical candidate**: endoscopic stent + drainage; esophageal diversion in extreme cases",
          "Nutritional support: TPN or jejunal feeding tube",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology and anatomy",
        items: [
          "Sudden increase in intraesophageal pressure (forceful vomiting, retching, straining, childbirth, seizure) → transmural tear",
          "Most common site: **left posterolateral wall of distal esophagus** (weakest point, 90% of cases)",
          "Esophagus lacks serosa → mediastinal contamination with oropharyngeal flora → mediastinitis → sepsis → multiorgan failure",
          "Distinct from Mallory-Weiss (mucosal only, not transmural, much better prognosis)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Mackler's triad**: vomiting + chest pain + subcutaneous emphysema — present in only ~25%",
          "Severe retrosternal/epigastric/back pain after vomiting or retching — most sensitive symptom",
          "**Hamman's crunch**: mediastinal crunching sound synchronous with heartbeat on auscultation — pathognomonic but rare",
          "CXR: pneumomediastinum (earliest finding), left pleural effusion, subcutaneous emphysema",
          "Often misdiagnosed as: esophageal spasm, myocardial infarction, aortic dissection, peptic ulcer",
        ],
      },
      {
        heading: "Prognostic factors",
        items: [
          "**Time to diagnosis** is the critical variable: <24 h → mortality ~20%; >24 h → mortality 40–60%; >48 h → >70%",
          "Pittsburgh Severity Score: >6 associated with better outcome with surgery over non-operative management",
          "Cervical perforations (iatrogenic): better prognosis than thoracic (contained by fascial planes)",
          "Iatrogenic (endoscopy, intubation) perforations generally smaller and better prognosis than Boerhaave",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 83", "Søreide & Viste, Scand J Trauma 2011", "LITFL Boerhaave Syndrome"],
      },
    ],
  },

  // ─── CARDIOVASCULAR (additional) ─────────────────────────────────────────
  {
    id: "scape",
    name: "SCAPE / Flash Pulmonary Edema",
    subtitle: "Sympathetic crashing acute pulmonary edema",
    category: "cv",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Sit patient upright; legs dependent (decreases venous return)",
          "**CPAP or BiPAP immediately** — first-line, dramatically reduces intubation rate",
          "CPAP: PEEP 10 cmH₂O; BiPAP: IPAP 15 / EPAP 5–10 cmH₂O; titrate to comfort and SpO₂",
          "**Avoid intubation if possible** — these patients can turn around rapidly with CPAP + nitroglycerin",
        ],
      },
      {
        heading: "Nitroglycerin — the key drug (push hard)",
        items: [
          "`NTG 400–800 mcg SL q3–5 min` while establishing IV",
          "`IV NTG: start 100–200 mcg/min, titrate rapidly to 400 mcg/min`; don't be timid",
          "**IV push strategy**: `NTG 2 mg IV push q3–5 min` (repeated boluses shown to reduce intubation without dangerous hypotension)",
          "Goal: afterload and preload reduction → fluid redistribution back to systemic compartment",
        ],
      },
      {
        heading: "Diuretics",
        items: [
          "`Furosemide 40–80 mg IV` — secondary role; SCAPE is fluid redistribution, not primarily fluid overload",
          "Don't delay nitroglycerin to give furosemide first",
        ],
      },
      {
        heading: "Find and treat the trigger",
        items: [
          "ACS (12-lead ECG immediately), medication non-compliance, hypertensive urgency, infection, arrhythmia, cocaine",
        ],
      },
    ],
    extended: [
      {
        heading: "SCAPE vs. decompensated heart failure",
        items: [
          "**SCAPE**: sudden, severe hypertension (SBP typically 180–220 mmHg) → sympathetic surge → fluid *redistributes* from systemic to pulmonary compartment; patient often well-compensated at baseline",
          "**Chronic decompensated HF**: slowly rising volume overload, less hypertension, chronically edematous — needs diuresis primarily",
          "SCAPE: lungs 'full' from shifted volume; total body volume often normal → diuresis less effective acutely",
          "Same drug, different roles: NTG is everything in SCAPE; adjunct in chronic CHF",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "Catecholamine surge (pain, anxiety, cocaine, hypertensive crisis) → severe vasoconstriction → ↑afterload → ↑LVEDP → ↑pulmonary venous pressure → alveolar flooding",
          "Volume not added externally — rapidly redistributed from systemic to pulmonary vasculature",
          "After treatment: fluid rapidly redistributes back; dramatic clinical improvement in 30–60 min",
          "PEEP from NIV: reduces venous return and afterload simultaneously; mechanically assists fluid redistribution",
        ],
      },
      {
        heading: "High-dose NTG evidence",
        items: [
          "Traditional NTG dosing (start low, titrate up) misses the window — these patients need high-dose immediately",
          "Sharon et al (1997): high-dose NTG + CPAP vs. isosorbide + furosemide — dramatically less intubation in NTG arm",
          "NTG IV push 2 mg boluses: Levy et al and others — effective with acceptable hypotension profile when BiPAP co-used",
          "Start NTG boluses before IV established (SL/spray) — do not wait",
        ],
      },
      {
        heading: "Recognize and avoid cardiogenic shock confusion",
        items: [
          "SCAPE: hypertensive + pulmonary edema — vasodilate aggressively",
          "Cardiogenic shock: hypotensive + pulmonary edema — vasopressors + inotropes; NTG will kill them",
          "Wet-warm (SCAPE) vs. Wet-cold (cardiogenic shock) — BP is your differentiator",
        ],
      },
      {
        heading: "References",
        items: ["Sharon et al, JACC 2000", "Vital et al Cochrane 2013 (NIV in APE)", "LITFL SCAPE", "Tintinalli 9e Ch 57"],
      },
    ],
  },

  {
    id: "svt-management",
    name: "SVT — Stable & Unstable Management",
    subtitle: "Regular narrow-complex tachycardia — vagal, adenosine, cardioversion",
    category: "cv",
    tldr: [
      {
        heading: "Unstable → synchronized cardioversion",
        items: [
          "**Unstable** = hypotension/shock, altered mental status, ischemic chest pain, acute heart failure due to the rate",
          "**Synchronized cardioversion** — narrow regular: `50–100 J` (biphasic); escalate if unsuccessful",
          "Sedate if time/conscious (e.g., ketamine/etomidate) but **do NOT delay cardioversion in periarrest**",
          "If IV in place, may attempt `adenosine 6 mg` while preparing — must not delay shock",
        ],
      },
      {
        heading: "Stable — vagal first",
        items: [
          "**Modified Valsalva** (REVERT) — strain 15 s semi-recumbent, then supine + passive leg raise; ~43% conversion",
          "Carotid sinus massage (avoid if bruit or stroke/TIA history)",
        ],
      },
      {
        heading: "Stable — adenosine if vagal fails",
        items: [
          "**Adenosine `6 mg` rapid IV push** + immediate 20 mL flush (proximal/large vein); if no effect in 1–2 min → `12 mg`, may repeat `12 mg` ×1",
          "Warn patient: transient chest pain, flushing, sense of doom, brief asystole",
          "Run a continuous rhythm strip — diagnostic even if it doesn't convert (unmasks flutter/atrial tachycardia)",
          "Reduce dose / use caution: central line (use `3 mg`), transplanted heart, dipyridamole/carbamazepine; avoid in known WPW with irregular wide complex",
        ],
      },
      {
        heading: "If adenosine fails / recurs (stable)",
        items: [
          "Rate control: **diltiazem** `0.25 mg/kg IV` over 2 min (≈15–20 mg), may repeat `0.35 mg/kg`; or **metoprolol** `2.5–5 mg IV` q5 min",
          "Avoid AV nodal blockers if pre-excited/irregular (possible WPW + AF)",
          "Recurrent/refractory → cardiology, consider amiodarone; electrophysiology for ablation referral",
        ],
      },
    ],
    extended: [
      {
        heading: "Classification",
        items: [
          "SVT = regular narrow-complex (QRS <120 ms) tachycardia, typically 150–250 bpm",
          "**AVNRT** (most common ~60%), **AVRT** (accessory pathway, e.g., WPW — orthodromic = narrow), atrial tachycardia",
          "Distinguish from sinus tach (look for cause), atrial flutter (~150 with 2:1 — adenosine unmasks flutter waves), and AF (irregular)",
          "Wide-complex regular → treat as VT unless known SVT with aberrancy",
        ],
      },
      {
        heading: "Vagal maneuvers",
        items: [
          "Modified Valsalva is superior to standard Valsalva (REVERT, Lancet 2015) — strain to 40 mmHg ×15 s, then lay supine with legs raised 45° ×15 s",
          "Carotid sinus massage 5–10 s, one side at a time; contraindicated with carotid bruit, recent stroke/TIA, or VT history",
          "Ice-water immersion / diving reflex effective in infants and young children",
        ],
      },
      {
        heading: "Adenosine details",
        items: [
          "Ultra-short half-life (<10 s) — must push fast through proximal vein with rapid saline flush (or dual-syringe technique)",
          "Transient AV block — diagnostic and therapeutic for AV-nodal-dependent SVT",
          "Initial 6 mg → 12 mg → 12 mg; central line or heart transplant: start at 3 mg",
          "Caution/relative: severe asthma/COPD (bronchospasm), 2nd/3rd degree block without pacemaker",
          "Potentiated by dipyridamole & carbamazepine; antagonized by methylxanthines (caffeine, theophylline) — may need higher dose",
          "Brief post-conversion asystole/ectopy is expected; have defib pads on",
        ],
      },
      {
        heading: "Special situations",
        items: [
          "**Pre-excited tachycardia / WPW with AF** (irregular, wide, very fast): AVOID adenosine, diltiazem, beta-blockers, digoxin (can accelerate accessory pathway → VF) — use **procainamide** or synchronized cardioversion",
          "Pregnancy: vagal → adenosine (safe) → cardioversion if unstable (safe)",
          "Pediatrics: adenosine 0.1 mg/kg (max 6 mg) → 0.2 mg/kg (max 12 mg); cardioversion 0.5–1 J/kg → 2 J/kg",
          "Stable but recurrent despite conversion — search for triggers (stimulants, hyperthyroid, PE, ischemia)",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Converted, asymptomatic, no ischemia/structural disease → discharge with cardiology follow-up; counsel on vagal maneuvers",
          "Admit/observe: unstable presentation, ischemia, recurrent SVT, WPW, structural heart disease, syncope",
          "Refer for electrophysiology study/ablation (often curative for AVNRT/AVRT)",
        ],
      },
      {
        heading: "References",
        items: ["AHA ACLS 2020", "Appelboam et al REVERT, Lancet 2015", "Page et al ACC/AHA/HRS SVT Guideline 2015", "Tintinalli 9e Ch 18"],
      },
    ],
  },

  {
    id: "vt-cardioversion",
    name: "Ventricular Tachycardia — Cardioversion & Mgmt",
    subtitle: "Wide-complex tachycardia — defibrillation, synchronized CV, antiarrhythmics",
    category: "cv",
    tldr: [
      {
        heading: "Pulseless VT / VF → defibrillate NOW",
        items: [
          "**Unsynchronized defibrillation** at max energy (`200 J` biphasic) + immediate CPR",
          "ACLS: epinephrine 1 mg q3–5 min; **amiodarone 300 mg IV** (then 150 mg) or **lidocaine 1–1.5 mg/kg**",
          "Treat reversible causes (Hs & Ts); consider double-sequential defibrillation / refractory VF protocol",
        ],
      },
      {
        heading: "Unstable VT with a pulse → synchronized cardioversion",
        items: [
          "**Unstable** = hypotension, altered mental status, ischemic chest pain, acute heart failure",
          "**Synchronized cardioversion** — monomorphic: start `100 J` biphasic, escalate (150 → 200 J)",
          "Polymorphic VT (irregular) → treat as VF: **unsynchronized** high-energy defibrillation (sync often can't track it)",
          "Sedate if conscious & time allows — don't delay shock in periarrest",
        ],
      },
      {
        heading: "Stable monomorphic VT — antiarrhythmic",
        items: [
          "**Procainamide** `20–50 mg/min IV` until arrhythmia suppressed, hypotension, QRS widens >50%, or max `17 mg/kg` (preferred — PROCAMIO trial)",
          "**Amiodarone** `150 mg IV over 10 min`, repeat as needed; then infusion `1 mg/min ×6h`",
          "**Lidocaine** `1–1.5 mg/kg IV` (esp. ischemic VT); repeat 0.5–0.75 mg/kg q5–10 min (max 3 mg/kg)",
          "Have pads on and prepare for synchronized cardioversion if deterioration or drug failure",
        ],
      },
      {
        heading: "Polymorphic VT / Torsades de Pointes",
        items: [
          "**Magnesium sulfate `2 g IV`** over 1–2 min (Torsades, even if Mg normal)",
          "Defibrillate if unstable/pulseless (unsynchronized)",
          "Long QT–related: correct K⁺/Mg²⁺, stop offending drugs, **overdrive pacing or isoproterenol** for bradycardia-dependent Torsades",
          "Ischemic polymorphic VT (normal QT): treat ischemia — revascularization, beta-blocker, amiodarone",
        ],
      },
    ],
    extended: [
      {
        heading: "Wide-complex tachycardia approach",
        items: [
          "QRS ≥120 ms + rate >100 — **assume VT until proven otherwise**, especially with structural heart disease or prior MI (regular WCT in this setting is VT ~90%+)",
          "Do NOT give AV-nodal blockers (verapamil/diltiazem) to undifferentiated WCT — can precipitate hemodynamic collapse in VT",
          "Brugada/Vereckei/aVR criteria support VT; AV dissociation, fusion/capture beats, concordance favor VT",
          "Irregular wide-complex → polymorphic VT, AF with aberrancy, or pre-excited AF (WPW)",
        ],
      },
      {
        heading: "Energy & cardioversion technique",
        items: [
          "Monomorphic VT (regular, pulse, unstable): synchronized, 100 J biphasic initial, escalate",
          "Polymorphic VT: irregular — defibrillator often cannot synchronize → unsynchronized (defib) doses",
          "Pulseless VT/VF: unsynchronized max energy + ACLS",
          "Ensure 'sync' is re-enabled before each synchronized shock (defibrillators default back to unsync after a shock)",
          "Pre-oxygenate and sedate the conscious stable-but-for-cardioversion patient (etomidate/ketamine + analgesia)",
        ],
      },
      {
        heading: "Antiarrhythmic specifics",
        items: [
          "**Procainamide** preferred for stable monomorphic VT (PROCAMIO 2017 — fewer major cardiac events vs amiodarone); avoid if QT prolonged, severe HF, or renal failure (accumulation)",
          "**Amiodarone** reasonable, especially with poor LV function; watch hypotension with rapid infusion",
          "**Lidocaine** best for ischemia-related VT; less effective for non-ischemic",
          "Avoid combining multiple QT/AV agents; reassess QRS/QT and BP frequently",
        ],
      },
      {
        heading: "Etiology & reversible causes",
        items: [
          "Ischemia/MI (most common), cardiomyopathy, prior infarct scar, electrolyte derangement (K⁺, Mg²⁺, Ca²⁺)",
          "Drug toxicity: Na-channel blockers (TCA, cocaine — give NaHCO₃), digoxin, QT-prolonging drugs",
          "Channelopathies: long QT, Brugada, catecholaminergic polymorphic VT, ARVC",
          "VT storm (≥3 episodes/24h): beta-blockade (esmolol), amiodarone, sedation/intubation, treat ischemia, consider stellate ganglion block, mechanical support",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Admit all sustained VT — telemetry/ICU; cardiology/EP involvement",
          "Identify and treat ischemia (cath if ACS-driven), correct electrolytes",
          "ICD evaluation for sustained VT not due to fully reversible cause; EP study/ablation for recurrent VT",
          "Document rhythm strips, energy used, drug responses",
        ],
      },
      {
        heading: "References",
        items: ["AHA ACLS 2020", "Ortiz et al PROCAMIO, Eur Heart J 2017", "AHA/ACC/HRS VA Guideline 2017", "Tintinalli 9e Ch 18"],
      },
    ],
  },

  // ─── NEURO (additional) ───────────────────────────────────────────────────
  {
    id: "guillain-barre",
    name: "Guillain-Barré Syndrome",
    subtitle: "Acute inflammatory demyelinating polyneuropathy",
    category: "neuro",
    tldr: [
      {
        heading: "Respiratory monitoring — highest priority",
        items: [
          "**Bedside spirometry q4h** if deteriorating: FVC and NIF (negative inspiratory force)",
          "**Rule of 20s**: FVC <20 mL/kg, NIF worse than −20 cmH₂O, RR >20 → intubate preemptively",
          "**Bulbar weakness** (dysarthria, dysphagia, facial droop) → aspiration risk → lower threshold to intubate",
          "Avoid BiPAP as sole airway support — cannot protect against aspiration",
        ],
      },
      {
        heading: "Immunotherapy (choose one)",
        items: [
          "**IVIG** — `0.4 g/kg/day IV × 5 days` (total 2 g/kg); onset benefit 2–4 weeks",
          "**Plasma exchange (PLEX)** — 5 exchanges (1 plasma volume each) over 10–14 days; may have slightly faster onset",
          "IVIG and PLEX are equally effective; **do not combine** (no added benefit, more adverse effects)",
          "**Corticosteroids are NOT effective** — do not use (worsen outcomes per RCT evidence)",
        ],
      },
      {
        heading: "Autonomic monitoring",
        items: [
          "Continuous cardiac monitoring — arrhythmias (bradycardia, tachycardia, heart block), labile BP",
          "Pacemaker for symptomatic bradycardia; avoid atropine (can cause severe hypertension)",
          "Bladder: urinary retention common — Foley catheter",
          "Ileus: NGT if needed; TPN if prolonged",
        ],
      },
      {
        heading: "Pain management",
        items: [
          "Neuropathic pain in >50%: `Gabapentin 300 mg TID` or `carbamazepine`; opioids for severe pain",
          "Pain is underrecognized and undertreated — address proactively",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Post-infectious immune-mediated attack on peripheral nerve myelin (AIDP) or axons (AMAN, AMSAN)",
          "Molecular mimicry: antibodies against pathogen cross-react with gangliosides on peripheral nerves",
          "Most common triggers: **Campylobacter jejuni** (most common, associated with AMAN variant), CMV, EBV, influenza, COVID-19, Zika",
          "Ascending symmetric weakness + areflexia + sensory symptoms; cranial nerve involvement in 50%",
        ],
      },
      {
        heading: "Variants",
        items: [
          "**AIDP** (acute inflammatory demyelinating polyneuropathy): most common in North America/Europe; classic ascending weakness",
          "**AMAN** (acute motor axonal neuropathy): axonal; more common in Asia; associated with C. jejuni",
          "**Miller Fisher syndrome**: ophthalmoplegia + ataxia + areflexia; anti-GQ1b antibodies; usually spares respiratory muscles",
          "**Bickerstaff brainstem encephalitis**: Miller Fisher + altered consciousness; overlap syndrome",
        ],
      },
      {
        heading: "Diagnosis",
        items: [
          "**Albuminocytologic dissociation on CSF**: elevated protein (>45 mg/dL), normal WBC (<10); may be normal in first week",
          "**Nerve conduction studies/EMG**: demyelination pattern (AIDP) or axonal loss (AMAN); confirm diagnosis",
          "Antiganglioside antibodies (GQ1b for Miller Fisher; GM1 for AMAN) — support diagnosis, not required acutely",
          "Brighton Criteria: standardized diagnostic levels (1–4) for research and reporting",
        ],
      },
      {
        heading: "Prognosis",
        items: [
          "25–30% require mechanical ventilation",
          "85% walk independently at 6 months; 5–10% have permanent disability",
          "Mortality ~3–5% with modern ICU care (dysautonomia, infection, PE)",
          "EGOS (Erasmus GBS Outcome Score) predicts 6-month independent ambulation",
        ],
      },
      {
        heading: "References",
        items: ["van Doorn et al, Lancet Neurol 2008", "Hughes et al, Cochrane 2014 (IVIG)", "Tintinalli 9e Ch 171", "LITFL Guillain-Barré"],
      },
    ],
  },

  // ─── INFECTIOUS / PUBLIC HEALTH ──────────────────────────────────────────
  {
    id: "diphtheria",
    name: "Diphtheria",
    subtitle: "Respiratory diphtheria — pseudomembrane, airway, myocarditis",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Airway is THE priority** — pseudomembrane can detach and obstruct; ENT/anesthesia at bedside",
          "Droplet + contact isolation",
          "**Notify CDC immediately** for antitoxin: `770-488-7100` (24/7)",
          "Avoid manipulating pseudomembrane — bleeding risk; intubate before total obstruction",
          "Continuous cardiac monitoring (myocarditis)",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Diphtheria antitoxin (DAT)** — `20,000–120,000 units IM/IV` based on severity; equine; skin test first",
          "**Erythromycin** `500 mg PO/IV QID × 14d` OR **Procaine penicillin G** `600,000 units IM q12h × 14d`",
          "Peds: erythromycin `40–50 mg/kg/day div q6h` (max 2 g/day)",
          "Active immunization (Tdap) on recovery — disease does not confer immunity",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Disturbing the pseudomembrane during exam",
          "Delaying antitoxin for lab confirmation — neutralizes only unbound toxin",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "ICU for moderate–severe; isolation until 2 negative cultures 24h apart post-treatment",
          "Cardiac telemetry ≥4 weeks (delayed myocarditis)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "C. diphtheriae toxin inhibits EF-2 → cell death → pseudomembrane formation",
          "Toxin spreads systemically → myocarditis, polyneuropathy, renal failure",
          "Pseudomembrane: fibrin + dead cells + bacteria; firmly adherent; bleeds when scraped",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Sore throat, low-grade fever, malaise — gradual onset over days",
          "Gray-white adherent pseudomembrane on tonsils/pharynx/larynx",
          "**Bull neck** — massive cervical lymphadenopathy + edema (severe)",
          "Cutaneous form — chronic non-healing ulcer with gray membrane",
          "Late: myocarditis (1–2 wk), polyneuropathy (3–7 wk)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Throat/NP swab — Gram stain + culture on Loeffler/tellurite media (alert lab)",
          "ECG, troponin (myocarditis)",
          "Notify state public health and CDC immediately",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Antitoxin doesn't reverse established myocarditis — give early",
          "Close contacts: PEP (erythromycin ×7–10d OR single PCN G dose) + booster vaccine",
          "Outbreaks in unvaccinated populations, refugees, travelers from former USSR / Asia / Africa",
        ],
      },
      {
        heading: "References",
        items: ["CDC Diphtheria Clinical Guidance", "Tintinalli 9e Ch 152", "WHO Diphtheria Position Paper 2017"],
      },
    ],
  },

  {
    id: "tetanus",
    name: "Tetanus",
    subtitle: "Generalized tetanus — toxin-mediated NM hyperexcitability",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Quiet darkened room, minimize stimuli",
          "Wound debridement — surgery early",
          "Aggressive airway management — laryngospasm risk; intubate early if generalized spasms",
          "ICU admission for all generalized cases",
          "Continuous cardiac + autonomic monitoring",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Human tetanus immune globulin (TIG)** — `3,000–6,000 units IM ×1` (infiltrate around wound separately)",
          "**Metronidazole** — `500 mg IV q6–8h × 7–10 days` (preferred over PCN — no GABA antagonism)",
          "**Benzodiazepines** — diazepam `10–30 mg IV q1–4h prn` or midazolam infusion for spasms",
          "**Magnesium sulfate** — `4–6 g IV load, then 1–3 g/h infusion` for autonomic instability",
          "**Vecuronium/rocuronium** — for refractory spasms once intubated",
          "Active vaccination (Td/Tdap) — disease does not confer immunity",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Penicillin (GABA antagonist — may worsen spasms)",
          "Beta-blockers alone for autonomic storm — paradoxical hypertension; combine with alpha-blocker or use magnesium",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU for weeks; recovery 4–6 weeks; mortality ~10% with intensive care"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Clostridium tetani spores → wound → tetanospasmin",
          "Toxin retrograde axonal transport to spinal cord → blocks GABA/glycine release from inhibitory interneurons",
          "Loss of inhibition → unopposed motor neuron firing → sustained muscle contraction",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Trismus** (lockjaw) — earliest sign in 75%",
          "**Risus sardonicus** — sustained facial spasm",
          "**Opisthotonos** — generalized arching",
          "Reflex spasms triggered by minor stimuli (sound, light, touch)",
          "Autonomic storm: tachycardia, labile BP, sweating, fever (often after week 1)",
          "Patient remains alert and oriented",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Clinical diagnosis — no confirmatory test",
          "Wound culture often negative; spatula test (touching pharynx → masseter spasm) supportive",
          "CBC, BMP, CK (rhabdomyolysis from spasms)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "TIG separate from Td/Tdap — give both, different sites",
          "Generalized spasms often look like seizure but patient is alert",
          "Local tetanus may precede generalized — high suspicion in localized stiffness near wound",
          "Survivors require active immunization (3 doses) — disease confers no immunity",
        ],
      },
      {
        heading: "References",
        items: ["CDC Tetanus Clinical Guidance", "Tintinalli 9e Ch 154", "Thwaites & Yen, Lancet 2015"],
      },
    ],
  },

  {
    id: "anthrax",
    name: "Anthrax — Inhalational / Systemic",
    subtitle: "Bacillus anthracis — bioterror or occupational exposure",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Notify CDC and state public health IMMEDIATELY** — bioterror concern",
          "Standard precautions (no person-to-person spread for inhalation/cutaneous)",
          "Decontamination if powder exposure — gentle wash with soap/water",
          "**Mediastinal widening on CXR** is hallmark of inhalational; CT chest if suspected",
          "Aggressive ICU support — pleural drainage often needed",
        ],
      },
      {
        heading: "Drugs & doses (systemic / inhalational)",
        items: [
          "**Combination IV regimen — multidrug essential**:",
          "**Ciprofloxacin** `400 mg IV q8h` OR **Levofloxacin** `750 mg IV daily`",
          "**+ Linezolid** `600 mg IV q12h` (toxin/protein synthesis suppression — preferred over clindamycin if meningitis)",
          "**+ Meropenem** `2 g IV q8h` (cell wall — also crosses BBB)",
          "**Anthrax antitoxin** — **Raxibacumab** `40 mg/kg IV ×1` OR **Obiltoxaximab** `16 mg/kg IV ×1` (CDC stockpile)",
          "Peds cipro `10–15 mg/kg IV q12h`",
          "**Cutaneous anthrax**: cipro/doxy PO × 7–10 days (60 days if bioterror exposure)",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Monotherapy for systemic disease",
          "Cephalosporins, TMP-SMX (intrinsic resistance)",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU; total 60 days antibiotics if bioterror exposure (spores persist); systemic ≥2 weeks IV then PO"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "B. anthracis spores germinate in alveoli/skin/GI → bacteria produce three toxins",
          "Lethal toxin (LF + PA) and edema toxin (EF + PA) cause vascular collapse and tissue necrosis",
          "Inhalation: spores reach mediastinal LNs → hemorrhagic mediastinitis → bacteremia → meningitis (50%)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Inhalational**: prodrome (flu-like) → fulminant phase (24–48h): dyspnea, shock, mediastinal widening",
          "**Hemorrhagic mediastinitis** — pathognomonic; widened mediastinum + pleural effusions on CXR",
          "**Cutaneous** (95% of natural cases): painless papule → vesicle → black eschar with surrounding edema",
          "**GI**: severe abdominal pain, hematemesis, ascites; ingestion of contaminated meat",
          "**Injectional**: IV drug users — extensive soft tissue infection without typical eschar",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Blood cultures × 2 (highly positive in systemic) — alert lab (BSL-3)",
          "CXR + CT chest (mediastinal widening, hemorrhagic effusion)",
          "LP if any neuro symptoms (high meningitis incidence — 50%)",
          "Skin lesion swab/biopsy for cutaneous",
          "PCR via state lab / LRN",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Initial flu-like prodrome misleads — high mortality if treatment delayed >48h",
          "Antitoxin (raxibacumab/obiltoxaximab) only neutralizes circulating toxin — give with antibiotics, not instead",
          "PEP for known exposure: cipro or doxy × 60 days + 3-dose anthrax vaccine",
          "Person-to-person not transmitted (except injectional/cutaneous fluids — use standard precautions)",
        ],
      },
      {
        heading: "References",
        items: ["CDC Anthrax Treatment Guidelines 2014", "Hendricks et al, Emerg Infect Dis 2014", "MMWR 2014: 63(RR-09)"],
      },
    ],
  },

  {
    id: "severe-malaria",
    name: "Severe Malaria",
    subtitle: "P. falciparum — life-threatening; travel exposure",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Thick + thin smears STAT + repeat q12–24h × 3 if initial negative",
          "Rapid diagnostic test (RDT) — adjunct to microscopy",
          "ICU admission for any severity criteria",
          "Cautious fluids — both pulmonary edema and AKI common; avoid aggressive boluses",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**IV artesunate** — `2.4 mg/kg IV at 0, 12, 24h, then daily × 7d` — first-line worldwide; available in US via CDC",
          "Transition to PO after 24h IV + clinical improvement: artemether-lumefantrine, atovaquone-proguanil, or mefloquine ×3 days",
          "**If artesunate unavailable** — quinidine gluconate `10 mg/kg IV load over 1–2h, then 0.02 mg/kg/min` (continuous cardiac monitoring; QTc prolongation)",
          "Empiric broad antibiotics if shock — coinfection common",
          "Exchange transfusion considered if parasitemia >10% with end-organ dysfunction (controversial)",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Aggressive crystalloid resuscitation — pulmonary edema risk",
          "Steroids (cerebral malaria) — worsen outcomes",
          "Heparin in DIC — increased bleeding",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU; reportable to public health; discuss with infectious disease; acquire artesunate via CDC `770-488-7788`"],
      },
    ],
    extended: [
      {
        heading: "Severity criteria (any one = severe)",
        items: [
          "Parasitemia >5% (or >10% non-immune)",
          "Cerebral malaria (impaired consciousness, GCS <11, seizures)",
          "Respiratory distress / ARDS / pulmonary edema",
          "Shock (SBP <80)",
          "AKI (Cr >3 or oliguria)",
          "Hyperbilirubinemia + organ dysfunction",
          "Severe anemia (Hgb <7), DIC, hypoglycemia (<40), acidosis (HCO₃ <15)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Travel to endemic area (sub-Saharan Africa, S. Asia, S. America) within 1 year — ASK ALWAYS",
          "Fever (cyclical or continuous), chills, headache, myalgia",
          "Cerebral: confusion → coma; seizures common in children",
          "Hyperparasitemia + organ dysfunction = severe",
          "Thrombocytopenia near-universal",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Thick smear (parasitemia quantification) + thin smear (species ID)",
          "RDT (HRP-2 or pLDH antigens)",
          "CBC, BMP, LFTs, coags, lactate, glucose (hypoglycemia common)",
          "ABG, urinalysis (hemoglobinuria — blackwater fever)",
          "Blood cultures (sepsis coinfection)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Hypoglycemia is iatrogenic from quinidine OR from severe disease — check q4h",
          "Artesunate-induced hemolysis can occur 7–14 days after treatment — recheck Hgb",
          "P. vivax/ovale require primaquine (after G6PD testing) for hypnozoites — radical cure",
          "Pregnancy + severe malaria: artesunate preferred; quinidine 2nd-line",
        ],
      },
      {
        heading: "References",
        items: ["WHO Guidelines for the Treatment of Malaria 3e", "CDC Malaria Treatment Tables", "Tintinalli 9e Ch 159", "Lancet 2014: AQUAMAT trial"],
      },
    ],
  },

  {
    id: "rabies-exposure",
    name: "Rabies Exposure",
    subtitle: "Post-exposure prophylaxis — universally fatal once symptomatic",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Wound care first** — irrigate copiously with soap/water for ≥15 min, then virucidal (povidone-iodine)",
          "Risk-stratify exposure (animal type, bite vs scratch, vaccination status)",
          "Notify public health — animal observation/testing",
          "Tetanus prophylaxis update",
          "Empiric antibiotics for bite (amox-clav)",
        ],
      },
      {
        heading: "Drugs & doses (PEP — previously unvaccinated)",
        items: [
          "**Human rabies immune globulin (HRIG)** — `20 IU/kg`; infiltrate **as much as possible AROUND wound**, remainder IM at site distant from vaccine",
          "**Rabies vaccine (HDCV or PCEC)** — `1 mL IM` (deltoid; anterolateral thigh in young children) on **days 0, 3, 7, 14**",
          "Immunocompromised: add 5th dose on day 28",
          "Previously vaccinated: vaccine days 0 and 3 only; **NO HRIG**",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Giving HRIG and vaccine in the same anatomic site",
          "Delaying PEP for animal observation results — start immediately if high-risk",
          "PEP if symptomatic — virtually no survivors; comfort care (Milwaukee protocol largely failed)",
        ],
      },
      {
        heading: "Dispo",
        items: ["Outpatient PEP with follow-up scheduled; document carefully; report to public health"],
      },
    ],
    extended: [
      {
        heading: "Risk assessment",
        items: [
          "**HIGH risk (PEP indicated)**: bat exposure (any contact in sleeping person); raccoon, skunk, fox, coyote bites; unprovoked attack from wild carnivore",
          "**MODERATE**: dog/cat bite if animal cannot be observed × 10 days",
          "**LOW**: rodents (mice, rats, squirrels, hamsters) — PEP rarely indicated",
          "Bat in room with sleeping/intoxicated/child/cognitively impaired person → PEP even without known bite",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "Rabies virus (Lyssavirus) — neurotropic; retrograde axonal transport to CNS",
          "Incubation 1–3 months (range 5d to >1yr); depends on inoculum and proximity to CNS",
          "Once symptomatic: encephalitis → universal mortality (~99.9%)",
        ],
      },
      {
        heading: "Recognition (clinical rabies)",
        items: [
          "Prodrome: fever, headache, paresthesias at bite site",
          "**Furious form** — hydrophobia, aerophobia, agitation, hypersalivation, autonomic instability",
          "**Paralytic form** — ascending paralysis, cranial nerve palsies",
          "Coma → death within 1–2 weeks of symptoms",
        ],
      },
      {
        heading: "Workup",
        items: [
          "PEP is clinical decision — no testing of patient required for prophylaxis",
          "If symptomatic: nuchal skin biopsy, saliva PCR, CSF antibodies, brain MRI",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "HRIG must be infiltrated INTO wound — IM-only does not provide local neutralization",
          "Bat exposures — extremely high suspicion; bites can be invisible",
          "PEP failures rare but reported with delayed/incomplete administration",
          "Pre-exposure prophylaxis: 3 doses days 0, 7, 21 or 28 (vets, lab workers, travelers)",
        ],
      },
      {
        heading: "References",
        items: ["ACIP Rabies Recommendations MMWR 2022", "Tintinalli 9e Ch 156", "WHO Rabies Position Paper 2018"],
      },
    ],
  },

  {
    id: "naegleria",
    name: "Naegleria fowleri PAM",
    subtitle: "Primary amebic meningoencephalitis — fulminant, >97% mortality",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Call CDC Emergency Operations Center: `770-488-7100` (24/7)** — they coordinate miltefosine + management",
          "Warm freshwater nasal exposure → consider in any rapidly progressive meningoencephalitis",
          "ICU admission, neurosurg consult (ICP management)",
          "Wet mount fresh CSF — DO NOT REFRIGERATE; motile trophozoites",
        ],
      },
      {
        heading: "Drugs & doses (CDC combination protocol)",
        items: [
          "**Amphotericin B** — `1.5 mg/kg/day IV ×3 days, then 1 mg/kg/day` + `1.5 mg intrathecal q24h ×2 days, then qod`",
          "**Miltefosine** — `50 mg PO TID` (≥45 kg) or `2.5 mg/kg/day div BID` (peds) × 28 days",
          "**Rifampin** `10 mg/kg/day IV/PO` + **Fluconazole** `10 mg/kg/day IV/PO` + **Azithromycin** `10 mg/kg/day IV/PO`",
          "**Dexamethasone** `0.6 mg/kg/day IV div q6h` for cerebral edema",
          "Consider **therapeutic hypothermia** (32–34°C × 24h) — adjunct in surviving cases",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Refrigerating CSF specimen — kills motile trophozoites",
          "Standard bacterial meningitis empiric therapy alone (will mistreat)",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU; mortality >97%; rare survivors had early diagnosis + aggressive combo + miltefosine + hypothermia"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Naegleria fowleri (free-living thermophilic amoeba) → cribriform plate → olfactory nerves → brain",
          "Acute necrotizing hemorrhagic meningoencephalitis",
          "Warm freshwater (lakes, hot springs, untreated wells, neti pots with tap water); summer months",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Recent (1–9 days) freshwater nasal exposure (jumping/diving, neti pot, ritual ablution)",
          "Initial: severe frontal headache, fever, nausea, anosmia/parosmia",
          "Rapid progression: AMS, seizures, increased ICP, brainstem herniation",
          "Death typically within 5–7 days of symptom onset",
        ],
      },
      {
        heading: "Workup",
        items: [
          "LP: high opening pressure, neutrophilic pleocytosis (>500), low glucose, high protein — MIMICS bacterial meningitis",
          "**Wet mount fresh CSF** — motile trophozoites (15–25 µm); DO NOT refrigerate or centrifuge",
          "PCR (CDC), immunohistochemistry on biopsy",
          "MRI: bilateral cortical/subcortical edema, basal cisternal enhancement",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "CSF profile indistinguishable from bacterial meningitis — must specifically request wet mount",
          "Tap water for sinus rinsing is a documented vehicle — public health education",
          "Miltefosine teratogenic — pregnancy testing in women of childbearing age",
          "Differentiate from Acanthamoeba (granulomatous, immunocompromised, more chronic)",
        ],
      },
      {
        heading: "References",
        items: ["CDC Naegleria Treatment Recommendations", "Capewell et al, J Pediatr Infect Dis Soc 2015", "Linam et al, Pediatrics 2015 (survivor case)"],
      },
    ],
  },

  {
    id: "severe-babesiosis",
    name: "Severe Babesiosis",
    subtitle: "Tick-borne; hemolysis, asplenia/immunocompromise risk",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Severity criteria → ICU + IV therapy",
          "Type & cross — exchange transfusion if parasitemia >10% or end-organ dysfunction",
          "Address coinfection (Lyme, anaplasmosis — same Ixodes vector)",
          "Inquire about asplenia / immunosuppression",
        ],
      },
      {
        heading: "Drugs & doses (severe)",
        items: [
          "**Azithromycin** `500 mg IV daily` + **Atovaquone** `750 mg PO BID`",
          "OR **Clindamycin** `600 mg IV q6h` + **Quinine** `650 mg PO q8h` (more side effects but historically standard)",
          "Duration: ≥7–10 days; longer (≥6 weeks) in immunocompromised; until parasitemia <4% AND clinical improvement",
          "**Exchange transfusion** if: parasitemia >10%, severe hemolysis, organ failure, ARDS",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Quinine if QTc prolonged or with other QT-prolonging agents",
          "Stopping treatment early — relapse common in immunocompromised; check serial parasitemia",
        ],
      },
      {
        heading: "Dispo",
        items: ["ICU for severe; reportable to public health; tick-borne disease packet"],
      },
    ],
    extended: [
      {
        heading: "Severity criteria",
        items: [
          "Parasitemia >4% (>10% definite severe)",
          "Hemoglobin <10",
          "End-organ dysfunction: AKI, ARDS, DIC, MI",
          "Asplenia / functional asplenia / immunocompromise",
          "Age >50",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "Babesia microti (US Northeast/Midwest), B. duncani (West Coast), B. divergens (Europe; severe in asplenia)",
          "Vector: Ixodes scapularis (same as Lyme, anaplasmosis) — coinfection common",
          "Intraerythrocytic parasite → hemolysis, microvascular sludging",
          "Asplenia → fulminant disease (analogous to malaria)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Tick exposure in endemic area (NE/Midwest US, summer)",
          "Fever, fatigue, headache, myalgia",
          "Hemolytic anemia: jaundice, dark urine, splenomegaly",
          "Severe: ARDS, DIC, AKI, MI",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Thin blood smear — intraerythrocytic ring forms ± **Maltese cross** (tetrad — pathognomonic)",
          "PCR (more sensitive than smear at low parasitemia)",
          "CBC (anemia, thrombocytopenia), haptoglobin (low), LDH (high), bili (high)",
          "Coag studies, LFTs, BMP",
          "Lyme + anaplasmosis serologies (coinfection)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Misdiagnosed as malaria — geography/exposure history distinguishes",
          "Asplenic patients can deteriorate rapidly — admit",
          "Persistent / relapsing disease in immunocompromised — extend treatment to 6+ weeks; consider quadruple therapy",
        ],
      },
      {
        heading: "References",
        items: ["IDSA Guidelines for Babesiosis 2020", "Krause, NEJM 2019", "Tintinalli 9e Ch 158"],
      },
    ],
  },

  {
    id: "plague",
    name: "Plague",
    subtitle: "Yersinia pestis — bubonic / septicemic / pneumonic",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Notify CDC and public health IMMEDIATELY** — bioterror agent; reportable",
          "**Pneumonic plague** — droplet + airborne isolation until 48h of effective treatment",
          "Aggressive resuscitation for septicemic form",
          "Source control: drain bubo if needed (after 24h antibiotics)",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Streptomycin** `1 g IM BID × 10 days` — historic standard",
          "**Gentamicin** `5 mg/kg IV daily × 10 days` — preferred (more available)",
          "**Doxycycline** `100 mg IV/PO BID × 10–14 days` — alternative; mild disease",
          "**Ciprofloxacin** `400 mg IV / 500 mg PO BID × 10 days`",
          "Severe / pneumonic: combination (aminoglycoside + doxy or FQ)",
          "Peds: gentamicin `2.5 mg/kg IV q8h` or doxy `2.2 mg/kg q12h` (max 100 mg)",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Cephalosporins, beta-lactams (poor activity)",
          "Delaying antibiotics for confirmation — pneumonic plague 100% fatal untreated",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "ICU for septicemic/pneumonic; isolation 48h post-effective therapy",
          "PEP for close contacts: doxy or cipro × 7 days",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Yersinia pestis — gram-negative coccobacillus; bipolar 'safety pin' staining",
          "Vector: rodent fleas (rural SW US — NM, AZ, CO endemic)",
          "Bubonic (most common) → bacteremia → pneumonic (secondary; person-to-person spread)",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "**Bubonic**: sudden fever, painful inguinal/axillary/cervical buboes, malaise; 2–6 day incubation",
          "**Septicemic**: fever, GI symptoms, DIC, gangrenous extremities (Black Death)",
          "**Pneumonic**: rapid-onset fever + cough + hemoptysis; bilateral infiltrates; high mortality",
          "Travel to / residence in endemic area (US Southwest, parts of Africa, Asia)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Bubo aspirate, blood, sputum cultures — alert lab (BSL-3); LRN PCR",
          "CBC (leukocytosis), DIC labs",
          "CXR: bilateral infiltrates in pneumonic",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Atypical/initial presentation may resemble flu — high suspicion in endemic areas with rodent/flea exposure",
          "Bioterror via aerosol → primary pneumonic plague (bypasses bubonic phase)",
          "Worker safety: full PPE; alert lab before processing specimens",
        ],
      },
      {
        heading: "References",
        items: ["CDC Plague Clinical Guidance", "WHO Plague Fact Sheet", "Tintinalli 9e Ch 157"],
      },
    ],
  },

  {
    id: "tularemia",
    name: "Tularemia",
    subtitle: "Francisella tularensis — ulceroglandular, pneumonic, typhoidal",
    category: "infect",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Notify lab BEFORE sending cultures** — BSL-3 pathogen; bioterror concern",
          "Notify state public health and CDC",
          "Standard precautions (no person-to-person)",
          "ICU for pneumonic / typhoidal forms",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Streptomycin** `1 g IM BID × 10 days` OR **Gentamicin** `5 mg/kg IV daily × 10 days`",
          "**Doxycycline** `100 mg PO/IV BID × 14–21 days` — mild only (higher relapse)",
          "**Ciprofloxacin** `400 mg IV / 500 mg PO BID × 10–14 days`",
          "Peds: gentamicin `2.5 mg/kg IV q8h`",
          "**PEP** (bioterror exposure): doxy or cipro × 14 days",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Beta-lactams (intrinsic resistance)",
          "Treating with doxy alone in severe disease — relapse rate 10–25%",
        ],
      },
      {
        heading: "Dispo",
        items: ["Admit for IV therapy (severe forms); 10–14 days antibiotics"],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "F. tularensis — small gram-negative coccobacillus; intracellular pathogen",
          "Vectors: ticks, deer flies, infected mammals (rabbits, rodents, hares)",
          "Inhalation, ingestion, inoculation — multiple routes",
          "Geographic: US (Arkansas, Missouri, Oklahoma, Kansas), Scandinavia, Russia",
        ],
      },
      {
        heading: "Clinical forms",
        items: [
          "**Ulceroglandular** (most common, 75%): papule → ulcer at inoculation site + regional lymphadenopathy",
          "**Glandular**: lymphadenopathy without skin ulcer",
          "**Oculoglandular**: conjunctival inoculation → painful red eye + preauricular adenopathy",
          "**Oropharyngeal**: ingestion → pharyngitis, cervical adenopathy",
          "**Pneumonic**: inhalation; high mortality, bioterror form",
          "**Typhoidal**: systemic illness without localizing signs; high mortality",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Tick or deer fly bite; rabbit/rodent contact (hunters, taxidermists, lab workers)",
          "Acute fever, chills, malaise",
          "Skin ulcer + tender regional lymphadenopathy (ulceroglandular form)",
          "Rapidly progressive pneumonia in inhalational form",
        ],
      },
      {
        heading: "Workup",
        items: [
          "Cultures (specially handled — alert lab, BSL-3); serology (paired sera 4-fold rise)",
          "PCR via state lab / LRN",
          "CXR: patchy infiltrates, hilar adenopathy, pleural effusions",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Lab biohazard — workers can acquire infection from sniffing plates; ALWAYS alert lab",
          "Doxy higher relapse rate than aminoglycosides — reserve for mild disease",
          "Bioterror form (aerosolized) — primary pneumonic with high lethality",
        ],
      },
      {
        heading: "References",
        items: ["CDC Tularemia Clinical Guidance", "Dennis et al, JAMA 2001 (consensus)", "Tintinalli 9e Ch 157"],
      },
    ],
  },

  // ─── HEMATOLOGY / IMMUNOLOGY ─────────────────────────────────────────────
  {
    id: "hereditary-angioedema",
    name: "Hereditary Angioedema",
    subtitle: "C1-INH deficiency — bradykinin-mediated; airway emergency",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "**Airway is the priority** — laryngeal involvement; intubate early; surgical airway ready",
          "Distinguish from histaminergic angioedema (no urticaria, no pruritus; doesn't respond to epi/steroids/antihistamines)",
          "**Treat early** — efficacy decreases as attack progresses",
          "Identify trigger (ACE-I, trauma, stress, infection)",
        ],
      },
      {
        heading: "Drugs & doses (acute attack)",
        items: [
          "**Icatibant** (Firazyr) — `30 mg SQ ×1`; bradykinin B2 antagonist; can repeat at 6h",
          "**Ecallantide** (Kalbitor) — `30 mg SQ` (3 × 10 mg injections); plasma kallikrein inhibitor",
          "**C1 esterase inhibitor concentrate** (Berinert/Cinryze) — `20 IU/kg IV`; replaces deficient C1-INH",
          "**FFP** `2–4 units` — alternative if specific agents unavailable (contains C1-INH); paradoxical worsening rare",
          "**Tranexamic acid** `1 g IV` — limited adjunct evidence",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Reflexive epinephrine, steroids, antihistamines — typically ineffective (bradykinin, not histamine)",
          "Don't withhold airway management waiting for medications to work",
          "ACE inhibitors, ARBs, estrogens — known triggers",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "ICU for airway involvement; admit for facial/oropharyngeal swelling even if stable",
          "Allergy/immunology referral for prophylaxis (C1-INH, danazol, lanadelumab)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Type I (85%): C1-INH deficiency (autosomal dominant)",
          "Type II (15%): C1-INH dysfunction (normal level, low function)",
          "Type III (rare): factor XII mutation; estrogen-sensitive; normal C1-INH",
          "Bradykinin accumulates → vascular permeability → angioedema",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Recurrent angioedema episodes lasting 2–5 days",
          "**No urticaria, no pruritus** (key differentiator from histaminergic)",
          "Family history common (autosomal dominant)",
          "Triggers: trauma, surgery, dental work, infection, stress, ACE-I, estrogens",
          "GI attacks: severe abdominal pain, vomiting, diarrhea (mimics surgical abdomen)",
          "Erythema marginatum may precede attack (transient, non-pruritic rash)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "C4 level (low between attacks — screening test)",
          "C1-INH antigenic level + functional assay",
          "C1q normal (low in acquired AE)",
          "Endoscopy/CT — when GI attack mimics surgical abdomen",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "ACE-inhibitor angioedema is also bradykinin-mediated — same agents may help",
          "Allergic angioedema (with urticaria) responds to epi/steroids/antihistamines — different treatment",
          "Acquired angioedema (associated with lymphoma, autoimmune): low C1q, often older adults",
          "Long-term prophylaxis for frequent attackers: lanadelumab, C1-INH SQ, danazol",
        ],
      },
      {
        heading: "References",
        items: [
          "WAO/EAACI Guideline for HAE 2021",
          "Maurer et al, Allergy 2017",
          "Tintinalli 9e Ch 14",
        ],
      },
    ],
  },

  {
    id: "acquired-hemophilia-a",
    name: "Acquired Hemophilia A",
    subtitle: "Acquired FVIII inhibitor — spontaneous severe bleeding",
    category: "heme",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Stop active bleeding — local pressure, surgical control",
          "Type and cross, large-bore IV access",
          "Hematology consult IMMEDIATELY",
          "Avoid IM injections, arterial sticks, NSAIDs/antiplatelets",
        ],
      },
      {
        heading: "Drugs & doses (acute bleeding)",
        items: [
          "**rFVIIa (NovoSeven)** — `90 mcg/kg IV q2–3h` until bleeding controlled; first-line bypass agent",
          "**Activated PCC (FEIBA)** — `50–100 units/kg IV q8–12h` (max 200 units/kg/day); alternative bypass",
          "**Recombinant porcine FVIII (Obizur)** — `200 units/kg IV ×1, then dose to FVIII level`",
          "FVIII concentrates rarely effective (inhibitor titer too high)",
          "**Eradication of inhibitor** (start early, even during acute bleed):",
          "**Prednisone** `1 mg/kg/day` ± **cyclophosphamide** `1–2 mg/kg/day` ± **rituximab** `375 mg/m² weekly ×4`",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "DDAVP (no significant effect — inhibitor blocks FVIII)",
          "Standard plasma-derived FVIII concentrates as primary treatment",
          "IM injections, arterial blood gases, urinary catheterization unless essential",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "Admit all active bleeders — ICU if life-threatening",
          "Hematology/oncology workup for underlying cause (autoimmune, malignancy, postpartum, idiopathic)",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autoantibody (IgG) inhibits FVIII coagulant activity",
          "Most cases idiopathic; ~50% associated with autoimmune disease, malignancy (lymphoproliferative), postpartum, drugs",
          "Different from congenital hemophilia: spontaneous, older patients, no family history",
        ],
      },
      {
        heading: "Recognition",
        items: [
          "Spontaneous severe bleeding without prior history",
          "Soft tissue hematomas, hematuria, GI bleeding, retroperitoneal bleeding",
          "**Joint bleeding LESS common** than congenital hemophilia",
          "Older adults (median 60–70s); postpartum women (3 months postpartum peak)",
          "Isolated PTT prolongation, normal PT, normal platelet count",
        ],
      },
      {
        heading: "Workup",
        items: [
          "PT, PTT, INR, fibrinogen, platelets — isolated PTT prolongation",
          "**Mixing study** — PTT does NOT correct (vs factor deficiency, which corrects)",
          "FVIII activity (low) + Bethesda assay (inhibitor titer)",
          "Workup for underlying cause: ANA, RF, complement, age-appropriate cancer screen",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Often initially mistaken for warfarin overdose, DIC, or congenital hemophilia",
          "Vitamin K and FFP do not correct the PTT — diagnostic clue",
          "Mortality ~20% — most deaths from bleeding before diagnosis or eradication therapy complications",
          "Bypass agents are pro-thrombotic — caution in elderly with vascular disease",
        ],
      },
      {
        heading: "References",
        items: [
          "Tiede et al, Blood 2020 (consensus)",
          "Collins et al, Blood 2007 (UK registry)",
          "ISTH-SSC Guidelines 2020",
        ],
      },
    ],
  },

  // ─── METABOLIC / PORPHYRIA ───────────────────────────────────────────────
  {
    id: "acute-intermittent-porphyria",
    name: "Acute Intermittent Porphyria",
    subtitle: "Heme synthesis defect — neurovisceral attack",
    category: "meta",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Stop ALL porphyrinogenic drugs (review carefully — see drugs.exeter.ac.uk)",
          "**High-dose IV glucose** — `D10 at 200–400 g/day` (1L D10 q6h) — suppresses ALA synthase",
          "Identify trigger: drug, fasting, infection, hormonal cycle, alcohol",
          "Pain control with opioids (morphine, hydromorphone — safe)",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Hemin (Panhematin)** — `3–4 mg/kg IV daily × 4 days`; specific therapy; obtain via specialty pharmacy / Recordati Rare Diseases",
          "**Glucose loading** (until hemin available) — `D10 IV at high rate`",
          "**Ondansetron** for nausea (safe)",
          "**Gabapentin** for neuropathic pain (safe)",
          "**Seizures** — levetiracetam, gabapentin (avoid phenytoin, barbiturates, carbamazepine)",
          "Hyponatremia (SIADH-like): cautious correction, hypertonic saline if severe symptoms",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "**Porphyrinogenic drugs**: barbiturates, phenytoin, carbamazepine, sulfonamides, rifampin, OCPs, ergot alkaloids",
          "Fasting — exacerbates attacks",
          "ANY new drug without checking porphyria-safe database",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "Admit all attacks (often ICU for autonomic instability/respiratory)",
          "Genetic counseling, drug list, MedicAlert bracelet",
          "Givosiran (siRNA against ALA synthase) for prophylaxis in recurrent attackers",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Autosomal dominant; deficiency of porphobilinogen deaminase (HMBS)",
          "Triggers (drugs, fasting, hormones) → induce ALA synthase → ALA + PBG accumulation → neurotoxicity",
          "85% of carriers asymptomatic (incomplete penetrance)",
          "Female:Male ~5:1; attacks tied to luteal phase (high progesterone)",
        ],
      },
      {
        heading: "Recognition (classic triad)",
        items: [
          "**Severe diffuse abdominal pain** — out of proportion to exam, no peritonism, no fever",
          "**Neurologic**: peripheral neuropathy (motor predominant, ascending), seizures, AMS, psychiatric (anxiety, agitation, hallucinations)",
          "**Autonomic**: tachycardia (universal), hypertension, sweating",
          "Hyponatremia (SIADH-like) in 40%",
          "**Port-wine urine** — darkens on standing in light",
          "Constipation, nausea, vomiting",
        ],
      },
      {
        heading: "Workup",
        items: [
          "**Spot urine PBG** (porphobilinogen) — markedly elevated during attacks; key diagnostic test",
          "Random urine ALA, total porphyrins (also elevated)",
          "Genetic testing for HMBS mutation",
          "BMP (Na low), CBC, LFTs, lipase",
          "Imaging to rule out surgical abdomen (CT abdomen)",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Often misdiagnosed as functional/conversion disorder due to negative imaging",
          "Patients have undergone unnecessary surgery (negative laparotomy)",
          "Drug list MUST be checked — many common drugs trigger attacks",
          "Latent carriers test positive PBG only during attacks — repeat testing during symptoms",
          "Acute attacks can progress to flaccid quadriplegia + respiratory failure if untreated",
        ],
      },
      {
        heading: "References",
        items: [
          "Anderson et al, Ann Intern Med 2005 (consensus)",
          "Bonkovsky et al, Hepatology 2014",
          "American Porphyria Foundation drug database (drugs-porphyria.org)",
        ],
      },
    ],
  },

  // ─── TOXICOLOGY (additions) ──────────────────────────────────────────────
  {
    id: "sodium-channel-blocker",
    name: "Sodium Channel Blocker Toxicity",
    subtitle: "Wide QRS, hypotension — bicarb is the antidote",
    category: "tox",
    tldr: [
      {
        heading: "Immediate actions",
        items: [
          "Continuous cardiac monitoring; serial 12-lead ECGs",
          "IV access ×2; airway management",
          "**Sodium bicarbonate** for QRS >100 ms, hypotension, ventricular dysrhythmia",
          "Identify offending agent (TCA, cocaine, flecainide, propranolol high-dose, bupropion, lamotrigine, carbamazepine, diphenhydramine high-dose, quinidine, propafenone)",
        ],
      },
      {
        heading: "Drugs & doses",
        items: [
          "**Sodium bicarbonate** — `1–2 mEq/kg IV bolus`, repeat until QRS narrows; then infusion `3 amps in 1L D5W at 200–250 mL/h`",
          "Goal arterial pH `7.50–7.55`; goal QRS <120 ms",
          "**Hypertonic saline** (3%) — alternative if bicarb-refractory",
          "**Lipid emulsion** (Intralipid 20%) — `1.5 mL/kg bolus over 1 min, then 0.25 mL/kg/min × 30–60 min` — for refractory shock with lipid-soluble agents (TCA, bupropion, cocaine)",
          "**Hypotension refractory** — norepinephrine first-line; epinephrine if needed",
          "**Seizures** — benzodiazepines first-line; **AVOID phenytoin** (Class IB → worsens)",
          "**Bupropion**: prolonged toxicity from extended-release; consider hemodialysis with refractory shock",
          "**ECMO/cardiopulmonary bypass** for refractory cardiac arrest with non-lipid-soluble agents",
        ],
      },
      {
        heading: "Avoid",
        items: [
          "Class IA (procainamide, quinidine), IC (flecainide, propafenone) — additive Na-channel blockade",
          "Phenytoin for seizures — Class IB Na-channel blocker",
          "Beta-blockers as anti-arrhythmic — potentiate hypotension",
        ],
      },
      {
        heading: "Dispo",
        items: [
          "ICU for any patient with QRS prolongation or hemodynamic instability",
          "Bupropion/lamotrigine: monitor ≥24h (delayed toxicity from XR formulations)",
          "Wean bicarb infusion slowly",
        ],
      },
    ],
    extended: [
      {
        heading: "Pathophysiology",
        items: [
          "Class I antiarrhythmics (Vaughan-Williams) — block fast inward Na current → slowed phase 0 depolarization → wide QRS",
          "Effect is use-dependent and pH-dependent: acidosis worsens block, alkalosis (NaHCO₃) reduces it",
          "Sodium loading + alkalinization → reverses Na-channel blockade",
          "Many non-cardiac drugs have Na-channel blocking activity at toxic doses",
        ],
      },
      {
        heading: "Common offending agents",
        items: [
          "**Cardiac**: flecainide, propafenone, quinidine, procainamide, disopyramide, lidocaine (in toxicity)",
          "**Antidepressants**: TCAs (amitriptyline, nortriptyline), bupropion (delayed)",
          "**Anticonvulsants**: carbamazepine, lamotrigine, phenytoin (paradoxically)",
          "**Antimalarials**: quinine, chloroquine, hydroxychloroquine",
          "**Recreational**: cocaine (also catecholamine surge)",
          "**Antihistamines** (diphenhydramine, doxylamine) at massive doses",
          "**Local anesthetics**: bupivacaine (LAST — see separate entry)",
        ],
      },
      {
        heading: "Recognition (ECG signs)",
        items: [
          "**QRS >100 ms** — sensitive marker of Na-channel block",
          "**Terminal R wave in aVR >3 mm** + R:S ratio >0.7 in aVR",
          "Right axis deviation of terminal QRS",
          "Brugada-like pattern (J-point elevation V1–V3)",
          "Sinus tachycardia early; bradycardia/asystole late",
          "Hypotension, AMS, seizures",
        ],
      },
      {
        heading: "Bicarb mechanism / monitoring",
        items: [
          "Sodium loading (more important): increases Na driving force, overcomes channel block",
          "Alkalinization: shifts drug from active (open-channel) to inactive form",
          "Monitor: ABG (pH 7.50–7.55), Na (don't exceed 155), K (alkalosis drops K — replete), iCa (drops with alkalosis)",
          "Continue infusion until ECG normalizes for 12–24h, then taper",
        ],
      },
      {
        heading: "Pitfalls",
        items: [
          "Cocaine: combines Na-channel block + sympathomimetic — bicarb first, then benzodiazepines for sympathomimetic features; AVOID beta-blockers alone",
          "Bupropion/lamotrigine: extended-release formulations have delayed peak (8–12h)",
          "Propranolol toxicity has both Na-channel block and beta-blockade — challenging",
          "Lipid emulsion is reserved for life-threatening cases — controversy in non-LAST; useful for highly lipid-soluble drugs",
        ],
      },
      {
        heading: "References",
        items: [
          "Levine et al, Am J Emerg Med 2014",
          "Bruccoleri & Burns, J Med Toxicol 2016",
          "Tintinalli 9e Ch 191",
          "LITFL Sodium Channel Blocker Toxicity",
        ],
      },
    ],
  },

  // ─── RHEUMATOLOGY / INFLAMMATORY ─────────────────────────────────────────
  {
    id: "polymyalgia-rheumatica",
    name: "Polymyalgia Rheumatica",
    subtitle: "Inflammatory shoulder/hip girdle pain in patients >50",
    category: "rheum",
    tldr: [
      {
        heading: "Recognize",
        items: [
          "**Age ≥50** with bilateral shoulder + hip girdle aching/stiffness ≥2 weeks",
          "**Morning stiffness >45 min** (often >1 hour); difficulty rising from chair, raising arms above shoulders",
          "Elevated **ESR ≥40 mm/h** and/or CRP — usually both markedly elevated",
          "Rapid, dramatic response to low-dose steroids (diagnostic feature)",
          "**Rule out GCA every visit** — headache, jaw claudication, vision changes, scalp tenderness, temporal artery abnormalities",
        ],
      },
      {
        heading: "Treatment",
        items: [
          "`Prednisone 12.5–25 mg PO daily` — start low; most respond within 24–72 h",
          "If concomitant GCA suspected: `Prednisone 40–60 mg PO daily` (or `methylprednisolone 1 g IV × 3 days` for vision threat)",
          "Symptoms should improve dramatically — if not, reconsider diagnosis",
          "Calcium 1200 mg + vitamin D 800 IU daily; consider bisphosphonate prophylaxis (long-course steroids)",
          "PPI for GI prophylaxis if NSAID co-use or high risk",
        ],
      },
      {
        heading: "ED disposition",
        items: [
          "Start steroids in ED if classic presentation with markedly elevated inflammatory markers",
          "Outpatient rheumatology follow-up within 1–2 weeks",
          "**Urgent ophthalmology + start high-dose steroids immediately if any GCA symptoms** — do NOT wait for biopsy",
          "Return precautions: headache, vision change, jaw pain, fever, weight loss",
        ],
      },
    ],
    extended: [
      {
        heading: "Diagnostic criteria (2012 EULAR/ACR)",
        items: [
          "Required: age ≥50, bilateral shoulder aching, elevated CRP and/or ESR",
          "Plus ≥4 points from: morning stiffness >45 min (2), hip pain/limited ROM (1), absence of RF/anti-CCP (2), absence of other joint involvement (1)",
          "Ultrasound criteria add points if available (subdeltoid bursitis, biceps tenosynovitis, glenohumeral synovitis)",
          "Score ≥4 = PMR diagnosis",
        ],
      },
      {
        heading: "Differential diagnosis",
        items: [
          "**Giant cell arteritis** — co-exists in 15–30% of PMR; PMR symptoms in 40–50% of GCA",
          "Rheumatoid arthritis (especially elderly-onset RA) — check RF, anti-CCP",
          "Inflammatory myopathy (polymyositis, dermatomyositis) — elevated CK, weakness > pain",
          "Hypothyroidism — proximal muscle aching",
          "Fibromyalgia — widespread pain but no inflammatory markers",
          "Malignancy (occult): myeloma, lymphoma — protein electrophoresis, imaging if atypical",
          "Statin myopathy, viral myalgia, drug-induced (checkpoint inhibitors)",
          "Septic arthritis, crystal arthropathy (single joint)",
        ],
      },
      {
        heading: "Giant cell arteritis — must screen at every visit",
        items: [
          "New headache (temporal, occipital), scalp tenderness, jaw claudication",
          "Vision changes — amaurosis fugax, diplopia, blindness (medical emergency, often irreversible)",
          "Temporal artery abnormalities — tenderness, nodularity, decreased pulse",
          "Constitutional symptoms — fever, weight loss, fatigue",
          "ESR usually >50 mm/h; can be normal in 10–20% — do NOT exclude with normal ESR if clinical suspicion",
          "**Start high-dose steroids immediately if suspected** — biopsy can be done within 1–2 weeks while on steroids",
          "Temporal artery biopsy or temporal artery US (halo sign) for confirmation",
        ],
      },
      {
        heading: "Workup",
        items: [
          "CBC (normocytic anemia, thrombocytosis common), ESR, CRP",
          "CK (normal in PMR; elevated in inflammatory myopathy)",
          "TSH (hypothyroidism), CMP, LFTs (alk phos sometimes mildly elevated)",
          "RF, anti-CCP (negative in PMR; helps rule out RA)",
          "SPEP/UPEP if atypical features or refractory to steroids (myeloma)",
          "Consider temporal artery US or biopsy if any GCA features",
          "Imaging not routinely required; ultrasound can show bursitis/tenosynovitis",
        ],
      },
      {
        heading: "Treatment course",
        items: [
          "Initial: prednisone 12.5–25 mg PO daily until symptoms resolve and inflammatory markers normalize (typically 2–4 weeks)",
          "Taper: reduce by 2.5 mg every 2–4 weeks to 10 mg daily, then by 1 mg every 4–8 weeks",
          "Typical total duration: 1–3 years; ~50% require >2 years of therapy",
          "Methotrexate as steroid-sparing agent if relapses or unable to taper",
          "Tocilizumab (IL-6 inhibitor) approved for refractory PMR and GCA",
          "Relapse common (>50%) during taper — increase to last effective dose",
        ],
      },
      {
        heading: "Steroid complications to monitor",
        items: [
          "Hyperglycemia/new-onset diabetes — screen at baseline and on follow-up",
          "Osteoporosis — bone density at baseline, calcium/vit D, consider bisphosphonate",
          "Hypertension, fluid retention, weight gain",
          "Infection risk — vaccinations up to date (avoid live vaccines on high-dose)",
          "Cataracts, glaucoma — yearly ophtho",
          "Adrenal suppression — never stop abruptly, always taper",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Outpatient management for classic PMR without GCA features",
          "Start steroids in ED, refer to rheumatology within 1–2 weeks",
          "Admit if: suspected GCA with vision threat, severe systemic symptoms, diagnostic uncertainty",
          "Patient education: never miss a dose, return for headache/vision change",
        ],
      },
      {
        heading: "References",
        items: ["Dasgupta et al, ACR/EULAR 2012", "Buttgereit et al, JAMA 2016", "Tintinalli 9e Ch 281", "Mackie et al, Rheumatology 2020"],
      },
    ],
  },

  {
    id: "hsp-iga-vasculitis",
    name: "Henoch-Schönlein Purpura (IgA Vasculitis)",
    subtitle: "Small-vessel IgA vasculitis — purpura, arthritis, abd pain, nephritis",
    category: "rheum",
    tldr: [
      {
        heading: "Recognize the tetrad",
        items: [
          "**Palpable purpura** — symmetric, lower extremities + buttocks (mandatory for diagnosis)",
          "**Arthritis / arthralgia** — large joints, knees/ankles, non-destructive (60–80%)",
          "**Abdominal pain** — colicky, can precede rash; intussusception risk (50–75%)",
          "**Renal involvement** — hematuria, proteinuria, HTN; usually within 4–6 weeks (20–55%)",
          "Most common <10 yo (peak 4–6); often follows URI by 1–3 weeks",
        ],
      },
      {
        heading: "ED management",
        items: [
          "Supportive — most cases self-limited (resolves 4 weeks; relapse in 1/3)",
          "Hydration, pain control with `acetaminophen` (avoid NSAIDs if renal involvement)",
          "**Check BP, UA, BMP at presentation** — screen for nephritis",
          "Abdominal exam serial — concern for intussusception or perforation",
          "**Steroids** — `Prednisone 1–2 mg/kg/day PO` (max 60–80 mg) for: severe abdominal pain, scrotal/testicular involvement, severe joint pain, GI bleeding, or significant nephritis",
          "Refractory or severe nephritis → pediatric nephrology, consider IV methylpred + cytotoxic agents",
        ],
      },
      {
        heading: "Red flags / admit if",
        items: [
          "Severe abdominal pain, bloody stools, intussusception concern",
          "Hypertension, AKI, gross hematuria, nephrotic-range proteinuria",
          "Scrotal/testicular pain (mimics torsion)",
          "CNS involvement (rare): seizures, headache, AMS",
          "Pulmonary hemorrhage (rare but life-threatening)",
          "Inability to tolerate PO, severe pain refractory to outpatient management",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Most: outpatient with close pediatric follow-up",
          "Weekly UA + BP for 1–2 months, then monthly for 6 months — late nephritis common",
          "Admit if: red flags above, severe symptoms, diagnostic uncertainty, inability to follow up",
        ],
      },
    ],
    extended: [
      {
        heading: "Epidemiology",
        items: [
          "Most common childhood vasculitis (10–20 per 100,000)",
          "Peak age 4–6 years; 90% under age 10",
          "Slight male predominance (1.2:1)",
          "Adults can be affected (worse renal prognosis); now formally called IgA vasculitis",
          "Often follows URI (group A strep, viral) by 1–3 weeks; seasonal (fall/winter peak)",
        ],
      },
      {
        heading: "Pathophysiology",
        items: [
          "IgA1-mediated leukocytoclastic vasculitis of small vessels",
          "Galactose-deficient IgA1 forms immune complexes → deposit in vessel walls",
          "Triggers: infection, drugs, vaccines, malignancy (adults)",
          "Skin: dermal vessel deposition → palpable purpura",
          "GI: submucosal vessel involvement → pain, bleeding, edema, intussusception",
          "Renal: mesangial IgA deposition (similar to IgA nephropathy) → variable severity",
        ],
      },
      {
        heading: "Diagnostic criteria (EULAR/PRINTO/PRES 2010)",
        items: [
          "**Required: palpable purpura** (not 2/2 thrombocytopenia) predominantly on lower limbs",
          "Plus ≥1 of:",
          "  • Abdominal pain (diffuse, colicky)",
          "  • Histology: leukocytoclastic vasculitis with IgA deposition (or proliferative GN with IgA)",
          "  • Arthritis or arthralgia (acute, any joint)",
          "  • Renal involvement (proteinuria or hematuria)",
        ],
      },
      {
        heading: "Differential diagnosis",
        items: [
          "**Meningococcemia** — must rule out; purpura + fever + ill-appearing",
          "ITP, TTP, DIC — check platelets, coags",
          "Hemolytic uremic syndrome (HUS) — schistocytes, thrombocytopenia, AKI",
          "Acute hemorrhagic edema of infancy (AHEI) — <2 yo, cockade purpura, well-appearing",
          "Other vasculitides — ANCA-associated, polyarteritis nodosa",
          "Septic emboli, endocarditis (especially adults)",
          "Drug-induced vasculitis",
          "Child abuse — pattern, location of bruising",
        ],
      },
      {
        heading: "Abdominal complications",
        items: [
          "**Intussusception** — most common surgical complication; usually ileoileal (not ileocolic like idiopathic) — air enema may miss it; **ultrasound preferred**",
          "GI bleeding — occult to massive; hematochezia, melena",
          "Bowel ischemia, perforation, infarction (rare)",
          "Pancreatitis, cholecystitis (rare)",
          "Protein-losing enteropathy",
          "Steroids reduce pain and may reduce intussusception risk",
        ],
      },
      {
        heading: "Renal involvement (HSP nephritis)",
        items: [
          "20–55% of children, higher in adults",
          "Onset within 4–6 weeks of disease in 85%; can be delayed up to 6 months — follow UA weekly × 1 month, then monthly × 6 months",
          "Spectrum: isolated microscopic hematuria → nephritic/nephrotic syndrome → rapidly progressive GN",
          "Most resolve spontaneously; ~5% develop chronic kidney disease",
          "Indications for biopsy: significant proteinuria, RPGN, persistent renal dysfunction",
          "Severe nephritis: pediatric nephrology, methylprednisolone pulse + immunosuppression (azathioprine, MMF, cyclophosphamide)",
        ],
      },
      {
        heading: "Workup",
        items: [
          "CBC (platelets — should be normal/elevated in HSP, low platelets = NOT HSP), coags",
          "BMP — Cr, BUN, electrolytes (renal involvement)",
          "**Urinalysis** — hematuria, proteinuria, RBC casts",
          "Spot urine protein/creatinine ratio if proteinuria",
          "C3/C4 — typically normal (helps differentiate from lupus nephritis)",
          "ASO titer, throat culture if recent pharyngitis",
          "Blood cultures if febrile or toxic (rule out meningococcemia)",
          "Abdominal US if abdominal pain — intussusception",
          "Skin biopsy rarely needed if classic presentation; DIF shows IgA in vessel walls",
        ],
      },
      {
        heading: "Treatment details",
        items: [
          "**Supportive care is mainstay** — hydration, rest, analgesia",
          "Acetaminophen for pain; NSAIDs OK if no renal involvement",
          "Steroids do NOT prevent renal disease but reduce duration of abdominal pain and joint symptoms",
          "**Indications for steroids**: severe abdominal pain, GI bleeding, severe joint pain, scrotal involvement, significant nephritis",
          "Prednisone 1–2 mg/kg/day × 1–2 weeks then taper",
          "Severe nephritis: IV methylprednisolone pulse 30 mg/kg (max 1g) × 3 days, then oral steroids + immunosuppression",
          "ACE inhibitor / ARB for persistent proteinuria after acute phase",
        ],
      },
      {
        heading: "Prognosis",
        items: [
          "Excellent in children — 94% complete recovery",
          "Self-limited; resolves in 4–6 weeks in most",
          "**Recurrence in ~30%** (typically milder, within 4 months)",
          "Chronic kidney disease in 1–5% of children, 10–30% of adults",
          "Adults: worse renal prognosis, often need biopsy and immunosuppression",
          "ESRD rare (<1% pediatric); typically with severe initial nephritis",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "Outpatient if: stable, tolerating PO, no red flags, reliable follow-up",
          "Admit if: severe abd pain, GI bleeding, AKI/HTN, scrotal involvement, intussusception",
          "Pediatric follow-up within 1 week",
          "Long-term BP and UA monitoring × 6 months minimum",
          "Adults: nephrology referral baseline; higher threshold for biopsy",
        ],
      },
      {
        heading: "References",
        items: ["Ozen et al, EULAR/PRINTO/PRES 2010", "Trnka, J Paediatr Child Health 2013", "Nelson 21e Ch 192", "Tintinalli 9e Ch 119"],
      },
    ],
  },

  {
    id: "lightning-strike",
    name: "Lightning Strike",
    subtitle: "Reverse triage — resuscitate the apneic/pulseless first",
    category: "env",
    tldr: [
      {
        heading: "Reverse triage",
        items: [
          "**Resuscitate the apneic/pulseless FIRST** — opposite of standard mass-casualty triage",
          "Lightning arrest is usually primary asystole (often self-resolves) or hypoxic arrest from prolonged respiratory paralysis — both highly survivable with prompt CPR/ventilation",
          "Living victims rarely deteriorate acutely; concentrate resources on those in arrest",
        ],
      },
      {
        heading: "Immediate ED actions",
        items: [
          "Standard ACLS — defibrillate VF/pVT; high-quality CPR; epinephrine per ACLS for asystole/PEA",
          "C-spine precautions until cleared (blast/fall mechanism, opisthotonic contraction)",
          "**Do NOT volume-load like high-voltage electrical** — deep tissue injury and rhabdo are uncommon; aggressive fluids worsen cerebral edema",
          "`IVF`: titrate to UOP `0.5–1 mL/kg/h` adults (`1–2 mL/kg/h` pediatric); only escalate if true rhabdo, large burns, or crush component",
          "Continuous cardiac monitoring **× 24 h** even if asymptomatic at presentation",
        ],
      },
      {
        heading: "Targeted exam",
        items: [
          "Full skin exam for **Lichtenberg figures** (pathognomonic fern/feather-like erythema; not true burns; fade within 24 h)",
          "**TM exam** — rupture in ~50%; CSF otorrhea suggests basilar skull fracture",
          "Neuro exam — document **keraunoparalysis** (transient cold, mottled, pulseless, paralyzed limbs that resolve over hours — do not mistake for compartment syndrome)",
          "Ocular exam (acute corneal injury; cataracts develop weeks–years later — document baseline)",
          "Look for entry/exit burns at contact points, especially under metal jewelry, zippers, watches",
        ],
      },
      {
        heading: "Workup",
        items: [
          "ECG + troponin, CBC, BMP, CK/myoglobin, UA (rhabdo screen), coags, lactate",
          "CT head if AMS, LOC, focal deficit, seizure, or unwitnessed event",
          "Skeletal imaging for fall/blast-mechanism injury",
          "Pregnancy test in any female of reproductive age; fetal monitoring if pregnant",
        ],
      },
    ],
    extended: [
      {
        heading: "Mechanisms of injury",
        items: [
          "**Direct strike** (3–5%): highest mortality; current passes through victim",
          "**Contact** (3–5%): victim touching an object that is struck (tree, fence, phone, plumbing)",
          "**Side flash / splash** (~30%): current jumps from primary target to nearby victim",
          "**Ground current / step voltage** (~50%, most common): current spreads radially through earth; potential difference between feet drives current up one leg and down the other",
          "**Upward streamer**: current rises from victim toward storm cloud without completing the main bolt",
          "**Blunt / blast trauma**: shockwave from rapid air heating (thunder) — TM rupture, fractures, contusions, blown-off clothing",
        ],
      },
      {
        heading: "Why lightning ≠ high-voltage electrical injury",
        items: [
          "**Flashover phenomenon**: most current travels OVER the skin (in 1–2 ms), not through deep tissues → superficial burns, less internal injury",
          "Rhabdomyolysis and compartment syndrome are **uncommon** (vs. routine in high-voltage AC)",
          "Aggressive Parkland-style fluid resuscitation is NOT indicated and is harmful",
          "Fasciotomy/amputation rarely needed",
          "Different beast clinically — do not extrapolate from electrical-burn protocols",
        ],
      },
      {
        heading: "Cardiac effects",
        items: [
          "Massive DC countershock → simultaneous myocardial depolarization → **asystole**",
          "Cardiac automaticity often resumes spontaneously within minutes",
          "**Secondary arrest**: medullary respiratory center paralysis → prolonged apnea → hypoxic VF/asystole if no ventilation provided",
          "Arrhythmias: sinus tach, AF, transient ST/T changes, prolonged QT; troponin elevation common but usually small",
          "Stunned myocardium / takotsubo-pattern LV dysfunction reported — get an echo if hemodynamically unstable",
        ],
      },
      {
        heading: "Neurologic effects",
        items: [
          "**Keraunoparalysis (Charcot paralysis)**: transient cold, mottled, pulseless, often lower-extremity paralysis from autonomic dysregulation + vascular spasm — resolves over hours; do NOT mistake for compartment syndrome or arterial injury",
          "LOC, amnesia, confusion, agitation are common acutely",
          "Seizures, intracerebral or subarachnoid hemorrhage possible — low threshold for non-contrast CT head",
          "**Delayed sequelae** ('post-lightning syndrome'): peripheral neuropathy, chronic pain, sleep disturbance, neurocognitive deficits, depression/PTSD",
        ],
      },
      {
        heading: "Cutaneous findings",
        items: [
          "**Lichtenberg figures**: pathognomonic ferning/feathering erythema from electron shower along skin; not true burns; fade within 24 h",
          "Superficial linear / punctate burns at sweat lines or where metal jewelry/zippers/coins were worn",
          "Full-thickness burns rare except at direct contact points",
          "Clothing may be blown off — steam from instantaneous sweat vaporization",
        ],
      },
      {
        heading: "Other organ effects",
        items: [
          "**TM rupture in ~50%** — also ossicular disruption, basilar skull fracture, sensorineural hearing loss, vertigo",
          "**Ocular**: corneal abrasion acutely; **cataracts in up to 6%** (weeks–years later — schedule ophthalmology follow-up)",
          "Musculoskeletal: fractures/dislocations from opisthotonic contraction or fall (shoulder dislocations classic)",
          "Pregnancy: fetal demise common with maternal cardiac arrest; otherwise often well-tolerated — fetal monitoring still indicated",
        ],
      },
      {
        heading: "Disposition",
        items: [
          "**Admit / telemetry × 24 h** if: any LOC, arrhythmia, abnormal ECG, burn, neuro deficit, persistent symptoms, pregnancy, or direct strike mechanism",
          "Discharge possible if: brief witnessed strike, normal ECG, normal exam, no LOC, no neuro/cardiac symptoms, reliable follow-up",
          "Outpatient follow-up: ophthalmology, audiology, neurology / PM&R for cognitive sequelae",
          "Counsel about delayed symptoms — cataracts, neurocognitive deficits, chronic pain, PTSD",
        ],
      },
      {
        heading: "Prognosis & pearls",
        items: [
          "Overall mortality ~10% — far lower than high-voltage electrical",
          "Cardiac arrest survival much higher than other arrest etiologies **if early CPR + ventilation** — this is the basis for reverse triage",
          "Long-term morbidity (neurocognitive, chronic pain, PTSD) is significant in survivors — set expectations early",
          "Lightning kills via cardiac/respiratory arrest, NOT burns — fluid and burn management are secondary considerations",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 217", "Davis et al, WMS Practice Guidelines (Wilderness Environ Med 2014)", "Cooper & Andrews, UpToDate: Environmental & weapon-related electrical injuries", "LITFL Lightning Injury"],
      },
    ],
  },

  {
    id: "scuba-diving-injuries",
    name: "Scuba Diving Injuries",
    subtitle: "Decompression illness, AGE, barotrauma",
    category: "env",
    tldr: [
      {
        heading: "Recognize decompression illness (DCI)",
        items: [
          "**DCI = DCS + AGE** — treat the same in the ED; do not delay HBO to differentiate",
          "**Any new neuro/cardiopulmonary symptom within 24 h of a dive is DCI until proven otherwise** — even 'just fatigue' or paresthesias",
          "**AGE**: dramatic — LOC, stroke-like deficit, seizure within minutes of surfacing (pulmonary barotrauma → arterial gas)",
          "**DCS Type I**: joint pain ('bends'), skin (cutis marmorata), lymphatic — usually delayed hours",
          "**DCS Type II**: spinal cord (low back pain → paraplegia, urinary retention), brain, inner ear (vertigo, hearing loss), pulmonary ('chokes')",
        ],
      },
      {
        heading: "Immediate stabilization",
        items: [
          "**100% FiO₂ via non-rebreather at 15 L/min** — washes out nitrogen, accelerates bubble resorption; continue until HBO available",
          "**Supine flat** — NOT Trendelenburg / NOT left lateral (Durant) — old teaching, now contraindicated (raises ICP, worsens cerebral edema)",
          "`IVF`: NS or LR `1 L bolus` then maintenance — divers are dehydrated (immersion diuresis + nitrogen-induced osmotic shifts); target UOP `1–2 mL/kg/h`",
          "Avoid PPV/intubation if possible (worsens pulmonary barotrauma); if needed, use lowest pressures and PEEP",
          "Treat pneumothorax with finger thoracostomy / chest tube BEFORE recompression",
        ],
      },
      {
        heading: "Recompression / hyperbaric (HBO)",
        items: [
          "**DAN (Divers Alert Network) Emergency Hotline: +1-919-684-9111** — 24/7; coordinates chamber location and transfer",
          "**US Navy Treatment Table 6** is standard for DCI — 100% O₂ at 2.8 ATA",
          "Earlier HBO = better outcome but **benefit exists even days later** — never refuse transfer based on delay alone",
          "**Transport: stay below 1000 ft (300 m) altitude** OR use pressurized aircraft maintained at sea-level cabin (1 atm) — unpressurized flight worsens bubbles",
        ],
      },
      {
        heading: "Targeted workup",
        items: [
          "Full neuro exam (incl. cerebellar, gait, sensation, **post-void residual / bladder scan** for spinal DCS)",
          "CXR — pneumothorax, pneumomediastinum, subcutaneous emphysema (pulmonary barotrauma)",
          "ECG, troponin (AGE can cause coronary embolism)",
          "CBC, BMP, lactate, coags, CK; ABG if respiratory symptoms",
          "CT chest if pulmonary barotrauma suspected; CT head before transfer if AMS / focal deficit (but **do not delay HBO** for routine imaging)",
        ],
      },
    ],
    extended: [
      {
        heading: "Physics & pathophysiology",
        items: [
          "**Boyle's law** (P × V = constant): gas in closed spaces expands on ascent → barotrauma (lung, ear, sinus, GI, mask, tooth)",
          "**Henry's law**: dissolved gas (N₂) leaves solution when ambient pressure drops faster than off-gassing → bubble formation → DCS",
          "Bubbles cause: mechanical obstruction (arterial, venous, lymphatic), endothelial injury, platelet activation, complement activation, inflammatory cascade",
          "Risk factors: deep/long dives, rapid ascent, missed decompression stops, PFO (paradoxical arterial bubbles), dehydration, obesity, post-dive exercise, hot showers, flying after diving",
        ],
      },
      {
        heading: "Arterial gas embolism (AGE)",
        items: [
          "**Most lethal dive injury** — from pulmonary barotrauma; alveolar rupture → gas into pulmonary veins → systemic arterial circulation",
          "Classic: panicked/rapid ascent with breath-holding (CESA gone wrong); can occur from as little as 1–2 m if breath held",
          "**LOC or stroke-like deficit within 10 min of surfacing = AGE until proven otherwise**",
          "Brain most affected (buoyant bubbles rise into cerebral circulation when supine/upright) — hemiplegia, aphasia, seizure, coma",
          "Coronary embolism → ACS, arrest; spinal cord, retinal artery also possible",
          "**HBO is definitive treatment** — even days later",
        ],
      },
      {
        heading: "Decompression sickness — Type I (mild)",
        items: [
          "**Musculoskeletal ('bends')**: deep, dull, poorly localized joint pain (shoulder, elbow, knee, hip); worse with movement; **relief with BP cuff inflation to 150–200 mmHg over joint** is classic but unreliable",
          "**Cutaneous**: pruritus, mottled bluish-red rash (cutis marmorata) — often trunk; harbinger of more severe DCS",
          "**Lymphatic**: localized swelling, peau d'orange",
          "Onset: usually 1–6 h after surfacing; >90% within 24 h",
          "Even Type I gets HBO — progression to Type II possible",
        ],
      },
      {
        heading: "Decompression sickness — Type II (serious)",
        items: [
          "**Spinal cord (most common Type II)**: low/mid back pain ('girdle pain'), ascending paresthesias, weakness → paraplegia, urinary retention; lower thoracic > cervical; **check post-void residual**",
          "**Cerebral**: AMS, ataxia, visual changes, headache, seizure",
          "**Inner ear ('staggers')**: vertigo, nausea, sensorineural hearing loss, tinnitus — must distinguish from inner-ear barotrauma (which contraindicates HBO unless treated)",
          "**Pulmonary ('chokes')**: substernal chest pain, dry cough, dyspnea, hypoxia → cardiovascular collapse — venous gas overwhelming pulmonary circulation",
          "Constitutional: profound fatigue is an early/sole symptom — take seriously",
        ],
      },
      {
        heading: "Pulmonary barotrauma",
        items: [
          "Mechanism: rapid ascent + breath-holding (or air-trapping from asthma/bullae) → alveolar overdistension and rupture",
          "Spectrum: subcutaneous emphysema (neck crepitus, voice change) → pneumomediastinum (Hamman's crunch, retrosternal chest pain) → pneumothorax → **AGE**",
          "Tension pneumothorax: needle/finger decompression then chest tube BEFORE recompression — pneumo will expand in chamber on decompression phase",
          "Asthma and bullae are historical contraindications to diving — controversial currently, but increase risk",
        ],
      },
      {
        heading: "Middle ear & sinus squeeze (most common dive injury)",
        items: [
          "**Middle ear squeeze (barotitis media)**: failure to equalize during descent → TM retraction, hemorrhage, possible rupture — pain, hearing loss, vertigo, blood in ear",
          "Tx: decongestants, analgesia, avoid diving until resolved; ENT follow-up if TM rupture",
          "**Inner ear barotrauma**: forceful Valsalva → round/oval window rupture → SNHL, vertigo, tinnitus — **must distinguish from inner-ear DCS** (different treatments; inner-ear barotrauma is a contraindication to recompression unless surgically repaired)",
          "**Sinus squeeze**: pain over affected sinus, epistaxis; conservative tx",
          "**Mask / tooth / GI squeeze**: usually minor",
        ],
      },
      {
        heading: "Other diving injuries",
        items: [
          "**Nitrogen narcosis ('rapture of the deep')**: N₂ anesthetic effect at depth (>30 m) — euphoria, impaired judgment; resolves immediately on ascent; not an ED problem",
          "**Oxygen toxicity (CNS)**: seizure from high pO₂ (tech/rebreather diving); resolves with surfacing; **VENTID** prodrome (Vision, Ears, Nausea, Twitching, Irritability, Dizziness)",
          "**Immersion pulmonary edema (IPE)**: non-cardiogenic pulmonary edema from cold + exertion + negative-pressure breathing; presents as dyspnea/hemoptysis after dive; supportive care; recurrence common",
          "**Drowning / near-drowning**: standard ARDS-style management; consider underlying medical cause (arrhythmia, MI, hypoglycemia, seizure, AGE)",
          "**Marine envenomations**: see Envenomations entry",
        ],
      },
      {
        heading: "Disposition & transport",
        items: [
          "**All DCI → HBO chamber** via DAN coordination — even mild Type I, even delayed presentations",
          "**Transport altitude < 1000 ft (300 m)** ground; pressurized aircraft at 1 atm cabin for air transport (military C-130 / specialized; commercial jets cabin = ~6000–8000 ft = unsafe)",
          "Continue 100% O₂, IVF, supine throughout transport",
          "**Post-HBO**: admit for observation; recurrence possible; arrange diving medicine follow-up; fit-to-dive evaluation before return to diving",
          "Barotrauma without DCI: ENT follow-up; no diving until resolved + cleared",
        ],
      },
      {
        heading: "Prevention & post-dive rules",
        items: [
          "**No flying after diving**: 12 h after single no-decompression dive; 18 h after multiple/repetitive dives; 24+ h after any decompression dive (DAN guidelines)",
          "Slow ascent (≤9 m/min) + safety stop (3–5 min at 5 m / 15 ft)",
          "Hydration, avoid alcohol pre/post dive, avoid hot tubs immediately post-dive",
          "PFO screening for unexplained / recurrent DCS",
        ],
      },
      {
        heading: "References",
        items: ["Tintinalli 9e Ch 216", "Vann et al, Lancet 2011 (Decompression Illness)", "DAN Diving Emergency Procedures", "US Navy Diving Manual Rev 7", "LITFL Decompression Illness / Arterial Gas Embolism"],
      },
    ],
  },
];

export default DIAGNOSES;
