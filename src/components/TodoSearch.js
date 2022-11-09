import React from "react";

function TodoSearch({searchValue, setSearchValue, loading}) {
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    return (
        <input className="Todo-Search" placeholder="Search" value={searchValue} onChange={onSearchValueChange} disabled={loading}/>  
    );
}

export { TodoSearch };