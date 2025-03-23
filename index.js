function findMatching(drivers, query) {
return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());

}

function fuzzyMatch(drivers,query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers,query) {
    return drivers.filter(driver => driver.name===query);
}

const drivers = ["Alice", "Bob", "Charlie", "alice"];
const driverObjects = [
  { name: "Alice", hometown: "New York" },
  { name: "Bob", hometown: "Los Angeles" },
  { name: "Charlie", hometown: "Chicago" }
];

console.log(findMatching(drivers, "alice")); 
console.log(fuzzyMatch(drivers, "Al")); 
console.log(matchName(driverObjects, "Bob")); 
