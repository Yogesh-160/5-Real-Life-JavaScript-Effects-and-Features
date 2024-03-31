let stats = document.querySelector("h5")
let add = document.querySelector("#add");
let check = 0;

add.addEventListener("click",function(){
  if(check == 0){
      stats.innerHTML = "Friends"
      stats.style.color = "Green"
      add.innerHTML = 'Remove Friend'
      add.style.backgroundColor = "Grey"
      check = 1;
    }
    else{
        stats.innerHTML = "Stranger"
        stats.style.color = "Red"
        add.style.backgroundColor = "cadetblue"
        add.innerHTML = "Add Friend"
        check = 0;
    }
})
