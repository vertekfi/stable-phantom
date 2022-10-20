import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.7.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 9999,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.BSC_ARCHIVE_NODE || "",
        blockNumber: 20908139, // 8/30 ~8:00PM
      },
    },
    goerli: {
      url: process.env.GOERLI_RPC || "",
      accounts:
        process.env.LOTTERY_OPERATOR_KEY !== undefined ? [process.env.LOTTERY_OPERATOR_KEY] : [],
    },
    bsc: {
      url: process.env.BSC_MAINNET_URL || "",
      accounts:
        process.env.LOTTERY_OPERATOR_KEY !== undefined ? [process.env.LOTTERY_OPERATOR_KEY] : [],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
