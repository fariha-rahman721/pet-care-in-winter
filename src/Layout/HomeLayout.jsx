import React from 'react';

import { Outlet } from 'react-router';


;
import Hero from '../Components/Hero';

import Card from '../Components/Card/Card';
import CareTips from '../Components/CareTips/CareTips';
import ExpertInfo from '../Components/ExpertInfo/ExpertInfo';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';

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
         <Card></Card>
            <Outlet></Outlet>
            <section>
               <CareTips></CareTips>
                <ExpertInfo></ExpertInfo>
            </section>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
        </div>
    );
};

export default HomeLayout;