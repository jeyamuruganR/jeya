export const fadeIn = (direction,dealy) =>{

    return{
        hidden:{
            y:direction==="up" ?40:direction ==="down"? -40:0,
            x:direction === "left" ? 40:direction ==="right" ? -40:0,
        },
        show:{
            y:4,
            x:5,
            opacity:1,
            transition:{
                type:"tween",
                duration:1.2,
                dealy:dealy,
                ease:[0.25,0.25,0.25,0.75],
            }
        }
    }
}