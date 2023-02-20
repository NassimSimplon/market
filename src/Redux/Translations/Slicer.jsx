import { createReducer } from "@reduxjs/toolkit"
import english from '../../translations/english.json'
import frensh from '../../translations/french.json'
import germany from '../../translations/germany.json'
//Reducer
export const translationReducer = createReducer({
  translation:english,
  languages:[{
    id:1,
    title:"Frensh",
    value:"FR"
  },{
    id:2,
    title:"Germany",
    value:"GER"
  } ],
  selectedLanguage:"English"
}, (builder) => {
    builder
      .addCase('TRANSLATION', (state, action) => {
        switch(action.payload){
            case "EN":

                  return{
                    selectedLanguage : "English",
                    languages : [{
                     id:1,
                     title:"Frensh",
                     value:"FR"
                   },{
                     id:2,
                     title:"Germany",
                     value:"GER"
                   } ],
              translation : english,
                  }
         case "FR":
          return{
            selectedLanguage : "Frensh",
            languages : [{
                id:1,
                title:"English",
                value:"EN"
              },{
                id:2,
                title:"Germany",
                value:"GER"
              } ],
              translation : frensh
          }
          case "GER":
          return{
            selectedLanguage : "Germany",
            languages : [{
                id:1,
                title:"Frensh",
                value:"FR"
              },{
                id:2,
                title:"English",
                value:"EN"
              } ],
              translation : germany
          }
          default : return state
        }
      }) 
  })