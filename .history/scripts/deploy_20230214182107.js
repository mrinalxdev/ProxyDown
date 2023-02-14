
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const MintExample = await hre.ethers.getContractFactory("MintExample");
  const mintExample = await MintExample.deploy("Minter", "MINT");

  await mintExample.deployed();

  console.log("MintExample deployed to :",  mintExample.address)
}
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
