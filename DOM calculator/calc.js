$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});

AdditionButton = document.getElementById("AdditionButton");
AdditionOperation = function(){
    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");

    sum = parseInt(input1.value) + parseInt(input2.value);
    result = document.getElementById("result");
    result.innerText = sum;
}
AdditionButton.addEventListener("click", AdditionOperation);

MinusButton = document.getElementById("MinusButton");
MinusOperation = function(){
    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");

    diff = parseInt(input1.value) - parseInt(input2.value);
    result = document.getElementById("result");
    result.innerText = diff;
}
MinusButton.addEventListener("click", MinusOperation);

MultiplicationButton = document.getElementById("MultiplicationButton");
MultiOperation = function(){
    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");

    multi = parseInt(input1.value) * parseInt(input2.value);
    result = document.getElementById("result");
    result.innerText = multi;
}
MultiplicationButton.addEventListener("click", MultiOperation);

DivisionButton = document.getElementById("DivisionButton");
DivOperation = function(){
    input1 = document.getElementById("input1");
    input2 = document.getElementById("input2");

    div = parseInt(input1.value) / parseInt(input2.value);
    result = document.getElementById("result");
    result.innerText = div;
}
DivisionButton.addEventListener("click", DivOperation);