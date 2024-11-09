require("@nomicfoundation/hardhat-toolbox");

const INFURA_API_KEY = "8308eaf9704b43909a0de4b8dc57ab1b";

const SEPOLIA_PRIVATE_KEY = "0xdffb8b6cba8c7bb6ed1a022f6b0ad6a0db06180d9dbc374de7ec957cc9856339";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

