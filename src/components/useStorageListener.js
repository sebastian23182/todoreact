import React from "react";

function useStorageListener() {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (e) => {
        if(e.key === "TODOS_V1"){
            setStorageChange(true);
        }    
    });

    return {
        storageChange,
        setStorageChange
    };
}


export { useStorageListener }