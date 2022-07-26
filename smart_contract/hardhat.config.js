//https://eth-rinkeby.alchemyapi.io/v2/Mf__2-kgfAIDT6xFZP4qgdD-1yPwolye

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Mf__2-kgfAIDT6xFZP4qgdD-1yPwolye",
      accounts: [
        "4f63cc5eb9a02cbae60511ae071f356afe07d446fd1ff1f48b49364b4ca89039",
      ],
    },
  },
};

// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };
