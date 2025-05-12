import { parseUnits } from "viem";

import { Address, ChainId } from "@lqg-org/blue-rewards-core-sdk";

export type VaultRewardProgramArgs = {
  vault: Address;
  start: bigint;
  end: bigint;
  fundsSender: Address;
  urdAddress: Address;
  tokenAddress: Address;
  amount: bigint;
  chainId: ChainId;
};

/**
 * List of Vault programs
 * @example
 * [
 *  {
 *    start: 1717149233n,
 *    end: 1717149235n,
 *    fundsSender: "0x5Eb982bb1E620cC3927E5CF8A5D207e667643297",
 *    urdAddress: "0x5aC6F9F696b06538A8A0253ab495dC4c638da3be",
 *    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
 *    vault: "0xED0A7A49f2228E01a3169C4A5a72a2EbFE8756Dc",
 *    amount: parseUnits("100000", 18),
 *    blacklist: [],
 *  }
 * ]
 */
export const vaultPrograms: VaultRewardProgramArgs[] = [
  // MOONWELL
  // Moonwell Flagship USDC 4,165,000 WELL
  {
    start: 1718719200n,
    end: 1723903200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    amount: parseUnits("4165000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH 4,165,000 WELL
  {
    start: 1718719200n,
    end: 1723903200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    amount: parseUnits("4165000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship USDC 8,330,000 WELL
  {
    start: 1723903200n,
    end: 1729087200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    amount: parseUnits("8330000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH 8,330,000 WELL
  {
    start: 1723903200n,
    end: 1729087200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    amount: parseUnits("8330000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship EURC 1,500,000 WELL
  {
    start: 1726758000n,
    end: 1729087200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026",
    amount: parseUnits("1500000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship USDC 10,000,000 WELL
  {
    start: 1729087200n,
    end: 1734271200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca",
    amount: parseUnits("10000000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH 10,000,000 WELL
  {
    start: 1729087200n,
    end: 1734271200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1",
    amount: parseUnits("10000000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship EURC 3,500,000 WELL
  {
    start: 1729087200n,
    end: 1734271200n,
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa",
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943",
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE",
    vault: "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026",
    amount: parseUnits("3500000", 18),
    chainId: ChainId.BASE,
  },
  // LlamaRisk crvUSD Vault - 47,777 CRV over 1 month
  {
    start: 1720544708n, // Tue Jul 09 2024 17:05:08 GMT+0000
    end: 1723223108n, // Fri Aug 09 2024 17:05:08 GMT+0000
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("47777", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 8,000,000 RSR 07/22-08/22 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xaB36452DbAC151bE02b16Ca17d8919826072f64a",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("8000000", 18),
    chainId: ChainId.BASE,
  },
  // Guntlet eUSD Core Vault - 11,000,000 RSR 07/22-08/22 4pm GMT
  {
    start: 1721664000n,
    end: 1724342400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x320623b8E4fF03373931769A31Fc52A4E78B5d70",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("11000000", 18),
    chainId: ChainId.MAINNET,
  },
  // pythUSDC Vault - 25,000 PYTH 08/07-09/06 2pm UTC
  {
    start: 1723039200n,
    end: 1725631200n,
    fundsSender: "0xAaB35e8702D783428EE2e1929CDB99e58093C3E2",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
    vault: "0x0FaBfEAcedf47e890c50C8120177fff69C6a1d9B",
    amount: parseUnits("25000", 6),
    chainId: ChainId.BASE,
  },
  // pythETH Vault - 25,000 PYTH 08/07-09/06 2pm UTC
  {
    start: 1723039200n,
    end: 1725631200n,
    fundsSender: "0xAaB35e8702D783428EE2e1929CDB99e58093C3E2",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x4c5d8A75F3762c1561D96f177694f67378705E98",
    vault: "0x80D9964fEb4A507dD697b4437Fc5b25b618CE446",
    amount: parseUnits("25000", 6),
    chainId: ChainId.BASE,
  },
  // LlamaRisk crvUSD Vault (Epoch 2) - 30,450 CRV over 2 weeks
  {
    start: 1723223108n, // Fri Aug 09 2024 17:05:08 GMT+0000
    end: 1724432708n, // Fri Aug 23 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // llamarisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("30450", 18),
    chainId: ChainId.MAINNET,
  },
  // LlamaRisk crvUSD Vault (Epoch 3) - 18,270 CRV over 2 weeks
  {
    start: 1724432708n, // Fri Aug 23 2024 17:05:08 GMT+0000
    end: 1725642308n, // Fri Sep 06 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // llamarisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("18270", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 21,875 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("21875", 18),
    chainId: ChainId.BASE,
  },
  // Guntlet eUSD Core Vault - 30,000 eUSD 08/23-09/05 6pm GMT
  {
    start: 1724436000n,
    end: 1725559200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("30000", 18),
    chainId: ChainId.MAINNET,
  },
  // LlamaRisk crvUSD Vault (Epoch 4) - 14,600 CRV over 2 weeks
  {
    start: 1725642308n, // Fri Sep 06 2024 17:05:08 GMT+0000
    end: 1726851908n, // Fri Sep 20 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // llamarisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("14600", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 21,875 eUSD 09/05-09/20 6pm GMT
  {
    start: 1725559200n,
    end: 1726855200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("21875", 18),
    chainId: ChainId.BASE,
  },
  // Guntlet eUSD Core Vault - 30,000 eUSD 09/05-09/20 6pm GMT
  {
    start: 1725559200n,
    end: 1726855200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("30000", 18),
    chainId: ChainId.MAINNET,
  },
  // LlamaRisk crvUSD Vault (Epoch 5) - 29,000 CRV over 4 weeks
  {
    start: 1726851908n, // Fri Sep 20 2024 17:05:08 GMT+0000
    end: 1729271108n, // Fri Oct 18 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // LlamaRisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("29000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 43,750 eUSD 09/20-10/20 6pm GMT
  {
    start: 1726855200n,
    end: 1729447200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Guntlet eUSD Core Vault - 60,000 eUSD 09/20-10/20 6pm GMT
  {
    start: 1726855200n,
    end: 1729447200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 Universal USDC Vault - 17.5 uSOL 10/10-10/24 3pm GMT
  {
    start: 1728572400n,
    end: 1729782000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("17.5", 18),
    chainId: ChainId.BASE,
  },
  // Re7 eUSD Vault - 43,750 eUSD 10/20-11/20 6pm GMT
  {
    start: 1729447200n,
    end: 1732125600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet eUSD Core Vault - 60,000 eUSD 10/20-11/20 6pm GMT
  {
    start: 1729447200n,
    end: 1732125600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // LlamaRisk crvUSD Vault (Epoch 6) - 7500 CRV over 2 weeks
  {
    start: 1729271108n, // Fri Oct 18 2024 17:05:08 GMT+0000
    end: 1730480708n, // Fri Nov 01 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // LlamaRisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("7500", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 WETH Vault (Base) - 20,000 eUSD 10/24-11/24 6pm GMT
  {
    start: 1729792800n,
    end: 1732471200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xA2Cac0023a4797b4729Db94783405189a4203AFc",
    amount: parseUnits("20000", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet WETH Core Vault (Base) - 20,000 eUSD 10/24-11/24 6pm GMT
  {
    start: 1729792800n,
    end: 1732471200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0x6b13c060F13Af1fdB319F52315BbbF3fb1D88844",
    amount: parseUnits("20000", 18),
    chainId: ChainId.BASE,
  },
  // LlamaRisk crvUSD Vault (Epoch 7) - 15_000 CRV over 4 weeks
  {
    start: 1730480708n, // Fri Nov 01 2024 17:05:08 GMT+0000
    end: 1732899908n, // Fri Nov 29 2024 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // LlamaRisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("15000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 Universal USDC Vault - 6.52 uSOL 10/30-11/13 3pm GMT
  {
    start: 1730300400n,
    end: 1731510000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("6.5223053386", 18),
    chainId: ChainId.BASE,
  },
  // Re7 Universal USDC Vault - 525.97 uSUI 10/30-11/13 3pm GMT
  {
    start: 1730300400n,
    end: 1731510000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("525.9721846763", 18),
    chainId: ChainId.BASE,
  },
  // Pendle WBTC Vault - 1000 Pendle 11/14-11/28 6pm GMT
  {
    start: 1731607200n,
    end: 1732816800n,
    fundsSender: "0x650741eB4f6AB0776B9bF98A3280E3Cd6A2F1BF1", // mev capital ms 2
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0x808507121B80c02388fAd14726482e061B8da827", // Pendle token
    vault: "0x2f1aBb81ed86Be95bcf8178bA62C8e72D6834775", // Pendle WBTC vault
    amount: parseUnits("2000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 43,750 eUSD 11/20-12/20 6pm GMT
  {
    start: 1732125600n,
    end: 1734717600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet eUSD Core Vault - 60,000 eUSD 11/20-12/20 6pm GMT
  {
    start: 1732125600n,
    end: 1734717600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 WETH Vault (Base) - 20,000 eUSD 10/24-11/24 6pm GMT
  {
    start: 1732471200n,
    end: 1735063200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xA2Cac0023a4797b4729Db94783405189a4203AFc",
    amount: parseUnits("20000", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet WETH Core Vault (Base) - 20,000 eUSD 10/24-11/24 6pm GMT
  {
    start: 1732471200n,
    end: 1735063200n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0x6b13c060F13Af1fdB319F52315BbbF3fb1D88844",
    amount: parseUnits("20000", 18),
    chainId: ChainId.BASE,
  },
  // Re7 Universal USDC Vault - 1939.79 USDC 10/30-11/13 3pm GMT
  {
    start: 1732222800n,
    end: 1736456400n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("1939.79522", 6),
    chainId: ChainId.BASE,
  },
  // LlamaRisk crvUSD Vault (Epoch 8) - 13_514 CRV over 6 weeks
  {
    start: 1732899908n, // Fri Nov 29 2024 17:05:08 GMT+0000
    end: 1736528708n, // Fri Jan 10 2025 17:05:08 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // LlamaRisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("13514", 18),
    chainId: ChainId.MAINNET,
  },

  // Pendle WBTC Vault - 1000 Pendle 11/29-12/13 6pm GMT
  {
    start: 1732903200n,
    end: 1734112800n,
    fundsSender: "0x650741eB4f6AB0776B9bF98A3280E3Cd6A2F1BF1", // mev capital ms 2
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0x808507121B80c02388fAd14726482e061B8da827", // Pendle token
    vault: "0x2f1aBb81ed86Be95bcf8178bA62C8e72D6834775", // Pendle WBTC vault
    amount: parseUnits("1000", 18),
    chainId: ChainId.MAINNET,
  },
  {
    start: 1734307200n,
    end: 1734912000n,
    fundsSender: "0x1155b614971f16758C92c4890eD338C9e3ede6b7", // ionic
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5", // ion token
    vault: "0x9aB2d181E4b87ba57D5eD564D3eF652C4E710707", // ionic weth vault
    amount: parseUnits("191415", 18),
    chainId: ChainId.BASE,
  },
  {
    start: 1734307200n,
    end: 1734912000n,
    fundsSender: "0x1155b614971f16758C92c4890eD338C9e3ede6b7", // ionic
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5", // ion token
    vault: "0xCd347c1e7d600a9A3e403497562eDd0A7Bc3Ef21", // ionic usdc vault
    amount: parseUnits("325415", 18),
    chainId: ChainId.BASE,
  },
  // Re7 eUSD Vault - 43,750 eUSD 12/20-1/20 6pm GMT
  {
    start: 1734717600n,
    end: 1737396000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet eUSD Core Vault - 60,000 eUSD 12/20-1/20 6pm GMT
  {
    start: 1734717600n,
    end: 1737396000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 WETH Vault (Base) - 20,000 eUSD 12/24-1/24 6pm GMT
  {
    start: 1735063200n,
    end: 1737741600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xA2Cac0023a4797b4729Db94783405189a4203AFc",
    amount: parseUnits("20000", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet WETH Core Vault (Base) - 20,000 eUSD 12/24-1/24 6pm GMT
  {
    start: 1735063200n,
    end: 1737741600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0x6b13c060F13Af1fdB319F52315BbbF3fb1D88844",
    amount: parseUnits("20000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship USDC - Monnwell rewards - month 1
  {
    start: 1734372000n, //Mon Dec 16 2024 18:00:00 GMT+0000
    end: 1737050400n, //Thu Jan 16 2025 18:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca", // Moonwell Flagship USDC
    amount: parseUnits("675000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship USDC - Monnwell rewards - month 2
  {
    start: 1737050400n, //Thu Jan 16 2025 18:00:00 GMT+0000
    end: 1739728800n, //Sun Feb 16 2025 18:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca", // Moonwell Flagship USDC
    amount: parseUnits("877500", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship USDC - Monnwell rewards - months 3-4
  {
    start: 1739728800n, //Sun Feb 16 2025 18:00:00 GMT+0000
    end: 1744822800n, //Wed Apr 16 2025 17:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca", // Moonwell Flagship USDC
    amount: parseUnits("1350000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship USDC - Monnwell rewards - months 5-6
  {
    start: 1744822800n, //Wed Apr 16 2025 17:00:00 GMT+0000
    end: 1750093200n, //Mon Jun 16 2025 17:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xc1256Ae5FF1cf2719D4937adb3bbCCab2E00A2Ca", // Moonwell Flagship USDC
    amount: parseUnits("1350000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship EURC - Monnwell rewards - month 1
  {
    start: 1734372000n, //Mon Dec 16 2024 18:00:00 GMT+0000
    end: 1737050400n, //Thu Jan 16 2025 18:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026", // Moonwell Flagship EURC
    amount: parseUnits("675000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship EURC - Monnwell rewards - month 2
  {
    start: 1737050400n, //Thu Jan 16 2025 18:00:00 GMT+0000
    end: 1739728800n, //Sun Feb 16 2025 18:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026", // Moonwell Flagship EURC
    amount: parseUnits("573750", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship EURC - Monnwell rewards - months 3-4
  {
    start: 1739728800n, //Sun Feb 16 2025 18:00:00 GMT+0000
    end: 1744822800n, //Wed Apr 16 2025 17:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026", // Moonwell Flagship EURC
    amount: parseUnits("1350000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship EURC - Monnwell rewards - months 5-6
  {
    start: 1744822800n, //Wed Apr 16 2025 17:00:00 GMT+0000
    end: 1750093200n, //Mon Jun 16 2025 17:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xf24608E0CCb972b0b0f4A6446a0BBf58c701a026", // Moonwell Flagship EURC
    amount: parseUnits("1350000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH - Monnwell rewards - month 1
  {
    start: 1734372000n, //Mon Dec 16 2024 18:00:00 GMT+0000
    end: 1737050400n, //Thu Jan 16 2025 18:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1", // Moonwell Flagship ETH
    amount: parseUnits("675000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH - Monnwell rewards - month 2
  {
    start: 1737050400n, //Thu Jan 16 2025 18:00:00 GMT+0000
    end: 1739728800n, //Sun Feb 16 2025 18:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1", // Moonwell Flagship ETH
    amount: parseUnits("675000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH - Monnwell rewards - months 3-4
  {
    start: 1739728800n, //Sun Feb 16 2025 18:00:00 GMT+0000
    end: 1744822800n, //Wed Apr 16 2025 17:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1", // Moonwell Flagship ETH
    amount: parseUnits("1350000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Flagship ETH - Monnwell rewards - months 5-6
  {
    start: 1744822800n, //Wed Apr 16 2025 17:00:00 GMT+0000
    end: 1750093200n, //Mon Jun 16 2025 17:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0xa0E430870c4604CcfC7B38Ca7845B1FF653D0ff1", // Moonwell Flagship ETH
    amount: parseUnits("1350000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Frontier cbBTC - Monnwell rewards - month 1
  {
    start: 1734372000n, //Mon Dec 16 2024 18:00:00 GMT+0000
    end: 1737050400n, //Thu Jan 16 2025 18:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0x543257eF2161176D7C8cD90BA65C2d4CaEF5a796", // Moonwell Frontier cbBTC
    amount: parseUnits("675000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Frontier cbBTC - Monnwell rewards - month 2
  {
    start: 1737050400n, //Thu Jan 16 2025 18:00:00 GMT+0000
    end: 1739728800n, //Sun Feb 16 2025 18:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0x543257eF2161176D7C8cD90BA65C2d4CaEF5a796", // Moonwell Frontier cbBTC
    amount: parseUnits("573750", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Frontier cbBTC - Monnwell rewards - months 3-4
  {
    start: 1739728800n, //Sun Feb 16 2025 18:00:00 GMT+0000
    end: 1744822800n, //Wed Apr 16 2025 17:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0x543257eF2161176D7C8cD90BA65C2d4CaEF5a796", // Moonwell Frontier cbBTC
    amount: parseUnits("1350000", 18),
    chainId: ChainId.BASE,
  },
  // Moonwell Frontier cbBTC - Monnwell rewards - months 5-6
  {
    start: 1744822800n, //Wed Apr 16 2025 17:00:00 GMT+0000
    end: 1750093200n, //Mon Jun 16 2025 17:00:00 GMT+0000
    fundsSender: "0x74Cbb1E8B68dDD13B28684ECA202a351afD45EAa", // Moonwell DAO
    urdAddress: "0x9e3380f8B29E8f85cA19EFFA80Fb41149417D943", // base Moonwell urd
    tokenAddress: "0xA88594D404727625A9437C3f886C7643872296AE", // Base token
    vault: "0x543257eF2161176D7C8cD90BA65C2d4CaEF5a796", // Moonwell Frontier cbBTC
    amount: parseUnits("1350000", 18),
    chainId: ChainId.BASE,
  },

  // Pendle WBTC Vault - 2000 Pendle 12/23-01/18 6pm GMT
  {
    start: 1734976800n,
    end: 1737223200n,
    fundsSender: "0x650741eB4f6AB0776B9bF98A3280E3Cd6A2F1BF1", // mev capital ms 2
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0x808507121B80c02388fAd14726482e061B8da827", // Pendle token
    vault: "0x2f1aBb81ed86Be95bcf8178bA62C8e72D6834775", // Pendle WBTC vault
    amount: parseUnits("2000", 18),
    chainId: ChainId.MAINNET,
  },

  // Ionic WETH Vault - 380,507 ION 01/06-01/13 6pm GMT
  {
    start: 1736186400n,
    end: 1736791200n,
    fundsSender: "0x1155b614971f16758C92c4890eD338C9e3ede6b7", // ionic
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5", // ion token
    vault: "0x5A32099837D89E3a794a44fb131CBbAD41f87a8C", // ionic weth vault
    amount: parseUnits("380507", 18),
    chainId: ChainId.BASE,
  },
  // Ionic USDC Vault - 636,699 ION 01/06-01/13 6pm GMT
  {
    start: 1736186400n,
    end: 1736791200n,
    fundsSender: "0x1155b614971f16758C92c4890eD338C9e3ede6b7", // ionic
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5", // ion token
    vault: "0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e", // ionic usdc vault
    amount: parseUnits("636699", 18),
    chainId: ChainId.BASE,
  },
  // Seamless USDC Vault - 51,851 SEAM over 14 days
  {
    start: 1737403200n, // 2025-01-20 20:00:00 GMT+0000
    end: 1738612800n, // 2025-02-03 20:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x616a4E1db48e22028f6bbf20444Cd3b8e3273738", // Seamless USDC vault
    amount: parseUnits("51851", 18),
    chainId: ChainId.BASE,
  },
  // Ionic WETH Vault - 1,059,041 ION 01/14-01/21 6pm GMT
  {
    start: 1736877600n,
    end: 1737482400n,
    fundsSender: "0x1155b614971f16758C92c4890eD338C9e3ede6b7", // ionic
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5", // ion token
    vault: "0x5A32099837D89E3a794a44fb131CBbAD41f87a8C", // ionic weth vault
    amount: parseUnits("1059041", 18),
    chainId: ChainId.BASE,
  },
  // Ionic USDC Vault - 1,273,335 ION 01/14-01/21 6pm GMT
  {
    start: 1736877600n,
    end: 1737482400n,
    fundsSender: "0x1155b614971f16758C92c4890eD338C9e3ede6b7", // ionic
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5", // ion token
    vault: "0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e", // ionic usdc vault
    amount: parseUnits("1273335", 18),
    chainId: ChainId.BASE,
  },
  // Re7 eUSD Vault - 43,750 eUSD 1/20-2/20 6pm GMT
  {
    start: 1737396000n,
    end: 1740074400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet eUSD Core Vault - 60,000 eUSD 1/20-2/20 6pm GMT
  {
    start: 1737396000n,
    end: 1740074400n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 Universal USDC Vault - 2000 USDC 1/20-3/17 3pm GMT
  {
    start: 1737381600n,
    end: 1742220000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("2000", 6),
    chainId: ChainId.BASE,
  },
  // Re7 Universal USDC Vault - 3.26 uSOL 1/20-3/17 3pm GMT
  {
    start: 1737381600n,
    end: 1742220000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9B8Df6E244526ab5F6e6400d331DB28C8fdDdb55",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("3.269104215820642", 18),
    chainId: ChainId.BASE,
  },
  // Re7 Universal USDC Vault - 119.01 uSUI 1/20-3/17 3pm GMT
  {
    start: 1737381600n,
    end: 1742220000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xb0505e5a99abd03d94a1169e638B78EDfEd26ea4",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("119.01", 18),
    chainId: ChainId.BASE,
  },
  // Re7 Universal USDC Vault - 68.12 uAPT 1/20-3/17 3pm GMT
  {
    start: 1737381600n,
    end: 1742220000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x9c0e042d65a2e1fF31aC83f404E5Cb79F452c337",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("68.12488908598947", 18),
    chainId: ChainId.BASE,
  },
  // Ionic WETH Vault - 10,734,824 ION 01/22-02/19 6pm GMT
  {
    start: 1737568800n,
    end: 1739988000n,
    fundsSender: "0x1155b614971f16758C92c4890eD338C9e3ede6b7", // ionic
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5", // ion token
    vault: "0x5A32099837D89E3a794a44fb131CBbAD41f87a8C", // ionic weth vault
    amount: parseUnits("10734824", 18),
    chainId: ChainId.BASE,
  },
  // Ionic USDC Vault - 7,873,210 ION 01/22-02/19 6pm GMT
  {
    start: 1737568800n,
    end: 1739988000n,
    fundsSender: "0x1155b614971f16758C92c4890eD338C9e3ede6b7", // ionic
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x3eE5e23eEE121094f1cFc0Ccc79d6C809Ebd22e5", // ion token
    vault: "0x23479229e52Ab6aaD312D0B03DF9F33B46753B5e", // ionic usdc vault
    amount: parseUnits("7873210", 18),
    chainId: ChainId.BASE,
  },
  // Seamless USDC Vault - 100,000 SEAM over 29 days
  {
    start: 1738612800n, // 2025-02-03 20:00:00 GMT+0000
    end: 1741032000n, // 2025-03-03 20:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x616a4E1db48e22028f6bbf20444Cd3b8e3273738", // Seamless USDC vault
    amount: parseUnits("100000", 18),
    chainId: ChainId.BASE,
  },
  // Seamless cbBTC Vault - 74,675 SEAM over 29 days
  {
    start: 1738612800n, // 2025-02-03 20:00:00 GMT+0000
    end: 1741032000n, // 2025-03-03 20:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x5a47C803488FE2BB0A0EAaf346b420e4dF22F3C7", // Seamless cbBTC vault
    amount: parseUnits("74675", 18),
    chainId: ChainId.BASE,
  },
  // Seamless ETH Vault - 37,250 SEAM over 14 days
  {
    start: 1739822400n, // 2025-02-17 20:00:00 GMT+0000
    end: 1741032000n, // 2025-03-03 20:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x27D8c7273fd3fcC6956a0B370cE5Fd4A7fc65c18", // Seamless ETH vault
    amount: parseUnits("37250", 18),
    chainId: ChainId.BASE,
  },
  // LlamaRisk crvUSD Vault (Epoch 9) - 15_000 CRV over 4 weeks
  {
    start: 1740373200n, // Mon Feb 24 2025 05:00:00 GMT+0000
    end: 1742788800n, // Mon Mar 24 2025 04:00:00 GMT+0000
    fundsSender: "0x7e246fAce452AC43F5dC60c41EE14C88c37951c6", // LlamaRisk aggregator multisig
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb", // mainnet urd
    tokenAddress: "0xD533a949740bb3306d119CC777fa900bA034cd52", // crv
    vault: "0x67315dd969B8Cd3a3520C245837Bf71f54579C75", // LlamaRisk crvUSD Vault
    amount: parseUnits("15000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 eUSD Vault - 43,750 eUSD 2/20-3/20 6pm GMT
  {
    start: 1740074400n,
    end: 1742493600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet eUSD Core Vault - 60,000 eUSD 2/20-3/20 6pm GMT
  {
    start: 1740074400n,
    end: 1742493600n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 Universal USDC Vault - 5000 USDC 03/03-3/31 2pm GMT
  {
    start: 1741183200n,
    end: 1743426000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("5000", 6),
    chainId: ChainId.BASE,
  },
  // Seamless USDC Vault - 100,000 SEAM over 31 days
  {
    start: 1741032000n, // 2025-03-03 20:00:00 GMT+0000
    end: 1743706800n, // 2025-04-03 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x616a4E1db48e22028f6bbf20444Cd3b8e3273738", // Seamless USDC vault
    amount: parseUnits("100000", 18),
    chainId: ChainId.BASE,
  },
  // Seamless cbBTC Vault - 82,000 SEAM over 31 days
  {
    start: 1741032000n, // 2025-03-03 20:00:00 GMT+0000
    end: 1743706800n, // 2025-04-03 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x5a47C803488FE2BB0A0EAaf346b420e4dF22F3C7", // Seamless cbBTC vault
    amount: parseUnits("82000", 18),
    chainId: ChainId.BASE,
  },
  // Seamless ETH Vault - 85,000 SEAM over 31 days
  {
    start: 1741032000n, // 2025-03-03 20:00:00 GMT+0000
    end: 1743706800n, // 2025-04-03 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x27D8c7273fd3fcC6956a0B370cE5Fd4A7fc65c18", // Seamless ETH vault
    amount: parseUnits("85000", 18),
    chainId: ChainId.BASE,
  },
  // Re7 eUSD Vault - 43,750 eUSD 3/20-4/20 6pm GMT
  {
    start: 1742493600n,
    end: 1745172000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet eUSD Core Vault - 60,000 eUSD 3/20-4/20 6pm GMT
  {
    start: 1742493600n,
    end: 1745172000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // Gauntlet Frontier USDC Mainnet 100k SYRUP 03/25-05/06 12pm EST
  {
    start: 1742918400n,
    end: 1746547200n,
    fundsSender: "0xa7cC8d3E64EA81670181B005A476D0cA46E4C1fc",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x643C4E15d7d62Ad0aBeC4a9BD4b001aA3Ef52d66",
    vault: "0xc582F04d8a82795aa2Ff9c8bb4c1c889fe7b754e",
    amount: parseUnits("100000", 18),
    chainId: ChainId.MAINNET,
  },
  // Seamless USDC Vault - 23,333.33 SEAM over 7 days
  {
    start: 1743706800n, // 2025-04-03 19:00:00 GMT+0000
    end: 1744311600n, // 2025-04-10 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x616a4E1db48e22028f6bbf20444Cd3b8e3273738", // Seamless USDC vault
    amount: parseUnits("23333.33", 18),
    chainId: ChainId.BASE,
  },
  // Seamless cbBTC Vault - 18,200 SEAM over 7 days
  {
    start: 1743706800n, // 2025-04-03 19:00:00 GMT+0000
    end: 1744311600n, // 2025-04-10 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x5a47C803488FE2BB0A0EAaf346b420e4dF22F3C7", // Seamless cbBTC vault
    amount: parseUnits("18200", 18),
    chainId: ChainId.BASE,
  },
  // Seamless ETH Vault - 18,666.67 SEAM over 7 days
  {
    start: 1743706800n, // 2025-04-03 19:00:00 GMT+0000
    end: 1744311600n, // 2025-04-10 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x27D8c7273fd3fcC6956a0B370cE5Fd4A7fc65c18", // Seamless ETH vault
    amount: parseUnits("18666.67", 18),
    chainId: ChainId.BASE,
  },
  // Re7 Universal USDC Vault - 5,000 USDC 4/04-4/25 1pm GMT
  {
    start: 1743771600n,
    end: 1745586000n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("5000", 6),
    chainId: ChainId.BASE,
  },
  // Seamless USDC Vault - 76,666.67 SEAM over 23 days
  {
    start: 1744311600n, // 2025-04-10 19:00:00 GMT+0000
    end: 1746298800n, // 2025-05-03 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x616a4E1db48e22028f6bbf20444Cd3b8e3273738", // Seamless USDC vault
    amount: parseUnits("76666.67", 18),
    chainId: ChainId.BASE,
  },
  // Seamless cbBTC Vault - 59,800 SEAM over 23 days
  {
    start: 1744311600n, // 2025-04-10 19:00:00 GMT+0000
    end: 1746298800n, // 2025-05-03 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x5a47C803488FE2BB0A0EAaf346b420e4dF22F3C7", // Seamless cbBTC vault
    amount: parseUnits("59800", 18),
    chainId: ChainId.BASE,
  },
  // Seamless ETH Vault - 61,333.33 SEAM over 23 days
  {
    start: 1744311600n, // 2025-04-10 19:00:00 GMT+0000
    end: 1746298800n, // 2025-05-03 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x27D8c7273fd3fcC6956a0B370cE5Fd4A7fc65c18", // Seamless ETH vault
    amount: parseUnits("61333.33", 18),
    chainId: ChainId.BASE,
  },
  // Re7 eUSD Vault - 43,750 eUSD 4/20-5/20 6pm GMT
  {
    start: 1745172000n,
    end: 1747764000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4",
    vault: "0xbb819D845b573B5D7C538F5b85057160cfb5f313",
    amount: parseUnits("43750", 18),
    chainId: ChainId.BASE,
  },
  // Gauntlet eUSD Core Vault - 60,000 eUSD 4/20-5/20 6pm GMT
  {
    start: 1745172000n,
    end: 1747764000n,
    fundsSender: "0x03d03A026E71979BE3b08D44B01eAe4C5FF9da99",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F",
    vault: "0xc080f56504e0278828A403269DB945F6c6D6E014",
    amount: parseUnits("60000", 18),
    chainId: ChainId.MAINNET,
  },
  // Re7 Universal USDC Vault - 5,000 USDC 4/25-5/25 3pm GMT
  {
    start: 1745593200n,
    end: 1748185200n,
    fundsSender: "0x59e7682CcbdB40e4e8B73899a7CF3589026E783B",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    vault: "0xB7890CEE6CF4792cdCC13489D36D9d42726ab863",
    amount: parseUnits("5000", 6),
    chainId: ChainId.BASE,
  },
  // Kiln test programs
  {
    start: 1745480741n,
    end: 1745712000n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x58D97B57BB95320F9a05dC918Aef65434969c2B2",
    vault: "0x96B22EB7178d116797e57197e586b70FedAE8Fdd",
    amount: parseUnits("100", 18),
    chainId: ChainId.MAINNET,
  },
  {
    start: 1745480741n,
    end: 1745712000n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x58D97B57BB95320F9a05dC918Aef65434969c2B2",
    vault: "0x334F5d28a71432f8fc21C7B2B6F5dBbcD8B32A7b",
    amount: parseUnits("100", 18),
    chainId: ChainId.MAINNET,
  },
  // Kiln bootstrap - 10k lqgs 04/28-05/12 8am GMT
  {
    start: 1745910000n,
    end: 1747123200n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x58D97B57BB95320F9a05dC918Aef65434969c2B2",
    vault: "0x96B22EB7178d116797e57197e586b70FedAE8Fdd",
    amount: parseUnits("5000", 18),
    chainId: ChainId.MAINNET,
  },
  {
    start: 1745910000n,
    end: 1747123200n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552DC5cAd3C3cA644844B1E61Ddb",
    tokenAddress: "0x58D97B57BB95320F9a05dC918Aef65434969c2B2",
    vault: "0x334F5d28a71432f8fc21C7B2B6F5dBbcD8B32A7b",
    amount: parseUnits("5000", 18),
    chainId: ChainId.MAINNET,
  },
  // Seamless USDC Vault - 90,000.00 SEAM over 31 days
  {
    start: 1746298800n, // 2025-05-03 19:00:00 GMT+0000
    end: 1748977200n, // 2025-06-03 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x616a4E1db48e22028f6bbf20444Cd3b8e3273738", // Seamless USDC vault
    amount: parseUnits("90000", 18),
    chainId: ChainId.BASE,
  },
  // Seamless cbBTC Vault - 70,000.00 SEAM over 31 days
  {
    start: 1746298800n, // 2025-05-03 19:00:00 GMT+0000
    end: 1748977200n, // 2025-06-03 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x5a47C803488FE2BB0A0EAaf346b420e4dF22F3C7", // Seamless cbBTC vault
    amount: parseUnits("70000", 18),
    chainId: ChainId.BASE,
  },
  // Seamless ETH Vault - 80,000.00 SEAM over 31 days
  {
    start: 1746298800n, // 2025-05-03 19:00:00 GMT+0000
    end: 1748977200n, // 2025-06-03 19:00:00 GMT+0000
    fundsSender: "0xA1b5f2cc9B407177CD8a4ACF1699fa0b99955A22", // Seamless
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333", // base urd
    tokenAddress: "0x1C7a460413dD4e964f96D8dFC56E7223cE88CD85", // SEAM token
    vault: "0x27D8c7273fd3fcC6956a0B370cE5Fd4A7fc65c18", // Seamless ETH vault
    amount: parseUnits("80000", 18),
    chainId: ChainId.BASE,
  },
];
