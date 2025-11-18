import { expect } from 'chai';
import { computeSm2, SrsState } from '../src/srs';

describe('SM-2 computeSm2', () => {
  it('new card, perfect recall (quality 5) -> repetitions=1, interval=1, ef increases', () => {
    const state: SrsState = { repetitions: 0, interval: 0, ef: 2.5 };
    const res = computeSm2(state, 5);
    expect(res.repetitions).to.equal(1);
    expect(res.interval).to.equal(1);
    expect(res.ef).to.be.greaterThan(2.5);
  });

  it('after 1 correct, next correct -> repetitions=2, interval=6', () => {
    const state: SrsState = { repetitions: 1, interval: 1, ef: 2.5 };
    const res = computeSm2(state, 5);
    expect(res.repetitions).to.equal(2);
    expect(res.interval).to.equal(6);
  });

  it('lapse (quality < 3) resets repetitions and interval to 1', () => {
    const state: SrsState = { repetitions: 3, interval: 30, ef: 2.0 };
    const res = computeSm2(state, 2);
    expect(res.repetitions).to.equal(0);
    expect(res.interval).to.equal(1);
  });
});
