let stats = document.querySelector("h5")
let add = document.querySelector("#add");
let remove = document.querySelector('#remove')

add.addEventListener("click",function(){
  
    stats.innerHTML = "Friends"
    stats.style.color = "Green"
    add.style.backgroundColor = "#4287f5"
    // stats.style.backgroundColor = "#eeeee4"
    remove.style.backgroundColor = '#e3d6d5';
})

remove.addEventListener("click",function(){
    stats.innerHTML = "Stranger"
    stats.style.color = "Red"
    stats.style.backgroundColor = "#ffff"
    remove.style.backgroundColor = "#dadada"
    add.style.backgroundColor = 'cadetblue'
})