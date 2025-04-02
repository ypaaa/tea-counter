import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.29",
  networks: {
    'tea-sepolia': {
      url: "https://tea-sepolia.g.alchemy.com/public",
      chainId: 10218,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      'tea-sepolia': 'empty'
    },
    customChains: [
      {
        network: "tea-sepolia",
        chainId: 10218,
        urls: {
          apiURL: "https://sepolia.tea.xyz/api",
          browserURL: "https://sepolia.tea.xyz"
        }
      }
    ]
  }
};

export default config;