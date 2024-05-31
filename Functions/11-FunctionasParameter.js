function Greet(){
    return "Hello,";
}

function Name(func, name){
    const msg = func();
    console.log(`${msg} ${name}`);
}

Name(Greet, "Jayesh");
Name(Greet, "Ramesh");
