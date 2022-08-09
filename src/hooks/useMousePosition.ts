import React, { useEffect, useState }  from "react";
const useMousePosition = () => {
    const [position, setPosition] = useState({x: 0, y: 0})
    useEffect(() => {
        const updatePositon = (e: MouseEvent) => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            })
        }
        document.addEventListener('mousemove', updatePositon)
        // 下次执行前卸载
        return () => {
            document.removeEventListener('mousemove', updatePositon)
        }
    }, [])
    return position
}
export default useMousePosition