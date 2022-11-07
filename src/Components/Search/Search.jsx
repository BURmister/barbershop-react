import React from 'react';

function Search(props) {

    return(
        <>
            { props.searchValue && <img className="clear" onCLick={() => props.setSearchValue('') }  alt="X" /> }
            <img  alt=""  />
            <input className="search__input" onChange={props.onSearchInput()} value={props.searchValue} placeholder="Search" />
        </>
    )
}

export default Search;

// <h1>  { searchValue ? `Поиск по запросу "${searchValue}" ` : 'все товары' } </h1>
// допустим есть карточки, рендарящиеся из массива, тогда items
// {items.filter((item => item.title.toLowerCase().inCludes(searchValue.toLowerCase))).map((item, index) => (
//     <Card />
// ))}