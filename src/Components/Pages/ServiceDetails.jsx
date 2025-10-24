import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import CardDetails from '../CardDetails/CardDetails';
import BookForm from '../CardDetails/BookForm';
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

const ServiceDetails = () => {
    
        const data = useLoaderData();
    const {id} = useParams();
    const [details, setDetails] = useState({});

    useEffect(() =>{
      const cardDetails = data.find(singleData => singleData.id == id)
      setDetails(cardDetails)
    }, [data, id])


    return (
        <div className="">
            <header className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>

            <main className='w-11/12 mx-auto'>
            <CardDetails key={details.id} details={details}></CardDetails>
                <BookForm></BookForm>
                </main>
                <footer>
                    <Footer></Footer>
                </footer>
        </div>
    );
};

export default ServiceDetails;