const fs = require("fs")
const { BaseDirectory } = require("../Utils/Singleton");

function moveMash2DHVFileController(event) {
    const oldPath = `${BaseDirectory}\\BehIabi\\Mash2DH_V.xml`;
    const newPath = `${BaseDirectory}\\Hesaab\\Mash2DH_V.xml`;
  
    fs.rename(oldPath, newPath, (err) => {
      if (err) return event.sender.send({status: false, message: err}) 
    })
}

module.exports = {moveMash2DHVFileController}