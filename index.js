function findMatching(drivers, name) {
    return drivers.filter(person => 
        person.toLowerCase() === name.toLowerCase());
    
};


function fuzzyMatch(drivers, name) {
    return drivers.filter(person =>
        person.toLowerCase().indexOf(name.toLowerCase()) === 0
    )
};


function matchName(drivers, name) {
    return drivers.filter(record => record.name === name) 
};