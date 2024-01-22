import React, { useState, useEffect } from "react";
import { NavLink, Link, Outlet,useLocation } from "react-router-dom";
import './Menu.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faCartShopping,  faMoon,  faSun,  faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";



function Menu(props){

    const {theme,
            settheme,
            cart,
            loading,
        } = props;

    const location = useLocation();
    const [activePage, setActivePage] = useState('');


    useEffect(() => {
        setActivePage(location.pathname);
    }, [location]);


    const handleTheme = () =>{
        settheme(!theme);
    }


    return(
        <div className={theme?"MenuContainer dark":"MenuContainer"}>
            <input type="checkbox" id="hamburger"/>
            <div className={theme?"Menu darkmenu":"Menu"}>
                <div className="logo">
                    <div className="logotheme">
                        <Link to='/' className='logolink' style={{color:theme?'#fff':''}}><img src={require('./2 (1).png')} className="websitelogo" alt="sorry!"/> <h1> 1</h1> <h1> Stop</h1></Link>
                        <label className="theme" onClick={()=>{handleTheme()}}>{theme?<FontAwesomeIcon icon={faMoon} id="Moon" title="dark mode"/>:<FontAwesomeIcon icon={faSun} id="Sun" title="light mode"/>}</label>
                    </div>
                    <label className="hamburger" htmlFor="hamburger">
                        <label htmlFor="hamburger" style={{backgroundColor:theme?'#fff':''}}></label>
                        <label htmlFor="hamburger" style={{backgroundColor:theme?'#fff':''}}></label>
                        <label htmlFor="hamburger" style={{backgroundColor:theme?'#fff':''}}></label>
                    </label>
                </div>
                <ul className="MenuList">
                    <li>
                        <NavLink to='/' className={activePage === '/' ? theme?'link lightactive':'active link' : theme?'link light':'link'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products' className={activePage === '/products' ? theme?'link lightactive':'active link' : theme?'link light':'link'} >Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={activePage === '/about' ? theme?'link lightactive':'active link' : theme?'link light':'link'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={activePage === '/contact' ? theme?'link lightactive':'active link' : theme?'link light':'link'}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <div className="user">
                    <label>
                        <NavLink to='/login' className={activePage === '/login' ? theme?'lightbtnactive':'btnactive  button' : theme?'lightbtn':'button'}>
                            <FontAwesomeIcon icon={faArrowRightToBracket}/> Login
                        </NavLink>
                    </label>
                    <label>
                        <NavLink to='/register' className={activePage === '/register' ? theme?'lightbtnactive':'btnactive  button' : theme?'lightbtn':'button'}>
                            <FontAwesomeIcon icon={faUserPlus}/> Register
                        </NavLink>
                    </label>
                    <label>
                        <NavLink to='/cart' className={activePage === '/cart' ? theme?'lightbtnactive':'btnactive  button' : theme?'lightbtn':'button'}>
                        <FontAwesomeIcon icon={faCartShopping}/> Cart ({cart.length})
                        </NavLink>
                    </label>
                </div>
            </div>
            <div className="Outlet">
                <Loading loading={loading}/>
                <Outlet/>
            </div>
            <div className="footer">
                <Footer theme={theme}/>
            </div>
        </div>
    )
}

export default Menu;