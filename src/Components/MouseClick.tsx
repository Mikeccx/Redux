import React, { useEffect, useState }  from "react";
let a = 6
const MouseClick: React.FC<any> = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        const updatePositon = (e: MouseEvent) => {
            console.log(1)
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        document.addEventListener('click', updatePositon)
        console.log(3)
        // 下次执行前卸载
        return () => {
            console.log(a++)
            document.removeEventListener('click', updatePositon)
        }
    }, [])
    return (
        <span>
            X: {position.x}, Y: { position.y}
        </span>
    )
}
export default MouseClick