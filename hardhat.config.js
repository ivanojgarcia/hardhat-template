require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");
dotenv.config();
const { DEPLOYER_PRIVATE_KEY, INFURA_PROJECT_ID } = process.env;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    }
  }
};