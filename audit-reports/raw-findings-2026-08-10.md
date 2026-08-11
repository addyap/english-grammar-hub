# Grammatica pedagogy audit — raw findings (pre-verification) — 2026-08-10

Full review: 136 topics (English explanations, 9-way corpus) + 2,810 exercise questions (2,720 topic + 90 contrast) + 6 reference datasets. Engine: MCQ only, exact single-answer match, NO accept-list → two-defensible-answer items must be REWRITTEN, not patched. Global audience → BrE-only keys with the AmE form among distractors are defects. Levels are paywall-coupled → level mismatches are FLAG-ONLY, never change `level`. Readability CI: ≤45-word sentences in A1/A2 topics, ≤70 in B1+. First `explanations.en` paragraph = SEO snippet. Translations are index-aligned across 9 languages: EN fixes that change MEANING require all 9 updated.

Status: NONE of these are verified yet. Adversarial verification (refute-first) gates every critical/major before repair.

## ENGLISH EXPLANATIONS (136 topics reviewed → 2 substantive)

- **CRITICAL — reflexivePronounsEmphasis.ts** / mistake paragraph. Emphatic example "I taught myself Spanish" is actually a TRUE reflexive (myself = indirect object); paragraph's own gloss admits it → teaches the misclassification it warns against. FIX: replace with `Compare I fixed the car myself (emphatic — dropping myself leaves I fixed the car, still complete, only without the stress that I did it alone) with I hurt myself (true reflexive — dropping myself changes who was hurt).` TRANSLATIONS AFFECTED: yes (all 8).
- **MAJOR — personalPossessivePronouns.ts** / form list item. Lists `its` among standalone possessive pronouns (mine/yours/his/hers/**its**/ours/theirs) — no standalone "its" exists ("This bone is its" ✗). FIX: `Possessive pronouns stand alone, with no noun after them: mine, yours, his, hers, ours, theirs (there is no standalone possessive its) — This car is mine (not this car is my).` TRANSLATIONS AFFECTED: yes.
- MINOR — riseVsRaiseLieVsLay.ts: calls "raised" an irregular form; it's regular. FIX: `She rised her hand is wrong on two counts: the verb for this transitive action is raise, not rise, and its past is the regular raised (there is no form rised).` TRANSLATIONS AFFECTED: yes.
- MINOR — prepositionsOfMovement.ts (mistake): "go in the room" flagged flatly wrong; fine with motion verbs. Recast so the destination example ("I went in Paris") carries the error. TRANSLATIONS: yes.
- MINOR — prepositionsOfPlace.ts (markers list): "in hospital" unmarked BrE on global site → `in: in bed, in hospital (UK; US in the hospital)`. TRANSLATIONS: yes.
- MINOR — countableUncountableMeaningShift.ts (mistake): broken example "I read a paper for the wall" doesn't parse. FIX given by reviewer (65-word replacement first sentence: a paper for my shopping list / I broke glass → I broke a glass). TRANSLATIONS: yes.
- MINOR — alternativeQuestionsWithOr.ts (form bullet): "intonation falls on or" mislocates the fall (falls on the LAST option). FIX: rise on first option, fall on last (~40w). TRANSLATIONS: yes.
- MINOR (structural, TRANSLATIONS: yes) — oversized 3-error "mistake" callouts to split into 2 paragraphs (+`paragraphKinds` entry): abilityPermissionModals.ts, alreadyJustYetStill.ts, irregularPluralsLatinGreek.ts.
- MINOR (structural, TRANSLATIONS: no) — modals.ts "markers" beat carries non-markers content (past forms); retag only. nonFiniteVerbsOverview.ts dense B1 walls (split paragraphs). articlesAThe.ts A1 metalanguage too advanced (flag only).

L1-interference causal-claim class (the high-value hunt): reviewers specifically checked all three batches — ZERO bogus claims found; present-simple/zero-article/pro-drop/make-do causal explanations all sound.

## EXERCISES — findings by file (all "two defensible answers / variety-dependent / single-pattern / duplicate" unless marked; 1 critical)

### CRITICAL
- **nonFiniteVerbsOverview.ts Ex1 Q2** — "In 'The swimming pool is closed', 'swimming' is a(n) ___" keyed "present participle"; it's a GERUND (pool FOR swimming). FIX: replace with barking-dog item keyed "present participle" (options present participle/gerund/infinitive; explanation: the dog performs the action → participle; gerund names the activity).

### MAJOR — two defensible answers (rewrite; exact replacements captured per reviewer)
- dependentPrepositions.ts Ex1 Q7 "different ___ French" from/of/to — "different to" valid BrE. → replace with keen-on item.
- eachEveryAllWhole.ts Ex1 Q6 & Q10 — "each of the candidates one by one" / "each of the six players one after another": "all" equally valid. → replace both with singular-verb frames forcing "each" (was interviewed / was given a different shirt number).
- eachOtherOneAnother.ts Ex1 Q6 — "introduced ___ before the meeting": "each other" defensible. → replace with self-name/job frame forcing "themselves".
- futureContinuous.ts Ex2 Q4 — "so I ___ see him later": "will see" natural. → replace with "This time on Friday I ___ drive to the coast" forcing will-be-driving. (Ex2 Q3 MINOR similarly → "When you get home I ___ cook".)
- futureWillGoingTo.ts Ex1 Q7 — "haven't made plans yet but I ___ visit Italy": going-to defensible. → replace with door/answer spontaneous-will item.
- quantifiers.ts Ex1 Q3 & Q9 — "I have ___ friends" / "there are ___ people": "many" valid affirmative. → replace with uncountable frames (fun/progress) forcing "a lot of".
- reasonClauses.ts Ex1 Q2,Q10; Ex2 Q3,Q6,Q9 — medial "because" items offer as/since which are valid reason connectors. → swap distractor to result-connector "so" (options because/because of/so) on all 5.
- reportedSpeech.ts Ex1 Q3,Q5,Q6 (+Q1,Q2 milder) — optional backshift: retained forms (saw/can/must/likes/is) are valid. → recontext to remove still-true reading / use obligatory-backshift verbs (have to→had to; freezing→was).
- reportingVerbPatterns.ts Ex1 Q3,Q4,Q5,Q8,Q10; Ex2 Q7,Q8 — mandative subjunctive vs BrE finite indicative (went/rests/apologized/were) both valid. → swap finite distractor for non-finite (to-go/going) so base form wins.
- sentenceStructureClauses.ts Ex2 Q6 — run-on fix keyed "; " but ", so" also fixes it (explanation concedes). → reframe to full-sentence options.
- wordOrder.ts Ex2 Q6 & Q10 — reversible place/time ("at the shop this morning" vs "this morning at the shop"). → replace time-first distractor with ungrammatical scramble. (Q4,Q8 lower-confidence, same treatment if touched.)
- tooEnough.ts Ex1 Q10 — "The room is ___ big for ten people": "too big" also sensible. → add "there's plenty of space" forcing "big enough".
- participleClauses.ts Ex1 Q6 & Ex2 Q4 — "Living/Arriving..." vs offered "Having lived/arrived" both valid. → replace with knowing-area / carrying-bags simultaneity items forcing -ing.
- partitiveStructures.ts Ex1 Q4 — "a ___ of chocolate still in its foil" bar/piece both valid (foil-wrapped pieces exist). → replace with sheet-of-paper item.
- passivePerfectContinuousFuture.ts Ex2 Q3 — "The bridge ___ open next month": ergative "will open" valid active. → replace with award-presented item.
- prepositionsOfMovement.ts Ex2 Q6 — "plane flew ___ the mountains" over/across both valid. → replace with ball-over-goalkeeper item.
- modals.ts Ex1 Q9 & Ex2 Q6 — general past ability "could" vs offered "was able to" both valid. → swap distractor to could-swam/can-swim so could unique.
- orderOfAdjectives.ts Ex1 Q7 & Q8 — opinion-before-size boundary ("ugly big" vs "big ugly", "cozy small" vs "small cozy") both natural. → replace with reliably-ordered size/material & opinion/material items.
- pastPerfect.ts Ex1 Q7 — "They ___ just arrive when storm started": AmE "just arrived" valid. → replace with "first time she ___ fly" forcing had flown.
- prepositionsOfTime.ts Ex1 Q4 & Ex2 Q7 — "at the weekend" keyed with AmE "on" offered. → replace with at-lunchtime / at-midnight items.
- abilityPermissionModals.ts Ex1 Q1,Q3,Q5,Q9 — general past ability could vs was-able-to. → swap distractor to present "can X"/"managed to X" so could unique. Also Permission Q3 "___ I request (formal)" May/Could both polite → rewrite to granting-sense "You ___ submit late" forcing may.
- absoluteConstructionsWith.ts Ex "Mixed" Q8 — "With the store closing/closed" both natural (close intransitive). → replace with temperature-dropping item.
- adverbsOfDegree.ts Ex1 Q1, Ex2 Q1, Ex2 Q6 — "quite amazing/extraordinary/brilliant" vs offered "rather" (rather intensifies extremes, esp BrE). → swap distractor to "slightly".
- asIfAsThough.ts Ex1 Q7,Q9; Ex2 Q5,Q7,Q9 — as-if + past subjunctive valid for plausible situations; present keyed with past offered. → swap distractor to wrong aspect (will need / are needing).
- bringVsTake.ts Ex1 Q8; Ex2 Q3,Q7 — no deictic anchor → "take" equally/ more valid (BrE). → re-anchor deixis to speaker (comes to visit / our place / see us) forcing bring.
- collectiveNouns.ts Q1,Q3,Q6,Q10 — BrE plural agreement valid, keyed singular with plural offered; topic itself anchors variety elsewhere (inconsistent). → anchor "In American English..." or add unit-forcing cue ("as one").

### MAJOR — single-pattern drills (replace 2-3 items each, exact items per reviewer)
- getPassive.ts Ex2 (both exercises 20 items = one decision). Add did-crack / was-built-neutral / get-damaged-present items.
- hadBetter.ts Ex2. Add should-not-urgent / 'd-better-not-consequence items.
- pastModals.ts Ex1 (Q2,Q5,Q8) → might-have/must-have/can't-have deduction items. (Keep Ex2 as-is.)
- reflexivePronounsEmphasis.ts Ex1&Ex2 (all 20 mechanical agreement). Add emphatic-vs-personal/possessive items (knitted it myself / manager herself / paint the fence yourself).
- shallOffersSuggestions.ts Ex1&Ex2 (answer predictable from pronoun). Add prediction-we-will / would-you-like-offer / let's...shall-we items.

### MINOR — near-duplicates within a topic (vary one stem; low priority)
participleClauses (Walking home ×3), partitiveStructures (loaves ×2, furniture/information repeats), pastModals (locked-door ×2), pastPerfect (film-started ×2), phrasalVerbsDepth (look-forward-to ×3), phrasalVerbsIntroduction (got-in-car ×2), perceptionVerbsObjectInfinitive (saw-him-cross ×2), nominalization (reduction ×3), resultConnectors (rained-stayed-home ×2), duringWhileFor (Ex1 Q9 for/during muddy), formalInformalRegister (Ex1 Q1 discover "requires" overstated → soften), falseFriends.ts "ignorer" gloss garbled → reworded.

### MINOR/SUGGESTION — indefinitePronouns Ex1 Q5,Q10 (some/any in questions both valid — borderline by design); needIngPassiveGerund & passiveQuestions mechanical distractors (raise challenge, optional).

## REFERENCE DATASETS — verdict
confusedWords, linkingWords, britishVsAmerican, punctuation: CLEAN. irregularVerbs (150): CLEAN, all forms + sampled glosses correct. falseFriends: CLEAN except "ignorer" gloss (minor, above); all fr/es/pt/it/de glosses verified. Duplicate-options scan across all 2,720 topic questions: ZERO.

## PRODUCT-LEVEL (report only, per Antony's scope decision)
- Exercises + post-answer feedback are English-only while explanations are 9-language: learners in ar/zh/ru hit an all-English practice surface. Documented recommendation, not a fix (2,810 × 8 = ~22k strings).
- AmE/BrE variety cluster is systemic in exercises: the site leans BrE but marks correct AmE wrong in ~15-20 items, and its own britishVsAmerican.ts documents those AmE forms as correct. Reviewer default = rewrite each to variety-neutral (captured above). Alternative = explicit BrE-only exercise stance. DECISION FOR ANTONY.
