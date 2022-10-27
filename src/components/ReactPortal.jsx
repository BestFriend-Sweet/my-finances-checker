import { createPortal } from 'react-dom'
import { createWrapperAndAppendToBody } from '../utils/CreateWrapperAndAppendToBody'
import { useState, useEffect } from 'react'

function ReactPortal({ children, wrapperId }) {
    const [wrapperElement, setWrapperElement] = useState(null)

    useEffect(() => {
        let element = document.getElementById(wrapperId)
        let systemCreated = false

        if (!element) {
            systemCreated = true
            element = createWrapperAndAppendToBody(wrapperId)
        }
        setWrapperElement(element)

        return () => {
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element)
            }
        }
    }, [wrapperId])
    
    if (wrapperElement === null) return null

    return createPortal(children, wrapperElement)
}

export default ReactPortal