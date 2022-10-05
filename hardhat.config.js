require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url:'Your_Polygon_Node',
      accounts: ['Private_key'],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: 'etherscan_address',
    },
  },
};