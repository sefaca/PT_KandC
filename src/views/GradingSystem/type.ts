/* eslint-disable prettier/prettier */

export interface Criterion {
  description: string;
  points: number;
  check: (answer: string) => boolean;
}

export interface ClassData {
  question: string;
  criteria: Criterion[];
}

export interface ClassDataMap {
  [key: string]: ClassData;
}
