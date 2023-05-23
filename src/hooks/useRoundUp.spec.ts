import { renderHook } from "@testing-library/react-hooks";
import { useRoundUp } from "./useRoundUp";

describe(`useRoundUp`, () => {
  it(`should return roundUp, setRoundUp, roundUpValue, roundUpResult`, () => {
    const { result } = renderHook(() => useRoundUp(0, false));

    const { total, tip } = result.current;
    expect(total).toEqual(0);
    expect(tip).toEqual(1);
  });
});
