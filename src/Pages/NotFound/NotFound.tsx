import React from 'react'
import AppContext from '../../Components/Context/Context'
import { useSelector, useDispatch } from 'react-redux'
import { changeActivePage } from '../../redux/slice/activePageSlice'


type NotFoundProps = {
   isHeader: () => void
}

const NotFound: React.FC<NotFoundProps> = ({isHeader}) => {

   const activePage = useSelector((state: any) => state.activePage.value)
   const dispatch = useDispatch()

   React.useEffect(() => {
      dispatch(changeActivePage(100500))
      isHeader(); 
      window.scrollTo(0, 0)
   }, [])

   return (
      <div className="not-found__wrapper"><h1 className="not-found"><span> 🤷‍♂️not found</span></h1><p className="not-found">такой страницы не существует в нашем приложении</p></div>   
   )
}

export default NotFound;
