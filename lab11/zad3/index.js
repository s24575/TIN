function showGallery(){
    document.getElementById("myGallery").style.display = "block";
}

function closeGallery(){
    document.getElementById("myGallery").style.display = "none";
}

function nextSlide(n){
    showSlides(index + n);
}

function selectSlide(n){
    index = n;
    showSlides(index);
}

let index = 1;

function showSlides(n){
    index = n;
    let images = document.getElementsByClassName("image");
    
    if(index < 1) index = 1;
    else if(index > images.length) index = images.length;

    for(let i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    images[index - 1].style.display = "block";
}