const move = ()=>{
    if(!can_move){
        botones.style.justifyContent="left"
        bn.style.position="absolute"
        bn.style.margin="0"
        bn.style.padding="0"
        !can_move
    }
    h = Math.floor(Math.random()*(hmax-35))
    w = Math.floor(Math.random()*(wmax-100))
    bn.style.top=`${h}px`
    bn.style.left=`${w}px`
}

const create = ()=> div_main.innerHTML = "<p>Yo sabia que querías beibi<p>"

const bueno = () => div_main.innerHTML = "<p>Ta bueno no<p>"

const panel = document.getElementById("body")
let h,w, hmax = panel.clientHeight, wmax=panel.clientWidth
const div_main = document.getElementById("div_main")
const botones = document.getElementById("botones")
const bn = document.getElementById("no")
const bs = document.getElementById("si")
let can_move = false
bn.addEventListener("mouseenter",move)
bs.addEventListener("click",create)
bn.addEventListener("click",bueno)


