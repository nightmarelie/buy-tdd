import { renderHook } from "@testing-library/react-hooks";
import { useRoundUp } from "./useRoundUp";

describe(`useRoundUp`, () => {
  it(`should return total and tip`, () => {
    const { result } = renderHook(() => useRoundUp(0, false));

    const { total, tip } = result.current;
    expect(total).toEqual(0);
    expect(tip).toEqual(1);
  });

  it(`should return total and tip when agreeToDonate is true`, () => {
    const { result } = renderHook(() => useRoundUp(0, true));

    const { total, tip } = result.current;
    expect(total).toEqual(1);
    expect(tip).toEqual(1);
  });

  it(`should return total and tip when amount is 1.1`, () => {
    const { result } = renderHook(() => useRoundUp(1.1, true));

    const { total, tip } = result.current;
    expect(total).toEqual(2);
    expect(tip).toEqual(0.9);
  });

  it(`should return total and tip when amount is 1.11`, () => {
    const { result } = renderHook(() => useRoundUp(1.11, true));

    const { total, tip } = result.current;
    expect(total).toEqual(2);
    expect(tip).toEqual(0.89);
  });

  it(`should return total and tip when amount is 1.111`, () => {
    const { result } = renderHook(() => useRoundUp(1.111, true));

    const { total, tip } = result.current;
    expect(total).toEqual(2);
    expect(tip).toEqual(0.89);
  });
});
