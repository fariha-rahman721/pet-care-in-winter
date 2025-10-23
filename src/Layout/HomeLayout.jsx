import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Hero from '../Components/Hero';
import Cardslider from '../Components/Card/Card';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Navbar></Navbar>

        </header>
        <section>
            <Hero></Hero>
        </section>
        <main>
            <Cardslider></Cardslider>
            <Outlet></Outlet>
        </main>
        <footer>

        </footer>
        </div>
    );
};

export default HomeLayout;