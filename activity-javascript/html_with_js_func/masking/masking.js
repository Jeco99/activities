var digitInput = document.getElementsByTagName('input')[0];
var digitDisp = document.getElementById('digitDisp');
var maskBtn = document.getElementById('maskBtn');
var unmaskBtn = document.getElementById('unmaskBtn');


var separateNum = [];



function mask(){
    
    let digitValue = digitInput.value;

    if(digitValue.length == 16 || digitValue.length == 0){
        for(let i = 0; i < digitValue.length; i+=4){
            let j = i+4;
            separateNum.push(digitValue.slice(i, j));
        }
    
        let newSeparateNum = separateNum.slice();
    
        for(let i = 1; i < newSeparateNum.length-1; i++){
            d_convert = newSeparateNum[i];
            d_convert = d_convert.replaceAll(/[0-9]+/g, "****");
            newSeparateNum[i] = d_convert;
         }
    
        digitDisp.innerHTML = `Masked Card Number: <b> ${newSeparateNum.join(" ")} </b>`;
        digitDisp.style.fontSize = '20px';
        digitDisp.style.marginTop = '10px';
   
        digitInput.value = "";
    } else if(digitValue.length > 16){
        alert('Card number should not exceed 16 digits.');
        digitInput.value = "";
        digitDisp.innerHTML = "";
    } else{
        alert('Card number should be 16 digits long.');
        digitInput.value = "";
        digitDisp.innerHTML = "";
    } 

}

function unmask(){
    digitDisp.innerHTML = `Unmasked Card Number: <b> ${separateNum.join(" ")} </b>`;
    digitDisp.style.fontSize = '20px';
    digitDisp.style.marginTop = '10px';

}


maskBtn.addEventListener('click', mask);
unmaskBtn.addEventListener('click', unmask);