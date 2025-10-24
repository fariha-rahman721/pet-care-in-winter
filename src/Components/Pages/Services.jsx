
import Navbar from '../Navbar';


import Footer from '../Footer/Footer';

import AllService from './AllService';

const Services = () => {
    
    return (
        <div >
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto mt-8">
            <AllService></AllService>
                
            </main>
            <footer className='mt-10'> 
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Services;