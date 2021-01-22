// 01. Kilometer to Meter

function kilometerToMeter(kilometer){

    if (kilometer < 0){
        return "Distance can't be negative";
    }else{
        var meter = kilometer * 1000;
        return meter;
    }

}
var result = kilometerToMeter(-1); //Input your value here ..
console.log(result);


// 02. Budge Calculator

function budgetCalculator(watch,phone,laptop){

    if(watch < 0 || phone < 0 || laptop < 0){
        return "Product must not be nagetive";
    }
    else{
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}
var totalProductPrices = budgetCalculator(1,1,1); // Enter your product amount
console.log(totalProductPrices);


// 03. Hotel Cost

function hotelCost(days){
    if(days < 0){
         return "Days must not be negative !";
    } else{
     var roomCost = 0;
     if(days <= 10){
 
         roomCost = days * 100;
 
     } else if(days <= 20){
 
         var firstStepCost = 10 * 100;
         var remainingDays = days - 10;
         var secondStepCost = remainingDays * 80;
         roomCost = firstStepCost + secondStepCost;
 
     } else{
         
         firstStepCost = 10 * 100;
         secondStepCost = 10 * 80;
         remainingDays = days - 20;
         thirdStepCost = remainingDays * 50;
         roomCost = firstStepCost + secondStepCost + thirdStepCost;
     }
     return roomCost;
    }
 }
 
 var totalCost = hotelCost(-1); // Input your value
 console.log(totalCost)
 

 // 04. Mega Friends

 function megaFriend(friendsName){

    var nameLength = 0;
  
    for ( var i = 0; i < friendsName.length; i++ ){

      if ( friendsName[i].length > nameLength ){
        var nameLength = friendsName[i].length;
        var longestFriendName = friendsName[i];
      }
    }
    return longestFriendName;
 }

  var friendsName = ["knight","saddam","nafiz","doli","nazifa"];//Enter your friend list
  var megaFriendName = megaFriend(friendsName);
  console.log(megaFriendName);