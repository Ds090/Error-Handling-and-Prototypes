function manipulationString(str,UpperCaseStr) {
    let strUpper = String(str);
    console.log(strUpper);
    UpperCaseStr(strUpper.toUpperCase());
}

let string = "hello, world";

function UpperCaseStr(str) {
    console.log("The manipulated string is:", str);
}

manipulationString(string,UpperCaseStr);