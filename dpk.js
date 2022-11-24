const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  //const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if(event){
    if (event.partitionKey) {
      candidate = JSON.stringify(event.partitionKey);

    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  return candidate;
};

//The logic of the mechanism which is originally simple has become complicated than necessity.
//Considering the flow of the code, I refactored by merging cases and removing extra falling points.
