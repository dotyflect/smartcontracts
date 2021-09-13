const ethers = require('ethers');
const DotyFlect = artifacts.require('DotyFlect.sol');

contract('dotyflect', accounts => {
  let instance;
  const [admin, to, _] = accounts;

  beforeEach(async () => {
    instance = await DotyFlect.deployed();
  });

  it('token should be prepared for trading', async () => {
    await instance.prepForLaunch();
    const balance = await instance.balanceOf(admin);
    assert.equal(balance.toString(), '100000000000000000000000000000'); 
  });

  it('account should be excluded for fees', async () => {
    const excludeAccount = "0x1111111111111111111111111111111111111111";
    await instance.excludeFromFees(excludeAccount, true);
    const isExcluded = await instance.isExcludedFromFees(excludeAccount);
    assert.equal(isExcluded, true); 
  });

});