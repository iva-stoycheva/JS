// task1
let age = 18;

if(age >= 18 ){
    console.log("Ти си пълнолетен!");
} else {
    console.log("Ти си непълнолетен!");
}

// task2
let number = 8;

if(number % 2 === 0){
    console.log("Четно.");
} else {
    console.log("Нечетно.");
}

// task3
let password = "JavaScript";

if(password.length > 8) {
    console.log("Паролата е валидна.");
} else {
    console.log("Паролата трябва да съдържа поне 8 символа!");
}

// task4
let age = 15;
let hasParent = false;

if(age >= 18 || hasParent) {
    console.log("Може да гледа филма.");
} else {
    console.log("Не може да гледа филма.");
}

// task5
let username = "admin";
let password = "123456";

if(username === "admin" && password === "123456") {
    console.log("Успешно влизане.");
} else {
    console.log("Невалидни потребителско име или парола.");
}

// task6
let age = 17;
let hasID = true;
let hasParent = true;

if((age >= 18 && hasID) || hasParent) {
    console.log("Лицето може да влезне в клуба.");
} else {
    console.log("Лицето НЕ може да влезне в клуба.");
}

// task7
let salary = 1800;
let years = 6;

if(years >= 5) {
    salary += salary * 0.2;
} else {
    salary += salary * 0.1;
}

// task8
let accountBalance = 2000;
let shoppingCartTotal = 450;
let shippingCost = 20;
let hasDiscountCoupon = true;
let totalPrice;

if(hasDiscountCoupon){
    shoppingCartTotal -= 50;
}

if(shoppingCartTotal >= 500){
    shippingCost = 0;
} 

totalPrice = shoppingCartTotal + shippingCost;

if(accountBalance >= totalPrice){
    accountBalance -= totalPrice;
    console.log(accountBalance);
} else {
    console.log("Няма достатъчна наличност.");
}