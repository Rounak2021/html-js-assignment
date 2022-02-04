// Given Array
arr = [2,7,11,15,14,5,9,6];

// Condition to increase each counter
for(var i=0; i<arr.length; i++){
    for(var j=i+1; j<arr.length; j++){
    // Condition to print only the index of the array which matches the sum of equal to 19 
        if(arr[i]+arr[j]==19){
             document.write(i , ",",  j);
        }
    }
}