import React from 'react'

import './Sort.css'
import arrowDown from '../imgs/ArrowDown.svg'
import arrowUp from '../imgs/ArrowUp.svg'


export const Sort = (props) => {
   const [selected, setSelected] = React.useState(1)
   
   const list = [    
      {index: 0, name: 'популярности', property: 'rating', type: 'asc'}, 
      {index: 1, name: 'популярности', property: 'rating', type: 'desc'},
      {index: 2, name:'цене', property: 'price', type: 'asc'}, 
      {index: 3, name:'цене', property: 'price', type: 'desc'}, 
      {index: 4, name: 'алфавиту', property: 'title', type: 'asc'}    
   ]
   
   const sortName = list[selected].name

   const onClickListItem = (item, index) => {
      setSelected(index)
      props.setSelectedSort(item)
      props.setSortOpen(!props.sortOpen)
   }

   return (
      <div className={props.className}>
         <div className="sort__label">
            сортировка по: 
            <button onClick={() => props.setSortOpen(!props.sortOpen)}>{sortName}
               {
                  list[selected].index % 2 ? 
                     <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z" fill="currentColor"/>
                     </svg>
                     : 
                     <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z" fill="currentColor"/>
                     </svg>
               }
            </button>
         </div>
         <div className="sort__popup">
            { props.sortOpen && <ul>
               {list.map((item, i) => (
                  <li
                     key={i}
                     onClick={() => onClickListItem(item, item.index)}
                     className={selected === item.index ? 'sort__active' : 'sort__disactive'}>
                        {item.name}
                        {
                           item.index % 2 ? 
                              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.0001 3.67157L13.0001 3.67157L13.0001 16.4999L16.2426 13.2574L17.6568 14.6716L12 20.3284L6.34314 14.6716L7.75735 13.2574L11.0001 16.5001L11.0001 3.67157Z" fill="currentColor"/>
                              </svg>
                              : 
                              <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M17.6568 8.96219L16.2393 10.3731L12.9843 7.10285L12.9706 20.7079L10.9706 20.7059L10.9843 7.13806L7.75404 10.3532L6.34314 8.93572L12.0132 3.29211L17.6568 8.96219Z" fill="currentColor"/>
                              </svg>
                        }
                  </li>
               ))}
            </ul>
            }
         </div>
      </div>
   )
}
