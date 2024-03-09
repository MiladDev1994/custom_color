

const fs = require('fs');
const path = require('path');
const {Directory, DB, Decimal} = require("./Singleton")
const { XMLParser, XMLBuilder } = require('fast-xml-parser')


function walkDirectory(directory) {

    const allRecord = []
    const filesNumber = []

    function walkDir(rootDirectory) {
        try {
            const fNamesInRoot = fs.readdirSync(rootDirectory);
            fNamesInRoot.forEach((fNameInRoot) => {
                const filePath = path.join(rootDirectory, fNameInRoot);
                
                if (!fs.statSync(filePath).isDirectory()) {
                    if (filePath.includes(".xml") && !filePath.includes("numbers-")) {
                        try {
                          const readXml = fs.readFileSync(filePath, 'utf8');
                          const parser = new XMLParser({
                            ignoreAttributes: false,
                          });
                        //   const id = Number(fNameInRoot.replace("H_Vstd", "").replace("_Mash2D.xml", ""));
                          const id = Number(fNameInRoot.replace("numbers", "").replace(".xml", ""));
                          allRecord.push({
                            id,
                            fileName: filePath.split("\\").pop(),
                            ...parser.parse(readXml)
                          })
                          filesNumber.push(id)
                        } catch (err) {
                          console.log(err)
                        }
                      }
                } else {
                    walkDir(filePath)
                } 
            });
            
            if (!allRecord.length) return {status: false, message: "هیچ اطلاعاتی یافت نشد"};
            return {status: true, data: {filesNumber, allRecord}, message: "فهرست خوانده شد"};

        } catch (error) {
            console.log(error)
            return {status: false, message: "فهرست مورد نظر یافت نشد"}
        }
    }

    const walkResult = walkDir(directory);

    return {
        status: walkResult.status,
        data: walkResult.status ? walkResult.data : {},
        message: walkResult.message
    }
}



function scanDirectory(directory){  
    try {
        const walk = walkDirectory(directory);
        if (!walk.status) return {status: false, message: walk.message};
    
        Directory.set(directory)
        const max = Math.max(...walk.data.filesNumber);
        const findLength = String(max).length - 2 < 2 ? 2 : String(max).length - 2;
        Decimal.set(findLength)
        const chartData = { e0: [], e1: [], e2: [], e3: [], e4: [], e5: [], e6: [], e7: [], e8: [] };
    
        walk.data.allRecord.map(item => {
            for (let key in chartData) {
                chartData[key].push({
                    x: Math.round(item.id * Math.pow(10,findLength)), 
                    y: 1 - Number(item?.opencv_storage[key])
                })
            }
        })
        const chartLength = max * Math.pow(10, findLength); 
        const data = {
            allRecord: walk.data.allRecord, 
            chartData, 
            chartLength
        }
    
        DB.set(data)
    
        return {
            status: true, 
            data, 
            message: walk.message
        } 

    } catch (err) {
        return {
            status: false,
            message: "فهرست مورد نظر یافت نشد"
        } 
    }
}

module.exports = {scanDirectory}