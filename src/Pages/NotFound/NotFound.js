import React from 'react'
import AppContext from '../../Components/Context/Context'

const NotFound = (props) => {

   const { setActivePage } = React.useContext(AppContext)

   React.useEffect(() => {
      setActivePage(100500)
      props.isHeader(); 
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className="not-found__wrapper"><h1 className="not-found"><span> 🤷‍♂️not found</span></h1><p className="not-found">такой страницы не существует в нашем приложении</p></div>   
   )
}

export default NotFound;
