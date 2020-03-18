// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
}
function fuzzyMatch(drivers, letter){
    return drivers.filter(driver => driver[0] == letter[0])
}
function matchName(drivers, string){
    return drivers.filter(driver => driver.name == string)
}