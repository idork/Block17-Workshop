// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
]

//module.exports = coffeeMenu;

// 2. Print an array of all the drinks on the menu

/*we are adding {name} because we want to get just the name key in the objects */
const drinksArray = coffeeMenu.map(({name}) => { 
    return name;
})


console.log(drinksArray);
const cheapDrink = [];
const evenDrink = [];
let drinkPrice = 0;
const seasonalDrinkArray = [];
// 3. Print an array of drinks that cost 5 and under

coffeeMenu.forEach(({price, name}) => {
    if (price <=5){
        cheapDrink.push(name);   
    }
});

console.log(cheapDrink);

// 4. Print an array of drinks that are priced at an even number.
coffeeMenu.forEach(({price, name}) => {
    if (price % 2 === 0){
        evenDrink.push(name);   
    }
});

console.log(evenDrink);

// 5. Print the total if you were to order one of every drink.
coffeeMenu.forEach(({price}) => {
    drinkPrice = drinkPrice + price;
});

console.log(drinkPrice);

// 6. Print an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter(({seasonal, name}) => {
     if (seasonal === true){
        seasonalDrinkArray.push(name);
        return seasonalDrinkArray;
     }
});

let beans = '';
console.log(seasonalDrinkArray);

// 7. Print all the seasonal drinks with the words "with imported beans" 
// after the item name. For example: "affogato with imported beans".

seasonalDrinkArray.forEach(({name}, i) =>{
  console.log(seasonalDrinkArray.name + " with imported beans.");

});
