import React from "react";

function EmptySearchResults({searchText}){
    return <p className="NoResults">No results of {searchText}</p>
}

export { EmptySearchResults };