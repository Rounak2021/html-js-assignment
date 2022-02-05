// Argument 1
function add() {
    var a = 0;
    for (var i=0; i < arguments.length; i++) {
        a += arguments[i];
    }
    return a;
}
console.log("The addition of the numbers are: " + add  ( 4 , 5) );         
console.log("The addition of the numbers are: " + add( 3, -1));        
console.log("The addition of the numbers are: " + add(3,2,-9));   


// Argument 2
function add_num(x, y) {
    return x+y;
}

// Argument 2
function add_num(x, y, z) {
    return x+y+z;
}
console.log("The addition of the numbers are: " + add_num(5, 6));      
console.log("The addition of the numbers are: " + add_num(2, 4,6));   
  