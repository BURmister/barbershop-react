import React from 'react';

function Search() {

    const [searchValue, setSearchValue] = React.useState();

    const onSearchInput = (event) => {
        setSearchValue(event.target.value);
    }
    return(
        <div>
            { searchValue && <img onCLick={() => setSearchValue('') }  alt="X" /> }
            <img  alt=""  />
            <input onChange={onSearchInput} value={searchValue} placeholder="Search" />
        </div>
    )
}

export default Search;

// <h1>  { searchValue ? `Поиск по запросу "${searchValue}" ` : 'все товары' } </h1>
// допустим есть карточки, рендарящиеся из массива, тогда items
// {items.filter((item => item.title.toLowerCase().inCludes(searchValue.toLowerCase))).map((item, index) => (
//     <Card />
// ))}