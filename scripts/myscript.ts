import { ethers } from "hardhat";

async function main() {
    const Attack = await ethers.getContractFactory("Attack");
    const attack = await Attack.deploy();
    await attack.deployed();

    attack.exploitContract();
    console.log(`Attack contract deployed :, ${attack.address}`);

    // Attack contract deployed::Asiwaju private_key1:  0x1093Dce4e7376A1b442d66167f3437c88e59A7f8
    // 0x5461F8227970aFFDBB320468b078779586E85Ca7 roqbell privatekey two

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
