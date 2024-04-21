const superheroAbilities = {
    specialPower: "lasebeams",
    weakness: "kryptonite",
    
}

console.log(superheroAbilities);
console.log(superheroAbilities.specialPower);

superheroAbilities.iKnowTheName = "teleportation";
console.log(superheroAbilities);

const thisPropertyShouldExistOnTheObject = "strength";
console.log(thisPropertyShouldExistOnTheObject)

superheroAbilities[thisPropertyShouldExistOnTheObject] = 30;  

console.log(superheroAbilities);