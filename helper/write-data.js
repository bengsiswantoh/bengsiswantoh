const fs = require("fs");

const writeData = (filename, data) => {
  fs.writeFileSync(filename, data);
};

module.exports = writeData;
