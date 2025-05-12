import { parseUnits } from "viem";

import { Address, ChainId } from "@lqg-org/blue-rewards-core-sdk";

export type AirdropRewardProgramArgs = {
  claimDate: bigint;
  fundsSender: Address;
  urdAddress: Address;
  tokenAddress: Address;
  chainId: ChainId;
  cidV0: string;
  totalRewards: bigint;
};

/**
 * List of Airdrop programs
 * @example
 * [
 *   {
 *    claimDate: 1717149233n,
 *    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
 *    urdAddress: "0x330eefa8a787552dc5cad3c3ca644844b1e61ddb",
 *    tokenAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
 *    cidV0: "QmUSNh34dpKFbX7YMU4fd5JbfkVYzb4e45o3pSqqXvzkKw",
 *    chainId: ChainId.MAINNET,
 *    totalRewards: 50000n
 *   }
 * ]
 */
export const airdropPrograms: AirdropRewardProgramArgs[] = [
  {
    claimDate: 1725840000n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552dc5cad3c3ca644844b1e61ddb",
    tokenAddress: "0x9994E35Db50125E0DF82e4c2dde62496CE330999",
    cidV0: "QmbfETB4KZG96tjfPZLJHb8Xn1bjNbfK9vyUcdgfsm33WG",
    chainId: ChainId.MAINNET,
    totalRewards: parseUnits("600000", 18),
  },
  {
    claimDate: 1729771200n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552dc5cad3c3ca644844b1e61ddb",
    tokenAddress: "0xeFc0CED4B3D536103e76a1c4c74F0385C8F4Bdd3",
    cidV0: "Qmbb3iTjUa28n7699HFGo8pHvSqCx1sqN1L7aDBAp7685n",
    chainId: ChainId.MAINNET,
    totalRewards: parseUnits("50000", 6),
  },
  {
    claimDate: 1736510400n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x330eefa8a787552dc5cad3c3ca644844b1e61ddb",
    tokenAddress: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
    cidV0: "QmPrhswLqpaKmBgY6ThCCtQMWoy8YjfwK52hn6f7RK4JJw",
    chainId: ChainId.MAINNET,
    totalRewards: parseUnits("8.501000504032258064", 18),
  },
  {
    claimDate: 1740751200n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
    cidV0: "QmSHsgJgyjJaU9UYxkJD4u6oXrwLKC65dAEZwGF41gXUT1",
    chainId: ChainId.BASE,
    totalRewards: 26481776681223331033279n,
  },
  {
    claimDate: 1747785600n,
    fundsSender: "0xF057afeEc22E220f47AD4220871364e9E828b2e9",
    urdAddress: "0x5400dbb270c956e8985184335a1c62aca6ce1333",
    tokenAddress: "0xBAa5CC21fd487B8Fcc2F632f3F4E8D37262a0842",
    cidV0: "QmSwMy2CNcvKAt9ecq5jCQhvpEWyBebkY6e1YXsk3MboNA",
    chainId: ChainId.BASE,
    totalRewards: 85566468583316560914393n,
  },
];
