export default function dragAndDrop() {
    const figure = document.querySelectorAll("section#desktop >figure")


    figure.forEach((item, i) => {
        let mouseX, mouseY, offsetX, offsetY;

        let t = (i * 50) + (20 * i)
        item.style.top = t + "px"

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
        }

        function mouseUp() {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
        }
    })

}