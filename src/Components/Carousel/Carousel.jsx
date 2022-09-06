import { Children, cloneElement } from 'react'
import React from 'react'
import './Carousel.css'


function Carousel({children}) {

    const pageWidth = 450
    
    const [pages, setPages] = React.useState([])
    const [offset, setOffset] = React.useState(0)

    React.useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%', 
                        minWidth: `${pageWidth}px`,
                        maxWidth: `${pageWidth}px`
                    },
                })
            })
        )
    }, [])

    const handleLeftClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + pageWidth

            return Math.min(newOffset, 0)
        })
    }

    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - pageWidth

            const maxOffset = -(pageWidth * (pages.length - 1))

            return Math.max(newOffset, maxOffset)
        })
    }

    return (
        <div className="main-container">
            <div className="window">
                <div className="all-pages-container"
                
                style={{
                    transform: `translateX(${offset}px)`
                }}
                
                >{pages}</div>
                
            </div>
            <div className="gallery__buttons">
                <div onClick={handleLeftClick} className="gallery__button-back prev"><button className="button gallery_button_back prev" type="button"> назад </button></div>
                <div onClick={handleRightClick} className="gallery__button-next next"><button className="button gallery_button_next next" type="button"> вперед </button></div>
            </div>
        </div>
    )
}

export default Carousel