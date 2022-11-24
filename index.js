const {deterministicPartitionKey} = require("./dpk");

console.log(deterministicPartitionKey({partitionKey: '1111'}));
console.log(deterministicPartitionKey('1111'));
console.log(deterministicPartitionKey({partitionKey: 1111}));
console.log(deterministicPartitionKey({partition: 1111}));