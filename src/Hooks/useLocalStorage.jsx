import { useState ,useCallback} from "react";
//@GET VALUE FROM LOCAL STORAGE 
function getSavedValue(key,initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue) return savedValue;
    if(initialValue instanceof Function) return initialValue();
    return initialValue;
}
//Custom Hook for Local Storage
export default function useLocalStorage(key,initialValue){  
    //Value
    const [value,setValue]= useState(()=>{
        return getSavedValue(key,initialValue);
    });
    //Save the value
    const saveValue = useCallback((value)=>{
        return  localStorage.setItem(key,JSON.stringify(value));
    },[value,setValue])
    
    return [value,saveValue]
}


