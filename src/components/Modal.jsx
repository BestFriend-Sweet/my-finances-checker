import ReactPortal from './ReactPortal'
import { useEffect } from 'react'

function Modal({ children, isOpen, handleClose }) {
    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null
        isOpen ? document.body.addEventListener("keydown", closeOnEscapeKey) : null
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey)
        }
    }, [handleClose])

    if (!isOpen) return null

    return (
        <ReactPortal wrapperId='react-portal-modal-container'>
            <div className='modal'>
                {children}
            </div>
        </ReactPortal>
    )
}

export default Modal