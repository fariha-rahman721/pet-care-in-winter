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
        <div >
            <header className='w-11/12 mx-auto'>
               <Navbar></Navbar> 

        </header>
        <section className='w-11/12 mx-auto'>
            <Hero></Hero>
        </section>
        <main className='w-11/12 mx-auto'>
         <Card></Card>
            <Outlet></Outlet>
            <section className='w-11/12 mx-auto'>
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