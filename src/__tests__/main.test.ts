import { add } from "../main";

describe("add関数", () => {
  test("ふつうに足し算", () => {
    expect(add(1, 5)).toBe(6);
    expect(add(1, -3)).toBe(-2);
    expect(add(0, 0)).toBe(0);
  });
});
