# Grammatica pedagogy audit — raw reviewer findings (2026-08-31)

Defect class hunted: MCQ where >1 option is a fully correct completion of the stem (engine does exact single-answer match, no accept-list → fix = rewrite the stem so exactly one option is correct, adapted to the exercise's topic). Line numbers are pre-edit; re-locate before editing.

## CONFIRMED HIGH-CONFIDENCE (pending adversarial verification)

### C1 — presentContinuous.ts (already-fixed calibration item excluded)
- **presentContinuous.ts:166** — "You ___ (make) a lot of noise!" opts [make/makes/are making] ans `are making`. Simple "You make a lot of noise!" also valid (no time marker). Rewrite: add "right now" → "You ___ (make) a lot of noise right now!"
- **presentContinuous.ts:180** — "We ___ (have) a great time on holiday." opts [have/has/are having] ans `are having`. Habitual "We have a great time on holiday" also valid. Rewrite: add "at the moment".

### C2 — chunk 2
- **doMainVerbVsAuxiliary.ts:161** — "___ you do all this work by yourself?" opts [Did/Do/Does] ans `Did`. "Do you do all this work by yourself?" (habitual) also valid — no time marker. Rewrite: "... by yourself last night?"
- **futureContinuous.ts:94** — "I ___ (lie) on a beach tomorrow." opts [will lie/will be lying/am lying] ans `will lie`. "will be lying" also valid with bare "tomorrow". Rewrite: "I think I ___ (lie) on a beach tomorrow rather than go hiking." (forces decision-will) — NEEDS CARE (verify rewrite really blocks continuous).

### C3 — chunk 4
- **passivePerfectContinuousFuture.ts:167** — "She ___ (never/tell) the whole truth, as far as I know." opts [has never been told/has never told/was never been told] ans `has never been told`. Active "has never told" also grammatical. Rewrite: add by-agent "... the whole truth by anyone, ...".
- **pastContinuous.ts:84** — "The children ___ (play) in the garden all morning." opts [were playing/played/was playing] ans `were playing`. "played ... all morning" (past simple, bounded) also valid. Rewrite: replace duration with interruption: "... when it started to rain."
- **phrasalVerbsIntroduction.ts:322** — "You need to ___ the bus at the next stop." opts [get off/get on/get in] ans `get off`. "get on" equally valid (no aboard/waiting cue). Rewrite: "We've gone too far — you need to ___ the bus at the next stop." (forces get off).

### C4 — contrastExercises.ts (11)
- **:41** — "He ___ (work) at a bank." opts [works/is working/work] ans `works`. Add "every weekday".
- **:80** — "At 8pm last night, we ___ (watch) a movie." opts [were watching/watched/watch] ans `were watching`. Add interruption "... when the power cut out."
- **:97** — "I ___ (read) that book — it was great." opts [have read/have been reading/read] ans `have read`. Replace `read` distractor with `am reading`.
- **:101** — "He ___ (paint) the fence — it looks great now." opts [has painted/has been painting/painted] ans `has painted`. Replace `painted` distractor with `is painting`.
- **:104** — "How long ___ (you/study) English?" opts [have you been studying/have you studied/did you study] ans `have you been studying`. PP simple also valid w/ "how long". Retire or force PPC + add cue.
- **:105** — "We ___ (finish) the entire project." opts [have finished/have been finishing/finished] ans `have finished`. Bare stem: past simple valid. Add "just", drop bare-past option.
- **:106** — "We ___ (work) on this project since January." opts [have been working/have worked/worked] ans `have been working`. PP simple valid w/ since. Force PPC + replace `have worked`.
- **:139** — "She ___ (never/see) snow before she moved to Canada." opts [had never seen/never saw/has never seen] ans `had never seen`. before-clause makes past simple valid. Reword to "By the time she moved to Canada, ...".
- **:140** — "He was tired because he ___ (not/sleep) well." opts [hadn't slept/didn't sleep/hasn't slept] ans `hadn't slept`. because makes past simple valid. Replace `didn't sleep` distractor.
- **:143** — "I ___ (finish) my homework before I watched TV." opts [had finished/finished/was finishing] ans `had finished`. before-clause makes past simple valid. Reword "By the time the film started, ...".
- **:186** — "___ is she doing?" opts [What/How/Which] ans `What`. "How is she doing?" valid. Add object cue "... with all that flour?".

## OUTSTANDING
- **Chunk 6 NOT AUDITED** (session limit): sentenceStructureClauses, shallOffersSuggestions, soNotSubstitution, soSuchThat, someAny, spellingRulesSuffixes, stativeVerbs, subjectVerbAgreement, subjunctiveMood, tellingTimeDatesNumbers, theMoreTheMore, thereIsAre, tooEnough, twoObjectVerbs, usedToWould, verbBe, verbPatterns, watchVsSeeVsLook, whoeverWhateverWhichever, wishIfOnly, wordOrder, wouldRather, zeroArticle.

## NOTABLE BORDERLINE (human-decision, not auto-fixed)
- narrativeTenses.ts causal group (L144/149/159/162): past-perfect intended, simple past defensible. (options-change fix needed, not stem-only.)
- likeVsAs.ts L156/162/165: "like + clause" informal-valid (topic's intended wrong answer).
- presentPerfect.ts L151/154/152/168 & contrast L60/66/99/103: AmE past-simple with just/already/yet — variety split.
- advancedStructures.ts L213/221: Never/Seldom inversion — "did I see" defensible.
- bothEitherNeither.ts:229 "Neither ... is/are" — prescriptive split.
- Various others logged in reviewer outputs.
