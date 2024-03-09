const fs = require('fs');
const path = require('path');
const {Directory, DB, Decimal, Configs, BaseDirectory} = require("./Singleton")
const { XMLParser, XMLBuilder } = require('fast-xml-parser')


function scanIdealPoint() {
    const path = `${BaseDirectory}\\Hesaab`;

    // if (fs.existsSync(path)) {
        // const readDir = fs.readdirSync(path);
        if (fs.existsSync(`${path}\\confusions`)) {
            const readConfusions = fs.readdirSync(`${path}\\confusions`);
            if (readConfusions.length) {
                const readXml = fs.readFileSync(`${path}\\confusions\\${readConfusions.shift()}`, 'utf8')
                const parser = new XMLParser({
                  ignoreAttributes: false,
                });
                const xml = parser.parse(readXml)
                const pointData = { e0: [], e1: [], e2: [], e3: [], e4: [], e5: [], e6: [], e7: [], e8: [] };

                for (let key in pointData) {
                    pointData[key].push({
                        x: Math.round(Configs.get().delta * Math.pow(10, Decimal.get())),
                        y: 1 - Number(xml.opencv_storage[key]),
                        labels: key
                    })
                }

                const data = {
                    record: xml.opencv_storage,
                    pointData
                }

                return {status: true, data, message: "اطلاعات خوانده شد"}

            } else return {status: false, message: "فولدر مربوطه پیدا نشد 1"}
        } else return {status: false, message: "فولدر مربوطه پیدا نشد 2"}

    // } else return {status: false, message: "فولدر مربوطه پیدا نشد 3"}
}

module.exports = {scanIdealPoint}