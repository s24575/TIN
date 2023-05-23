window.onload = function(){

}

function openImage(n){
    console.log(n);
    const children = document.getElementsByClassName("column");
    for(let i = 0; i < children.length; i++){
        children[i].classList.add("hidden");
    }
    showGallery(n);
}

function showGallery(n){
    document.getElementsByClassName("image")[n - 1].classList.add("shown");
}