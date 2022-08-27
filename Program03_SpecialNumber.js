function factNum(num){
    let fact=1;
    for(let i=0;i<num;i++){
        fact = fact*(i+1);
    }
    return fact

}

function isSpecialNum(number){
    let sum = 0;
    let tempNum = number;
    while(tempNum > 0)
    {
        let rem = tempNum % 10;
        sum += factNum(rem);
        tempNum= parseInt(tempNum/10);

    }

    if(sum === number){
        console.log("The Number is Special Number.");
    }
    else
        console.log("The Number is not a Special Numnber.");
}


isSpecialNum(145);
isSpecialNum(456);