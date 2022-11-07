import React from 'react'

export const Sidebar = (props) => {

   function resetFilter() {
      props.resetFilter()
      window.location.reload()
      props.setReloadSidebar()
   } 

   return (
      <div className="sidebar">
         <div className="firmS">
            <h3 className="shop__h3">производители:</h3>
            <form className="firmS__form" action="#">
               <div className="firmS__wrapper">
                     {
                        props.receivedBrands.map((item) => (
                           <label className="login__checkbox label__s">
                              <input onClick={() => props.changeFilterBrands(item)} id="checkbox" type="checkbox" className="visually__hidden"/>
                              <span className="checkbox__indicator"></span>
                              {item}
                           </label>
                        ))   
                     }
               </div>
            </form>
         </div>
         <div className="type__goods">
            <h3 className="shop__h3">ГРУППЫ ТОВАРОВ:</h3>
            <form className="goods__form" action="">
               <div className="goods__wrapper">
                     {
                        props.receivedCategorys.map((item) => (
                           <label className="login__checkbox">
                              <input onClick={() => props.changeFilterCategory(item)} type="checkbox" className="visually__hidden"/>
                              <span className="checkbox__indicator"></span>
                              {item}
                           </label>
                        ))   
                     }
               </div>
            </form>
            <button onClick={() => resetFilter()} className="reset-filter button__buy button">
               сброс
               <svg width="26" height="26" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.33929 4.46777H7.33929V7.02487C8.52931 6.08978 10.0299 5.53207 11.6607 5.53207C15.5267 5.53207 18.6607 8.66608 18.6607 12.5321C18.6607 16.3981 15.5267 19.5321 11.6607 19.5321C9.51025 19.5321 7.58625 18.5623 6.30219 17.0363L7.92151 15.8515C8.83741 16.8825 10.1732 17.5321 11.6607 17.5321C14.4222 17.5321 16.6607 15.2935 16.6607 12.5321C16.6607 9.77065 14.4222 7.53207 11.6607 7.53207C10.5739 7.53207 9.56805 7.87884 8.74779 8.46777L11.3393 8.46777V10.4678H5.33929V4.46777Z" fill="currentColor"/>
               </svg>
            </button>
         </div>  
      </div>
   )
}
