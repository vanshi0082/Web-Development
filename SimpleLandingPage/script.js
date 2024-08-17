window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0)
})

function myfunction(){
    const x = document.getElementById("menu");
    const ul = document.getElementsByTagName("ul")
    const ham = document.getElementsByClassName("hamburger")


    if(x.style.display == "block"){
        x.style.display = "none"; 
    }
    else{
        x.style.display = "block";
        ham.rea
     }
     
    
}
