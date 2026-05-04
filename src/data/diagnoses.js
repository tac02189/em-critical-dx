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
];

export default DIAGNOSES;
