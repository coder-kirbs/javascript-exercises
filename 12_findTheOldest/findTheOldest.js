const findTheOldest = function(array) {
    const oldest = array.sort(function(personA, personB){
        const lastPerson = personA.yearOfDeath-personA.yearOfBirth;
        const nextPerson = personB.yearOfDeath-personB.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    });
    console.log (oldest.slice(0,1)); 
};


const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}



//create table sorting by age
//return oldest for each/first item in new array



// Do not edit below this line
module.exports = findTheOldest;
