// SM-2 SRS implementation (deterministic, pure functions)
export interface SrsState {
  repetitions: number; // number of successive correct reviews
  interval: number; // interval in days
  ef: number; // ease factor
}

export interface SrsResult extends SrsState {}

/**
 * Compute next SM-2 state given current state and quality (0-5)
 * - quality < 3: treated as failure (reset repetitions)
 * - quality >= 3: success, repetitions increment
 * Returns new { repetitions, interval, ef }
 */
export function computeSm2(state: SrsState, quality: number): SrsResult {
  const MIN_EF = 1.3;
  let { repetitions, interval, ef } = state;

  if (quality < 0 || quality > 5) {
    throw new Error('quality must be between 0 and 5');
  }

  if (quality < 3) {
    // failed recall
    repetitions = 0;
    interval = 1;
  } else {
    repetitions = (repetitions || 0) + 1;
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 6;
    } else {
      // subsequent intervals: previousInterval * ef
      // ensure previous interval is at least 1
      const prev = Math.max(1, interval || 1);
      interval = Math.round(prev * ef);
    }
  }

  // update ease factor
  const q = quality;
  const efDelta = 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02);
  ef = ef + efDelta;
  if (ef < MIN_EF) ef = MIN_EF;

  return {
    repetitions,
    interval,
    ef: Number(ef.toFixed(4)),
  };
}

export default computeSm2;
