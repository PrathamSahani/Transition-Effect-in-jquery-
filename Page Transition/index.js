//jQuery for showing transition effect on pages 
// its our main file which will show transition so lets run
//function fot page one 
function appearP2(){

    //code for loader and both pages 
    var loader  = document.getElementById('loader');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    loader.style.left = "0";

    //timeout method which will display our next page and block first page 
    setTimeout(function(){
        loader.style.left = "-100%";
        page1.style.display = "none";
        page2.style.display = 'block';

    //set time 2000 like 2000 time we can show transition 
    }, 2000)
}



//function fot page two 
function appearP1(){
    //code for loader and both pages 
    var loader  = document.getElementById('loader');
    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    loader.style.left = "0";

    //timeout method which will display our next page and block second page 
    setTimeout(function(){
        loader.style.left = "-100%";
        page1.style.display = "block";
        page2.style.display = 'none';

    //set time 2000 like 2000 time we can show transition 
    }, 2000)

     
}

