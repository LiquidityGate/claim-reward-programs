import {
  VaultRewardProgram,
  isTimestampInSeconds,
  isValidTimestamp,
} from "@lqg-org/blue-rewards-core-sdk";

import { OffchainPrograms } from "..";

describe("Vault programs", () => {
  let vaultPrograms: VaultRewardProgram[];

  beforeAll(() => {
    vaultPrograms = OffchainPrograms.getVaultPrograms();
  });

  it("should test programs validity", async () => {
    for (const program of vaultPrograms) {
      // Check if the program start and end timestamps are valid
      expect(isTimestampInSeconds(program.start)).toBeTruthy();
      expect(isValidTimestamp(program.start)).toBeTruthy();
      if (program?.end) {
        expect(isTimestampInSeconds(program.end)).toBeTruthy();
        expect(isValidTimestamp(program.end)).toBeTruthy();
        expect(program.start < program.end).toBeTruthy();
      }

      // Check if the program reward rates are valid
      expect(program.amount).toBeGreaterThan(0n);
    }
  });
});
