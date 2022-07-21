// Targil 1

// const counts = {
//     downVotes : 0,
//     upVotes : 0,
//     getVoteCount(up,down){
//         this.downVotes = down;
//         this.upVotes = up;
//         return this.upVotes - this.downVotes;
//     }
// };

// console.log(counts.getVoteCount(13,0));
// console.log(counts.getVoteCount(2,33));
// console.log(counts.getVoteCount(132,132));

// Targil 2

// const levers = {
//     scissors : {
//         fCL : ["e","f","l"]
//         },
    
//     nutcracker :{
//         sCL : ["e","l","f"]
//         },
    
//     broom : {
//         tCL : ["f","e","l"]
//     },
//     determineLever(arr){
//         let secondLetter = 1;
//         if(arr[secondLetter] == levers.scissors.fCL[secondLetter]){
//             return "first class lever";
//         }
//         else if(arr[secondLetter] == levers.nutcracker.sCL[secondLetter]){
//             return "second class lever";
//         }
//         else{
//             return "third class lever";
//         }
//     }
// }

// console.log(levers.determineLever(["e","f","l"]));
// console.log(levers.determineLever(["e","l","f"]));
// console.log(levers.determineLever(["f","e","l"]));

// Targil 3

// const tax = {
//         needs: 0,
//         wants : 0,
//         saving : 0,
//         fifthyThirtyTwenty(t){
//             this.needs = (t * 50) / 100;
//             this.wants = (t * 30) / 100;
//             this.saving = (t * 20) / 100
//             return `Needs : ${this.needs} , Wants : ${this.wants} , Saving : ${this.saving}`;
//         }
// }

// console.log(tax.fifthyThirtyTwenty(10000));
// console.log(tax.fifthyThirtyTwenty(50000));
// console.log(tax.fifthyThirtyTwenty(13450));

// Targil 4

// const drinks = [
//     {
//         name : "lemonade",
//         price : 20
//     },
//     {
//         name : "coke",
//         price : 50
//     },
//     {
//         name : "water",
//         price : 5
//     },
//     {
//         name : "beer",
//         price : 35
//     }
// ];

// let sortDrinksByPrice = function(arr){
//     let v = [];
//     let c = 1;
//     for (let i = 0; i < arr.length; i++) {
//         c == 4? --c : c;
//         if(arr[i].price < arr[c].price){
//             v.unshift(arr[i]);
//         }
//         else if(arr[i].price == arr[c].price){
//             v.splice(arr.length/2,0,arr[i]);
//         }
        
//         else{
//             v.push(arr[i]);
//         }
//         c++;
//     }
//     return v;
// }

// console.log(sortDrinksByPrice(drinks));

// Targil 5

// let stolenObjects = {
//     oneItems : {
//         "Baseball bat" : 20
//     },
//     twoItems : {
//         skate : 10,
//         painting : 20
//     },
//     threeItems : {
//         skate : 200,
//         painting : 200,
//         shoes : 1
//     },
//     sumObjects(item){
//         if(item == this.oneItems){
//             return this.oneItems["Baseball bat"];
//         }
//         else if(item == this.twoItems){
//             return this.twoItems.skate + this.twoItems.painting;
//         }
//         else{
//             return this.threeItems.skate + this.threeItems.painting + this.threeItems.shoes;
//         }
//     }
// }

// let calculateDifference = (sum,minus) => sum - minus;

// console.log(calculateDifference(stolenObjects.sumObjects(stolenObjects.oneItems),5));
// console.log(calculateDifference(stolenObjects.sumObjects(stolenObjects.twoItems),19));
// console.log(calculateDifference(stolenObjects.sumObjects(stolenObjects.threeItems),400));

// Targil 6

// let family = {
//     "m" : ["me","son","grandson", "great grandson","great grandfather", "grandfather", "father"],
//     "f" : ["me","daughter","grandsondaughter", "great granddaughter","great grandmother", "grandmother", "mother"],
//     generation(n,g){
//         if(g == "f"){
//             return family.f.at(n);
//         }
//         else{
//             return family.m.at(n);
//         }
//     }
// }

// console.log(family.generation(2,"f"));
// console.log(family.generation(-3,"m"));
// console.log(family.generation(1,"f"));

// Targil 7 - unfinished



// Targil 8

// const groceries = {
//     one : [{"product" : "Milk", "quantity" : 1, "price" : 1.50}],
//     two : [{"product" : "Milk", "quantity" : 1, "price" : 1.50},{"product" : "Cereals", "quantity" : 1, "price" : 2.50}],
//     three : [{"product" : "Milk", "quantity" : 3, "price" : 1.50}],
//     four : [{"product" : "Milk", "quantity" : 1, "price" : 1.50},{"product" : "Eggs", "quantity" : 12, "price" : 0.10},{"product" : "Bread", "quantity" : 2, "price" : 1.60},
//     {"product" : "Cheese", "quantity" : 1, "price" : 4.50}],
//     getTotalPrice(arr){
//         let final = 0;
//         for (let i = 0; i < arr.length; i++) {
//             final += arr[i].quantity * arr[i].price;
//         }
//         return final;
//     }
// }

// console.log(groceries.getTotalPrice(groceries.one));
// console.log(groceries.getTotalPrice(groceries.two));
// console.log(groceries.getTotalPrice(groceries.three));
// console.log(groceries.getTotalPrice(groceries.four));





