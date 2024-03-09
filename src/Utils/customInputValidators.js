
// let isNumRegex = /^\d+$/;
let isNumRegex = /\d+$/;
let isFloatRegex = /[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)/;
let isEnAlphanumericOrWhitespace  = /^[a-z0-9\s]+$/i;
let isAlphanumericOrWhitespace  = /^[a-z0-9\u0600-\u06FF\s]+$/i;
let isNumOrAsteriskRegex = /\d+$|\*+$/;
let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
let phoneRegex = /^[0-9]{11}$/;
// let regexPhone = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;

let regexIp = /[0-9A-Fa-f-\-:]+/g;
let regexIpOnBlur = / ((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/g;

export const textOnly = (value) => {
  return isNaN(value) || value.length === 0;
};

export const alphanumericOrWhitespace = (value) => {
  return isAlphanumericOrWhitespace.test(value) || value.length === 0;
};


export const digitOnly = (value) => {
  return isNumRegex.test(value) || value.length === 0;
};
export const floatNum = (value) => {
  return isFloatRegex.test(value) || value.length === 0;
};
export const digitAndAsterisk = (value) => {
  return isNumOrAsteriskRegex.test(value) || value.length === 0;
};

export const nationalID = (value) => {
  let isValue = true;
  if (isNumRegex.test(value) && value.length > 0) {
    let digits = value?.split("").map((digit) => parseInt(digit));
    let confirm = digits.pop();
    let sum = digits
      .reverse()
      .reduce(
        (previousSum, currentDigit, currentIndex) =>
          previousSum + currentDigit * (currentIndex + 2),
        0
      );
    let reminder = sum % 11;
    if (reminder >= 2) return confirm === 11 - reminder;
    else return confirm === reminder;
  }
  return isValue;
};

export const validateEmail = (value) => {
  return regexEmail.test(value)
}

export const validateIp = (value) => {
  return regexIp.test(value) || value.length === 0;
}

export const validateOnBlurIp = (value) => {
  return regexIpOnBlur.test(value) || value.length === 0;
}

export const makeValidateError=(fields)=>{
    let Error = []

    fields.forEach((itemField)=>{
      if(itemField.isRequired===true){
        switch (itemField.type) {
          case "text":
            itemField.defaultValue===""? Error.push(true) : Error.push(false) ;
            break;
          case "text_area":
            itemField.defaultValue==="" ? Error.push(true) : Error.push(false) ;
            break;
          case "dropdown":
            itemField.defaultValue===-1 ? Error.push(true) : Error.push(false);
            break;
          case "list":
            itemField.defaultValue.length<=0 ? Error.push(true) : Error.push(false) ;
              break;
          case "image":
            itemField.defaultValue==="" || itemField.defaultValue.length<=0 ? Error.push(true) : Error.push(false) ;
              break;    
          case "plate_picker":
            itemField.defaultValue.includes(-1) ? Error.push(true) : Error.push(false) ;
            break;
          case "switch":
            itemField.defaultValue===false || itemField.defaultValue===0 ? Error.push(true) : Error.push(false) ;
            break;  
          case "date_picker":
            itemField.defaultValue===undefined || itemField.defaultValue.length<=0 ? Error.push(true) : Error.push(false) ;
              break;   
          case "time_picker":
            itemField.defaultValue===undefined || itemField.defaultValue.length<=0 ? Error.push(true) : Error.push(false) ;
              break;   
        
          default:
            break;
        }   
      }
    })
    return(Error)
}

export const makeValidateErrorOnBlur=(value)=>{
  let Error = false
  if(!value || value===-1){
    Error = true
  }else{
    Error = false
  }
  return Error
}






