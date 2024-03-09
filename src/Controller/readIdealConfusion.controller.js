const { scanIdealPoint } = require("../Utils/ScanIdealPoints");

function readIdealConfusionController(event) {
    const scanFolders = scanIdealPoint();
    return event.sender.send(
      "readIdealConfusion_chanel", {
      status: scanFolders.status,
      data: scanFolders.status ? scanFolders.data : {},
      message: scanFolders.message
    })
}

module.exports = {readIdealConfusionController}