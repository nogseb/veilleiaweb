import { describe, expect, it } from "vitest";
import { GA4_MEASUREMENT_ID, shouldLoadGa4 } from "./ga4";

describe("garde-fou GA4", () => {
  it("utilise l'identifiant de mesure fourni", () => {
    expect(GA4_MEASUREMENT_ID).toBe("G-NZ24YB5E5N");
  });

  it("n'autorise le chargement de GA4 qu'après consentement explicite", () => {
    expect(shouldLoadGa4("unknown")).toBe(false);
    expect(shouldLoadGa4("denied")).toBe(false);
    expect(shouldLoadGa4("granted")).toBe(true);
  });
});
