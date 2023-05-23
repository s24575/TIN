window.onload = function(){
    const children = document.getElementsByClassName("accordion");
    for(let i = 0; i < children.length; i++){
        children[i].onclick = function(){
            for(let i = 0; i < children.length; i++){
                children[i].nextElementSibling.classList.remove("shown");
            }
            var panel = this.nextElementSibling;
            panel.classList.add("shown");
        }
    }
    console.log("test");
}