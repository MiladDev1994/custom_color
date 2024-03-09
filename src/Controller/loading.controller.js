const fs = require('fs');
const { BaseDirectory } = require('../Utils/Singleton');

function loadingController(event, type) {
    if (type) return;
    if(fs.existsSync(`${BaseDirectory}\\BehIabi\\Progress.txt`)) {
      fs.readFile(`${BaseDirectory}\\BehIabi\\Progress.txt`, 'utf8', (err, data) => {
        event.sender.send("loading_chanel", Number(data))
      })
    } else {
      event.sender.send("loading_chanel", 0)
    }
}

module.exports = {loadingController}