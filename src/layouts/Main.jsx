import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import bgMain from '../assets/images/homepage-banner-img.png'
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div className='relative bg-cover'>
            <img src={bgMain} alt="" />
            <div className='absolute top-0'>
                <NavigationBar></NavigationBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;