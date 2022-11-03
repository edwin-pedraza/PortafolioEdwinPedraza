const imgurl = ["./img/imgpart/code.svg", "./img/imgpart/code2.svg","./img/imgpart/corchetes.svg","./img/imgpart/github.svg"]


const numBalls = 100
const balls = []

for (let i = 0; i < numBalls; i++) {
    let ball = document.createElement("img")
    const imgrand = imgurl[Math.floor(Math.random() * imgurl.length)]
    ball.classList.add("ball")
    ball.style.position = "absolute"
    ball.style.borderRadius = `${Math.floor(Math.random() * 100)}%`
    ball.style.opacity = ".7"
    ball.setAttribute('src', imgrand)
    // ball.style.backgroundImage = imgrand
    // ball.style.backgroundRepeat = "no-repeat"
    ball.style.left = `${Math.floor(Math.random() * 95)}vw`
    ball.style.top = `${Math.floor(Math.random() * 100)}vh`
    ball.style.transform = `scale(${Math.random()})`
    ball.style.width = `${Math.random() * (3 - 1) + 1}em`
    ball.style.height = ball.style.width
    balls.push(ball)
    document.getElementById("hero").append(ball)
}

balls.forEach((el,i) => {
    let to = {
        x: Math.random() * (i % 2 === 0? - 11 : 11),
        y: Math.random() * 10
    }

    let anim = el.animate (
        [
            {transform: "translate(0,0)"},
            {transform: `translate(${to.x}rem, ${to.y}rem)`}
        ],
        
        {
			  duration: (Math.random() + 1) * 2000, 
			  direction: "alternate",
			  fill: "both",
			  iterations: Infinity,
			  easing: "ease-in-out"
			}
    )
})