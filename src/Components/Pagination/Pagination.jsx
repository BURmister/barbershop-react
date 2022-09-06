import React from 'react';

export const Pagination = ({ currentPage, paginate, itemsPerPage, totalItems }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <div className="slider__buttonS">
                {
                    pageNumbers.map( number => {
                        if( currentPage == number) {
                            return <button onClick={() => paginate(number)} className="button button__item selected__page" type="button"> {number} </button>
                        }
                        else {
                            return <button onClick={() => paginate(number)} className="button button__item" type="button"> {number} </button>
                        }  
                    })
                }
            </div>
        </>
    )
}

