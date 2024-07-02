
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
   
   }

console.log(findMatching(drivers, 'sammy'));



function fuzzyMatch(drivers, letter){
    return drivers.filter(driverLetter => driverLetter.toLowerCase().startsWith(letter.toLowerCase()));

}
console.log(fuzzyMatch(drivers, 'b'))





function matchName(drivers, attribute){
    return drivers.filter(driver => driver.name.toLowerCase() === attribute.toLowerCase());

}
console.log(matchName(drivers, 'Bobby'));