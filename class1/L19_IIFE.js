//immediately invoked function expressions


(function chai(){
    console.log("CONNECTED")
})();

(function aurcode(){
    console.log("CONNECTED 2")
})();

(() => {
    console.log("CONNECTED 3")
})();


//chai()