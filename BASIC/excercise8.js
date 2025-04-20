for(let n=1; n<=15; n++){
    if(n%3==0){
        console.log("FIZZ");
    }
    else if (n%5==0){
        console.log("BUZZ");
    }
    else if ( n%5===0 && n%3==0){
        console.log("FIZZBUZZ");
    }
    else{
        console.log(n);
    }
}
