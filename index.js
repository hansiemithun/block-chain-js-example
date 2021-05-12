const {SHA256, MD5} = require('crypto-js');

class Block {
  constructor({timestamp, data, previousHash=''}){
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.calculateHash = this.dataStringify();
    this.hash = this.calculateHash();
  }

  dataStringify() {
    const dataString = JSON.stringify(this.data);
    return () => {
      return SHA256(dataString + this.nonce).toString();
    }
  }

  mineBlock(difficulty) {
    console.log('this.hash => ', this.hash);
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log('Mined block: ', this.hash, '\ntotal_iteration: ', this.nonce);
    console.log('************************************************************');
  }
}

class BlockChain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
  }

  createGenesisBlock() {
    return new Block({ index: 0, timestamp: '11-May-2021 1:00pm', data: "Genesis Block"})
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 0; i < this.chain.length; i++){
      const currentBlock = this.chain[i];
      const prevBlock = this.chain[i - 1];
      
      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== prevBlock.hash) {
        return false;
      }
    }
  }
}

const bitCoin = new BlockChain();

console.log('Mining block 1............')
bitCoin.addBlock(new Block({timestamp: '11-May-2021 1:30pm', data: { units: 10, amount: 50 } }))
console.log('Mining block 2............')
bitCoin.addBlock(new Block({ timestamp: '11-May-2021 1:45pm', data: {units: 5, amount: 100}}))

