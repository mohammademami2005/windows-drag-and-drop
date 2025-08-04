export default function dragAndDrop() {
    const figure = document.querySelectorAll("section#desktop >figure")
    const desktop = document.querySelector("section#desktop")
    let caption = document.querySelectorAll("section#desktop >figure > figcaption")
    let img = document.querySelectorAll("section#desktop >figure > img")
    caption.forEach((item) => {
        item.classList.add("text-white", "text-sm", "block", "text-center")
    })
    img.forEach(item => item.classList.add("w-[50px]", "h-[50px]", "object-cover"))





    figure.forEach((item, i) => {
        let mouseX, mouseY, offsetX, offsetY;

        // چیدمان آیکون ها flexible
        const desktopHeight = desktop.offsetHeight
        const figureHeight = item.offsetHeight
        const spacing = 55;
        const itemsPerRow = Math.floor(desktopHeight / (figureHeight + spacing))
        const row = Math.floor(i / itemsPerRow)
        const col = i % itemsPerRow
        let left = col * (figureHeight + spacing)
        let top = row * (figureHeight + (spacing / 2))
        item.style.left = top + "px"
        item.style.top = left + "px"

        item.addEventListener("mousedown", mouseDown);

        function mouseDown(e) {
            e.preventDefault();
            offsetX = e.offsetX
            offsetY = e.offsetY
            window.addEventListener("mousemove", mouseMove);
            window.addEventListener("mouseup", mouseUp);
            item.addEventListener("mouseup", mouseUp);
        }

        function mouseMove(e) {
            let clientWidth = window.innerWidth
            let clientHeight = window.innerHeight
            mouseX = e.clientX - offsetX
            mouseY = e.clientY - offsetY

            // محاسبه حد مجاز برای top , left
            const maxX = clientWidth - item.offsetWidth
            const maxY = clientHeight - item.offsetHeight
            if (mouseX < 0) mouseX = 0
            if (mouseY < 0) mouseY = 0
            if (mouseX > maxX) mouseX = maxX
            if (mouseY > maxY) mouseY = maxY

            item.style.left = mouseX + "px"
            item.style.top = mouseY + "px"

            let x = parseInt(figure[0].style.left);
            let y = parseInt(item.style.left);
            console.log(x, y);

            if (item !== figure[0] && Math.abs(x - y) < 10) {
                item.classList.add( "transition" ,"duration-1000" ,"opacity-0")
                setTimeout(() => {
                    item.remove()
                }, 1001);
            }
        }

        function mouseUp() {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
        }
    })

}