import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.css';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
const MainNavigation = props => {
  const [isDrawerClicked, setIsDrawerClicked] = useState(false);
  return (
    <React.Fragment>
    {isDrawerClicked && <Backdrop onClick = {()=>setIsDrawerClicked(false)}/>}
    <SideDrawer show = {isDrawerClicked} onClick = {()=>setIsDrawerClicked(false)}>
      <nav className = 'main-navigation__drawer-nav'>
        <NavLinks/>
      </nav>
    </SideDrawer>
    <MainHeader>
      <button className="main-navigation__menu-btn" onClick={()=>setIsDrawerClicked(true)}>
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav className='main-navigation__header-nav'>
        <NavLinks />
      </nav>
    </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
