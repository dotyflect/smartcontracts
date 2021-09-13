const DotyFlect = artifacts.require("DotyFlect");
const SafeMath = artifacts.require("SafeMath");
const IterableMapping = artifacts.require("IterableMapping");

module.exports = async function (deployer) {
  await deployer.deploy(SafeMath);
  await deployer.deploy(IterableMapping);
  await deployer.link(IterableMapping, DotyFlect);
  await deployer.deploy(DotyFlect);
};
