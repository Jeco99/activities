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

function changeResult(change){
    return change >= 0 ? `Change: ${change}` : 'Insufficient Funds'
}

function Strawberry(orders, cash){ 
    
    let change = 0;

    if(cash >= 40 ){
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
            // console.log(discount);
            // console.log(left);
            // console.log(leftPrice);
            // console.log(change);
            return changeResult(change);
        }
    } else {
        change = -1;
        return changeResult(change);
    }
}

console.log(Strawberry(8, 500));
console.log(Strawberry(6, 200));
console.log(Strawberry(15, 200));
console.log(Strawberry(1, 39));
console.log(Strawberry(9,500));

module.exports = { Strawberry };
