import React from 'react';

import { Outlet, useNavigation } from 'react-router';


;
import Hero from '../Components/Hero';

import Card from '../Components/Card/Card';
import CareTips from '../Components/CareTips/CareTips';
import ExpertInfo from '../Components/ExpertInfo/ExpertInfo';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';
import Loading from '../Components/Pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation()
    return (
        <div >
            {import.meta.env.VITE_name}
            <header className='w-11/12 mx-auto'>
               <Navbar></Navbar> 

        </header>
        <section className='w-11/12 mx-auto'>
            <Hero></Hero>
        </section>
        <main className='w-11/12 mx-auto'>
         <Card></Card>
          {state == 'loading'? <Loading/> : <Outlet></Outlet>}  
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