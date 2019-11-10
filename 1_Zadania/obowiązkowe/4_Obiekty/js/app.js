// Zadanie 0a

const city = {
    capital: "Wrszawa",
    poopulation: 2000000,
    president: "Trzaskowski",
    primeMinister: ["Adam", "Bogdan"]
};

console.log(city.capital + city.poopulation + city.president + city.primeMinister)

//Zadanie 0b

const timeMachine = {
    shape: "Portal",
    model: "",
    run: function(date, place){
        console.log(`Przeniosłeś się ${place} i jest obecnie ${date}`);
    }
};

timeMachine.run("20-11-2030", "Sydney");

//Zadanie 1

const book = {
    title: `test`,
    author: `author`,
    numberOfPages: `number`
};

for(const key of book){
    console.log(book[key]);
}

//Zadanie 2

var person = {
    name: `Andrzej`,
    age 12,
    sayHello: function(){
        console.log("hello");
    }
}
console.log(person.name);
console.log(person.age);
person.sayHello();

//Zadanie 3

const recipe = {
    title: `przepis`,
    servings: 0,

}

recipe.ingredients = [];
recipe.addIngredient = function(ingredient){
    this.ingredient.push(ingredient);
    this.servings++;
}

recipe.addIngredient(`składnik 1`);
recipe.addIngredient(`składnik 2`);

console.log(recipe.title);
console.log(recipe.servings);
console.log(recipe.ingredient);

//Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist  = false;

const.log(spoon.isExist);