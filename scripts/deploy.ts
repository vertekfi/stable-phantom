import { ethers } from "hardhat";

async function main() {
  const vault = "0xEE1c8DbfBf958484c6a4571F5FB7b99B74A54AA7";
  const StablePhantomPoolFactory = await ethers.getContractFactory("StablePhantomPoolFactory");
  const factory = await StablePhantomPoolFactory.deploy(vault);
  await factory.deployed();

  console.log(`StablePhantomPoolFactory deployed to ${factory.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
