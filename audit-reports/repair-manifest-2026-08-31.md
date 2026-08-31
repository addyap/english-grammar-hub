# Repair manifest — Grammatica pedagogy audit 2026-08-31

Each item: file · exact OLD `sentence`/`options` → exact NEW. Fixes disambiguate the stem (adapted to each exercise's topic) so exactly one option is correct, given the engine's exact single-answer match. Explanations are rule-based (not sentence translations), so these edits need no explanationI18n changes unless noted. Re-verify current text before editing (line numbers may drift).

## Topic files

1. **src/data/topics/presentContinuous.ts** — "You ___ (make) a lot of noise!"
   OLD sentence: `You ___ (make) a lot of noise!`
   NEW sentence: `You ___ (make) a lot of noise right now!`

2. **src/data/topics/presentContinuous.ts** — "We ___ (have) a great time on holiday."
   OLD sentence: `We ___ (have) a great time on holiday.`
   NEW sentence: `We ___ (have) a great time on holiday at the moment.`

3. **src/data/topics/doMainVerbVsAuxiliary.ts** — "___ you do all this work by yourself?"
   OLD sentence: `___ you do all this work by yourself?`
   NEW sentence: `___ you do all this work by yourself last night?`

4. **src/data/topics/futureContinuous.ts** — "I ___ (lie) on a beach tomorrow."
   OLD sentence: `I ___ (lie) on a beach tomorrow.`
   NEW sentence: `I ___ (lie) on a beach tomorrow rather than go hiking.`

5. **src/data/topics/passivePerfectContinuousFuture.ts** — "She ___ (never/tell) the whole truth..."
   OLD sentence: `She ___ (never/tell) the whole truth, as far as I know.`
   NEW sentence: `She ___ (never/tell) the whole truth by anyone, as far as I know.`

6. **src/data/topics/pastContinuous.ts** — "The children ___ (play) in the garden all morning."
   OLD sentence: `The children ___ (play) in the garden all morning.`
   NEW sentence: `The children ___ (play) in the garden when it started to rain.`

7. **src/data/topics/phrasalVerbsIntroduction.ts** — "You need to ___ the bus at the next stop."
   OLD sentence: `You need to ___ the bus at the next stop.`
   NEW sentence: `We've gone too far — you need to ___ the bus at the next stop.`

## contrastExercises.ts

8. L41 — OLD `He ___ (work) at a bank.` → NEW `He ___ (work) at a bank every weekday.`
9. L80 — OLD `At 8pm last night, we ___ (watch) a movie.` → NEW `At 8pm last night, we ___ (watch) a movie when the power cut out.`
10. L97 — sentence unchanged; OLD options `["have read", "have been reading", "read"]` → NEW `["have read", "have been reading", "am reading"]` (removes valid past-simple `read`)
11. L101 — sentence unchanged; OLD options `["has painted", "has been painting", "painted"]` → NEW `["has painted", "has been painting", "is painting"]`
12. L104 — REPLACE item (how-long makes PP-simple/PPC interchangeable → inherently leaky). OLD sentence `How long ___ (you/study) English?` answer `have you been studying` opts `["have you been studying", "have you studied", "did you study"]` → NEW sentence `You're out of breath — ___ (you/run)?` answer `have you been running` opts `["have you been running", "have you run", "did you run"]`. Explanation + all 8 i18n rewritten to "present evidence of a recent ongoing activity → PPC".
13. L105 — OLD `We ___ (finish) the entire project.` answer `have finished` opts `["have finished", "have been finishing", "finished"]` → NEW sentence `We ___ (just/finish) the entire project.` answer `have just finished` opts `["have just finished", "have been finishing", "are finishing"]`. Explanation "A completed whole — Present Perfect" still fits; no i18n change.
14. L106 — sentence unchanged; OLD options `["have been working", "have worked", "worked"]` → NEW `["have been working", "are working", "worked"]` (removes valid PP-simple `have worked`; keeps the emphasis-on-duration teaching point).
15. L139 — OLD `She ___ (never/see) snow before she moved to Canada.` → NEW `By the time she moved to Canada, she ___ (never/see) snow.` (bare reference point biases past perfect; `never saw` no longer licensed by a before-clause). Verify explanation still fits.
16. L140 — sentence unchanged; OLD options `["hadn't slept", "didn't sleep", "hasn't slept"]` → NEW `["hadn't slept", "wasn't sleeping", "hasn't slept"]` (removes valid past-simple `didn't sleep`; `wasn't sleeping` is a wrong-aspect distractor for the anterior cause).
17. L143 — OLD `I ___ (finish) my homework before I watched TV.` → NEW `By the time the film started, I ___ (finish) my homework.` (bare reference point → past perfect; removes before-clause that licenses past simple).
18. L186 — OLD `___ is she doing?` → NEW `___ is she doing with all that flour?` (object cue forces What; "How ... with all that flour?" not idiomatic).

## whoeverWhateverWhichever.ts (chunk 6)

19. L148 — OLD `___ route you take, the drive will take about two hours.` → NEW `___ of the two routes you take, the drive will take about two hours.` (Whichever-of-two forces the closed-set reading; "Whatever of the two" is ungrammatical).
20. L164 — OLD `Choose ___ option works best for your schedule.` → NEW `Choose ___ of these two options works best for your schedule.` ("whichever of these two options"; "whatever of these two options" is ungrammatical).

## Verification after edits
Run: `npm run validate` · `npm run readability` · `npm run build`. All must pass.
