import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Hero from '../Components/Hero';

import CareTips from '../Components/CareTips/CareTips';
import Card from '../Components/Card/Card';
import ExpertInfo from '../Components/ExpertInfo/ExpertInfo';

const HomeLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Navbar>

                </Navbar>

        </header>
        <section>
            <Hero></Hero>
        </section>
        <main>
          <Card></Card>
            <Outlet></Outlet>
            <section>
                <CareTips></CareTips>
                <ExpertInfo></ExpertInfo>
            </section>
        </main>
        <footer>

        </footer>
        </div>
    );
};

export default HomeLayout;