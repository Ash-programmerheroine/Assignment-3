//
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
var resultMeter = kilometerToMeter(5);
console.log(resultMeter);


//2nd function : budgetCalculator
function budgetCalculator(watch, phone, laptop) {
    var totalCost = (watch * 50) + (phone * 100) + (laptop * 500);
    return totalCost;

}
var needBudget = budgetCalculator(2, 5, 0);
console.log(needBudget);


//3rd function : hotelCost



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
var friendList = ["abdullah", "rohim", "kamrun", "obaidullah", "AklimaAkhter"]
var bigNameFriend = megaFriend(friendList);
console.log(bigNameFriend);