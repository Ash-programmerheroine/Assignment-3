//https://github.com/Ash-programmerheroine/Assignment-3

// 1st function: kilometerToMeter
function kilometerToMeter(KiloMeter) {
   let meter = 0;
    if (KiloMeter < 0) {
        return "Length can't be zero or negative";
        
    }
    else {  
        meter = KiloMeter * 1000;
        return meter;
    }
}
let resultMeter = kilometerToMeter(1); //input
console.log(resultMeter);


//2nd function : budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    
    if(typeof watch != 'number'|| watch < 0){
        return 'please Enter valid no.'
    }
    if(typeof phone != 'number'|| phone < 0){
        return 'please Enter valid no.'
    }
    if(typeof laptop != 'number'|| laptop < 0){
        return 'please Enter valid no.'
    }
    let totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalCost;
}
let needBudget = budgetCalculator(4, 5, 2);//input
console.log(needBudget);


//3rd function : hotelCost
function hotelCost(night) {
    let nightStayCost = 0;
    let remainingNight = 0;
    let remainingNightCost = 0;

    if(night < 0){
        return "nights can't be negetive"; 
    }
    if (night <= 10) {
        nightStayCost = night * 100;
    }
    else if (night <= 20) {
        const firstTenNightCost = 10 * 100;
        remainingNight = night - 10;
        remainingNightCost = remainingNight * (100 - 20); //20 taka off after 10 nights
        nightStayCost= firstTenNightCost + remainingNightCost;
    }
    else {
        const firstTenNightCost = 10 * 100;
        const secondTenNightCost = 10 * 80;
        remainingNight = night - 20;
        remainingNightCost = remainingNight *(100 - 50); // 50 taka off after 20 nights
        nightStayCost = firstTenNightCost + secondTenNightCost + remainingNightCost;
    }
    return nightStayCost;
}
let hotelBill = hotelCost(62);//input
console.log(hotelBill);


//4th function : megaFriend
function megaFriend(friendNameList) {
    var mega = friendNameList[0];
    for (let i = 0; i < friendNameList.length; i++) {
        const element = friendNameList[i];
        if (typeof element != "string"){
            return "ooopsss...Please Enter your friend's name...only string is accepted inside array...."
        }
        else if(mega.length < element.length) {
            mega = element;
        }
    }
    return mega;
}
let friendNameList = ["abdullah", "rohim", "kamrun", "obaidullah", "AklimaAkhter"]
let biggestName = megaFriend(friendNameList);//input
console.log(biggestName);