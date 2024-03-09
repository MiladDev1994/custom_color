const fs = require("fs")
const path = require("path")
const fsPromises  = require("fs/promises")
const { Configs, BaseDirectory, Decimal } = require("../Utils/Singleton");
const { execFile, spawn, exec } = require('child_process');
const { json2xml, js2xml, xml2js } = require('xml-js');
const { XMLParser, XMLBuilder } = require('fast-xml-parser');
const { readImageUtil } = require("../Utils/readImageUtil");
const { scanIdealPoint } = require("../Utils/ScanIdealPoints");

const toXmlOption =  { 
    compact: true,
    ignoreComment: true,
    ignoreDeclaration: false,
    spaces: 4
}

function readIdealPointController(event, data) {

    const {verticalLinesValueIntensity, verticalLinesValue} = data;
  
    if (
      !Configs.get().healthyDir ||
      !Configs.get().nonHealthyDir ||
      !verticalLinesValueIntensity ||
      !verticalLinesValue
    ) return event.sender.send("readIdealPoint_chanel", {status:  false, message: "ابتدا فهرست را کامل کنید"})
  
    const newConfig = {
      ...Configs.get(),
      delta: verticalLinesValueIntensity / Math.pow(10, Decimal.get()),
      area: verticalLinesValue,
    }
  
    Configs.set(newConfig);
  
    let parameters = {
      "_instruction": { "xml": { "_attributes": { "version": "1.0" } } },
      "opencv_storage": {
        "healthy": `"${Configs.get().healthyDir.replace(/\\/g, "/")}"`,
        "nonhealthy": `"${Configs.get().nonHealthyDir.replace(/\\/g, "/")}"`,
        "influenceT": Configs.get().influenceTop,
        "influenceD" : Configs.get().influenceDown,
        "delta": verticalLinesValueIntensity / Math.pow(10, Decimal.get()),
        "area": verticalLinesValue / 100,
      }
    };
  
    if (fs.existsSync(`${BaseDirectory}\\Hesaab\\confusions`)) {
      fsPromises.rm(`${BaseDirectory}\\Hesaab\\confusions`, { recursive: true });
    }
  
    if(fs.existsSync(`${BaseDirectory}\\Hesaab\\Progress.txt`)) {
      fs.unlink(`${BaseDirectory}\\Hesaab\\Progress.txt`, (err) => {
        if (err) {
          console.log(err)
        }
      });
    }
  
    fs.writeFile(`${BaseDirectory}\\Hesaab\\parameters.xml`, js2xml(parameters, toXmlOption), (err) => {
      if (err) {
        console.log(err)
        return event.sender.send('readIdealPoint_chanel', {error: err});
      }
  
      execFile("./CalculateAcc.exe", [], { cwd: `${BaseDirectory}\\Hesaab`}, (error, stdout, stderr) => {
        if (error) return event.sender.send('readIdealPoint_chanel', {status: false, message: error});
        if (stderr) return event.sender.send('readIdealPoint_chanel', {status: false, message: stderr});
        if(stdout) {
          const filesPath = readfilePath()
          const idealConfusion = readIdealConfusionTest()
          const data = {
            status: true, 
            data: {
              stdout, ...Configs.get(), 
              filesPath, 
              idealConfusion
            }, 
            message: "created"
          }
          return event.sender.send('readIdealPoint_chanel', data);
        } 
      });
    });
}



const readfilePath = () => {
    const filePath = `${BaseDirectory}\\Hesaab\\folders.xml`;
    try {
      const readFilesPathXML = fs.readFileSync(filePath, "utf8");
      const parser = new XMLParser({
        ignoreAttributes: false,
      });
      const parsXML = parser.parse(readFilesPathXML)
      const healthy = {};
      const nonHealthy = {};
      Object.entries(parsXML.opencv_storage).forEach(([key, value]) => {
        const imagesName = []
        Object.entries(value).map(([fileKey, fileValue]) => fileKey.includes("im") && imagesName.push(fileValue.split("/").pop()))
        const readDir = fs.readdirSync(value.folder);
        const fileHealthy = key.includes("Non") ? nonHealthy : healthy
        fileHealthy[value.folder] = {isInXml: [], isOutXml: []}
        if (readDir.length) {
          readDir.forEach(fileName => {
            if (fileName.includes("_image.bmp")) {
              const filePath = path.join(value.folder, fileName);
              const readImage = readImageUtil(filePath)
              if (imagesName.includes(fileName)) {
                fileHealthy[value.folder]["isInXml"].push(readImage)
              } else {
                fileHealthy[value.folder]["isOutXml"].push(readImage)
              }
            }
          })
        }
      })
      return {healthy, nonHealthy};
    } catch (_) {
      return {healthy: {}, nonHealthy: {}};
    }
  }
  
  const readIdealConfusionTest = () => {
    const scanFolders = scanIdealPoint();
    return scanFolders.status ? scanFolders.data : {}
  }


module.exports = {readIdealPointController}