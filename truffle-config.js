const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    dev: {
      provider: function() {
        return new HDWalletProvider(
          '<Your Private Key>', // account private key
          `https://babel-api.testnet.iotex.io`// Url to an iotex Node
        )
      },
      gas: 8500000,
      gasPrice: 1000000000000,
      network_id: 4690,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: '0.4.25',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
