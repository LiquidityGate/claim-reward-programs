import {
  MarketRewardProgram,
  isTimestampInSeconds,
  isValidTimestamp,
} from "@lqg-org/blue-rewards-core-sdk";

import { OffchainPrograms } from "..";

describe("Market programs", () => {
  let marketPrograms: MarketRewardProgram[];

  beforeAll(() => {
    marketPrograms = OffchainPrograms.getMarketPrograms();
  });

  it("should test programs validity", async () => {
    for (const program of marketPrograms) {
      // Check if the program start and end timestamps are valid
      expect(isTimestampInSeconds(program.start)).toBeTruthy();
      expect(isValidTimestamp(program.start)).toBeTruthy();
      if (program?.end) {
        expect(isTimestampInSeconds(program.end)).toBeTruthy();
        expect(isValidTimestamp(program.end)).toBeTruthy();
        expect(program.start < program.end).toBeTruthy();
      }

      // Check if the program reward rates are valid
      expect(
        program.supplyRatePerYear + program.borrowRatePerYear + program.collateralRatePerYear
      ).toBeGreaterThan(0n);
    }
  });
});
