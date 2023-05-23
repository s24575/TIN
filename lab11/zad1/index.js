window.onload = function(){
    document.querySelector(".burger").onclick = function(){
        const navbar = document.querySelector("nav");
        if(navbar.classList.contains("collapsed")){
            navbar.classList.remove("collapsed");
        } else{
            navbar.classList.add("collapsed");
        }
    }
}