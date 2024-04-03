let main = document.querySelector('#main')
let cursor = document.querySelector(".cursor")
let h1 = document.getElementsByName('h1')

// cursor.style.backgroundColor = "green"

main.addEventListener('mousemove', (variable) => {
    cursor.style.left = variable.x+"px";
    cursor.style.top = variable.y+"px"
})
