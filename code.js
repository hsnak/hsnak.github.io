document.body.style.width = window.innerWidth + "px"
document.body.style.height = window.innerHeight + "px"

let words;
let nb_of_words = 0
let start_at = 0
let s = 9;
let myform = document.getElementById("form_game1")

//
let grid = document.getElementsByClassName("grid-container")[0]
let grid_width;
let div_height;
let div_width;
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d")
let turn = 1;
let eng_words = []
let eng_words_shuffle = []
let arab_words = []
let arab_words_shuffle = []
let array1 = [0,1,2,3,4]
let array2 = [0,1,2,3,4]
let find_minus;
let div_eng
let div_arb
let p_eng
let p_arb
let indexofselectedeng;
let obj_selected;
let indexofword;

//
function game1(){
    document.getElementsByClassName("game1")[0].style.display = "none"
    document.getElementsByClassName("div-form")[0].style.display = "flex"

}

function submit_info(){
    //
    words = document.getElementById("words").value;
    words = words.replaceAll("\t","-")
    words = words.split("\n")
    //
    nb_of_words = parseInt(document.getElementById("words_nb").value)
    start_at = document.getElementById("start_at").value - 1;
    words = words.slice(start_at,start_at+nb_of_words)
    
    for(let j = 0; j < words.length ; j++){
        find_minus =  words[j].indexOf("-")
        eng_words.push(words[j].slice(0,find_minus))
        arab_words.push(words[j].slice(find_minus+1,words[j].length))
    }
    
    let t = eng_words.length
    let s1 = [],s2 = []
    for(let a = 0; a< t ; a++){
        s1[a] = a
        s2[a] = a
    }

    let i = 0,j = 0, swap = 0
    for(let v = 0 ; v < t ; v++){
        i = Math.floor(Math.random() * 5);
        swap = s1[v]
        s1[v] = s1[i]
        s1[i] = swap
        j = Math.floor(Math.random() * 5);
        swap = s2[v]
        s2[v] = s2[j]
        s2[j] = swap

    }

    //
    document.getElementsByClassName("div-form")[0].style.display = "none"
    canvas.style.display = "block"
    grid.style.display = "grid"
    //
    grid_width = window.getComputedStyle(grid,null).width
    grid_width = grid_width.replace("px", "");
    grid_width = parseInt(grid_width);
    div_height = window.getComputedStyle(document.getElementsByClassName("grid-item")[0],null).height
    div_height = div_height.replace("px", "");
    div_height = parseInt(div_height);
    div_width = window.getComputedStyle(document.getElementsByClassName("grid-item")[0],null).width
    div_width = div_width.replace("px", "");
    div_width = parseInt(div_width);
    //
    for (let p = 0; p < eng_words.length; p++) {
        if(p == 0){
            document.getElementsByClassName("word-eng")[p].innerHTML = eng_words[s1[0]]
            document.getElementsByClassName("word-arb")[p].innerHTML = arab_words[s2[0]]
            //
            document.getElementsByClassName("grid-item")[0].addEventListener("click",function(event){
                let e = event
                let obj = this
                let x = (window.innerWidth - grid_width)/2
                ctx.beginPath();
                ctx.moveTo((x+div_width)/4.5,e.y/4.5);//e.screenY , e.clientY
                turn = 2;
                indexofword = eng_words.indexOf(obj.childNodes[0].innerHTML)
                obj_selected = obj;
            })
            document.getElementsByClassName("grid-item")[1].addEventListener("click",function(event){
                if(turn == 2){
                    e = event
                    let obj = this
                    let x = (window.innerWidth - grid_width)/2;
                    if(arab_words.indexOf(obj.childNodes[0].innerHTML) == indexofword){
                        obj_selected.style.backgroundColor = "#a8ffa8"
                        obj.style.backgroundColor = "#a8ffa8"
                        ctx.lineTo((x+grid_width - div_width)/4.5,e.y/4.5);//e.y/4.5
                        ctx.stroke();
                        turn = 1;
                        if(window.matchMedia("(max-width: 500px)")){
                            setTimeout(() => {
                                obj_selected.style.backgroundColor = "#763A70"
                                obj.style.backgroundColor = "#763A70"
                                obj_selected.childNodes[0].innerHTML = ""
                                obj.childNodes[0].innerHTML = ""
                            }, 1000);
                        }
                    }
                    else{
                        turn = 1;
                        obj_selected.style.backgroundColor = "red"
                        obj.style.backgroundColor = "red"
                        setTimeout(() => {
                            obj_selected.style.backgroundColor = "#D9D9D9"
                            obj.style.backgroundColor = "#D9D9D9"
                        }, 1000);
                    }
                    
                    
                }
            })
        }
        else{
            div_eng = document.createElement("div")
            div_arb = document.createElement("div")
            div_eng.classList.add("grid-item")
            div_arb.classList.add("grid-item")
            div_eng.addEventListener("click",function(event){
                e = event
                let obj = this
                let x = (window.innerWidth - grid_width)/2
                ctx.beginPath();
                ctx.moveTo((x+div_width)/4.5,e.y/4.5);//e.screenY , e.clientY
                turn = 2;
                indexofword = eng_words.indexOf(obj.childNodes[0].innerHTML)
                obj_selected = obj;
            })
            div_arb.addEventListener("click",function(event){
                if(turn == 2){
                    e = event
                    let obj = this
                    let x = (window.innerWidth - grid_width)/2;
                    if(arab_words.indexOf(obj.childNodes[0].innerHTML) == indexofword){
                        obj_selected.style.backgroundColor = "#a8ffa8"
                        obj.style.backgroundColor = "#a8ffa8"
                        ctx.lineTo((x+grid_width - div_width)/4.5,e.y/4.5);//e.y/4.5
                        ctx.stroke();
                        turn = 1;

                        if(window.matchMedia("(max-width: 500px)")){
                            setTimeout(() => {
                                obj_selected.style.backgroundColor = "#763A70"
                                obj.style.backgroundColor = "#763A70"
                                obj_selected.childNodes[0].innerHTML = ""
                                obj.childNodes[0].innerHTML = ""
                            }, 1000);
                        }

                    }
                    else{
                        turn = 1;
                        obj_selected.style.backgroundColor = "red"
                        obj.style.backgroundColor = "red"
                        setTimeout(() => {
                            obj_selected.style.backgroundColor = "#D9D9D9"
                            obj.style.backgroundColor = "#D9D9D9"
                        }, 1000);
                    }
                    
                    
                }
            })
            grid.appendChild(div_eng)
            grid.appendChild(div_arb)
            p_eng = document.createElement("p")
            p_arb = document.createElement("p")
            p_eng.classList.add("word","word-eng")
            p_arb.classList.add("word","word-eng")
            div_eng.appendChild(p_eng)
            div_arb.appendChild(p_arb)
            p_eng.innerHTML = eng_words[s1[p]]
            p_arb.innerHTML = arab_words[s2[p]]
        }
    }
    document.body.style.height = window.innerHeight + "px !important"
    document.body.style.width = window.innerWidth + "px !important"

}

