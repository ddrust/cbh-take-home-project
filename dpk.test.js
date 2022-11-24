const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  
  it("test2 when given 1111 input", () => {
    const trivialKey = deterministicPartitionKey('1111');
    expect(trivialKey).toBe("933b9661eaa04573f5dedfa73ba83a780754acb48dd9ef3c48cae2526722d810a6296c86a4fbd62f1587c5a6a91abc2d2c5942e70c29f4f70fa29f2fc370f934");
  });

  it("test3 when given 1111 input", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 1111});
    expect(trivialKey).toBe("1111");
  });

  it("test4 when given 1111 input", () => {
    const trivialKey = deterministicPartitionKey({partition: 1111});
    expect(trivialKey).toBe("18e19c089406f296b60ec4112ddf24ab5fb364f460c0ad754d907e5541469043ec85c69edd1d34ec19c287a5b9f546e864c96e237ccca2a08db03ac66b1c48fa");
  });
});
