import {
  MarketRewardProgram,
  OnchainAsset,
  RewardMathLib,
  UniversalRewardDistributor,
  VaultRewardProgram,
  AirdropRewardProgram,
  RewardProgram,
} from "@lqg-org/blue-rewards-core-sdk";

import { AirdropRewardProgramArgs, airdropPrograms } from "./airdrop-programs";
import { MarketRewardProgramArgs, marketPrograms } from "./market-programs";
import { VaultRewardProgramArgs, vaultPrograms } from "./vault-programs";

export const OffchainPrograms = {
  getMarketPrograms(): MarketRewardProgram[] {
    return marketPrograms.map((programArgs) => toMarketRewardProgram(programArgs));
  },
  getVaultPrograms(): VaultRewardProgram[] {
    return vaultPrograms.map((programArgs) => toVaultRewardProgram(programArgs));
  },
  getAirdropPrograms(): AirdropRewardProgram[] {
    return airdropPrograms.map((programArgs) => toAirdropRewardProgram(programArgs));
  },
  getPrograms(): RewardProgram[] {
    return [...this.getMarketPrograms(), ...this.getVaultPrograms(), ...this.getAirdropPrograms()];
  },
};

function toMarketRewardProgram(args: MarketRewardProgramArgs): MarketRewardProgram {
  const asset = new OnchainAsset({
    address: args.tokenAddress,
    chainId: args.chainId,
  });
  const distributor = new UniversalRewardDistributor({
    address: args.urdAddress,
    chainId: args.chainId,
  });

  const end = args.end ? args.end : args.start + RewardMathLib.SECONDS_IN_A_YEAR;

  const supplyRatePerYear = RewardMathLib.fromAmountToRate({
    start: args.start,
    end,
    amount: args.rewardAmount.supply,
  });

  const borrowRatePerYear = RewardMathLib.fromAmountToRate({
    start: args.start,
    end,
    amount: args.rewardAmount.borrow,
  });

  const collateralRatePerYear = RewardMathLib.fromAmountToRate({
    start: args.start,
    end,
    amount: args.rewardAmount.collateral,
  });

  return new MarketRewardProgram({
    marketId: args.marketId,
    createdAt: args.start,
    start: args.start,
    end: args.end,
    creator: args.fundsSender,
    asset,
    distributor,
    chainId: args.chainId,
    supplyRatePerYear,
    borrowRatePerYear,
    collateralRatePerYear,
  });
}

function toVaultRewardProgram(args: VaultRewardProgramArgs): VaultRewardProgram {
  const asset = new OnchainAsset({
    address: args.tokenAddress,
    chainId: args.chainId,
  });
  const distributor = new UniversalRewardDistributor({
    address: args.urdAddress,
    chainId: args.chainId,
  });

  return new VaultRewardProgram({
    vault: args.vault,
    createdAt: args.start,
    start: args.start,
    end: args.end,
    creator: args.fundsSender,
    asset,
    distributor,
    chainId: args.chainId,
    amount: args.amount,
  });
}

function toAirdropRewardProgram(args: AirdropRewardProgramArgs): AirdropRewardProgram {
  const asset = new OnchainAsset({
    address: args.tokenAddress,
    chainId: args.chainId,
  });
  const distributor = new UniversalRewardDistributor({
    address: args.urdAddress,
    chainId: args.chainId,
  });

  return new AirdropRewardProgram({
    createdAt: args.claimDate,
    start: args.claimDate,
    creator: args.fundsSender,
    asset,
    distributor,
    chainId: args.chainId,
    cidV0: args.cidV0,
    totalRewards: args.totalRewards,
  });
}
