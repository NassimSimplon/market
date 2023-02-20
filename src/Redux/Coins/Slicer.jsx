import { createReducer } from "@reduxjs/toolkit"
//Reducer
export const coinsReducer = createReducer({
  coins:[{
    id:1,
    title:"EUR",
    value:"EUR"
  },{
    id:2,
    title:"GBP",
    value:"GBP"
  } ],
  selectedCoin:"USD"
}, (builder) => {
    builder
    .addCase('COINS', (state, action) => {
      switch(action.payload){
       
          case "USD":
             return{
               selectedCoin : "USD",
               coins : [{
                   id:1,
                   title:"EUR",
                   value:"EUR"
                 },{
                   id:2,
                   title:"GBP",
                   value:"GBP"
                 }  ],
                }
       case "EUR":
        return{
            
          selectedCoin : "EUR",
          coins :[{
              id:1,
              title:"USD",
              value:"USD"
            },{
              id:2,
              title:"GBP",
              value:"GBP"
            } ]
        }
        case "GBP":
        return{
          selectedCoin : "GBP",
          coins : [{
              id:1,
              title:"EUR",
              value:"EUR"
            },{
              id:2,
              title:"USD",
              value:"USD"
            } ] 
        }
        default : return state
        }
      }) 
  })