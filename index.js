// // Code your solution here

// // const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(namesArray, string){
    // loose equality operator?? 
    let drivermatch = namesArray.filter(namesArray => namesArray.toUpperCase()===string.toUpperCase())
    return !!drivermatch ? drivermatch : undefined;
    // if (drivermatch) {return drivermatch
    // } else {return undefined}
    }


function fuzzyMatch (namesArray, letter) { 
    let driverToString = namesArray.filter(namesArray => namesArray.substring(0,2)=== letter)
    return !!driverToString ? driverToString : undefined; 
}
    // // if (driverToString[0]=== letter) {
    //     return true


function matchName (obj, name) {
    const array = obj.entries()
    const driverMatch = obj.filter(array => obj.forEach() === name)
    return !!driverMatch ? driverMatch : undefined;
}
function matchName (namesArray, name) {
    const driverMatch = namesArray.filter(driverObj => driverObj.name === name)
    return !!driverMatch ? driverMatch : undefined;
}
