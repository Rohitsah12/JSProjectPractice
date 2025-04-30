function example(){
    console.log("Example of HOF");
}

function HOF(func){
    func();
    func();
}
HOF(example);