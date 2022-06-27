async function main() {
    const ticketNFT = await hre.ethers.getContractFactory("Ticket");
    const nft = await ticketNFT.deploy();
  
    await nft.deployed();
  
    console.log("Ticket deployed to:", nft.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });