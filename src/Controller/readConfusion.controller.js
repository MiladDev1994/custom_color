const { scanDirectory } = require("../Utils/ScanDirectory");
const { Directory, BaseDirectory } = require("../Utils/Singleton");

function readConfusionController(event) {
    Directory.set(`${BaseDirectory}\\BehIabi\\confusions`)
    const scanFolders = scanDirectory(Directory.get());
    return event.sender.send(
      "redConfusion_chanel", {
      status: scanFolders.status,
      data: scanFolders.status ? {...scanFolders.data, directory: Directory.get()} : {},
      message: scanFolders.message
    })
}

module.exports = {readConfusionController}