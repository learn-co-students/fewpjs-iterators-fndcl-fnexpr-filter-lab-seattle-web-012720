// Code your solution here




function findMatching(drivers, string){
    let findDriver = drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase()
    })
    return findDriver
}

function fuzzyMatch(drivers, string){
    let fuzzyDriver = drivers.filter(driver=> {
        return driver.substr(0, string.length).toUpperCase() === string.toUpperCase()
    })
    return fuzzyDriver
}

function matchName(drivers, string){
    let matchDriver = drivers.filter(driver => {
        return driver.name.toUpperCase() === string.toUpperCase()
    })
    return matchDriver
}