import {useEffect,useState} from 'react'
import DropDown from './DropDown'
import arrow_down from "../assets/arrow_down.svg";
import logo from '../assets/logo.jpg';
import { useSelector } from "react-redux";
import './SharedComponentsStyle.css'
function Navbar() {
    const lang = useSelector((state) => state.translation.translation);
    const [navList,setNavList] = useState([]);


    useEffect(()=>{
    let newObjects = [];
    Object.keys(lang).forEach((key,index) => {
      return  newObjects.push({id:index,title:lang[key]})
    });
    setNavList(newObjects);
   },[lang])
  return (
    <div id='navbar'>
    <div className='logo'>
        <a href="#">
            <img src={logo} alt="logo" />
        </a>
    </div>
  
      <div className='nav_list'>
       <DropDown 

       >
       <a href='#'>
        {lang.home}
        </a>
       </DropDown>
       <DropDown 
       id="shop"
       list={navList.slice(43,53)}
       >
        <a href="#">
          {lang.shop}
          <img src={arrow_down} alt="arrow down" />
        </a>
      </DropDown>
      </div>

    </div>
  )
}

export default Navbar