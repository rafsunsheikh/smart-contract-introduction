# Smart Contract Introduction Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract. This repository contains a smart contract project built with Hardhat. The project includes the deployment of a simple `Greeting Contract` on the Sepolia test network, with Solidity code for smart contracts and configuration files for network deployment.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

## Project Structure

- **contracts/**: Contains the Solidity smart contracts.
- **scripts/**: Contains scripts for deploying the smart contracts.
- **test/**: Contains unit tests for testing the smart contracts.
- **hardhat.config.js**: Hardhat configuration file for network setup, compiler version, and plugins.

## Getting Started

### Prerequisites

- Node.js and npm (https://nodejs.org/)
- Hardhat (https://hardhat.org/)
- Metamask for interacting with deployed contracts (optional but recommended)

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/rafsunsheikh/smart-contract-introduction.git
   cd smart-contract-introduction
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables by creating a `.env` file:

   ```plaintext
   SEPOLIA_API_URL=<your_infura_or_alchemy_sepolia_api_url>
   PRIVATE_KEY=<your_wallet_private_key>
   ```

4. Compile the smart contracts:
   ```bash
   npx hardhat compile
   ```

### Deploying to Sepolia Testnet

To deploy your smart contract to the Sepolia testnet:

1. Make sure your `.env` file is configured correctly with the Sepolia API URL and your wallet's private key.
2. Run the deployment script:

   ```bash
   npx hardhat run ignition/modules/deploy.js --network sepolia
   ```

   After deployment, you will see the contract address in the console output.

### Viewing Events on Etherscan

Once the contract is deployed, you can see emitted events on [Sepolia Etherscan](https://sepolia.etherscan.io/):

- Go to the contract address on Sepolia Etherscan.
- Navigate to the **Events** tab to view emitted events from the contract.

## Interacting with the Contract

You can interact with your deployed contract in multiple ways:

- **Hardhat Console**: Use `npx hardhat console --network sepolia` to directly interact with your contract.
- **Ethers.js Scripts**: Create scripts in the `scripts/` directory to call contract functions.
- **Front-End Integration**: Connect your contract with a frontend application using Ethers.js or Web3.js.

## Testing

Run unit tests for the contracts using:

```bash
npx hardhat test
```

## Contributing

Feel free to fork this repository, make feature requests, or submit issues. Contributions are welcome!

## License

This project is licensed under the MIT License.

```

This `README.md` should give a clear overview of your project, setup instructions, deployment steps, and basic information about testing and contributing. Let me know if you'd like further customization!
```
