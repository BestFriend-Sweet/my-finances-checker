import { useState, useEffect, useRef } from 'react'

function useHover() {
    const [isHovered, setIsHovered] = useState(false)
    const hoverRef = useRef(null)

    function mouseEnters() {
        setIsHovered(true)
    }

    function mouseLeaves() {
        setIsHovered(false)
    }

    useEffect(() => {
        const instance = hoverRef.current
        instance.addEventListener('mouseenter', mouseEnters)
        instance.addEventListener('mouseleave', mouseLeaves)

        return () => {
            instance.removeEventListener('mouseenter', mouseEnters)
            instance.removeEventListener('mouseleave', mouseLeaves)
        }
    }, [])

    return {isHovered, hoverRef}
}

export default useHover