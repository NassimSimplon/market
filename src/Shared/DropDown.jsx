import React from "react";
import { useDispatch } from "react-redux";
import { useCallback ,useEffect } from "react";
import useLocalStorage from "../Hooks/useLocalStorage"

function DropDown({ children, list, action ,id ,state,storagekey,value}) {
  const dispatch = useDispatch();
  //LocalStorage Hook
  const [storageValue,setStorageValue] = useLocalStorage(storagekey, value);
  //Handel Click
  const handelClick = useCallback((x)=>{
           setStorageValue(x);
    return dispatch(action(x));
  },[state]);
 

  return (
    <div className="dropdown" id={id} >
      <button className="dropItem">{children}</button>
      <div className="dropdown-content">
        {list &&
          list?.map((el) => {
            return el.link ?
              <a key={el.id} to={el.link}>
                {el.title} 
              </a>
             : 
              <a
                key={el.id}
            
                onClick={() => handelClick(el.value)}
              >
                {el.title}
              </a>
          })}
      </div>
    </div>
  );
}

export default DropDown;
