function divThree(orders){

    let count = 0;

    // check orders if divisble by three
        if (orders % 3 === 0){
            count = orders / 3;
        } else {
            for(let i = 3; i <= orders; i+=3) {
                count += 1;
            }
        }
    return count;    
}

function checkCash(cash){
    
    // if cash greater than or equal to 40 then process
    // else insufficients funds
    return (cash >= 40 ? true : false)
}

function changeResult(change){
    return (change >= 0 ? `Change: ${change}` : 'Insufficient Funds')
}

function Strawberry(orders, cash){ 
    
    var change = 0;

    if(checkCash(cash)){
        let count = divThree(orders);
        if (orders % 3 === 0){
            total = count * 100;
            change = cash - total;
            return changeResult(change);
        } else{
            left = orders - (orders - count);
            discount = count * 100;
            leftPrice = left * 40;
            change = cash - (discount + leftPrice);
            console.log(discount);
            console.log(left);
            console.log(leftPrice);
            console.log(change);
            return changeResult(change);
        }
    } else {
        change = -1;
        return changeResult(change);
    }
}

// console.log(strawberry(8, 500));
// console.log(strawberry(6, 200));
// console.log(strawberry(15, 200));
// console.log(strawberry(1, 39));

module.exports = { Strawberry };
