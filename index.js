// Code your solution here
function findMatching(driversArray, name){
    let matching = driversArray.filter(driver => {return driver.toLowerCase() === name.toLowerCase()});
    return matching;
}

function fuzzyMatch(driversArray, letters){
    let n = letters.length;
    let matches = driversArray.filter(driver => {return driver.slice(0,n)===letters})
    return matches

}

function matchName(driversArray, name) {
    let match = driversArray.filter(driver => {return driver.name === name})
    return match

}