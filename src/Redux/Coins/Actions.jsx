import { createAction } from "@reduxjs/toolkit"

//Select Coins
export  const switchCoinsAction = createAction('COINS',(Coins)=>{
    return { payload:Coins}
})