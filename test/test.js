const {ethers} = require("hardhat");
const {assert} = require("chai");

describe("NewTicket", function() {
    let ticketCreator;
    let tixContract;
    beforeEach(async () => {
        ticketCreator = ethers.provider.getSigner(0);
        const newTicket = await ethers.getContractFactory("Ticket");
        tixContract = await newTicket.deploy();
        await tixContract.deployed();
    });

    it("ticket nft created", async function() {
        console.log(ethers.provider._getAddress(tixContract.address));
    })
});