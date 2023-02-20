import React from 'react'
import { useSelector } from 'react-redux'

function Home() {

    const lang = useSelector((state)=>state.translation.translation)
    return (
    <div>Home</div> 
  )
}

export default Home