import React from 'react'
   
export const Categories = () => {
   const [activeIndex, setActiveIndex] = React.useState(0)

   const clickOnCategory = (index) => {
      setActiveIndex(index)
   }

   return (
      <div className="categories">
         <li onClick={() => clickOnCategory(0)} className={activeIndex === 0 ? "active" : ""}>all</li>
         <li onClick={() => clickOnCategory(1)} className={activeIndex === 1 ? "active" : ""}>1</li>
         <li onClick={() => clickOnCategory(2)} className={activeIndex === 2 ? "active" : ""}>2</li>
         <li onClick={() => clickOnCategory(3)} className={activeIndex === 3 ? "active" : ""}>3</li>
         <li onClick={() => clickOnCategory(4)} className={activeIndex === 4 ? "active" : ""}>4</li>
         <li onClick={() => clickOnCategory(5)} className={activeIndex === 5 ? "active" : ""}>5</li>
         <li onClick={() => clickOnCategory(6)} className={activeIndex === 6 ? "active" : ""}>6</li>
      </div>
   )   
}
