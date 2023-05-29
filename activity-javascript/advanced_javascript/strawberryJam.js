  const Strawberry = (orders, cash) => {
    let jarPrice = 40;
    let count = 0;
    let total = 0;
    let change = 0;
    
    for(let i = 3; i <= orders; i+=3){
        count += 1;
    }
   
    if (orders % 3 == 0){
        total = count * 100;
        change = cash - total
    } 
    
    left = Math.abs((orders - count) - orders)
    leftPrice = left * jarPrice;
    discount = count * 100;
    total =  (leftPrice + discount);
    change = cash - total;

    console.log(change);
    console.log(cash);
    
    // if (cash == 0) { return `Change: ${cash}`; }
    
    if(change >= 0 ) {
        return `Change: ${change}`;
    } else {
        return 'Insufficient Funds';
    }
   
}

console.log(Strawberry(8, 500))
console.log(Strawberry(6, 200))
console.log(Strawberry(15, 200))
console.log(Strawberry(1, 39))