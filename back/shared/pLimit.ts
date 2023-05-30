import pLimit from "p-limit";
import os from 'os';

const cronLimit = pLimit(os.cpus.length || 3);

export function runCronWithLimit<T>(fn: () => Promise<T>): Promise<T> {
  return cronLimit(() => {
    return fn();
  });
}