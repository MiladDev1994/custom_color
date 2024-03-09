let directoryInstance;
let DBInstance;
let configInstance;
let decimalInstance;


class SingletonDirectory {
    address = "";
    constructor() {
        if (directoryInstance) {
          throw new Error("You can only create one instance!");
        }
        directoryInstance = this;
    }
    
    get() {
        return this.address;
    }

    set(newAddress) {
        this.address = newAddress;
        return newAddress;
    }

}

class SingletonDB {
    db;
    constructor() {
        if (DBInstance) {
          throw new Error("You can only create one instance!");
        }
        DBInstance = this;
    }
    
    get() {
        return this.db;
    }

    set(newDB) {
        this.db = newDB;
        return newDB;
    }

}


class ConfigClass {
    config;
    constructor () {
        if (configInstance) throw new Error("You can only create one instance!")
        configInstance = this
    }

    set(data) {
        this.config = data
        return data
    }

    get() {
        return this.config
    }
}



class DecimalClass {
    decimal;
    constructor () {
        if (decimalInstance) throw new Error("You can only create one instance!")
        decimalInstance = this
    }

    set(data) {
        this.decimal = data
        return data
    }

    get() {
        return this.decimal
    }
}


const Directory = new SingletonDirectory();
const DB = new SingletonDB();
const Configs = new ConfigClass();
const Decimal = new DecimalClass();
const BaseDirectory = "C:\\custom_color_2D\\"

export {
    Directory,
    DB,
    Configs,
    Decimal,
    BaseDirectory
}