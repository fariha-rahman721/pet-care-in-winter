import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import CardDetails from '../CardDetails/CardDetails';
import { useLoaderData, useParams } from 'react-router';
import Footer from '../Footer/Footer';
import BookForm from '../CardDetails/BookForm';

const Services = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [details, setDetails] = useState({});

    useEffect(() =>{
      const cardDetails = data.find(singleData => singleData.id == id)
      setDetails(cardDetails)
    }, [data, id])
    return (
        <div >
            <header className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 mx-auto mt-8">
                <CardDetails key={details.id} details={details}></CardDetails>
                <BookForm></BookForm>
            </main>
            <footer className='mt-10'> 
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Services;