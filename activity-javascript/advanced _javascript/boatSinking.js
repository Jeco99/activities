function numGroup_form(formNumber, participants, ){
    let possible = 0;
   
    // even
    if( participants % formNumber == 0 ){
        for(let formed = formNumber; formed <= participants; formed+=formNumber){
            possible += 1;
        } 
    } else{
        for(let formed = formNumber; formed < participants; formed+=formNumber){
            possible += 1;
        }         
    }

    result = possible * formNumber
    return result;
}


// console.log(numGroup_form(4, 15));
// console.log(numGroup_form(2, 12));
// console.log(numGroup_form(5, 12));
// console.log(numGroup_form(3, 10));
// console.log(numGroup_form(2, 9));

function sinking(participant,rounds){
    

    for(let i = 0; i < rounds.length; i++){
        let groupBy = rounds[i];
        participant = numGroup_form(groupBy, participant);
    }
    
    return participant;
}

console.log(sinking(15, [4,2,5,3,2]));