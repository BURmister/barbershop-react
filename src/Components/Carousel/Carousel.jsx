import { Children, cloneElement } from 'react'
import React from 'react'
import './Carousel.css'

// type CarouselProps = {
//     children: HTMLDivElement[]
// }

const Carousel
// : React.FC<CarouselProps>
 = ({children}) => {

    const pageWidth = 450
    
    const [pages, setPages] = React.useState
    // <any>
        ([])
    const [offset, setOffset] = React.useState
    // <number>
        (0)

    React.useEffect(() => {
        setPages(
            Children.map(children, (child
                // : any
                ) => {
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
            const newOffset
            // : number
             = currentOffset + pageWidth

            return Math.min(newOffset, 0)
        })
    }

    const handleRightClick = () => {
        setOffset((currentOffset) => {
            const newOffset
            // : number
             = currentOffset - pageWidth

            const maxOffset
            // : number
             = -(pageWidth * (pages.length - 1))

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