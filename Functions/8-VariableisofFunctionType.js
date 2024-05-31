// using instanceof operator
function checkFunctionType(variable){
    if(variable instanceof Function){
        console.log("It is a function.");
    } else{
        console.log("It is not a function.");
    }
}

const var1 = true;
const var2 = () =>{
    return "Hello World!";
}
const var3 = function(){
    return "Hello World!";
}

checkFunctionType(var1);
checkFunctionType(var2);
checkFunctionType(var3);


// using typeof operator
function checkFunctionType(variable){
    if(typeof(variable) == "function"){
        console.log("It is a function.");
    } else{
        console.log("It is not a function.");
    }
}

checkFunctionType(var1);
checkFunctionType(var2);
checkFunctionType(var3);