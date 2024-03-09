const fs = require('fs');
const { json2xml, js2xml, xml2js } = require('xml-js');
const { execFile, spawn, exec } = require('child_process');
const { Configs, BaseDirectory } = require("../Utils/Singleton");
const fsPromises  = require("fs/promises")

const toXmlOption =  { 
  compact: true,
  ignoreComment: true,
  ignoreDeclaration: false,
  spaces: 4
}

function getChartDataController(event, data) {
    const {healthyDir, nonHealthyDir, influenceTop, influenceDown} = data;
    if (
      !healthyDir || 
      !nonHealthyDir || 
      !influenceTop || 
      !influenceDown
    ) return event.sender.send("getChartData_chanel", {status: false, message: "لطفا تمام فیلد ها را پر کنید"})
  
      let config = {
        "_instruction": { "xml": { "_attributes": { "version": "1.0" } } },
        "opencv_storage": {
          "healthy": `"${healthyDir.replace(/\\/g, "/")}"`,
          "nonhealthy": `"${nonHealthyDir.replace(/\\/g, "/")}"`,
          "influenceTop": Number(influenceTop),
          "influenceDown" : Number(influenceDown),
        }
      };
  
      Configs.set(data)
  
      if (fs.existsSync(`${BaseDirectory}\\BehIabi\\confusions`)) {
        fsPromises.rm(`${BaseDirectory}\\BehIabi\\confusions`, { recursive: true });
      }
      
      if(fs.existsSync(`${BaseDirectory}\\BehIabi\\Progress.txt`)) {
        fs.unlink(`${BaseDirectory}\\BehIabi\\Progress.txt`, (err) => {
          if (err) {
            console.log(err)
          }
        });
      }
  
      fs.writeFile(`${BaseDirectory}\\BehIabi\\config.xml`, js2xml(config, toXmlOption), (err) => {
        if (err) {
          console.log(err)
          return event.sender.send("getChartData_chanel", {error: err});
        }
  
        execFile("./HistogramSearch.exe", [], { cwd: `${BaseDirectory}\\BehIabi`}, (error, stdout, stderr) => {
          if (error) {
            console.log(error)
            return event.sender.send("getChartData_chanel", {error: error});
          }
        });
    });
    
    return event.sender.send("getChartData_chanel", {status: true, message: "OK"})

}

module.exports = {getChartDataController}