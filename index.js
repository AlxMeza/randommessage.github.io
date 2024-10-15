const element = document.getElementById("no")

const handleClick = (event) => {
    event.id == "x" ? tryAgain() : event.id == "yes" ? playSound() : alert("....")
}

function tryAgain(){
    element.style=""
    alert("Common Try Again 😎")
}

function playSound(){
    document.getElementById("audio").play()
    alert("🌈 Gaaaaaaay!!!")
}

function getWidth(){
    let widthRes = Math.floor((Math.random() * screen.width)/2);
    if(widthRes == 0) widthRes += 20
    if(widthRes == screen.width)  widthRes -= 25
    return widthRes
}

function getHeight(){
    let heightRes = Math.floor((Math.random() * screen.height)/2);
    if(heightRes == 0) heightRes += 20
    if(heightRes == screen.height)  heightRes -= 25
    return heightRes
}

function getCoords(clientWidth, clientHeight){
    let widthRes = getWidth()
    let heightRes = getHeight()
    if( (heightRes >= clientHeight-40 && heightRes <= clientHeight+40) && (widthRes >= clientWidth-45 && widthRes <= clientWidth+45)  )
        return getCoords(clientWidth, clientHeight)
    return {heightRes, widthRes}
}

element.addEventListener("mouseover", () => {
    let res = getCoords(element.clientWidth, element.clientHeight)
    element.style = `position: absolute; top: ${res.heightRes}px; left: ${res.widthRes}px; z-index: 100;`;
})