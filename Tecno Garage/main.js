
function main() {
    var categories = document.getElementById("categories")
    var next = document.querySelector("main .slider .next")
    var back = document.querySelector("main .slider .back")
    categories.addEventListener("click",change_icon)
    next.addEventListener("click",change_image)
    back.addEventListener("click",change_back_image)
    window.setInterval(change_image,3000)
}

function change_icon(){
    var categories = document.getElementById("categories")
    var categories_list = document.getElementById("categories-list")
    
    if(categories.classList[1]==="down"){
        categories.classList.remove("down")
        categories.classList.add("up")
        categories_list.style.overflow = "visible"
    }
    else if(categories.classList[1]==="up"){
        categories.classList.remove("up")
        categories.classList.add("down")
        categories_list.style.overflow = "hidden"
    }
}

function change_image(){
    var slider = document.querySelector("main .slider .container .images")
    var images = slider.children
    var cambio = false

    for(var i=0; i<images.length; i++){
        if (images[i].className=="show"){
            images[i].className="hide"
            cambio=true
            if (i>=images.length-1) {
                images[0].className="show"
                break
            }
            continue
        }
        else if(images[i].className=="hide" && cambio){
            images[i].className="show"
            
            break
        }

    }
}

function change_back_image(){
    var slider = document.querySelector("main .slider .container .images")
    var images = slider.children
    var cambio = false
    
    for(var i=images.length-1; i>=0; i--){
        if (images[i].className=="show"){
            images[i].className="hide"
            cambio=true
            if (i<=0) {
                images[images.length-1].className="show"
                break
            }
            continue
        }
        else if(images[i].className=="hide" && cambio){
            images[i].className="show"
            break
        }

    }
}

window.addEventListener("load",main)