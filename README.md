# Ninglecode

Ninglecode is an experimental learning project that will grow alongside a real student's journey learning programming.

## Initial focus

- Java
- object-oriented programming
- M250-aligned foundational practice
- worked examples
- repeated typing practice
- tracing code
- retrieval practice
- debugging
- gradually fading assistance
- recording mistakes and progress

## Long-term aim

Use evidence gathered from the learning journey to develop a practical learning application that helps students progress from guided examples to independent programming.

## Important

This repository must preserve the learner's actual progress. Do not generate completed exercises or artificially mark concepts as learned.

## Repository layout

```
ninglecode/
├── README.md
├── learning/
│   ├── concepts/     # notes on individual concepts, in the learner's own words
│   ├── exercises/    # the learner's own attempts at practice tasks
│   ├── quizzes/      # self-administered recall checks and their results
│   ├── mistakes/     # a log of errors, diagnoses, and fixes
│   └── progress/     # an honest record of what has been covered and what has not
├── projects/
│   └── HouseInventory/   # a longer, multi-step project
├── research/
│   └── learning-method/  # notes on pedagogy and how the learning approach works
└── docs/                # supporting documentation for the project
```

Empty directories contain a `.gitkeep` file so that Git tracks them.

## Conventions

- Files are added by the learner, or on the learner's behalf, as real work happens.
- Nothing in `learning/progress/` is marked complete unless the learner completed it.
- Exercise files should contain the learner's own code, including incorrect attempts.
- `learning/mistakes/` records what went wrong and why, not just the corrected version.