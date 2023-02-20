import {useEffect} from 'react'
import { BrowserRouter,Routes ,Route } from 'react-router-dom'
import pagesLazyLoad from './PagesLazyLoad'
import TopBar from './Shared/TopBar';
import './App.css'
import './Shared/SharedComponentsStyle.css'
import useLocalStorage from './Hooks/useLocalStorage';
import { switchCoinsAction } from './Redux/Coins/Actions';
import { useDispatch } from 'react-redux';
import { switchLanguageAction } from './Redux/Translations/Actions';
import Navbar from './Shared/Navbar';
//Pages
const Home = pagesLazyLoad('Pages','Home');

function App() {
  const dispatch = useDispatch()
 const [coin,setCoin] = useLocalStorage('coin','');
 const [lang,setLang] = useLocalStorage('lang','');

useEffect(()=>{
  dispatch(switchCoinsAction(coin));
  dispatch(switchLanguageAction(lang));
},[coin,setCoin])


  return (
    <BrowserRouter>
    <TopBar/>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App