import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeSelectedSort } from '../../redux/slice/sortSlice'

import './Sort.css'

export const Sort: React.FC = () => {

   const sortRef = React.useRef<HTMLDivElement>(null)

   const [sortOpen, setSortOpen] = React.useState<boolean>(false) 

   const sortList: {
      index: number;
      name: string;
      property: string;
      type: string;
   }[] = useSelector((state: any) => state.sort.sortList)
   const selectedSort: {
      index: number;
      name: string;
      property: string;
      type: string;
   } = useSelector((state: any) => state.sort.selectedSort)
   const dispatch = useDispatch()
   
   const sortName = sortList[selectedSort.index].name

   const onClickListItem = (item: {
      index: number;
      name: string;
      property: string;
      type: string;
   }, index: number) => {
      dispatch(changeSelectedSort(item))
      setSortOpen(!sortOpen)
   }

   React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         const _event = event as MouseEvent & {
            path: Node[]
         }
         if (sortRef.current && !_event.path.includes(sortRef.current)) {
            setSortOpen(false)
         }
      }

      document.body.addEventListener('click', handleClickOutside)

      return () => {
         document.body.removeEventListener('click', handleClickOutside)
      }
   }, [])

   return (
      <div ref={sortRef} className="shop__sort">
         <div className="sort__label">
            сортировка по: 
            <button onClick={() => setSortOpen(!sortOpen)}>{sortName}
               {
                  sortList[selectedSort.index].type == 'desc' ? 
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
             { sortOpen && <ul>
               {sortList.map((item, i) => (
                  <li
                     key={i}
                     onClick={() => onClickListItem(item, item.index)}
                     className={selectedSort == item ? 'sort__active' : 'sort__disactive'}>
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
