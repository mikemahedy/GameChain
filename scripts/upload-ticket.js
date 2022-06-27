const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [{
    path: '/',
    content: JSON.stringify({
      name: "Yankees vs. Astros 6/23/22",
      attributes: [
        {
          "trait_type": "Section",
          "value": "225"
        },
        {
          "trait_type": "Seat",
          "value": "10"
          },
      ],
      // if you want to upload your own IPFS image, you can do so here:
      // https://github.com/ChainShot/IPFS-Upload
      image: "https://gateway.ipfs.io/ipfs/QmZruHf1ni2hSEwhZpu85g3gLB6roLgFvtQRngWSrv6Wpr",
    })
  }];

  const result = await ipfs.add(files);
  console.log(result);
}

run();