import { describe, it, expect } from "vitest";
import { operar } from "../../src/utils/operaciones";

describe("operar()", () => {
  it("suma correctamente", () => {
    expect(operar("5", "+", "3")).toBe("8");
  });

  it("divide correctamente", () => {
    expect(operar("10", "/", "2")).toBe("5");
  });

  it("devuelve 'Error' si se divide por cero", () => {
    expect(operar("10", "/", "0")).toBe("Error");
  });
});
