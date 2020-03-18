// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === str.toLowerCase();
    })
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => {
        return driver.slice(0, str.length) === str;
    })
}

function matchName(drivers, str) {
    return drivers.filter(driver => {
        return driver.name === str;
    })
}