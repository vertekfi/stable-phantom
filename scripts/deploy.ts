import { ethers } from "hardhat";

async function main() {
  const vault = "0x719488F4E859953967eFE963c6Bed059BaAab60c";
  const StablePhantomPoolFactory = await ethers.getContractFactory(
    "StablePhantomPoolFactory"
  );
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
