import React from 'react';

type PaginationProps = {
    currentPage: number,
    paginate: (pageNumber: number) => void,
    itemsPerPage: number,
    // totalItems: number,
    pageCount: number[]
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, paginate, itemsPerPage, pageCount}) => {

    const pageNumbers = []

    // for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    //     pageNumbers.push(i)
    // }

    return (
        <>
            <div className="slider__buttonS">
                {
                    // pageNumbers
                    pageCount
                    .map( (number: number) => {
                        if( currentPage == number) {
                            return <button onClick={() => paginate(number)} className="button__paginate selected__page" type="button"> {number} </button>
                        }
                        else {
                            return <button onClick={() => paginate(number)} className="button button__paginate" type="button"> {number} </button>
                        }  
                    })
                }
            </div>
        </>
    )
}


