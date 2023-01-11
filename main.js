function attachEventListeners(){
    let button= document.getElementById("clickme");

    addEventListener('DOMContentLoaded',function dom(){
        console.log("DOM has loaded");
    });
    
    button.addEventListener("click",function clicked(){
        console.log("clicked me");
    });

}

attachEventListeners();




