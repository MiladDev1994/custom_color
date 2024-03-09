const { scanDirectory } = require("../Utils/ScanDirectory");
const { Directory, Configs } = require("../Utils/Singleton");

function readAccuracyXmlController(event) {
    if (!Directory.get()) return event.sender.send("readAccuracyXml_chanel", {status: false, message: "فهرست یافت نشد"})
    const scanFolders = scanDirectory(Directory.get());
    return event.sender.send(
      "readAccuracyXml_chanel", {
      status: scanFolders.status,
      data: scanFolders.status ? {
        ...scanFolders.data, 
        directory: Directory.get(),
        config: Configs.get(),
      } : {},
      message: scanFolders.message
    })

}

module.exports = {readAccuracyXmlController}