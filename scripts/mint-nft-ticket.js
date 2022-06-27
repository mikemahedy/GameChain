const { ethers } = require("hardhat");

const contractAddr = "0x9d6B6955f990E06511b650486301658A79B9De7e";

async function main() {
    const nft = await hre.ethers.getContractAt("Ticket", contractAddr);

    const signer0 = await ethers.provider.getSigner(0);
    const nonce = await signer0.getTransactionCount();
    const tokenURI = "https://ipfs.io/ipfs/QmZsr8k5JwWbRFNey9Z3hdhvVVsuUE4K1cyeVjdB9piv8M";
    await nft.mintTicket(tokenURI, {
        nonce: nonce
    });

    console.log("minting complete");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });