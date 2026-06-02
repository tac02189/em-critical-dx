# Pocket Resus — Full Dosing & Medication Cross-Check

**Date:** 2026-06-02
**Scope:** Every medication and dose in the app — **111 critical-diagnosis cards · 213 antibiotic regimens · 57 continuous infusions** (≈380 entries, ~2,000 individual dose statements).
**Method:** 22 parallel clinical-pharmacist review agents (one per content slice) audited every adult + pediatric dose, unit, route, interval, max cap, concentration mix, and drug–indication match against authoritative references (Tintinalli 9e, Sanford, IDSA, CDC STI 2021, AHA/ACLS 2020, ASRA, Surviving Sepsis, FDA labels, AAP Red Book, etc.). Every high-severity finding was then **independently re-verified** by a second agent against primary sources (FDA/DailyMed labels, CDC pages) to eliminate false positives.

> ⚠️ **This is a decision-support aid, not a substitute for faculty sign-off.** The corrections below are sourced and verified, but please confirm each against your own reference before editing bedside-facing content.

> ✅ **Status (2026-06-02): all corrections below were applied to the data files, validated (modules parse; 111 dx / 213 abx / 57 drips intact; build clean), and deployed to production** (pocket-resus.web.app + em-critical-dx.web.app), tagged `v2.8.1`. **One exception:** the Tier-2 strongyloidiasis albendazole `× 7 days` item was **intentionally left unchanged** — the original is CDC-correct (that flag was a false positive caught during application, alongside the rat-bite-fever one).

---

## Headline result

| | Confirmed | Notes |
|---|---|---|
| 🔴 **Critical** (could cause serious harm) | **2** | 1000× concentration label; 2× thrombolytic prep |
| 🟠 **Major** (clearly wrong dose/interval/cap) | **6** | all FDA/CDC/IDSA-verified |
| 🟡 **Minor** (suboptimal / outdated / missing cap) | **~16** | guideline currency, intervals, peds caps |
| 🔵 **Note** (defensible-as-written / wording) | **~30** | awareness only, mostly no change |
| ❌ **Refuted false-positive** | **1** | rat-bite-fever penicillin (verification caught it) |

**Bottom line:** The app is, overall, **clinically sound and carefully written.** The toxicology/antidote set and the time-critical resuscitation cards (status epilepticus, stroke, STEMI, sepsis, meningitis, anaphylaxis, DKA) were essentially flawless. The defects are concentrated in a handful of less-common regimens and two concentration-label typos. **8 items (Tier 1) warrant correction before bedside reliance.**

---

## TIER 1 — Confirmed corrections (fix these)

### 🔴 1. Angiotensin II — concentration label is 1000× too low
- **File:** `src/data/drips.js` · entry `angiotensin-ii` · **line ~955**
- **Current:** `"2.5 mg/500 mL = 5 ng/mL"`
- **Problem:** 2.5 mg = 2,500,000 ng ÷ 500 mL = **5000 ng/mL**, not 5 ng/mL. A clinician hand-calculating a manual mix/rate from "5 ng/mL" would be off by 1000× → massive overdose (severe HTN, thrombosis). (The ng/kg/min dosing fields are correct, so pump-programmed dosing is safe — only the printed concentration is wrong.)
- **Fix:** `"2.5 mg/500 mL = 5000 ng/mL (5 mcg/mL)"`
- **Source:** GIAPREZA FDA label (final conc 5,000 or 10,000 ng/mL). · Verified ✔

### 🔴/🟠 2. Alteplase (tPA) — reconstituted concentration wrong
- **File:** `src/data/drips.js` · entry `alteplase` · **line ~523**
- **Current:** `"100 mg vial (2 mg/mL after reconstitution)"`
- **Problem:** Activase 100 mg reconstitutes with 100 mL sterile water = **1 mg/mL** (50 mg vial likewise → 1 mg/mL; may dilute to 0.5 mg/mL). It is never 2 mg/mL. Trusting "2 mg/mL" → half the intended volume drawn for any aliquot. High-stakes, time-critical drug. (Weight-based mg doses elsewhere are correct.)
- **Fix:** `"100 mg vial reconstituted with 100 mL sterile water = 1 mg/mL (may dilute 1:1 with NS/D5W to 0.5 mg/mL)"`
- **Source:** Genentech Activase PI §2.4. · Verified ✔

### 🟠 3. Ophthalmia neonatorum — ceftriaxone cap too low (sight-threatening infection)
- **File:** `src/data/antibiotics.js` · entry `ophthalmia-neonatorum` · **line ~3780**
- **Current:** ceftriaxone `"25–50 mg/kg IV/IM single dose (max 125 mg)"`
- **Problem:** CDC 2021 specifies **max 250 mg** for gonococcal ophthalmia neonatorum. At 50 mg/kg, any neonate ≥2.5 kg is capped below the intended dose for a globe-perforating infection. (125 mg is the cap for some *uncomplicated* infant GC scenarios, not ophthalmia.)
- **Fix:** `"25–50 mg/kg IV/IM single dose (max 250 mg)"` — keep cefotaxime 100 mg/kg single dose alternative when ceftriaxone contraindicated.
- **Source:** CDC STI Treatment Guidelines 2021 — Gonococcal Infections Among Neonates. · Verified ✔

### 🟠 4. Young infant fever (29–60 d) — meningitis ceftriaxone not escalated
- **File:** `src/data/antibiotics.js` · entry `infant-fever` · **lines ~1474–1475**
- **Current:** "meningitis confirmed" row = `"Above + 60 mg/kg/day div q6h"`, where "Above" anchors ceftriaxone to the bacteremia dose **50 mg/kg q24h**.
- **Problem:** Confirmed bacterial meningitis needs ceftriaxone **100 mg/kg/day** (50 mg/kg q12h or 100 mg/kg q24h, max 4 g). Inheriting the 50 mg/kg q24h dose under-treats meningitis by half — exactly where the higher dose matters most. (Vancomycin 60 mg/kg/day div q6h is correct.)
- **Fix:** Make the meningitis-confirmed row explicit: ceftriaxone **100 mg/kg/day (50 mg/kg IV q12h, max 4 g) + vancomycin 60 mg/kg/day div q6h**.
- **Source:** IDSA bacterial meningitis; AAP Red Book. · Verified ✔

### 🟠 5. Leishmaniasis — miltefosine cap underdoses adults
- **File:** `src/data/antibiotics.js` · entry `leishmaniasis` · **line ~3513**
- **Current:** `"2.5 mg/kg/day PO div BID × 28 days (max 50 mg BID)"`
- **Problem:** "50 mg BID" (100 mg/day) only fits 30–44 kg. Per the IMPAVIDO label, patients **≥45 kg (most adults) need 50 mg TID (150 mg/day)**. A 70 kg adult at 50 mg BID gets ~1.4 mg/kg/day — subtherapeutic for visceral/mucosal disease → relapse risk. "div BID" is also wrong for the ≥45 kg band (label divides TID).
- **Fix:** `"2.5 mg/kg/day PO with food × 28 days — 50 mg BID (30–44 kg); 50 mg TID (≥45 kg); max 150 mg/day"`
- **Source:** IMPAVIDO (miltefosine) FDA label §2. · Verified ✔

### 🟠 6. Tumor lysis syndrome — allopurinol exceeds max daily dose
- **File:** `src/data/diagnoses.js` · entry `tumor-lysis` · **line ~3189**
- **Current:** `"Allopurinol (prophylaxis/mild-moderate) — 300 mg PO TID"`
- **Problem:** 300 mg TID = **900 mg/day**, above the FDA-labeled oral max of **800 mg/day**. Standard TLS dosing is 100 mg/m² q8h (max 800/day) or 300 mg daily titrating to ~600 mg/day — and oxypurinol accumulates in the renal impairment typical of TLS.
- **Fix:** `"300 mg PO daily (titrate to max 800 mg/day; or 100 mg/m² PO q8h); reduce in renal impairment"`
- **Source:** Zyloprim (allopurinol) FDA label; Coiffier TLS guideline. · Verified ✔

### 🟠 7. Hemolytic uremic syndrome — eculizumab dose not the labeled regimen
- **File:** `src/data/diagnoses.js` · entry `hus` · **line ~2669**
- **Current:** atypical HUS `"eculizumab (5 mg/kg IV weekly ×4, then maintenance)"`
- **Problem:** Eculizumab aHUS dosing is **not** mg/kg. Adult/≥40 kg = **900 mg IV weekly ×4, then 1200 mg IV q2 weeks**; pediatric is weight-banded flat dosing (300–900 mg). "5 mg/kg" (~350 mg in a 70 kg adult) is ~⅓ of the induction dose → inadequate complement blockade.
- **Fix:** `"eculizumab — adult/≥40 kg 900 mg IV weekly ×4, then 1200 mg q2wk; peds weight-banded (per nephrology). Vaccinate/cover for meningococcus."`
- **Source:** Soliris (eculizumab) FDA label. · Verified ✔ *(ED risk is low — specialist-initiated — but the printed dose is inaccurate.)*

### 🟠 8. Diphtheria — procaine penicillin interval doubles daily exposure
- **File:** `src/data/antibiotics.js` · entry `diphtheria` · **line ~2660**
- **Current:** `"Penicillin G — Procaine 600,000 units IM q12h × 14 days"`
- **Problem:** Flat 600,000 units is a **once-daily (q24h)** dose per CDC and the Pfizer label ("300,000–600,000 units daily"). q12h doubles the intended daily exposure. (Antitoxin is the primary therapy, so consequence is low — but the interval is wrong.)
- **Fix:** `"Procaine penicillin G 600,000 units IM q24h (>10 kg); 300,000 units IM q24h (≤10 kg) × 14 days"`
- **Source:** CDC diphtheria clinical guidance; Pfizer/FDA label. · Verified ✔

---

## TIER 2 — Minor discrepancies (worth fixing; not dangerous)

| # | File · entry · line | Issue | Suggested fix | Source |
|---|---|---|---|---|
| 1 | `drips.js` · `hydromorphone` · ~55 | start `0.2–0.5 mg/h` sits below stated range floor `0.5 mg/h` (internal inconsistency) | widen range to `0.2–3 mg/h` | Lexicomp |
| 2 | `antibiotics.js` · `sinusitis` · ~226 | adult amox-clav `875 mg BID` is the lower-tier choice | prefer high-dose `2 g/125 mg BID` for risk groups | IDSA ABRS 2012 |
| 3 | `antibiotics.js` · `otitis-media` · ~232 | adult amox `500 mg TID` is standard-dose (peds correctly high-dose) | consider `875 mg–1 g TID` for DRSP | AAFP/Sanford |
| 4 | `antibiotics.js` · `strep-pharyngitis` · ~238 | peds cephalexin missing per-dose cap | add `(max 500 mg/dose)` | CDC/IDSA GAS |
| 5 | `antibiotics.js` · `orbital-cellulitis` · ~290 | ceftriaxone `q24h` low-intensity if intracranial extension risk | consider `2 g q12h` (peds 50 mg/kg q12h, max 4 g) | peds ortho/orbital protocols |
| 6 | `antibiotics.js` · `necrotizing-fasciitis` · ~296 | pip-tazo `q8h` borderline for nec-STI | prefer `4.5 g q6h` (or extended infusion) | IDSA SSTI 2014 |
| 7 | `antibiotics.js` · `cryptococcal-meningitis` · ~386 | consolidation fluconazole `800 mg` is WHO; IDSA = 400 mg | `400 mg daily` (note 800 mg WHO alt) | IDSA 2010 |
| 8 | `antibiotics.js` · `mycotic-aneurysm` · ~437 | ceftriaxone `2 g q12h` is the meningitic interval for an endovascular infection | `2 g q24h` (reserve q12h for CNS) | Sanford |
| 9 | `antibiotics.js` · `prosthetic-valve-endocarditis` · ~645 | no stop-point for gentamicin (risks full-course aminoglycoside tox) | add "gentamicin **first 2 weeks only**" | AHA IE 2015 |
| 10 | `antibiotics.js` · `genital-ulcer-lgv-chancroid` · ~605 | erythromycin base `QID` is the pre-2010 regimen | `500 mg PO TID × 7 d` | CDC STI 2021 |
| 11 | `antibiotics.js` · `echinococcosis` · ~613 | praziquantel `40 mg/kg/day` implies daily | `40 mg/kg once weekly` (adjunct to albendazole) | WHO-IWGE |
| 12 | `antibiotics.js` · `strongyloidiasis` · ~549 | albendazole alt `× 7 days` is long | `400 mg BID × 3 days`; ivermectin preferred | CDC DPDx |
| 13 | `antibiotics.js` · `cutaneous-larva-migrans` · ~555 | albendazole upper bound `7 days` generous | `400 mg daily × 3 days` | CDC DPDx |
| 14 | `antibiotics.js` · `diphtheria` · ~487 | peds erythromycin missing daily cap | add `(max 2 g/day)` | CDC/Red Book |
| 15 | `diagnoses.js` · `naegleria` · ~824 | intrathecal ampho B omits step-down on the qod phase | `1.5 mg q24h ×2 d, then 1 mg qod ×8 d` | CDC PAM protocol |
| 16 | `antibiotics.js` · `infant-fever` (ampicillin) · ~1480 | Listeria ampicillin `200 mg/kg/day` is non-meningitic | `300 mg/kg/day (75 mg/kg q6h)` if Listeria *meningitis* | IDSA/Red Book |

---

## TIER 3 — Notes / wording / awareness (mostly no change needed)

**Worth a quick wording fix (clarity/safety, not dose):**
- `diagnoses.js` `tca-overdose` — duplicate "Physostigmine" bullet in the Avoid list (editorial cleanup).
- `antibiotics.js` `endocarditis-empiric` — daptomycin note "not for pulmonary IE" is misleading; daptomycin is inactivated by **surfactant → not for pneumonia**, but is fine for right-sided IE. Reword to "not for pneumonia/lung infection."
- `antibiotics.js` `diabetic-foot` — ertapenem note "avoid Pseudomonas coverage" is ambiguous; mean "lacks Pseudomonas activity — don't use if Pseudomonas risk."
- `antibiotics.js` `neurocysticercosis` — emphasize corticosteroids **before/with** antiparasitic (not just "co-administer"); funduscopic exam to exclude intraocular cysts first.
- `diagnoses.js` `smoke-inhalation` — pregnancy HBO threshold stated two ways in one bullet (>20% and >15%); pick one (commonly >15%).

**Reviewed and defensible as written (logged for transparency — no change):**
dexmedetomidine titration interval · propofol PRIS-vs-max framing · norepinephrine→vasopressin add-on threshold · naloxone-infusion example mixes (different strengths) · hypertonic-saline 6–8 mEq/L/24 h (intentionally conservative) · esmolol 300 & nitroprusside max-rate ceilings · octreotide variceal range · pentobarbital maintenance ceiling · argatroban critically-ill caveat · insulin K⁺ 3.5 vs ADA 3.3 · DIC cryoprecipitate per-unit yield · HACE/HAPE salmeterol (WMS-2024 currency) · severe-malaria artesunate "×7 d" wording · tetanus TIG 500 IU vs 3,000–6,000 IU & Mg load currency · AIP glucose loading · HAE Cinryze fixed-dose nuance · vancomycin AUC-vs-trough (meningitis) · aspirin 162–325 range · DKA peds insulin lower bound · oral-NAC label under "IV 21-h" heading · DTs untreated-mortality figure · anaphylaxis epi infusion expressed mcg/kg/min · TSS clindamycin/linezolid redundancy · multiple antiviral/antiparasitic/bioterror regimens explicitly **verified correct**.

---

## ❌ Refuted (false-positive caught in verification)

- `antibiotics.js` `rat-bite-fever` — Penicillin G `200,000 units IV q4h` was flagged as a "10× underdose." **Refuted.** This is the published regimen for *uncomplicated* streptobacillary rat-bite fever (verbatim in Merck Manual & StatPearls/Mandell). The endocarditis dose (15–20 MU/day) is higher, but the entry correctly routes endocarditis to ceftriaxone + 4–6 weeks. *Optional* refinement: add an explicit high-dose penicillin option to the endocarditis pathway. **No change required.**

---

## Coverage (audited in full)

- **Diagnoses (111):** tox/antidotes ✔ · endocrine ✔ · neuro/NM/psych ✔ · CV ✔ · OB ✔ · ophth ✔ · heme/onc ✔ · metabolic ✔ · environmental ✔ · surgical ✔ · ID/public-health ✔ · rheum ✔ · allergy/derm/GU/pulm ✔
- **Antibiotics (213):** sepsis · resp · ENT · eye · UTI · CNS · GI · skin · bone · cardiac · OB/gyn · STI · tickborne · peds · fungal · viral · parasitic · neutropenia — all ✔
- **Drips (57):** vasopressors · inotropes · sedation · analgesia · NMB · antiarrhythmic · antiHTN · anticoag · electrolyte · antidote · other — all ✔

*Per-batch detail (every finding, with sources) is in `_dosing-review/` — 22 files: `dr-1…6`, `ab-1…9`, `dx-1…7`.*
