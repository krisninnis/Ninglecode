import type { Concept } from '../types/learning.ts'

/**
 * The foundational concepts the curriculum starts from.
 *
 * `summary` is a neutral reference description provided by the framework.
 * `evidence` is empty for every concept: these are slots waiting for the
 * learner's own files, not achievements.
 */
export const concepts: readonly Concept[] = [
  {
    id: 'class',
    name: 'class',
    summary:
      'A blueprint that describes the fields and methods a particular kind of thing will have.',
    strand: 'Objects and classes',
    evidence: [],
  },
  {
    id: 'object',
    name: 'object',
    summary:
      'One actual instance created from a class, with its own values for that class’s fields.',
    strand: 'Objects and classes',
    evidence: [],
  },
  {
    id: 'field',
    name: 'field',
    summary:
      'A variable declared on a class or object that holds a value across the lifetime of that object.',
    strand: 'Objects and classes',
    evidence: [],
  },
  {
    id: 'state',
    name: 'state',
    summary:
      'The combination of all the values an object is currently holding, considered as a whole.',
    strand: 'State and behaviour',
    evidence: [],
  },
  {
    id: 'constructor',
    name: 'constructor',
    summary:
      'The code that runs when an object is created, responsible for giving that object a valid starting state.',
    strand: 'State and behaviour',
    evidence: [],
  },
  {
    id: 'method',
    name: 'method',
    summary:
      'A named block of behaviour that an object can perform, optionally operating on that object’s state.',
    strand: 'Methods and calling',
    evidence: [],
  },
  {
    id: 'parameter',
    name: 'parameter',
    summary:
      'The variable a method declares in its signature to receive a value from whoever calls it.',
    strand: 'Methods and calling',
    evidence: [],
  },
  {
    id: 'argument',
    name: 'argument',
    summary:
      'The actual value passed into a method at a particular call site, which may differ on each call.',
    strand: 'Methods and calling',
    evidence: [],
  },
] as const