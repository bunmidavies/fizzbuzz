var number = 1;
var text = "";
var main = document.getElementById("main");
function fizzbuzz(){
    number++;
    
    if (number % 15 == 0){
        text = "fizzbuzz";
    }
    else if (number % 5 == 0){
        text = "buzz";
    }
    else if (number % 3 == 0){
        text = "fizz";
    }
    else{
        text = number;
    }
    if (number==100){
        text = "Finished. By Bunmi Davies.";
        clearInterval(mainfunc);
        
    }
    main.innerHTML = text;
}
var mainfunc = setInterval(function(){fizzbuzz()},1000);