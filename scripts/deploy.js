
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const Token = await ethers.getContractFactory('Token');
  const token = await Token.deploy();
  await token.deployed();

  console.log(`Token deployed at ${token.address}`)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
