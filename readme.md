# Block Chain POC

## _A Simple Blockchain Javascript Example_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Using SHA256 encryption algorithm, this POC helps in understanding how to create block chains.

### Features:

- Strong encryption technique from SHA256
- Mining is handled with difficulty levels(Preceeding 0s defines the difficulty from hash)
- Creates block chain
- Validates the chain
- Fetch the last block from the chain
- ✨Magic ✨

### Usage:

```js
const bitCoin = new BlockChain();

console.log("Mining block 1............");

bitCoin.addBlock(
  new Block({
    timestamp: "11-May-2021 1:30pm",
    data: { units: 10, amount: 50 },
  })
);

console.log("Mining block 2............");

bitCoin.addBlock(
  new Block({
    timestamp: "11-May-2021 1:45pm",
    data: { units: 5, amount: 100 },
  })
);

console.log("chain => ", bitCoin);
```

### Run:

```sh
npm run start
```

### Output:

```js
Mining block 1............
this.hash =>  3041eef64a92a06df6798f8072db8655658c2666083ff489436350287a5be45f
Mined block:  000050872b1dae109ec1f2f1adf1074811f693815b3b6ce6adb40b34ad0af75a
total_iteration:  187097
************************************************************
Mining block 2............
this.hash =>  5bda597201d1701df54096e7c658d5a81c58a4504986ab09a769d37cb2004b91
Mined block:  0000575b0a8245a70305be5650933a5e0247be6fc578a8ecfc093e70e4968868
total_iteration:  108841
************************************************************
chain =>  BlockChain {
  chain: [
    Block {
      timestamp: '11-May-2021 1:00pm',
      data: 'Genesis Block',
      previousHash: '',
      nonce: 0,
      calculateHash: [Function],
      hash: 'b36696cb11d7445a9ab968de0d0421ceae21b3d017c51ac09173836c6fdbaf4c'
    },
    Block {
      timestamp: '11-May-2021 1:30pm',
      data: [Object],
      previousHash: 'b36696cb11d7445a9ab968de0d0421ceae21b3d017c51ac09173836c6fdbaf4c',
      nonce: 187097,
      calculateHash: [Function],
      hash: '000050872b1dae109ec1f2f1adf1074811f693815b3b6ce6adb40b34ad0af75a'
    },
    Block {
      timestamp: '11-May-2021 1:45pm',
      data: [Object],
      previousHash: '000050872b1dae109ec1f2f1adf1074811f693815b3b6ce6adb40b34ad0af75a',
      nonce: 108841,
      calculateHash: [Function],
      hash: '0000575b0a8245a70305be5650933a5e0247be6fc578a8ecfc093e70e4968868'
    }
  ],
  difficulty: 4
}
```

## License

MIT
