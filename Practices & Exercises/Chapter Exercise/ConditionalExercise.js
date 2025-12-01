/* 1. Give discount based on age, gender for metro ticket
    - Female get 50% off 
    - Kids under 5 years of age are free 
    - Senior citizens (age 65 and above) get 30% off 
    - In case of multiple discounts max discount will apply 
*/ 

let age = 9;
let gender = "female";
let finalDiscount;

if (age <= 5) {
    finalDiscount = 100;
}
else if (gender === 'female' || age <= 8){
    finalDiscount = 50;
}
else if (age >= 65){
    finalDiscount = 30;
}
else {
    finalDiscount = 0;
}
console.log(`Your final discount is ${finalDiscount}%`);