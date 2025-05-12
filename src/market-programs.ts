import { parseUnits } from "viem";

import { Address, ChainId, Hex } from "@lqg-org/blue-rewards-core-sdk";

export type MarketRewardProgramArgs = {
  marketId: Hex;
  start: bigint;
  end?: bigint;
  fundsSender: Address;
  urdAddress: Address;
  tokenAddress: Address;
  rewardAmount: {
    supply: bigint;
    borrow: bigint;
    collateral: bigint;
  };
  chainId: ChainId;
};

/**
 * List of Market programs
 * @example
 * [
 *   {
 *    start: 1717149233n,
 *    end: 1717149235n,
 *    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
 *    urdAddress: "0x5aC6F9F696b06538A8A0253ab495dC4c638da3be",
 *    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
 *    marketId: "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c",
 *    rewardAmount: {
 *      supply: parseUnits("1000000", 18),
 *      borrow: 0n,
 *      collateral: 0n,
 *    },
 *    chainId: ChainId.BASE
 *   }
 * ]
 */
export const marketPrograms: MarketRewardProgramArgs[] = [
  // ezETH/WETH 15,000 USDC
  {
    start: 1717218000n,
    end: 1719810000n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x7815CAb40D9b83021f55418a013cceC3813646FB",
    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    marketId: "0x49bb2d114be9041a787432952927f6f144f05ad3e83196a7d062f374ee11d0ee",
    rewardAmount: {
      supply: parseUnits("15000", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // ezETH/WETH 20,000 lqg
  {
    start: 1717218000n,
    end: 1719810000n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x678dDC1d07eaa166521325394cDEb1E4c086DF43",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x49bb2d114be9041a787432952927f6f144f05ad3e83196a7d062f374ee11d0ee",
    rewardAmount: {
      supply: parseUnits("20000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // WOETH/WETH 6,667 lqg
  {
    start: 1717632000n,
    end: 1720224000n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0xea023e57814fb9a814a5a9ee9f3e7ece5b771dd8cc703e50b911e9cde064a12d",
    rewardAmount: {
      supply: parseUnits("6667", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // CURVE
  // stkcvxcrvUSDCWBTCWETH-lqg/crvUSD 36,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0x74ef8d7022b0ef0c0e6dc001fbda3c8bd9a3e706f03bb559c833e1dce7302d3a",
    rewardAmount: {
      supply: parseUnits("36000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDCWBTCWETH-lqg/crvUSD 49,950 lqg
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x74ef8d7022b0ef0c0e6dc001fbda3c8bd9a3e706f03bb559c833e1dce7302d3a",
    rewardAmount: {
      supply: parseUnits("49950", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDTWBTCWETH-lqg/crvUSD 36,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0x1C4B9CE834604969D33DC277BD8473D8AEE856E5A577C08427B6DEEB97CC72D6",
    rewardAmount: {
      supply: parseUnits("36000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDTWBTCWETH-lqg/crvUSD 49,950 lqg
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x1C4B9CE834604969D33DC277BD8473D8AEE856E5A577C08427B6DEEB97CC72D6",
    rewardAmount: {
      supply: parseUnits("49950", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvCRVUSDTBTCWSTETH-lqg/crvUSD 18,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0x0cd36e6ecd9d846cffd921d011d2507bc4c2c421929cec65205b3cd72925367c",
    rewardAmount: {
      supply: parseUnits("18000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvCRVUSDTBTCWSTETH-lqg/crvUSD 24,975 lqg
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x0cd36e6ecd9d846cffd921d011d2507bc4c2c421929cec65205b3cd72925367c",
    rewardAmount: {
      supply: parseUnits("24975", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxTryLSD-lqg/crvUSD 12,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0x42e157d3739f9ae3f418f5dd0977b7d51c3a677502afd9f3f594f46cc07dec6a",
    rewardAmount: {
      supply: parseUnits("12000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxTryLSD-lqg/crvUSD 16,650 lqg
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0x42e157d3739f9ae3f418f5dd0977b7d51c3a677502afd9f3f594f46cc07dec6a",
    rewardAmount: {
      supply: parseUnits("16650", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDETHCRV-lqg/crvUSD 18,000 CRV
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    marketId: "0xbd2a27358bdaf3fb902a0ad17f86d4633f9ac5377941298720b37a4d90deab96",
    rewardAmount: {
      supply: parseUnits("18000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // stkcvxcrvUSDETHCRV-lqg/crvUSD 24,975 lqg
  {
    start: 1717761600n,
    end: 1720353600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    marketId: "0xbd2a27358bdaf3fb902a0ad17f86d4633f9ac5377941298720b37a4d90deab96",
    rewardAmount: {
      supply: parseUnits("24975", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // GAUNTLET
  // Aero/USDC 16,000 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xdaa04f6819210b11fe4e3b65300c725c32e55755e3598671559b9ae3bac453d7",
    rewardAmount: {
      supply: parseUnits("16000", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbETH/USDC 16,000 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721142000n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xdba352d93a64b17c71104cbddc6aef85cd432322a1446b5b65163cbbc615cd0c",
    rewardAmount: {
      supply: parseUnits("14280", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // WETH/USDC 16,000 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x8793cf302b8ffd655ab97bd1c695dbd967807e8367a65cb2f4edaf1380ba1bda",
    rewardAmount: {
      supply: parseUnits("16000", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/USDC 6,400 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xa066f3893b780833699043f824e5bb88b8df039886f524f62b9a1ac83cb7f1f0",
    rewardAmount: {
      supply: parseUnits("6400", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ezETH/USDC 6,400 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0xf24417ee06adc0b0836cf0dbec3ba56c1059f62f53a55990a38356d42fa75fa2",
    rewardAmount: {
      supply: parseUnits("6400", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // weETH/USDC 3,200 USDC 06/21/2024 07/20/2024 10am EST
  {
    start: 1718978400n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x6a331b22b56c9c0ee32a1a7d6f852d2c682ea8b27a1b0f99a9c484a37a951eb7",
    rewardAmount: {
      supply: parseUnits("3200", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wUSD+/USDC 51k OVN 07/05/2024 10/11/2024 12am every friday UTC+0
  {
    start: 1720180800n,
    end: 1720785600n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2560", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1720785600n,
    end: 1721390400n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2700", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1721390400n,
    end: 1721995200n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1400", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1721995200n,
    end: 1722600000n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1722600000n,
    end: 1723204800n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1723204800n,
    end: 1723809600n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1723809600n,
    end: 1724414400n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1724414400n,
    end: 1725019200n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1725019200n,
    end: 1725624000n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1725624000n,
    end: 1726228800n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1726228800n,
    end: 1726833600n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1726833600n,
    end: 1727438400n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1727438400n,
    end: 1728043200n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  {
    start: 1728043200n,
    end: 1728648000n,
    fundsSender: "0x784Cf4b62655486B405Eb76731885CC9ed56f42f",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xA3d1a8DEB97B111454B294E2324EfAD13a9d8396",
    marketId: "0x104ff0b7c0d67301cb24e3a10b928b0fb0026ee26338e28553b7064fa8b659a9",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // bsdETH/ETH 2,000,000 RSR 07/18/2024 08/18/2024 6pm GMT
  {
    start: 1721325600n,
    end: 1724004000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xdf6aa0df4eb647966018f324db97aea09d2a7dde0d3c0a72115e8b20d58ea81f",
    rewardAmount: {
      supply: parseUnits("2000000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // new cbETH/USDC 16,000 USDC 07/16/2024 07/20/2024 11am EST
  {
    start: 1721142000n,
    end: 1721401200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x1c21c59df9db44bf6f645d854ee710a8ca17b479451447e9f56758aee10a2fad",
    rewardAmount: {
      supply: parseUnits("1720", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // bsdETH/eUSD Base 500,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("500000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/eUSD Base 500,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xce89aeb081d719cd35cb1aafb31239c4dfd9c017b2fec26fc2e9a443461e9aea",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("500000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbETH/eUSD Base 500,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xb5d424e4af49244b074790f1f2dc9c20df948ce291fc6bcc6b59149ecf91196d",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("500000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // hyUSD/eUSD Base 250,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("250000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/eUSD Mainnet 500,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    marketId: "0x3f4d007982a480dd99052c05d811cf6838ce61b2a2be8dc52fca107f783d1f15",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("500000", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // WBTC/eUSD Mainnet 1,100,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    marketId: "0x461da96754b33fec844fc5e5718bf24298a2c832d8216c5ffd17a5230548f01f",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1100000", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // wstETH/eUSD Mainnet 1,100,000 RSR 07/22/2024 08/22/2024 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    marketId: "0x6029eea874791e01e2f3ce361f2e08839cd18b1e26eea6243fa3e43fe8f6fa23",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1100000", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // apxETH/WETH 67000 DINERO
  {
    start: 1722556800n,
    end: 1723766400n,
    fundsSender: "0x7f6494D4fBEA1c06daC2250A3FCa81003bF8D20C",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x6DF0E641FC9847c0c6Fde39bE6253045440c14d3",
    marketId: "0x8bbd1763671eb82a75d5f7ca33a0023ffabdd9d1a3d4316f34753685ae988e80",
    rewardAmount: {
      supply: parseUnits("67000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // bsdETH/ETH Base 600,000 RSR 07/25/2024 08/25/2024 1pm GMT
  {
    start: 1721912410n,
    end: 1724590810n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    marketId: "0xdf6aa0df4eb647966018f324db97aea09d2a7dde0d3c0a72115e8b20d58ea81f",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("600000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/ETH Mainnet 2,800,000 RSR 07/29/2024 08/29/2024 1pm GMT
  {
    start: 1722258000n,
    end: 1724936400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    marketId: "0x9ec52d7195bafeba7137fa4d707a0f674a04a6d658c9066bcdbebc6d81eb0011",
    rewardAmount: {
      supply: parseUnits("2800000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // UNI/USDC Mainnet 200k PYTH 07/31/2024-10/01/2024 12pm EST
  {
    start: 1723046400n,
    end: 1728316800n,
    fundsSender: "0xE64fD4d6f8128A27365Bee615eC9eD33979c782C",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xeFc0CED4B3D536103e76a1c4c74F0385C8F4Bdd3",
    marketId: "0x718af3af39b183758849486340b69466e3e89b84b7884188323416621ee91cb7",
    rewardAmount: {
      supply: parseUnits("200000", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // wstETH / USDT Mainnet 0.62 WETH 08/09/2024 09/07/2024 1pm GMT
  {
    start: 1723208400n,
    end: 1725714000n,
    fundsSender: "0x9Cc5b1bc0E1970D44B5Adc7ba51d76a5DD375434",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    marketId: "0x6a6c8e41a6a7ccbea68e1e6a19ece1fdd863b2b6c9e0f71bbcd4dcbe8b1062e8",
    rewardAmount: {
      supply: 623424419249185042n,
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // pufETH / USDC Mainnet 0.094 WETH 08/09/2024 09/07/2024 1pm GMT
  {
    start: 1723208400n,
    end: 1725714000n,
    fundsSender: "0x9Cc5b1bc0E1970D44B5Adc7ba51d76a5DD375434",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    marketId: "0x7e9c708876fa3816c46aeb08937b51aa0461c2af3865ecb306433db8a80b1d1b",
    rewardAmount: {
      supply: 94597806657332024n,
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // apxETH/WETH 250000 DINERO
  {
    start: 1724410800n,
    end: 1726830000n,
    fundsSender: "0x7f6494D4fBEA1c06daC2250A3FCa81003bF8D20C",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x6DF0E641FC9847c0c6Fde39bE6253045440c14d3",
    marketId: "0x8bbd1763671eb82a75d5f7ca33a0023ffabdd9d1a3d4316f34753685ae988e80",
    rewardAmount: {
      supply: parseUnits("250000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // bsdETH/eUSD Base 1,250 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // hyUSD/eUSD Base 1,250 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/eUSD Mainnet 1,250 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0x3f4d007982a480dd99052c05d811cf6838ce61b2a2be8dc52fca107f783d1f15",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1250", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // verUSDC 60'000 CFG
  {
    start: 1724749200n,
    end: 1729933200n,
    fundsSender: "0x8D566ADACe57ee5DD2BF98953B804991D634211A",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x2b51E2Ec9551F9B87B321f63b805871f1c81ba97",
    marketId: "0x83262d91702f90d9edf6c737ceb46e59a2bcfc7ba856e1e8448b7824f83a07e3",
    rewardAmount: {
      supply: parseUnits("60000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // pythUSDC - weETH borrow rewards 25,0000 PYTH 09/16-12/16 00:00 UTC
  {
    start: 1726520400n,
    end: 1734382800n,
    fundsSender: "0xAaB35e8702D783428EE2e1929CDB99e58093C3E2",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
    marketId: "0xa4e2843486610e6851f4e0a8fcdee819958598c71c7e99b0315904ccf162ddc3",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("50000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // bsdETH/eUSD Base 1,250 eUSD 09/05-09/20 6pm GMT
  {
    start: 1725559200n,
    end: 1726855200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // pythUSDC - ezETH borrow rewards 25,0000 PYTH 09/16-12/16 00:00 UTC
  {
    start: 1726520400n,
    end: 1734382800n,
    fundsSender: "0xAaB35e8702D783428EE2e1929CDB99e58093C3E2",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
    marketId: "0x026ecee9b3a8d0ce979837333349cfc2075a2af6cd9b41c1c1d9fa16c44e54c5",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("25000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // hyUSD/eUSD Base 1,250 eUSD 09/05-09/20 6pm GMT
  {
    start: 1725559200n,
    end: 1726855200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1250", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // pythETH - weETH borrow rewards 25,0000 PYTH 09/16-12/16 00:00 UTC
  {
    start: 1726520400n,
    end: 1734382800n,
    fundsSender: "0xAaB35e8702D783428EE2e1929CDB99e58093C3E2",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
    marketId: "0x3fa37d9cc9922c120972c89ae0da86843e7e51c0dd04668e6fac3e7cd1ada1d3",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("50000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // pythETH - ezETH borrow rewards 25,0000 PYTH 09/16-12/16 00:00 UTC
  {
    start: 1726520400n,
    end: 1734382800n,
    fundsSender: "0xAaB35e8702D783428EE2e1929CDB99e58093C3E2",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
    marketId: "0xc338cc2dc3f6a25bace40a920eea39ff27f184899def6bda478e27e591e5cef2",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("25000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/eUSD Mainnet 1,250 eUSD 09/05-09/20 6pm GMT
  {
    start: 1725559200n,
    end: 1726855200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0x3f4d007982a480dd99052c05d811cf6838ce61b2a2be8dc52fca107f783d1f15",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1250", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // bsdETH/eUSD Base 2,500 eUSD 09/20-10/20 6pm GMT
  {
    start: 1726855200n,
    end: 1729447200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // hyUSD/eUSD Base 2,500 eUSD 09/20-10/20 6pm GMT
  {
    start: 1726855200n,
    end: 1729447200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/eUSD Mainnet 2,500 eUSD 09/20-10/20 6pm GMT
  {
    start: 1726855200n,
    end: 1729447200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0x3f4d007982a480dd99052c05d811cf6838ce61b2a2be8dc52fca107f783d1f15",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // USD3/eUSD Mainnet 2,500 eUSD 09/20-10/20 6pm GMT
  {
    start: 1726855200n,
    end: 1729447200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0xf6422731a8f84d9ab7e8b6da15ab9ecc243e12a78200dfb7fd1cdf2391e38068",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // cbETH/EURC 12,500 USDC 09/24/2024 11/08/2024 1pm EST
  {
    start: 1727197200n,
    end: 1731088800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x7fc498ddcb7707d6f85f6dc81f61edb6dc8d7f1b47a83b55808904790564929a",
    rewardAmount: {
      supply: parseUnits("12500", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // WETH/EURC 12,500 EURC 09/24/2024 11/08/2024 1pm EST
  {
    start: 1727197200n,
    end: 1731088800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0xa9b5142fa687a24c275faf731f13b52faa9873252bb4e1cb6077aa1f412edb0b",
    rewardAmount: {
      supply: parseUnits("12500", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/EURC 12,500 EURC 09/24/2024 11/08/2024 1pm EST
  {
    start: 1727197200n,
    end: 1731088800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0xf7e40290f8ca1d5848b3c129502599aa0f0602eb5f5235218797a34242719561",
    rewardAmount: {
      supply: parseUnits("12500", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/EURC 12,500 EURC 09/24/2024 09/26/2024 1pm EST - Update to 555 and change end date to 09/26/2024
  {
    start: 1727197200n,
    end: 1727370000n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x536e3e39fd6c07148b38555e5e312e3874e1d08027e007d12822375524ccaa8c",
    rewardAmount: {
      supply: parseUnits("555", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/USDC 10,000 USDC on Mainnet 09/26/2024 10/03/2024 1pm EST
  {
    start: 1727370000n,
    end: 1727974800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    marketId: "0x64d65c9a2d91c36d56fbc42d69e979335320169b3df63bf92789e2c8883fcc64",
    rewardAmount: {
      supply: parseUnits("2500", 6),
      borrow: parseUnits("7500", 6),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  {
    start: 1727764200n,
    end: 1728887400n,
    fundsSender: "0x9cCC7Df2da448BBeA48347822E2A920053B7E67B",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    marketId: "0xba761af4134efb0855adfba638945f454f0a704af11fc93439e20c7c5ebab942",
    rewardAmount: {
      supply: parseUnits("2500", 6),
      borrow: parseUnits("2500", 6),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // cbBTC/EURC 11,945 EURC 09/27/2024 11/08/2024 1pm EST
  {
    start: 1727449200n,
    end: 1731088800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x67ebd84b2fb39e3bc5a13d97e4c07abe1ea617e40654826e9abce252e95f049e",
    rewardAmount: {
      supply: parseUnits("11945", 6),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH / USDT Mainnet 0.0367 WETH 10/03/2024 11/03/2024 1pm GMT
  {
    start: 1727960400n,
    end: 1730638800n,
    fundsSender: "0x9Cc5b1bc0E1970D44B5Adc7ba51d76a5DD375434",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    marketId: "0x6a6c8e41a6a7ccbea68e1e6a19ece1fdd863b2b6c9e0f71bbcd4dcbe8b1062e8",
    rewardAmount: {
      supply: 36781467642438822n,
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // pufETH / USDC Mainnet 0.289 WETH 10/03/2024 11/03/2024 1pm GMT
  {
    start: 1727960400n,
    end: 1730638800n,
    fundsSender: "0x9Cc5b1bc0E1970D44B5Adc7ba51d76a5DD375434",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    marketId: "0x7e9c708876fa3816c46aeb08937b51aa0461c2af3865ecb306433db8a80b1d1b",
    rewardAmount: {
      supply: 289490564462092337n,
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // tBTC / USDC Mainnet 2.187 WETH 10/03/2024 11/03/2024 1pm GMT
  {
    start: 1727960400n,
    end: 1730638800n,
    fundsSender: "0x9Cc5b1bc0E1970D44B5Adc7ba51d76a5DD375434",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    marketId: "0xe4cfbee9af4ad713b41bf79f009ca02b17c001a0c0e7bd2e6a89b1111b3d3f08",
    rewardAmount: {
      supply: 2187900260461918841n,
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // cbBTC/USDC 30,000 USDC on Mainnet 10/04/2024 10/18/2024 1pm EST
  {
    start: 1728061200n,
    end: 1729270800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    marketId: "0x64d65c9a2d91c36d56fbc42d69e979335320169b3df63bf92789e2c8883fcc64",
    rewardAmount: {
      supply: parseUnits("7500", 6),
      borrow: parseUnits("22500", 6),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // USDC/PAXG 3.15 PAXG on Mainnet 10/08/2024 11/08/2024 1pm GMT
  // Updated to 0.998999495967741936 PAXG from 10/08/2024 to 10/18/2024 because of market misconfiguration
  {
    start: 1728392400n,
    end: 1729241835n,
    fundsSender: "0x264bd8291fAE1D75DB2c5F573b07faA6715997B5",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
    marketId: "0x8eaf7b29f02ba8d8c1d7aeb587403dcb16e2e943e4e2f5f94b0963c2386406c9",
    rewardAmount: {
      supply: parseUnits("0.998999495967741936", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // Add rsETH/WETH incentives 15/10/2024 - 28/10/2024
  {
    start: 1728930600n,
    end: 1730053800n,
    fundsSender: "0x9cCC7Df2da448BBeA48347822E2A920053B7E67B",
    tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    marketId: "0xba761af4134efb0855adfba638945f454f0a704af11fc93439e20c7c5ebab942",
    rewardAmount: {
      supply: parseUnits("2500", 6),
      borrow: parseUnits("2500", 6),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // uSOL/USDC 17.5 uSOL on Base 10/10/2024 10/24/2024 3pm GMT
  {
    start: 1728572400n,
    end: 1729782000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    marketId: "0xa60e9b888f343351dece4df8251abe5858fc5db96e8624d614a6500c3a3085ea",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("17.5", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/USDC 10,000 USDC on Base 10/16/2024 10/23/2024 1pm EST
  {
    start: 1729098000n,
    end: 1729702800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836",
    rewardAmount: {
      supply: parseUnits("2500", 6),
      borrow: parseUnits("7500", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/USDC 10,000 USDC on Base 10/16/2024 10/23/2024 1pm EST
  {
    start: 1729098000n,
    end: 1729702800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x13c42741a359ac4a8aa8287d2be109dcf28344484f91185f9a79bd5a805a55ae",
    rewardAmount: {
      supply: parseUnits("2500", 6),
      borrow: parseUnits("7500", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wrsETH/WETH 3000 USDC on Base 18/10/2024 to 10/31/2024 00:00
  {
    start: 1729189800n,
    end: 1730313000n,
    fundsSender: "0x936DC723508ce4C708e085dB9132c4A62Bfc69Ed",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x214c2bf3c899c913efda9c4a49adff23f77bbc2dc525af7c05be7ec93f32d561",
    rewardAmount: {
      supply: parseUnits("1500", 6),
      borrow: parseUnits("1500", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // bsdETH/eUSD Base 3,000 eUSD 10/20-11/20 6pm GMT
  {
    start: 1729447200n,
    end: 1732125600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // hyUSD/eUSD Base 3,000 eUSD 10/20-11/20 6pm GMT
  {
    start: 1729447200n,
    end: 1732125600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/eUSD Mainnet 2,500 eUSD 10/20-11/20 6pm GMT
  {
    start: 1729447200n,
    end: 1732125600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0x3f4d007982a480dd99052c05d811cf6838ce61b2a2be8dc52fca107f783d1f15",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // USD3/eUSD Mainnet 2,500 eUSD 10/20-11/20 6pm GMT
  {
    start: 1729447200n,
    end: 1732125600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0xf6422731a8f84d9ab7e8b6da15ab9ecc243e12a78200dfb7fd1cdf2391e38068",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // uSOL/USDC 6.52 uSOL on Base 10/30/2024 11/13/2024 3pm GMT
  {
    start: 1730300400n,
    end: 1731510000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    marketId: "0xa60e9b888f343351dece4df8251abe5858fc5db96e8624d614a6500c3a3085ea",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("6.5223053386", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // uSUI/USDC 525.97 uSUI on Base 10/30/2024 11/13/2024 3pm GMT
  {
    start: 1730300400n,
    end: 1731510000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4",
    marketId: "0x5d96564285fc3830f51fe495f88c29cc1232fbca61ca8b6edc25bff921efdef2",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("525.9721846763", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/USDC 20,000 USDC on Base 10/28/2024 11/11/2024 1pm EST
  {
    start: 1730134800n,
    end: 1731348000n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836",
    rewardAmount: {
      supply: parseUnits("5000", 6),
      borrow: parseUnits("15000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/USDC 20,000 USDC on Base 10/28/2024 11/11/2024 1pm EST
  {
    start: 1730134800n,
    end: 1731348000n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x13c42741a359ac4a8aa8287d2be109dcf28344484f91185f9a79bd5a805a55ae",
    rewardAmount: {
      supply: parseUnits("5000", 6),
      borrow: parseUnits("15000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // rsETH/WETH 5000 USDC on Ethereum 10/31/2024 to 11/14/2024 00:00 UTC
  {
    start: 1730313000n,
    end: 1731522600n,
    fundsSender: "0x5979d13d648c831607A63cCCaaEEB917b6BDB622",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    marketId: "0xba761af4134efb0855adfba638945f454f0a704af11fc93439e20c7c5ebab942",
    rewardAmount: {
      supply: parseUnits("1250", 6),
      borrow: parseUnits("3750", 6),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // wrsETH/WETH 3000 USDC on Base 11/06/2024 to 11/20/2024 00:00
  {
    start: 1730831400n,
    end: 1732041000n,
    fundsSender: "0x936DC723508ce4C708e085dB9132c4A62Bfc69Ed",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x214c2bf3c899c913efda9c4a49adff23f77bbc2dc525af7c05be7ec93f32d561",
    rewardAmount: {
      supply: parseUnits("600", 6),
      borrow: parseUnits("900", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/USDC 25,000 USDC on Base 11/06/2024 11/???/2024 1pm EST
  {
    start: 1730916000n,
    end: 1733508000n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x9103c3b4e834476c9a62ea009ba2c884ee42e94e6e314a26f04d312434191836",
    rewardAmount: {
      supply: parseUnits("0", 6),
      borrow: parseUnits("25000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // bsdETH/eUSD Base 3,000 eUSD 11/20-12/20 6pm GMT
  {
    start: 1732125600n,
    end: 1734717600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // uSOL/USDC 14.09 uSOL on Base 11/21/2024 01/09/2025 9pm GMT
  {
    start: 1732222800n,
    end: 1736456400n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    marketId: "0xa60e9b888f343351dece4df8251abe5858fc5db96e8624d614a6500c3a3085ea",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("14.09379439742139", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // hyUSD/eUSD Base 3,000 eUSD 11/20-12/20 6pm GMT
  {
    start: 1732125600n,
    end: 1734717600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // uSUI/USDC 887.97 uSUI on Base 11/21/2024 01/09/2025 9pm GMT
  {
    start: 1732222800n,
    end: 1736456400n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4",
    marketId: "0x5d96564285fc3830f51fe495f88c29cc1232fbca61ca8b6edc25bff921efdef2",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("887.97010208566", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // rsETH/WETH 5000 USDC on Ethereum 11/21/2024 to 12/05/2024 00:00 UTC
  {
    start: 1732127400n,
    end: 1733337000n,
    fundsSender: "0x9cCC7Df2da448BBeA48347822E2A920053B7E67B",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    marketId: "0xba761af4134efb0855adfba638945f454f0a704af11fc93439e20c7c5ebab942",
    rewardAmount: {
      supply: parseUnits("1250", 6),
      borrow: parseUnits("3750", 6),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // ETH+/eUSD Mainnet 2,500 eUSD 11/20-12/20 6pm GMT
  {
    start: 1732125600n,
    end: 1734717600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0x3f4d007982a480dd99052c05d811cf6838ce61b2a2be8dc52fca107f783d1f15",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // USD3/eUSD Mainnet 2,500 eUSD 11/20-12/20 6pm GMT
  {
    start: 1732125600n,
    end: 1734717600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0xf6422731a8f84d9ab7e8b6da15ab9ecc243e12a78200dfb7fd1cdf2391e38068",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // agETH/WETH 1500 USDC on Ethereum - Wed Dec 04 2024 19:00:00 GMT+0000 - Wed Dec 18 2024 19:00:00 GMT+0000
  {
    start: 1733338800n,
    end: 1734548400n,
    fundsSender: "0x9cCC7Df2da448BBeA48347822E2A920053B7E67B",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    marketId: "0xb7ad412532006bf876534ccae59900ddd9d1d1e394959065cb39b12b22f94ff5",
    rewardAmount: {
      supply: parseUnits("750", 6),
      borrow: parseUnits("750", 6),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // wrsETH/WETH 1500 USDC on Base - Wed Dec 04 2024 19:00:00 GMT+0000 - Wed Dec 18 2024 19:00:00 GMT+0000
  {
    start: 1733338800n,
    end: 1734548400n,
    fundsSender: "0x936DC723508ce4C708e085dB9132c4A62Bfc69Ed",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    marketId: "0x214c2bf3c899c913efda9c4a49adff23f77bbc2dc525af7c05be7ec93f32d561",
    rewardAmount: {
      supply: parseUnits("600", 6),
      borrow: parseUnits("900", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // rsETH/WETH 5000 USDC on Ethereum - Wed Dec 04 2024 19:00:00 GMT+0000 - Wed Dec 18 2024 19:00:00 GMT+0000
  {
    start: 1733338800n,
    end: 1734548400n,
    fundsSender: "0x9cCC7Df2da448BBeA48347822E2A920053B7E67B",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    marketId: "0xba761af4134efb0855adfba638945f454f0a704af11fc93439e20c7c5ebab942",
    rewardAmount: {
      supply: parseUnits("1250", 6),
      borrow: parseUnits("3750", 6),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  {
    start: 1733832000n,
    end: 1741608000n,
    fundsSender: "0x8D566ADACe57ee5DD2BF98953B804991D634211A",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x2b51E2Ec9551F9B87B321f63b805871f1c81ba97",
    marketId: "0x83262d91702f90d9edf6c737ceb46e59a2bcfc7ba856e1e8448b7824f83a07e3",
    rewardAmount: {
      supply: parseUnits("90000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // bsdETH/eUSD Base 3,000 eUSD 12/20-1/20 6pm GMT
  {
    start: 1734717600n,
    end: 1737396000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0xf9ed1dba3b6ba1ede10e2115a9554e9c52091c9f1b1af21f9e0fecc855ee74bf",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // hyUSD/eUSD Base 3,000 eUSD 12/20-1/20 6pm GMT
  {
    start: 1734717600n,
    end: 1737396000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    marketId: "0x3a5bdf0be8d820c1303654b078b14f8fc6d715efaeca56cec150b934bdcbff31",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ETH+/eUSD Mainnet 2,500 eUSD 12/20-1/20 6pm GMT
  {
    start: 1734717600n,
    end: 1737396000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0x3f4d007982a480dd99052c05d811cf6838ce61b2a2be8dc52fca107f783d1f15",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // USD3/eUSD Mainnet 2,500 eUSD 12/20-1/20 6pm GMT
  {
    start: 1734717600n,
    end: 1737396000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    marketId: "0xf6422731a8f84d9ab7e8b6da15ab9ecc243e12a78200dfb7fd1cdf2391e38068",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2500", 18),
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // uSOL/USDC 9.8 uSOL on Base 1/20/2025 03/17/2025 3pm GMT
  {
    start: 1737381600n,
    end: 1742220000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    marketId: "0xa60e9b888f343351dece4df8251abe5858fc5db96e8624d614a6500c3a3085ea",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("9.807312647461925", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // uSUI/USDC 357.05 uSUI on Base 1/20/2025 03/17/2025 3pm GMT
  {
    start: 1737381600n,
    end: 1742220000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4",
    marketId: "0x5d96564285fc3830f51fe495f88c29cc1232fbca61ca8b6edc25bff921efdef2",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("357.05", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // uAPT/USDC 204.37 uAPT on Base 1/20/2025 03/17/2025 3pm GMT
  {
    start: 1737381600n,
    end: 1742220000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9c0e042d65a2e1fF31aC83f404E5Cb79F452c337",
    marketId: "0xe0a6ea61ee79c0ea05268064525538b8290139b60b972fc83c5d5d26cec7cc89",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("204.37466725796838", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // uSOL/USDC 6 uSOL on Base 3/17/2025 04/21/2025 2pm GMT
  {
    start: 1742220000n,
    end: 1745244000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    marketId: "0xa60e9b888f343351dece4df8251abe5858fc5db96e8624d614a6500c3a3085ea",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("6", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // uSUI/USDC 310 uSUI on Base 3/17/2025 04/21/2025 2pm GMT
  {
    start: 1742220000n,
    end: 1745244000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4",
    marketId: "0x5d96564285fc3830f51fe495f88c29cc1232fbca61ca8b6edc25bff921efdef2",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("310", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // uXRP/USDC 379 uXRP on Base 3/03/2025 03/31/2025 2pm GMT
  {
    start: 1741183200n,
    end: 1743426000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x2615a94df961278DcbC41Fb0a54fEc5f10a693aE",
    marketId: "0xa426ca680bd5a7dc0f95942ba876a7df399cdf8149f798bcc4e94f03e35d08fa",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("379", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/sUSDS 12,500 USDS on Base 3/10/2025 03/17/2025 0am UTC
  {
    start: 1741564800n,
    end: 1742169600n,
    fundsSender: "0x1Fe9F102593861118D8664E84201ec9754198F30",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
    marketId: "0xb003f1eddcaece702f8b34d684840ef913e00d6c9b0e209f67f8524bfc095733",
    rewardAmount: {
      supply: parseUnits("12500", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/sUSDS 12,500 USDS on Base 3/10/2025 03/17/2025 0am UTC
  {
    start: 1741564800n,
    end: 1742169600n,
    fundsSender: "0x1Fe9F102593861118D8664E84201ec9754198F30",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
    marketId: "0x680f4dfd7af2baa95465a72773e1865612ee0222808a7f8acca6becd70d1be45",
    rewardAmount: {
      supply: parseUnits("12500", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/sUSDS 12,500 USDS on Base 3/17/2025 03/24/2025 0am UTC
  {
    start: 1742169600n,
    end: 1742774400n,
    fundsSender: "0x1Fe9F102593861118D8664E84201ec9754198F30",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
    marketId: "0xb003f1eddcaece702f8b34d684840ef913e00d6c9b0e209f67f8524bfc095733",
    rewardAmount: {
      supply: parseUnits("12500", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/sUSDS 12,500 USDS on Base 3/17/2025 03/24/2025 0am UTC
  {
    start: 1742169600n,
    end: 1742774400n,
    fundsSender: "0x1Fe9F102593861118D8664E84201ec9754198F30",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
    marketId: "0x680f4dfd7af2baa95465a72773e1865612ee0222808a7f8acca6becd70d1be45",
    rewardAmount: {
      supply: parseUnits("12500", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // ynethx/USDC Mainnet 5 ynETHx 03/18-04/29 12pm EST
  {
    start: 1742313600n,
    end: 1745942400n,
    fundsSender: "0x0329aCa1a15139e2288E58c8a8a057b7723af4f2",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x657d9ABA1DBb59e53f9F3eCAA878447dCfC96dCb",
    marketId: "0xf0edbb36183591ff28c56fdb283fdd6896cf1298990e5913208902adb87d2b75",
    rewardAmount: {
      supply: parseUnits("5", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // wstETH/sUSDS 12,500 USDS on Base 3/24/2025 03/31/2025 0am UTC
  {
    start: 1742774400n,
    end: 1743379200n,
    fundsSender: "0x1Fe9F102593861118D8664E84201ec9754198F30",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
    marketId: "0xb003f1eddcaece702f8b34d684840ef913e00d6c9b0e209f67f8524bfc095733",
    rewardAmount: {
      supply: parseUnits("12500", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/sUSDS 12,500 USDS on Base 3/24/2025 03/31/2025 0am UTC
  {
    start: 1742774400n,
    end: 1743379200n,
    fundsSender: "0x1Fe9F102593861118D8664E84201ec9754198F30",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
    marketId: "0x680f4dfd7af2baa95465a72773e1865612ee0222808a7f8acca6becd70d1be45",
    rewardAmount: {
      supply: parseUnits("12500", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wstETH/sUSDS 12,500 USDS on Base 3/31/2025 04/07/2025 0am UTC
  {
    start: 1743379200n,
    end: 1743984000n,
    fundsSender: "0x1Fe9F102593861118D8664E84201ec9754198F30",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
    marketId: "0xb003f1eddcaece702f8b34d684840ef913e00d6c9b0e209f67f8524bfc095733",
    rewardAmount: {
      supply: parseUnits("12500", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/sUSDS 12,500 USDS on Base 3/31/2025 04/07/2025 0am UTC
  {
    start: 1743379200n,
    end: 1743984000n,
    fundsSender: "0x1Fe9F102593861118D8664E84201ec9754198F30",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x820C137fa70C8691f0e44Dc420a5e53c168921Dc",
    marketId: "0x680f4dfd7af2baa95465a72773e1865612ee0222808a7f8acca6becd70d1be45",
    rewardAmount: {
      supply: parseUnits("12500", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // wBLT/USDC 7,000 BMX on Base 04/16/2025 06/11/2025 0am UTC
  {
    start: 1744761600n,
    end: 1749600000n,
    fundsSender: "0xE02Fb5C70aF32F80Aa7F9E8775FE7F12550348ec",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x548f93779fBC992010C07467cBaf329DD5F059B7",
    marketId: "0xd1892032c68f94d2650238b363195c6c3c142ba80c0c71269d14f8ea42c0abdf",
    rewardAmount: {
      supply: parseUnits("5000", 18),
      borrow: parseUnits("2000", 18),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/EURC 2000 EURC 04/14/2025 04/28/2025 1pm EST
  {
    start: 1744668000n,
    end: 1745877600n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x67ebd84b2fb39e3bc5a13d97e4c07abe1ea617e40654826e9abce252e95f049e",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbETH/EURC 1000 EURC 04/14/2025 04/28/2025 1pm EST
  {
    start: 1744668000n,
    end: 1745877600n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x7fc498ddcb7707d6f85f6dc81f61edb6dc8d7f1b47a83b55808904790564929a",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("1000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // syrupUSDC/USDC 300,000 SYRUP on ETH Mainnet 04/14/2025 05/14/2025 9am EST
  {
    start: 1744635600n,
    end: 1747227600n,
    fundsSender: "0x3fCdCc5bC5178C81738c176613818D9D2C7F7E1a",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x643C4E15d7d62Ad0aBeC4a9BD4b001aA3Ef52d66",
    marketId: "0x729badf297ee9f2f6b3f717b96fd355fc6ec00422284ce1968e76647b258cf44",
    rewardAmount: {
      supply: parseUnits("300000", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // fxSAVE/USDC 64 FXN on Ethereum 4/22/2025 to 5/06/2025  14:00:00 UTC
  {
    start: 1745330400n,
    end: 1746540000n,
    fundsSender: "0x38a93e70b0D8343657f802C1c3Fdb06aC8F8fe99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x365accfca291e7d3914637abf1f7635db165bb09",
    marketId: "0x43e925e52d7873fa8acac90dd5f246087d55b3a34c344b71884a6352491ff459",
    rewardAmount: {
      supply: parseUnits("64", 18),
      borrow: 0n,
      collateral: 0n,
    },
    chainId: ChainId.MAINNET,
  },
  // cbBTC/EURC 5000 EURC 04/28/2025 05/12/2025 1pm EST
  {
    start: 1745877600n,
    end: 1747069200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x67ebd84b2fb39e3bc5a13d97e4c07abe1ea617e40654826e9abce252e95f049e",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("5000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbETH/EURC 2000 EURC 04/28/2025 05/12/2025 1pm EST
  {
    start: 1745877600n,
    end: 1747069200n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x7fc498ddcb7707d6f85f6dc81f61edb6dc8d7f1b47a83b55808904790564929a",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("2000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/EURC 7000 EURC 05/12/2025 05/26/2025 1pm EST
  {
    start: 1747069200n,
    end: 1748278800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x67ebd84b2fb39e3bc5a13d97e4c07abe1ea617e40654826e9abce252e95f049e",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("7000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbETH/EURC 3000 EURC 05/12/2025 05/26/2025 1pm EST
  {
    start: 1747069200n,
    end: 1748278800n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x7fc498ddcb7707d6f85f6dc81f61edb6dc8d7f1b47a83b55808904790564929a",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("3000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbBTC/EURC 6000 EURC 05/28/2025 06/11/2025 6am EST
  {
    start: 1748426400n,
    end: 1749636000n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x67ebd84b2fb39e3bc5a13d97e4c07abe1ea617e40654826e9abce252e95f049e",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("6000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
  // cbETH/EURC 4000 EURC 05/28/2025 06/11/2025 6am EST
  {
    start: 1748426400n,
    end: 1749636000n,
    fundsSender: "0x874A0A0fc772a32b40e3749ACc3B72f3b0c9b82a",
    urdAddress: "0x5400dBb270c956E8985184335A1C62AcA6Ce1333",
    tokenAddress: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    marketId: "0x7fc498ddcb7707d6f85f6dc81f61edb6dc8d7f1b47a83b55808904790564929a",
    rewardAmount: {
      supply: 0n,
      borrow: parseUnits("4000", 6),
      collateral: 0n,
    },
    chainId: ChainId.BASE,
  },
];
