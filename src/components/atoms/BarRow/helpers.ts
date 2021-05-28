export const repeat = <T>(callback: (i: number) => T) => (times: number) => Array.from(
  { length: times },
  (_, i) => callback(i),
);