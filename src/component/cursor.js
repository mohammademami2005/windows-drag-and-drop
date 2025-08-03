export default function cursor(params) {
    const bigCircle = document.querySelector("#cursor")
    const smallCircle = document.querySelector("#sCursor")

    window.addEventListener("mousemove", (e) => {
        let left = e.clientX
        let top = e.clientY
        bigCircle.style.left = left + "px"
        bigCircle.style.top = top + "px"
        smallCircle.style.left = left + "px"
        smallCircle.style.top = top + "px"
    })

    window.addEventListener("mousedown" , (e)=>{
        bigCircle.classList.replace("border-white" , "border-green-400")
        bigCircle.style.scale = ".7"
        smallCircle.classList.replace("bg-white" , "bg-black")
        smallCircle.style.scale = "1.3"
    })
    window.addEventListener("mouseup" , (e)=>{
        bigCircle.classList.replace("border-green-400","border-white" )
        bigCircle.style.scale = "1"
        smallCircle.classList.replace("bg-black" ,"bg-white" )
        smallCircle.style.scale = "1"
    })

}