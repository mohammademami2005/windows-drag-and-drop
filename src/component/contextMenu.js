export default function contextMenu(params) {
    const wMenu = document.querySelector("#windowContextMenu")

    let mouseX;
    let mouseY;
    let windowHeight = window.innerHeight
    let windowWidth = window.innerWidth

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
    })

    window.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        wMenu.classList.replace("hidden", "flex")

        const menuWidth = 250
        const menuHeight = 350

        let finalLeft = (mouseX > (windowWidth - menuWidth) ? mouseX - menuWidth : mouseX)
        let finalTop = (mouseY > (windowHeight - menuHeight) ? mouseY - menuHeight : mouseY)

        wMenu.style.left = finalLeft + "px"
        wMenu.style.top = finalTop + "px"
    })

    window.addEventListener("click", (e) => {
        wMenu.classList.replace("flex", "hidden")
    })

    wMenu.addEventListener("click", (e) => {
        e.stopPropagation()
    })
}