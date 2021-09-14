    var c=parseInt(prompt("1 - Addition, 2 - Subtraction, 3 - Multiplication, 4 - Division "));
    var n1=parseInt(prompt("Enter First Number: "));
    var n2=parseInt(prompt("Enter Second Number: "));

    addition = (n1,n2) => {return n1+n2};
    subtraction = (n1,n2) => {return n1-n2};
    multiplication = (n1,n2) => {return n1*n2};
    division = (n1,n2) => {return n1/n2};
    
    if(c == 1){
        alert("Sum is: " +addition(n1,n2));
    }
    if(c == 2){
        alert("Difference is: ", + subtraction_function_exp(n1,n2));
    }
    if(c == 3){
        alert("Product is: ", + multiplication_function_exp(n1,n2));
    }
    if(c == 4){
        alert("Quotient is: ", + division(n1,n2));
    }