const path = require("path");
const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const mnemonic_ganache = process.env.MNEMONIC_GANACHE;
const urlGanache = "http://127.0.0.1:7545";
const AccountIndex = 0;

module.exports = {
   contracts_build_directory: path.join(__dirname, "build/contracts"),
  networks: {
    development: {
      provider: () => new HDWalletProvider(mnemonic_ganache, urlGanache, AccountIndex),
      network_id: 5777,
      gas: 6000000,
      skipDryRun: true
    },

    bsc: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://bsc-dataseed.binance.org/`),
      network_id: 56,
      gas: 15000000,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    bsc_testnet: {     
      provider: () => new HDWalletProvider(
        process.env.PRIVATE_KEY, 
        process.env.BSC_TESTNET,
        AccountIndex
      ),
      network_id: 97,
      gas: 15000000,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  mocha: {
  },
  compilers: {
    solc: {
        version: "0.6.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
       evmVersion: "istanbul"
      }
    },
  },
};
