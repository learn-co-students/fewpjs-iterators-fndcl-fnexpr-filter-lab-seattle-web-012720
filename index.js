// Code your solution here
function findMatching(drivers, str){
    let driver = drivers.filter(string => {
        return string.toLowerCase() === str.toLowerCase();
      });
    return driver;
}

function fuzzyMatch(drivers, str){
    let driverArr = drivers.filter(string => {
        return string.substr(0, str.length).toLowerCase() === str.toLowerCase();
      });
    return driverArr;
}

function matchName(drivers, str){
    let driver = drivers.filter(string => {
        return string.name.toLowerCase() === str.toLowerCase();
      });
    return driver;
}