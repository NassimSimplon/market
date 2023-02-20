import { createAction } from "@reduxjs/toolkit"

//Select Language
export  const switchLanguageAction = createAction('TRANSLATION',(language)=>{
    return { payload:language}
})