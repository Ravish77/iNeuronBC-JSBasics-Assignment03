function isAmstrong(number){
    let sum=0;
    let tempNum= number;
    while(tempNum > 0)
    {
        let rem = tempNum % 10;
        sum += rem*rem*rem;
        tempNum= parseInt(tempNum/10);

    }

    if(sum===number){
        console.log("The number is Amstrong");
    }
    else
        console.log("The number is not Amstrong");

}

isAmstrong(153);
isAmstrong(371);
isAmstrong(1);
isAmstrong(234);
isAmstrong(561);