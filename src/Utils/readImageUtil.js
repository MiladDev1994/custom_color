

const fs = require('fs');

function readImageUtil(route){
    let image = "";
    try {
      const readImage = fs.readFileSync(route);
      image = readImage.toString("base64");
      return image;
    } catch (_) {
      return image;
    }
}

module.exports = {readImageUtil}