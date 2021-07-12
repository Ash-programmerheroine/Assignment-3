//https://github.com/Ash-programmerheroine/Assignment-3

// 1st function: kilometerToMeter
function kilometerToMeter(KiloMeter) {
    if (KiloMeter > 0) {
        const meter = KiloMeter * 1000;
        return meter;
    }
    else {
        return "Length can't be zero or negative";
    }
}
let resultMeter = kilometerToMeter(5); //input
console.log(resultMeter);


//2nd function : budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    let totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalCost;
}
let needBudget = budgetCalculator(2, 5, 2);//input
console.log(needBudget);


//3rd function : hotelCost
function hotelCost(night) {
    let nightStay = 0;

    if (night <= 10) {
        nightStay = night * 100;
    }
    else if (night <= 20) {
        const firstTenNightCost = 10 * 100;
        let remainingNight = night - 10;
        let remainingNightCost = remainingNight * (100 - 20); //20 taka off after 10 nights
        nightStay = firstTenNightCost + remainingNightCost;
    }
    else {
        const firstTenNightCost = 10 * 100;
        const secondTenNightCost = 10 * 80;
        let remainingNight = night - 20;
        let remainingNightCost = remainingNight * 50; // 50 taka off after 20 nights
        nightStay = firstTenNightCost + secondTenNightCost + remainingNightCost;
    }
    return nightStay;
}
let totalCost = hotelCost(62);//input
console.log(totalCost);


//4th function : megaFriend
function megaFriend(friendList) {
    var mega = friendList[0];
    for (let i = 0; i < friendList.length; i++) {
        const element = friendList[i];
        if (mega.length < element.length) {
            mega = element;
        }
    }
    return mega;
}
let friendList = ["abdullah", "rohim", "kamrun", "obaidullah", "AklimaAkhter"]
let bigNameFriend = megaFriend(friendList);//input
console.log(bigNameFriend);