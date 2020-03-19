// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
}

function matchName(drivers, nym) {
    return drivers.filter(object => {
        return object.name === nym
    })
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => {
        return driver[0] === letters[0]
    })
}